import "dotenv/config";
import jwt from "jsonwebtoken";
import { User } from "models";

const returnMessage = (res, message) => res.status(400).send({
    error: true,
    message: message,
});

const verifyJwt = async (req, res, next) => {
    try {
        const token = typeof req === "string" ? req : req.headers[`x-access-token`];

        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        const userData = await User.findOne({ _id: id, visible: true }, "_id");

        if (userData) {
            if (typeof req === "object") {
                req.userId = id;
            };

            if (next) next();
            return id;
        }

        else returnMessage(res, "Doğrulanmamış token")
    } catch (error) {
        return returnMessage(res, error)
    }
};

export default verifyJwt;