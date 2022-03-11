import express from 'express';
import uploadImage from "./uploadImage";
import multer from 'multer';
import path from "path";
import { uuid, imageFilter } from "utils";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './app/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${uuid()}${path.extname(file.originalname)}`)
    }
})

var upload = multer({ storage: storage, fileFilter: imageFilter })

router.post("/uploadImage", upload.single('image'), uploadImage);

export default router;