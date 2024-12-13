const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const DynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        // Parse event body
        const { userId, imageBase64, imageType } = event;

        function getFileExtension(mimeType) {
          const mimeTypes = {
              'image/jpeg': 'jpg',
              'image/png': 'png',
              'image/gif': 'gif',
              // Add other MIME types and extensions as needed
          };
      
          return mimeTypes[mimeType] || 'jpg'; // Default to 'jpg' if the MIME type is unknown
      }

        const fileExtension = getFileExtension(imageType);

        // Define S3 upload parameters
        const s3Params = {
            Bucket: process.env.BUCKET_NAME,
            Key: `installers-cover-image-uploads/${userId}/cover-image.${fileExtension}`, // or generate a unique name
            Body: Buffer.from(imageBase64, 'base64'),
            ContentType: imageType,
        };

        // Upload to S3
        const s3UploadResult = await S3.upload(s3Params).promise();
        const imageUrl = s3UploadResult.Location;

        // Update DynamoDB
        const dynamoParams = {
            TableName: process.env.TABLE_NAME,
            Key: { id: userId },
            UpdateExpression: 'set company_cover_image_url = :url',
            ExpressionAttributeValues: { ':url': imageUrl }
        };

        await DynamoDB.update(dynamoParams).promise();

        return { statusCode: 200, body: JSON.stringify({ message: 'Upload successful', imageUrl }) };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ error: 'An error occurred' }) };
    }
};
