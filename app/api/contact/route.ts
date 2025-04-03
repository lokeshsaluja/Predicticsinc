import { NextResponse } from 'next/server';
import { insertContactForm, testDatabaseConnection } from '@/lib/db';
import { saveContactToFile, ensureDataDirectoryExists } from '@/lib/file-storage';
import { saveContactToKV } from '@/lib/kv-storage';
import { sendContactFormEmail } from '@/lib/email-service';
import { verifyRecaptchaToken } from '@/lib/recaptcha-config';

// This is crucial - it tells Next.js this route must be dynamically rendered
export const dynamic = 'force-dynamic';

// Detect environment
const isVercelEnvironment = process.env.VERCEL === '1';
const isProduction = process.env.NODE_ENV === 'production';

export async function POST(request: Request) {
  console.log(`Contact API route called in ${isVercelEnvironment ? 'Vercel' : 'Local'} environment (${process.env.NODE_ENV})`);
  
  try {
    // Use request.json() directly instead of request.text()
    const data = await request.json();
    console.log('Received form data:', data);
    
    // Validate required fields
    if (!data) {
      console.error('No data object after parsing');
      return NextResponse.json(
        { success: false, message: 'No data received' },
        { status: 400 }
      );
    }
    
    // Check for required fields
    const missingFields = [];
    if (!data.name) missingFields.push('name');
    if (!data.email) missingFields.push('email');
    if (!data.company) missingFields.push('company');
    if (!data.message) missingFields.push('message');
    if (!data.recaptchaToken) missingFields.push('recaptchaToken');
    
    if (missingFields.length > 0) {
      console.error(`Missing required fields: ${missingFields.join(', ')}`);
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }
    
    // Verify reCAPTCHA token
    const recaptchaValid = await verifyRecaptchaToken(data.recaptchaToken);
    if (!recaptchaValid) {
      console.error('reCAPTCHA verification failed');
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }
    
    // Prepare the contact data with defaults for optional fields
    const contactData = {
      name: data.name,
      email: data.email,
      company: data.company,
      industry: data.industry || '',
      service: data.service || '',
      message: data.message
    };
    
    console.log('Processing contact data:', contactData);
    
    // Record what we're receiving, at minimum
    const submissionRecord = {
      ...contactData,
      timestamp: new Date().toISOString(),
      environment: isVercelEnvironment ? 'vercel' : 'local'
    };
    
    // Log the submission for debugging/auditing
    console.log('Contact submission:', JSON.stringify(submissionRecord));
    
    // ====== Storage attempts - don't block success on these =======
    
    // Try database if not in Vercel (or in dev mode)
    let dbSuccess = false;
    
    if (!isVercelEnvironment || !isProduction) {
      try {
        console.log('Attempting database storage');
        const dbConnected = await testDatabaseConnection();
        
        if (dbConnected) {
          const dbResult = await insertContactForm(contactData);
          dbSuccess = dbResult?.success || false;
          
          if (dbSuccess) {
            console.log('Database storage successful');
          } else {
            console.log('Database storage failed');
          }
        } else {
          console.log('Database connection test failed, skipping database storage');
        }
      } catch (dbError) {
        console.error('Database error:', dbError);
      }
    }
    
    // Try KV storage
    let kvSuccess = false;
    try {
      console.log('Attempting KV storage');
      const kvResult = await saveContactToKV(contactData);
      kvSuccess = kvResult.success;
      
      if (kvSuccess) {
        console.log('KV storage successful');
      } else {
        console.log('KV storage failed');
      }
    } catch (kvError) {
      console.error('KV error:', kvError);
    }
    
    // Try file storage as last resort (only if not in Vercel production)
    let fileSuccess = false;
    if (!isVercelEnvironment || !isProduction) {
      try {
        console.log('Attempting file storage');
        ensureDataDirectoryExists();
        const fileResult = await saveContactToFile(contactData);
        fileSuccess = fileResult.success;
        
        if (fileSuccess) {
          console.log('File storage successful');
        } else {
          console.log('File storage failed');
        }
      } catch (fileError) {
        console.error('File storage error:', fileError);
      }
    }
    
    // Send email notification as a fallback if other storage methods failed
    // or send email in all cases if enabled
    let emailSuccess = false;
    if (!dbSuccess && !kvSuccess && !fileSuccess) {
      console.log('All storage methods failed, trying email fallback');
      try {
        const emailResult = await sendContactFormEmail(submissionRecord);
        emailSuccess = emailResult.success;
        
        if (emailSuccess) {
          console.log('Email fallback successful');
        } else {
          console.log('Email fallback failed:', emailResult);
        }
      } catch (emailError) {
        console.error('Email error:', emailError);
      }
    } else if (process.env.ALWAYS_SEND_EMAIL === 'true') {
      // Always send email if configured to do so, regardless of other storage methods
      console.log('Sending email notification (always enabled)');
      try {
        const emailResult = await sendContactFormEmail(submissionRecord);
        emailSuccess = emailResult.success;
        
        if (emailSuccess) {
          console.log('Email notification sent successfully');
        } else {
          console.log('Failed to send email notification:', emailResult);
        }
      } catch (emailError) {
        console.error('Email notification error:', emailError);
      }
    }
    
    // Return success regardless of storage success in production
    // This ensures the user gets a good experience even if backend storage is failing
    return NextResponse.json({
      success: true,
      message: 'Thank you for your submission. We will be in touch soon.',
      storage: {
        db: dbSuccess,
        kv: kvSuccess,
        file: fileSuccess,
        email: emailSuccess
      }
    });
  } catch (error) {
    console.error('Unexpected error in contact API route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again or contact us directly at getintouch@predictincinc.com.',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}