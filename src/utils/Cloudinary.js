import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {

<<<<<<< HEAD

  try {
    if (!localFilePath) return null;
    // upload the file on cloudinry
    // 'D:/Backend/public/temp/p1.jpeg'
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
      timeout:60000
    });

    //file has been uploades successfull
    console.log("file is upload on cloudnary res->", response);
=======
        // upload the file on cloudinry
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        }).then((res)=>console.log("res in cloudinaryfile",res))

        //file has been uploades successfull
        console.log("file is upload on cloudnary res->",response)

        // unlink the file
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        // remove the locally saved temporary file as the upload operation got failed
        fs.unlinkSync(localFilePath)
        console.log("Error in cloudinary file :", error);
        return null
    }
}
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2

    // unlink the file
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // remove the locally saved temporary file as the upload operation got failed
    fs.unlinkSync(localFilePath); 
    console.log("Error in cloudinary file :", error);
    return null;
  }
};

export { uploadOnCloudinary };

// Error in cloudinary file : Invalid extension in transformation: auto
// Error: Avatar cloudinary files is required
//     at file:///D:/Backend/src/controllers/user.controler.js:61:15
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
