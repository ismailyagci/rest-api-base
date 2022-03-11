import { routerContainer } from "services";
import { resolveMessage } from "utils";
import { User } from "models";
import schema from "./schema";

const updateProfile = async (params, res) => {
    const {
        userId,
        mail,
        fullName,
        profileImageId,
    } = params;

    await User.findOneAndUpdate({
        _id: userId,
        visible: true
    }, {
        mail,
        fullName,
        profileImageId,
    });

    return resolveMessage({
        name: "UPDATE_PROFILE",
        res
    });
};

export default (request, response) => routerContainer({
    method: updateProfile,
    type: "post",
    response,
    request,
    ...schema
});