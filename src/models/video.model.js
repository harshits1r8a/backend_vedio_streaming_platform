import mongoose,{Schema} from "mongoose";

const videoSchema = new Schema({
    videoFile:{
        type:String,//cloudnarry
        required :[true, 'video is required !']
    },
    thumbnail:{
        type:String,
        required :[true, 'thumbnail is required !']
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
},{timestamps:true})

export const Video = mongoose.model('Video',videoSchema) 