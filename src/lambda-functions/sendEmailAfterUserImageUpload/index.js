const AWS = require('aws-sdk');

exports.handler = async (event) => {
    // Initialize AWS SES
    const ses = new AWS.SES({ region: 'us-east-2' }); // Replace with your SES region

    // Extract bucket name and object key from the event
    const record = event.Records[0];
    const bucketName = record.s3.bucket.name;
    const objectKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));

    // Email parameters
    const senderEmail = 'info@klaravia.co';
    const recipientEmail1 = process.env.MY_EMAIL;
    const recipientEmail2 = 'info@klaravia.co';

    const emailParams = {
        Source: senderEmail,
        Destination: {
            ToAddresses: [recipientEmail1, recipientEmail2],
        },
        Message: {
            Subject: {
                Data: `New file uploaded to ${bucketName}`,
            },
            Body: {
                Text: {
                    Data: `A new file has been uploaded to your S3 bucket.\n\nBucket: ${bucketName}\nFile Name: ${objectKey}`,
                },
            },
        },
    };

    try {
        // Send the email
        await ses.sendEmail(emailParams).promise();
        console.log(`Email sent to ${recipientEmail2}`);
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
        throw error;
    }
};