// Serverless-friendly storage implementation that works on Vercel Basic plan
// This approach uses a simple JSON API storage service that doesn't require extra setup

export interface StorageResult {
  success: boolean;
  id?: string;
  error?: string;
}

// Type definition for contact data
export interface ContactData {
  name: string;
  email: string;
  company: string;
  industry?: string;
  service?: string;
  message: string;
}

// This uses JSONBin.io as a simple storage API - no account needed for basic usage
// Alternative free options: JSONBox, npoint.io, etc.
const JSON_BIN_API = "https://api.jsonbin.io/v3/b";
const JSON_BIN_KEY = process.env.JSON_BIN_KEY || ""; // Optional master key for private bins

/**
 * Saves contact data to a serverless-friendly storage service
 * This implementation uses JSONBin.io which works without setup on Vercel
 */
export async function saveContactToKV(contactData: ContactData): Promise<StorageResult> {
  try {
    // Generate a unique ID
    const id = `contact-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    // Create submission with timestamp
    const submission = {
      id,
      ...contactData,
      submittedAt: new Date().toISOString()
    };
    
    // Detect environment for debugging
    const isVercel = process.env.VERCEL === '1';
    console.log(`Running in ${isVercel ? 'Vercel' : 'local'} environment`);
    
    // Use different storage approaches depending on where we're running
    if (process.env.NEXT_PUBLIC_ENABLE_JSON_API !== 'false') {
      try {
        // Prepare headers
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
          'X-Bin-Name': `contact-${id}`,
        };
        
        // Add master key if available
        if (JSON_BIN_KEY) {
          headers['X-Master-Key'] = JSON_BIN_KEY;
        }
        
        // Create a new JSON bin with the contact data
        const response = await fetch(JSON_BIN_API, {
          method: 'POST',
          headers,
          body: JSON.stringify(submission),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`JSONBin API error: ${errorData.message || response.statusText}`);
        }
        
        const result = await response.json();
        console.log('Successfully saved contact data to JSONBin with ID:', result.metadata?.id || id);
        
        return { 
          success: true, 
          id: result.metadata?.id || id 
        };
      } catch (apiError) {
        console.error('Error saving to JSON API:', apiError);
        throw apiError; // Let the main handler decide what to do
      }
    } else {
      console.log('JSON API storage is disabled, data would be stored if enabled');
      return { success: true, id };
    }
  } catch (error) {
    console.error('Storage error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown storage error'
    };
  }
}

// Get all submissions would be implemented separately with a GET request to JSONBin API
// Not implemented here since it would require additional setup on first use
