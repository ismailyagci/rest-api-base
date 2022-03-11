import { routerContainer } from "services";
import { resolveMessage } from "utils";
import { User } from "models";

const getProfile = async (params, res) => {
    const { userId } = params;

    const user = await User.findOne(
        {
            visible: true,
            _id: userId
        },
        "mail fullName updatedAt profileImageId profileImage"
    ).populate("profileImage").exec();

    return resolveMessage({
        name: "GET_PROFILE",
        data: user,
        res
    });
};

export default (request, response) => routerContainer({
    method: getProfile,
    type: "get",
    response,
    request,
});