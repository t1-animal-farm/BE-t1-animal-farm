const { S3 } = require('aws-sdk');
const fs = require('fs');

module.exports = deleteImageToS3 = async () => {

  const s3 = new S3({
    accessKeyId: 'AKIARZNSTIKGG4JETEYJ',
    secretAccessKey: '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',
    region: 'ap-northeast-2',
  });
  console.log(s3.deleteObject);
  s3.deleteObject({
    Bucket: 'testinstabucket', // 삭제하고 싶은 이미지가 있는 버킷 이름
    Key: 'pigpit.jfif',
  }, (err, data) => {
    if (err) console.log(err); // 실패 시 에러 메시지
    else console.log(data); // 성공 시 데이터 출력
  });
}
