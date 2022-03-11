import { resolveMessage, generateJwt, getDefaultUserImage } from "utils";
import { routerContainer } from "services";
import { User } from "models";
import schema from "./schema";

const signup = async (params, res) => {
    const {
        mail,
        fullName,
        password,
    } = params;
    const defaultUserImage = await getDefaultUserImage();

    const user = new User({
        profileImageId: defaultUserImage,
        accessToken: "",
        visible: true,
        password,
        fullName,
        mail,
    });
    await user.save();

    const { error, token } = await generateJwt(user._id);

    if (error) return resolveMessage({
        name: "JWT_ERROR",
        res
    }, {
        error
    });

    await User.findOneAndUpdate({ _id: user._id }, { accessToken: token });

    return resolveMessage({
        name: "SIGNUP",
        res,
        data: {
            accessToken: token,
            userId: user._id
        }
    });
};

export default (request, response) => routerContainer({
    method: signup,
    type: "post",
    response,
    request,
    ...schema
});