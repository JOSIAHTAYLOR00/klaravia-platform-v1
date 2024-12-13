const AWS = require('aws-sdk');
const heicConvert = require('heic-convert');
const S3 = new AWS.S3();
const DynamoDB = new AWS.DynamoDB.DocumentClient();

/**
 * Convert base64 URL-encoded HEIC image to base64 encoded JPEG image
 * @param {string} base64Heic - The base64 URL-encoded HEIC image
 * @returns {Promise<string>} - The base64 encoded JPEG image
 */
const convertBase64HeicToBase64Jpeg = async (base64Heic) => {
  try {
    // Decode the base64 HEIC image to a buffer
    const heicBuffer = Buffer.from(base64Heic, 'base64');

    // Convert .HEIC to .JPEG using heic-convert
    const heicToJpegBuffer = await heicConvert({
      buffer: heicBuffer, // the HEIC file buffer
      format: 'JPEG',     // output format
      quality: 1          // the jpeg compression quality, between 0 and 1
    });

    // Convert the JPEG buffer to base64
    const base64Jpeg = heicToJpegBuffer.toString('base64');

    return base64Jpeg;
  } catch (error) {
    console.error('Error during conversion:', error);
    throw error;
  }
};

exports.handler = async (event) => {
  try {
    // Parse event body
    const { userId, imageBase64, imageType } = event;

    let base64Image = imageBase64;
    let imageExtension = 'unknown';

    function getFileExtension(mimeType) {
      const mimeTypes = {
        'image/jpeg': 'jpeg',
        'image/jpg': 'jpg',
        'image/png': 'png',
        'image/heic': 'heic',
        'image/pdf': 'pdf',
        // Add other MIME types and extensions as needed
      };

      return mimeTypes[mimeType] || 'unknown'; // Default to 'jpg' if the MIME type is unknown
    }

    const fileExtension = getFileExtension(imageType);

    if(fileExtension === 'unknown'){
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `An error occurred while uploading user image to S3 bucket: ${process.env.BUCKET_NAME}`, details: 'Unknown file type'})
      };
    }

    if (fileExtension === 'heic') {
      base64Image = await convertBase64HeicToBase64Jpeg(imageBase64);
      imageExtension = 'jpeg';
    } else {
      imageExtension = fileExtension;
    }

    const date = new Date();

    // Define S3 upload parameters
    const s3Params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `users/${userId}/${date}.${imageExtension}`, // or generate a unique name
      Body: Buffer.from(base64Image, 'base64'),
      ContentType: imageExtension === 'jpeg' ? 'image/jpeg' : imageType,
    };

    // Upload to S3
    const s3UploadResult = await S3.upload(s3Params).promise();
    const imageUrl = s3UploadResult.Location;

    const getUserParams = {
      TableName: process.env.TABLE_NAME,
      Key: { id: userId },
      ProjectionExpression: 'user_images'
    };

    const currentUser = await DynamoDB.get(getUserParams).promise();
    const currentImages = currentUser.Item?.user_images || [];

    // Update DynamoDB with the new combined array
    const dynamoParams = {
      TableName: process.env.TABLE_NAME,
      Key: { id: userId },
      UpdateExpression: 'SET user_images = :images, updated_by = :uB',
      ExpressionAttributeValues: {
        ':images': [...currentImages, imageUrl],
        ':uB': 'DYNAMO',
      },
    };

    await DynamoDB.update(dynamoParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Upload successful', imageUrl })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `An error occurred while uploading user image to S3 bucket: ${process.env.BUCKET_NAME}`, details: error.message })
    };
  }
};
