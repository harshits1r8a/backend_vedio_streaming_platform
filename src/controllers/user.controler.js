import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
    // get user detail from frontend
    // validation atleast not empty
    // check user already exist : username,email
    // check for img, check for avtaar
    // upload them cloudnary, avtaar
    // create user object -create entry in db
    // remove password and refreshTocken field from response
    // check for user creation
    // return res

})

export {
    registerUser
}