import { v2 as cloudinary } from "cloudinary";
import { response } from "express";

import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDNARY_CLOUD_SECRET,
});

const uploadOnCloudnary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file oncloudnary
    cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded sucesfully
    // console.log("File is uploaded on cloudinary", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally save dtemprorary file as thr upload operation filed
    return null;
  }
};

export { uploadOnCloudnary };
