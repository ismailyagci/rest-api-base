const imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        return cb(null, false);
    }
    cb(null, true);
};
export default imageFilter;