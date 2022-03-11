import { Image } from 'models';
import { resolveMessage } from 'utils';

const uploadImage = async (req, res) => {
    if (!req.file) return resolveMessage({
        name: "ONLY_IMAGE_UPLOAD",
        res
    });

    const image = new Image({
        fileName: req.file.filename,
        visible: true
    });
    await image.save();

    return resolveMessage({
        name: "UPLOAD_IMAGE",
        res,
        data: {
            imageId: image._id
        }
    });
};

export default uploadImage;