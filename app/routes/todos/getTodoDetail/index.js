import { routerContainer } from "services";
import { resolveMessage } from "utils";
import { Todo } from "models";
import schema from "./schema";

const getTodoDetail = async (params, res) => {
    const { id, userId } = params;

    const todo = await Todo.findOne({
        visible: true,
        _id: id,
        userId
    });

    return resolveMessage({
        name: "GET_TODO_DETAIL",
        data: todo,
        res
    });
};

export default (request, response) => routerContainer({
    method: getTodoDetail,
    type: "get",
    response,
    request,
    ...schema
});