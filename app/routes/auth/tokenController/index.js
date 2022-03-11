import { User } from 'models';
import { routerContainer } from "services";
import { resolveMessage, check } from 'utils';
import jwt from "jsonwebtoken";
import "dotenv/config";

const verify = async (token) => {
    return await new Promise((resolve) => jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) resolve({
            id: ""
        });
        resolve(decoded);
    }));
}

const tokenController = async (params, res) => {
    const { token } = params;

    const { id } = await verify(token);
    if (check({ data: id })) return resolveMessage({
        name: "EXPIRE_TOKEN",
        res
    });

    const user = await User.findById(id);
    if (check({ data: user, selector: "_id" })) return resolveMessage({
        name: "USER_NOT_FOUND",
        res
    });

    if (user.accessToken !== token) return resolveMessage({
        name: "EXPIRE_TOKEN",
        res
    });

    return resolveMessage({
        name: "TOKEN_CONTROLLER",
        res,
        data: {
            userLogin: user.accessToken === token
        }
    });
};

export default (request, response) => routerContainer({
    method: tokenController,
    type: "get",
    response,
    request,
    validation: {
        token: {
            fieldTitle: "Token",
            type: "length",
            typeOptions: {
                min: 0
            }
        },
    }
});