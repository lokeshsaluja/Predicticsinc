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

4. **Click "Save"** to apply these environment variables.

## Security Considerations

- **Environment variables** in Vercel are encrypted at rest and in transit.
- They are **not exposed to the client-side code** unless you explicitly prefix them with `NEXT_PUBLIC_`.
- None of our email variables use this prefix, so they remain secure on the server.
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
