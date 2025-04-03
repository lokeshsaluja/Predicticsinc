// ReCAPTCHA configuration
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Test key

// Helper function to validate reCAPTCHA token with Google's API
export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  try {
    // Skip verification in development environment unless secret key is provided
    if (process.env.NODE_ENV === 'development' && !process.env.RECAPTCHA_SECRET_KEY) {
      console.log('Development environment: Skipping reCAPTCHA verification');
      return true;
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '';
    
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }).toString(),
    });

    const data = await response.json();
    
    console.log('reCAPTCHA verification response:', data);
    
    if (data.success) {
      return true;
    } else {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
      return false;
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}
