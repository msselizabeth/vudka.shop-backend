const { s3Client } = require("./s3Client");

const { PutObjectCommand } = require("@aws-sdk/client-s3");


const uploadImagesToS3 = async (files, folder, brand) => {
  const bucketName = process.env.AWS_BUCKET_NAME; 

  const uploadPromises = files.map((file, index) => {
    const fileName = `${folder}/${brand}/${file.originalname}`;
    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: file.buffer,
    };

    return s3Client.send(new PutObjectCommand(params)).then(() => {
        return { url: `https://${bucketName}.s3.amazonaws.com/${fileName}`, key: fileName };
    });
});

return Promise.all(uploadPromises);
};

module.exports = { uploadImagesToS3 };