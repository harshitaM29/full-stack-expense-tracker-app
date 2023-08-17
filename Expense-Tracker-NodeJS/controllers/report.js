const { response } = require('express');
const FilesDownloaded = require('../models/filesdownloaded');
const AWS = require('aws-sdk');


function uploadToS3(data,filename) {
    const BUCKET_NAME = 'expensetracker-project';
    const IAM_USER_KEY = 'AKIA5ORYMYNQVNRFVQF4';
    const IAM_USER_SECRET = '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';
    

    let s3bucket = new AWS.S3({
        accessKeyId:IAM_USER_KEY,
        secretAccessKey:IAM_USER_SECRET,
        // Bucket:BUCKET_NAME
    });

    
        var params = {
            Bucket: BUCKET_NAME,
            Key:filename,
            Body:data,
            ACL:'public-read'
        }
        return new Promise((resolve,reject) => {
            s3bucket.upload(params, (err, response) => {
                if(err) {
                    console.log('Something Went Wrong')
                    reject(err);
                } else {
                    console.log('Success',response);
                    resolve(response.Location);
                }
            })
        })
       
   


}
exports.downloadReport = async(req,res,next) => {
    try {
    const expenseList = await req.user.getExpenses();
    const stringifiedExpenses = JSON.stringify(expenseList);
    const userId = req.user.id;
    const filename = `Expense${userId}/${new Date()}.txt`;
    const fileURL = await uploadToS3(stringifiedExpenses,filename);
    const filesDownloadedData = await FilesDownloaded.create({
        fileurl:fileURL,
        userId:userId,
        filename:filename
    })
    res.status(200).json({ fileURL, succues:true})
    }catch(err) {
        res.status(500).json({ fileURL:'', success:false, err:err})
    }
}

exports.getFileDownloadedData = async(req,res,next) => {
    const id = req.user.id;
    try {
            const data = await FilesDownloaded.findAll({ where: {userId : id}});
            res.status(200).json(data);

    }catch(err){
        res.status(400).json({message: 'Something Went Wrong', err:err})
    }
}