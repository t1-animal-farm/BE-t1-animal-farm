const { S3 } = require('aws-sdk');
const fs = require('fs');


module.exports = uploadImageToS3 = async (images) => {
  let url = [];

  const s3 = new S3({
    accessKeyId: 'AKIARZNSTIKGG4JETEYJ',
    secretAccessKey: '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',
    region: 'ap-northeast-2',
  });

  const promiseList = images.map((file) => {
    const fileStream = fs.createReadStream(file.path);

    // fs.unlink(`uploads/${file.filename}`, (err) => {
    //   if (err) throw err;
    // })

    return s3.upload({
      Bucket: 'testinstabucket',
      // 파일명
      Key: `${file.originalname}`,
      Body: fileStream,
    })
      .promise();
  });

  const result = await Promise.all(promiseList);

  result.map(v => {
    url.push({ location: v.Location, fileName: v.key })
  })
  console.log(url)
  return url
}
