# Vercel Deployment Configuration for Contact Form Email

To securely set up your contact form email functionality on Vercel, follow these steps:

## Environment Variables Setup in Vercel

1. **Log in to your Vercel account** and navigate to your Predictics Inc project dashboard.

2. **Navigate to "Settings" → "Environment Variables"**.

3. **Add the following environment variables**:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `EMAIL_USER` | predicticsinc@gmail.com | Production, Preview, Development |
   | `EMAIL_PASSWORD` | yxmh thly xuqj swks | Production, Preview, Development |
   | `ENABLE_EMAIL_SENDING` | true | Production, Preview, Development |
   | `ALWAYS_SEND_EMAIL` | true | Production, Preview, Development |
   | `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Your reCAPTCHA site key | Production, Preview, Development |
   | `RECAPTCHA_SECRET_KEY` | Your reCAPTCHA secret key | Production, Preview, Development |

4. **Click "Save"** to apply these environment variables.

## Setting up Google reCAPTCHA

To protect your contact form from spam and bot submissions, we've added Google reCAPTCHA. To set it up:

1. **Register your site on Google reCAPTCHA**:
   - Visit [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
   - Sign in with your Google account
   - Register a new site:
     - Enter "Predictics Inc Website" as the label
     - Select "reCAPTCHA v2" (with "I'm not a robot" checkbox)
     - Add both your Vercel domain and localhost to the domains list
     - Accept the terms and submit

2. **Get your keys**:
   - After registration, you'll receive a **Site Key** and a **Secret Key**
   - Add these to your Vercel environment variables as shown above
   - Also add them to your local `.env.local` file

3. **Test the implementation** both locally and after deployment to ensure reCAPTCHA is working properly.

## Security Considerations

- **Environment variables** in Vercel are encrypted at rest and in transit.
- They are **not exposed to the client-side code** unless you explicitly prefix them with `NEXT_PUBLIC_`.
- Only the reCAPTCHA site key is prefixed with `NEXT_PUBLIC_` as it needs to be accessible to the frontend.
- The reCAPTCHA secret key and email credentials remain secure on the server.
- The app password can be **revoked at any time** in your Google Account if needed.

## Verifying the Setup

After deploying, you can verify the email functionality by:

1. Submitting a test contact form on your deployed site
2. Checking the predicticsinc@gmail.com inbox for the form submission
3. Reviewing Vercel logs for any errors (Settings → Logs)

## Refreshing App Password

If you need to generate a new app password:

1. Go to your Google Account → Security → 2-Step Verification
2. Scroll to "App passwords" at the bottom
3. Revoke the existing password if needed
4. Generate a new one and update both your local `.env.local` and Vercel environment variables
