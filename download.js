const AWS = require('aws-sdk');
const fs = require('fs');
// Enter copied or downloaded access ID and secret key here
const ID = '';
const SECRET = '';

// The name of the bucket that you have created
const BUCKET_NAME = 'test-bucket-msit';


const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

function download(){
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'myfile.png', // File name you want to save as in S3
    };
    var writeStream = fs.createWriteStream("mydwfile.png");
    var fileStream = s3.getObject(params).createReadStream();
    fileStream.pipe(writeStream);
    console.log('done downloading file');
}

download();
