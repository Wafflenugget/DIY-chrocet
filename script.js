const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    const { customerName, customerEmail, productName } = JSON.parse(event.body);

    // Construct email parameters
    const params = {
        Destination: {
            ToAddresses: [customerEmail]
        },
        Message: {
            Body: {
                Text: {
                    Data: `Dear ${customerName},\n\nThank you for purchasing ${productName}!\n\nBest regards,\nYour Plushie Shop`
                }
            },
            Subject: {
                Data: 'Order Confirmation from Your Plushie Shop'
            }
        },
        Source: 'trc.for.everyone.in.life@gmail.com' // Replace with your verified email address in AWS SES
    };

    try {
        await ses.sendEmail(params).promise();
        return { statusCode: 200, body: 'Email sent successfully!' };
    } catch (error) {
        return { statusCode: 500, body: error.message };
    }
};
