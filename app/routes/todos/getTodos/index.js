import { routerContainer } from "services";
import { resolveMessage } from "utils";
import { Todo } from "models";

const getTodos = async (params, res) => {
    const { userId } = params;

    const todos = await Todo.find({
        visible: true,
        userId
    });

    return resolveMessage({
        name: "GET_TODOS",
        data: todos,
        res
    });
};

export default (request, response) => routerContainer({
    method: getTodos,
    type: "get",
    response,
    request,
});