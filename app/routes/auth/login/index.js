import { User } from 'models';
import { routerContainer } from "services";
import { generateJwt, resolveMessage, check } from 'utils';

const login = async (params, res) => {
    const { mail, password } = params;

    const user = await User.findOne({ mail });
    if (check({ data: user, selector: "_id" })) return resolveMessage({
        name: "USER_NOT_FOUND",
        res
    });

    const isValid = await user.comparePassword(password);
    if (!isValid) return resolveMessage({
        name: "PASSWORD_ERROR",
        res
    });

    const { error, token } = await generateJwt(user._id);

    if (error) return resolveMessage({
        name: "JWT_ERROR",
        res
    }, {
        error
    })

    await User.findOneAndUpdate({ _id: user._id }, { accessToken: token })

    return resolveMessage({
        name: "LOGIN",
        res,
        data: {
            accessToken: token,
            userId: user._id
        }
    });
};

export default (request, response) => routerContainer({
    method: login,
    type: "post",
    response,
    request,
    validation: {
        mail: {
            fieldTitle: "E-Posta",
            type: "email"
        },
        password: {
            fieldTitle: "Şifre",
            type: "password"
        }
    }
});