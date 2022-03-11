import { Image } from "models";

const getDefaultUserImage = async () => {
    const defaultUserImage = await Image.findOne({
        fileName: process.env.DEFAULT_USER_IMAGE
    });
    return defaultUserImage._id || "";
};

export default getDefaultUserImage;