module.exports = uploadImageToS3 = async (images) => {
  const s3 = new S3({
    accessKeyId: 'AWS 엑세스 키',
    secretAccessKey: 'AWS 시크릿 키',
    region: '버킷이 있는 지역',
  });

  const promiseList = images.map((file) => {
    const fileStream = fs.createReadStream(file.path);

    return s3.upload({
      Bucket: '버킷이름',
      // 파일명
      Key: `uploads/${file.originalname}`,
      Body: fileStream,
    })
      .promise();
  });

  const result = await Promise.all(promiseList);

  for (let i = 0; i < files.length; i++) {
    fs.unlink(files[i].path, (err) => {
      if (err) throw err;
    });
  }

  return result;
}
