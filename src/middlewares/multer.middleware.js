import multer from 'multer'
// import path from '../../public/temp'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename : function (req, file, cb){
        cb(null, file.originalname)
    }
})

export const upload = multer({
<<<<<<< HEAD
    storage,
=======
    storage
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2
})  