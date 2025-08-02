# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form in your portfolio using environment variables for secure credential management.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_name}}` - Your name (Aniket Dahire)

Example template:

```
From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual credentials:

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**

```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_public_key_123
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email to confirm the message was received

## Security Benefits

✅ **Environment Variables**: Credentials are stored in `.env.local` (not in code)
✅ **Git Ignored**: `.env.local` is automatically ignored by Git
✅ **No Hardcoded Values**: No sensitive data in your source code
✅ **Easy to Update**: Change credentials without touching code

## Troubleshooting

- **Form not sending**: Check that all credentials are correct in `.env.local`
- **Email not received**: Check your spam folder and EmailJS dashboard for delivery status
- **Console errors**: Make sure EmailJS is properly installed (`npm install @emailjs/browser`)
- **Environment variables not loading**: Restart your development server after updating `.env.local`

## Important Notes

- **Never commit `.env.local`**: This file should always be in your `.gitignore`
- **Restart server**: After updating `.env.local`, restart your development server
- **VITE\_ prefix**: All environment variables must start with `VITE_` to be accessible in React

## Free Tier Limits

- EmailJS free tier allows 200 emails per month
- Consider upgrading if you expect high traffic
