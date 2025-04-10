import fs from 'fs';
import path from 'path';
import { DbResult } from './db';

// Define paths using process.cwd() only when the function is called
// This prevents issues during build/initialization
const getContactDataDir = () => path.join(process.cwd(), 'data');
const getContactDataFile = () => path.join(getContactDataDir(), 'contact-submissions.json');

// Check if we're in Vercel production environment
const isVercelProduction = process.env.VERCEL_ENV === 'production';

// Ensure the data directory exists
export function ensureDataDirectoryExists(): boolean {
  // Skip directory creation on Vercel production (read-only filesystem)
  if (isVercelProduction) {
    console.log('Skipping directory creation in Vercel production environment');
    return false;
  }
  
  const contactDataDir = getContactDataDir();
  
  try {
    if (!fs.existsSync(contactDataDir)) {
      fs.mkdirSync(contactDataDir, { recursive: true });
    }
    
    const contactDataFile = getContactDataFile();
    // Create the file if it doesn't exist
    if (!fs.existsSync(contactDataFile)) {
      fs.writeFileSync(contactDataFile, JSON.stringify([], null, 2));
    }
    return true;
  } catch (error) {
    console.error('Error ensuring data directory exists:', error);
    return false;
  }
}

// Read existing submissions safely
function readSubmissionsFile(): any[] {
  // Return empty array on Vercel (can't read files persistently)
  if (isVercelProduction) {
    console.log('Skipping file read in Vercel production environment');
    return [];
  }
  
  try {
    const contactDataFile = getContactDataFile();
    if (!fs.existsSync(contactDataFile)) {
      return [];
    }
    
    const rawData = fs.readFileSync(contactDataFile, 'utf8');
    return JSON.parse(rawData || '[]');
  } catch (error) {
    console.warn('Could not read existing submissions:', error);
    return [];
  }
}

// Write submissions to file safely
function writeSubmissionsFile(submissions: any[]): boolean {
  // Skip file writing on Vercel (can't write to filesystem)
  if (isVercelProduction) {
    console.log('Skipping file write in Vercel production environment');
    return false;
  }
  
  try {
    const contactDataFile = getContactDataFile();
    fs.writeFileSync(contactDataFile, JSON.stringify(submissions, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing submissions file:', error);
    return false;
  }
}

// Save contact form data to a local JSON file
export async function saveContactToFile(data: {
  name: string;
  email: string;
  company: string;
  industry?: string;
  service?: string;
  message: string;
}): Promise<DbResult> {
  // If we're in Vercel production, return an appropriate message
  if (isVercelProduction) {
    return {
      success: false,
      error: 'File storage not available in production environment',
      id: undefined
    };
  }
  
  try {
    // Make sure data directory and file exist
    if (!ensureDataDirectoryExists()) {
      throw new Error('Could not ensure data directory exists');
    }
    
    // Read existing submissions
    const submissions = readSubmissionsFile();
    
    // Generate a unique ID
    const id = `local_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    
    // Add the new submission with timestamp
    const newSubmission = {
      id,
      ...data,
      created_at: new Date().toISOString(),
      source: 'file_fallback'
    };
    
    submissions.push(newSubmission);
    
    // Write back to file
    if (!writeSubmissionsFile(submissions)) {
      throw new Error('Failed to write submissions file');
    }
    
    console.log(`Contact form submission saved to file: ${id}`);
    return { success: true, id };
  } catch (error) {
    console.error('Error saving contact form to file:', error);
    return { success: false, error };
  }
}
