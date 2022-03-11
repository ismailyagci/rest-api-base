import {
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
} from "./constants";
import {
    resolveMessage as resolveMessageInterface
} from "documents";

const { document, messageOptinos } = resolveMessageInterface;

const statusConstants = {
    "success": SUCCESS_MESSAGES,
    "error": ERROR_MESSAGES
};

const getNameStatus = (name) => {
    return statusConstants["success"][name] ? "success" : "error";
};

const resolveMessage = (
    {
        data = {},
        name = "",
        res
    } = document,
    {
        error = ""
    } = messageOptinos
) => {
    const status = getNameStatus(name);
    const statusCode = status === "error" ? 500 : 200;

    let returnMessage = statusConstants[status][name];
    if (typeof returnMessage === "function") returnMessage = returnMessage(error);

    return res.status(200).json({
        message: statusConstants[status][name],
        code: statusCode,
        data
    });
};
export default resolveMessage;
