import validationService from "../validation";
import checkIdsService from "../checkIds";
import checkUsedBeforeService from "../checkUsedBefore";
import { routerContainer as routerContainerInterface } from "documents";

const resolve = (response, message) => response
    .status(200)
    .json({
        message: message,
        code: 400,
    });

const routerContainer = async ({
    checkUsedBefore,
    validation,
    checkIds,
    response,
    request,
    method,
    type,
} = routerContainerInterface) => {
    const params = type === "post" ? request.body : request.query;
    params.userId = request.userId;

    if (validation) {
        const validationResult = validationService(validation, params);
        if (!validationResult.status) return resolve(response, validationResult.message);
    };

    if (checkIds) {
        const checkIdsResult = await checkIdsService(checkIds, params);
        if (!checkIdsResult.status) return resolve(response, checkIdsResult.message);
    }

    if (checkUsedBefore) {
        const checkUsedBeforeResult = await checkUsedBeforeService(checkUsedBefore, params);
        if (!checkUsedBeforeResult.status) return resolve(response, checkUsedBeforeResult.message);
    }

    return method(params, response);
};
export default routerContainer;