import { routerContainer } from "services";
import { resolveMessage } from "utils";
import { Todo } from "models";
import schema from "./schema";

const updateTodo = async (params, res) => {
    const {
        userId,
        id,
        title,
        content,
    } = params;

    const filter = {
        visible: true,
        _id: id,
        userId,
    };

    await Todo.findOneAndUpdate(filter, {
        title,
        content,
    });

    return resolveMessage({
        name: "UPDATE_TODO",
        res
    });
};

export default (request, response) => routerContainer({
    method: updateTodo,
    type: "post",
    response,
    request,
    ...schema
});