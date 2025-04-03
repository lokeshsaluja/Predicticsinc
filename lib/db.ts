// Import with try-catch to prevent build/runtime errors
let sql: any;
try {
  const postgres = require('@vercel/postgres');
  sql = postgres.sql;
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

    await createContactTable();
    
    const result = await sql`
      INSERT INTO contacts (name, email, company, industry, service, message)
      VALUES (${data.name}, ${data.email}, ${data.company}, ${data.industry || null}, ${data.service || null}, ${data.message})
      RETURNING id;
    `;
    
    return { success: true, id: result.rows[0].id };
  } catch (error) {
    console.error('Error inserting contact form data:', error);
    return { success: false, error };
  }
}
