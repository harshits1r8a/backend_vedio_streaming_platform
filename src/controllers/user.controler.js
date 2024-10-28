import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.model.js'
import {uploadOnCloudinary} from "../utils/Cloudinary.js"
import {ApiResponse} from '../utils/ApiResponse.js'

const registerUser = asyncHandler(async (req, res) => {
    // res.status(200).json({
    //     message: "ok"
    // })
    // get user detail from frontend
    // validation atleast not empty
    // check user already exist : username,email
    // check for img, check for avtaar
    // upload them cloudnary, avtaar
    // create user object -create entry in db
    // remove password and refreshTocken field from response
    // check for user creation
    // return res

    const {fullName, email, userName, password} = req.body
    console.log("req.body->", req.body);
    

    if([fullName, email, userName, password].some((feild)=> feild?.trim() === "")){
        throw new ApiError(400, "All feilds are required")
    }

    const existUser = await User.findOne({
        $or : [{userName}, {email}]
    })
    console.log(existUser);
    

    if(existUser){
        throw new ApiError(409,"User with email or username already exists");      
    }

    console.log(req.files);
    
    const avatarLocalPath =  req.files?.avatar[0]?.path;
    console.log("avatar path ->",avatarLocalPath);
    // const coverImageLocalPath =  req.files?.coverImage[0]?.path;
    // console.log("cover path ->",coverImageLocalPath);
    
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }
    console.log("cover path ->",coverImageLocalPath);

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar files is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    console.log("avatar;->",avatar);
    
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Avatar files is required")
    }

    const user = await User.create({
        fullName,
        avatar : avatar.url,
        coverImage : coverImage?.url || "",
        email,
        password,
        userName : userName.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registerd Successfully")
    )

})

export {
    registerUser
}