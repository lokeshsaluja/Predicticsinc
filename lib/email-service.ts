import nodemailer from 'nodemailer';

type EmailData = {
  name: string;
  email: string;
  company: string;
  industry?: string;
  service?: string;
  message: string;
  timestamp?: string;
};

export async function sendContactFormEmail(data: EmailData) {
  // Return early if email sending is disabled
  if (process.env.ENABLE_EMAIL_SENDING !== 'true') {
    console.log('Email sending is disabled. Set ENABLE_EMAIL_SENDING=true to enable.');
    return { success: false, message: 'Email sending is disabled' };
  }

  // Add timestamp if not provided
  const contactData = {
    ...data,
    timestamp: data.timestamp || new Date().toISOString()
  };

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASSWORD || '',
      },
    });

    // Configure email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@predictincinc.com',
      to: 'predicticsinc@gmail.com',
      subject: `New Contact Form Submission from ${contactData.name} - ${contactData.company}`,
      text: generateEmailText(contactData),
      html: generateEmailHtml(contactData),
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : String(error) 
    };
  }
}

function generateEmailText(data: EmailData): string {
  return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
${data.industry ? `Industry: ${data.industry}` : ''}
${data.service ? `Service Interest: ${data.service}` : ''}

Message:
${data.message}

Submitted: ${data.timestamp}
  `;
}

function generateEmailHtml(data: EmailData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    .container { padding: 20px; border: 1px solid #eee; border-radius: 5px; }
    h1 { color: #0891b2; font-size: 24px; margin-bottom: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; }
    .message { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px; }
    .footer { margin-top: 30px; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <h1>New Contact Form Submission</h1>
    
    <div class="field">
      <div class="label">Name:</div>
      <div>${data.name}</div>
    </div>
    
    <div class="field">
      <div class="label">Email:</div>
      <div>${data.email}</div>
    </div>
    
    <div class="field">
      <div class="label">Company:</div>
      <div>${data.company}</div>
    </div>
    
    ${data.industry ? `
    <div class="field">
      <div class="label">Industry:</div>
      <div>${data.industry}</div>
    </div>
    ` : ''}
    
    ${data.service ? `
    <div class="field">
      <div class="label">Service Interest:</div>
      <div>${data.service}</div>
    </div>
    ` : ''}
    
    <div class="message">
      <div class="label">Message:</div>
      <div>${data.message.replace(/\n/g, '<br>')}</div>
    </div>
    
    <div class="footer">
      Submitted: ${data.timestamp}
    </div>
  </div>
</body>
</html>
  `;
}
