import "dotenv/config";
import jwt from "jsonwebtoken";

const options = {
    expiresIn: "24h",
};

const generateJwt = async (userId) => {
    try {
        const payload = { id: userId };
        const token = await jwt.sign(payload, process.env.JWT_SECRET, options);

        return { error: false, token: token };
    } catch (error) {
        return { error: true };
    }
}

export default generateJwt;