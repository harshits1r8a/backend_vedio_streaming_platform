import { Router } from "express";
<<<<<<< HEAD
import { loginUser, logoutUser, registerUser } from "../controllers/user.controler.js";
import { upload } from "../middlewares/multer.middleware.js";
import verifyJWT from "../middlewares/auth.middleware.js";
=======
import { registerUser } from "../controllers/user.controler.js";
import { upload } from "../middlewares/multer.middleware.js";
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2

const router = Router()

router.route("/register").post(upload.fields([
    {
<<<<<<< HEAD
        name : "avatar",
        maxCount : 1
    },
    {
        name : "coverImage",
        maxCount : 1
    }
]),registerUser)

router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT, logoutUser)
=======
        name : 'avatar',
        maxCount : 1
    },
    {
        name : 'coverImage',
        maxCount : 1
    }
]),registerUser)
>>>>>>> 49ef271b4db1ed1a7206a364244b92323cd1eec2

export default router