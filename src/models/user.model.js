import mongoose from "mongoose";

const watchHistorySchema = new mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Videos"
    }
})

const userSchema = new mongoose.Schema({
    watchHistory: [watchHistorySchema],
    userName: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim:true,
        index:true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim:true,
    },
    fullName: {
        type: String,
        required: true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudnary url
        required:true
    },
    coverImage:{
        type:String,
    },
    password:{
        type:String,
        required:[true,'Password is required!']
    },
    refreshTocken:{
        type:String,
    }
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)