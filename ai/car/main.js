const fs = require ('fs');
const image =fs.readFileSync('cp.jpg').toString("base64");
const AipOcrClient = require("baidu-aip-sdk").ocr;
const client = new AipOcrClient
('17712544','PnSGVnG1Wukep4ClThhcMh3i','mDHfG4jViOIwWWQ4AE7UGhp5PMGkEKSz');
const options ={};
options["mulit_detect"]="true";

client.licensePlate(image,options).then(function(result){
    console.log(result);
})