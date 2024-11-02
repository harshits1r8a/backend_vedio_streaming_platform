import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.model.js'
import {uploadOnCloudinary} from "../utils/Cloudinary.js"
import {ApiResponse} from '../utils/ApiResponse.js'
<<<<<<< HEAD

// Coocies option
const options = {
    httpOnly : true,
    secure : true
}

const generateAccessAndReferenceTokens = async(userId)=>{
    try {
        const user = await User.findOne(userId)
        const accessToken = user.gegenerateAccessToken()
        const refereshToken = user.generateRefreshToken();

        user.refereshToken = refereshToken
        await user.save({validateBeforeSave : false})
        return {accessToken, refereshToken}
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}
=======
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2

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
<<<<<<< HEAD
    // console.log("req.body->", req.body);
=======
    console.log("req.body->", req.body);
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2
    

    if([fullName, email, userName, password].some((feild)=> feild?.trim() === "")){
        throw new ApiError(400, "All feilds are required")
    }

    const existUser = await User.findOne({
        $or : [{userName}, {email}]
    })
<<<<<<< HEAD
=======
    console.log(existUser);
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2
    

    if(existUser){
        throw new ApiError(409,"User with email or username already exists");      
    }

<<<<<<< HEAD
    // console.log("req file->",req.files);
    
    const avatarLocalPath =  req.files?.avatar[0]?.path;
    // console.log("avatar path ->",avatarLocalPath);
=======
    console.log(req.files);
    
    const avatarLocalPath =  req.files?.avatar[0]?.path;
    console.log("avatar path ->",avatarLocalPath);
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2
    // const coverImageLocalPath =  req.files?.coverImage[0]?.path;
    // console.log("cover path ->",coverImageLocalPath);
    
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }
<<<<<<< HEAD
    // console.log("cover path ->",coverImageLocalPath);

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar local files is required")
    }

    const avatar =await uploadOnCloudinary(avatarLocalPath)
    // console.log("avatar;->",avatar);
    
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Avatar cloudinary files is required")
=======
    console.log("cover path ->",coverImageLocalPath);

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar files is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    console.log("avatar;->",avatar);
    
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Avatar files is required")
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2
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

<<<<<<< HEAD
})

const loginUser = asyncHandler(async(req,res)=>{
    //take data from body (username/email or password) from frontend
    //Validate feilds are empty
    // Check user are exist 
    // If exit 
    //    then check password 
    //       if password correct then create access and refresh tocken and set in cookies
    //    else send ERROR
    // If not exist then send ERROR it user not exist

    const {email, userName, password}  = req.body
    if(!(userName || email)){
        throw new ApiError(400, "Username or email is required")
    }

    if(!password){
        throw new ApiError(400, "password id required");
    }

    const user = await User.findOne({
        $or : [{userName}, {email}]
    })

    if(!user){
        throw new ApiError(404, "User is not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid credentials please enter correct password")
    }

    // create access token
    // Why it is here b/z may be this call by mobile app where cookies is not there then set in header
    const {accessToken, refereshToken} = await generateAccessAndReferenceTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refershToken")
    
    return res.status(200)
              .cookie("accessToken", accessToken, options)
              .cookie("refereshToken", accessToken, options)
              .json(
                new ApiResponse(200,
                    {user : loggedInUser, accessToken, refereshToken},
                    'User logged in successfully'
                )
              )
})

const logoutUser = asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset : {
                refereshToken : 1 //this remove the feild from document
            }
        },
        {
            new : true
        }
    )

    return res.status(200)
              .clearCookie("accessToken", options) 
              .clearCookie("refereshToken", options) 
              .json(new ApiResponse(200, null,"User logged Out"))
=======
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2
})

export {
    registerUser,
    loginUser,
    logoutUser
}