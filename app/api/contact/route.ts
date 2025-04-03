import { NextResponse } from 'next/server';
import { insertContactForm, DbResult, testDatabaseConnection } from '@/lib/db';
import { saveContactToFile, ensureDataDirectoryExists } from '@/lib/file-storage';

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
    
    if (missingFields.length > 0) {
      console.error(`Missing required fields: ${missingFields.join(', ')}`);
      return NextResponse.json(
        { success: false, message: `Missing required fields: ${missingFields.join(', ')}` },
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
    
    // Test database connection first
    try {
      const dbConnected = await testDatabaseConnection();
      console.log(`Database connection test: ${dbConnected ? 'SUCCESS' : 'FAILED'}`);
    } catch (connError) {
      console.error('Database connection test error:', connError);
    }
    
    // Try database first, with proper error handling
    let dbSuccess = false;
    let dbResult: DbResult | null = null;
    
    try {
      dbResult = await insertContactForm(contactData);
      dbSuccess = dbResult?.success || false;
      
      if (dbSuccess) {
        console.log('Database storage successful:', dbResult);
        return NextResponse.json({ 
          success: true, 
          message: 'Contact form submitted successfully',
          id: dbResult.id,
          storage: 'database'
        });
      } else {
        console.log('Database storage failed, falling back to file');
        console.log('DB Error details:', dbResult?.error, dbResult?.details);
      }
    } catch (dbError) {
      console.error('Database error occurred:', dbError);
      // Continue to file fallback
    }
    
    // In Vercel production, if database fails, don't try file storage as it won't work
    if (isVercelEnvironment && isProduction) {
      console.log('Running in Vercel production - skipping file storage fallback');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Unable to process your submission. Please try again later.',
          error: 'Database connection failed in production environment',
          env: {
            vercel: true,
            production: true,
            postgres_url_exists: !!process.env.POSTGRES_URL
          }
        },
        { status: 500 }
      );
    }
    
    // File storage fallback - guaranteed to run if database failed
    console.log('Attempting file storage fallback');
    
    // Ensure directory exists before trying to save
    ensureDataDirectoryExists();
    
    try {
      const fileResult = await saveContactToFile(contactData);
      
      if (fileResult.success) {
        console.log('File storage successful:', fileResult);
        return NextResponse.json({
          success: true,
          message: 'Contact form submitted successfully (file storage)',
          id: fileResult.id,
          storage: 'file'
        });
      } else {
        console.error('File storage failed:', fileResult.error);
        return NextResponse.json(
          { success: false, message: 'Failed to save data to file' },
          { status: 500 }
        );
      }
    } catch (fileError) {
      console.error('File storage error:', fileError);
      return NextResponse.json(
        { success: false, message: 'Error saving submission to file' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Unexpected error in contact API route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}