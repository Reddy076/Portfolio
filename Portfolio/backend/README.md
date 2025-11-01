# Portfolio Backend

This is the backend server for the portfolio contact form.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the email configuration in `.env`

## Email Configuration

For development, you can use [Ethereal.email](https://ethereal.email/) to test emails without sending real emails.

1. Go to [Ethereal.email](https://ethereal.email/) and create a free account
2. Update the `.env` file with your Ethereal credentials:
   ```
   EMAIL_SERVICE=smtp.ethereal.email
   EMAIL_PORT=587
   EMAIL_USER=your_ethereal_user@ethereal.email
   EMAIL_PASS=your_ethereal_password
   RECIPIENT_EMAIL=your_email@gmail.com
   ```

For production with Gmail:
```
EMAIL_SERVICE=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
RECIPIENT_EMAIL=your_email@gmail.com
```

Note: For Gmail, you need to use an App Password instead of your regular password.

## Running the Server

- Development mode: `npm run dev`
- Production mode: `npm start`

## API Endpoints

- `POST /api/contact` - Submit contact form

## Testing

Run the test email script:
```bash
node test-email.js
```