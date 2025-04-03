// Import with try-catch to prevent build/runtime errors
let sql: any;

// Check if we're in Vercel environment
const isVercelEnvironment = process.env.VERCEL === '1';

// Log deployment environment for debugging
console.log(`Environment: ${isVercelEnvironment ? 'Vercel' : 'Local'}`);
console.log(`Node environment: ${process.env.NODE_ENV}`);

// Attempt to load the database driver
try {
  const postgres = require('@vercel/postgres');
  sql = postgres.sql;
  console.log('Successfully imported @vercel/postgres module');
} catch (error) {
  console.warn('Could not import @vercel/postgres:', error);
  // Create a mock sql function that always fails gracefully
  sql = async () => {
    throw new Error('Postgres module not available');
  };
}

export interface DbResult {
  success: boolean;
  id?: string | number;
  error?: any;
  details?: any;
}

export async function testDatabaseConnection(): Promise<boolean> {
  try {
    if (!sql) {
      console.error('SQL client not initialized');
      return false;
    }
    
    // Simple query to test connection
    const result = await sql`SELECT 1 as test`;
    console.log('Database connection test successful');
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  }
}

export async function createContactTable(): Promise<DbResult> {
  try {
    if (!sql) {
      throw new Error('Postgres client not available');
    }

    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        industry VARCHAR(255),
        service VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Contact table created or already exists');
    return { success: true };
  } catch (error) {
    console.error('Error creating contact table:', error);
    return { success: false, error };
  }
}

export async function insertContactForm(data: {
  name: string;
  email: string;
  company: string;
  industry?: string;
  service?: string;
  message: string;
}): Promise<DbResult> {
  try {
    if (!sql) {
      throw new Error('Postgres client not available');
    }

    // Test connection first
    const connectionSuccessful = await testDatabaseConnection();
    if (!connectionSuccessful) {
      throw new Error('Database connection test failed');
    }

    await createContactTable();
    
    // Log the data we're inserting for debugging
    console.log('Inserting data into contacts table:', {
      ...data,
      message: data.message.substring(0, 20) + '...' // Don't log full message
    });
    
    const result = await sql`
      INSERT INTO contacts (name, email, company, industry, service, message)
      VALUES (${data.name}, ${data.email}, ${data.company}, ${data.industry || null}, ${data.service || null}, ${data.message})
      RETURNING id;
    `;
    
    console.log('Insert successful, returned ID:', result.rows[0].id);
    return { success: true, id: result.rows[0].id };
  } catch (error) {
    console.error('Error inserting contact form data:', error);
    
    // Add more detailed error info for debugging
    let errorMessage = 'Database error';
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error('Stack trace:', error.stack);
    }
    
    return { 
      success: false, 
      error: errorMessage,
      details: isVercelEnvironment ? {
        vercel: true,
        postgres_url_exists: !!process.env.POSTGRES_URL,
        node_env: process.env.NODE_ENV
      } : undefined
    };
  }
}
