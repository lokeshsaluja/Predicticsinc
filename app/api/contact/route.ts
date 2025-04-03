import { NextResponse } from 'next/server';
import { insertContactForm, DbResult } from '@/lib/db';
import { saveContactToFile, ensureDataDirectoryExists } from '@/lib/file-storage';

// This is crucial - it tells Next.js this route must be dynamically rendered
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  console.log('Contact API route called');
  
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
      }
    } catch (dbError) {
      console.error('Database error occurred:', dbError);
      // Continue to file fallback
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
        { success: false, message: 'File storage error' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing your request' },
      { status: 500 }
    );
  }
}