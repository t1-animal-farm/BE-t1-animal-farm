const { S3 } = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

module.exports = uploadImageToS3 = async (images) => {
  let url = [];

  const s3 = new S3({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
    region: 'ap-northeast-2',
  });

  const promiseList = images.map((file) => {
    const fileStream = fs.createReadStream(file.path);
    // buffer, stream

    return s3.upload({
      Bucket: 'testinstabucket',
      // 파일명
      Key: `${file.originalname}`,
      Body: fileStream,
    })
      .promise();
  });

  // images.map((file) => {
  //   fs.unlink(`uploads/${file.originalname}`, (err) => {

  //     if (err) throw err;
  //   })
  // })

  fs.rmdir('uploads/', { recursive: true }, (err) => {
    if (err) {
      console.log(err)
    }
  })

  const result = await Promise.all(promiseList);

  console.log('url', result);
  result.map(v => {
    url.push({ location: v.Location, fileName: v.key })
  });

  return url
}