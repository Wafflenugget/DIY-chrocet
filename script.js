const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 3000;
const SENDGRID_API_KEY = 'your_sendgrid_api_key';

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize SendGrid
sgMail.setApiKey(SENDGRID_API_KEY);

// POST endpoint to send email
app.post('/send-email', (req, res) => {
    const { customerName, customerEmail, productName, bookingDateTime } = req.body;

    const msg = {
        to: 'trc.for.everyone.in.life@gmail.com',
        from: 'your@email.com', // Update with your verified SendGrid email address
        subject: 'New Plushie Purchase Booking',
        text: `Dear admin,\n\nA new booking has been made for ${productName}.\n\nCustomer: ${customerName}\nEmail: ${customerEmail}\nBooking Date & Time: ${bookingDateTime}\n\nBest regards,\nYour Plushie Shop`,
    };

    sgMail.send(msg)
        .then(() => {
            console.log('Email sent');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

