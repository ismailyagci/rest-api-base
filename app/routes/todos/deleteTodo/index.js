import { routerContainer } from "services";
import { resolveMessage } from "utils";
import { Todo } from "models";
import schema from "./schema";

const deleteTodo = async (params, res) => {
    const { id, userId } = params;

    const filter = {
        visible: true,
        _id: id,
        userId,
    };

    await Todo.findOneAndUpdate(filter, {
        visible: false
    });

    return resolveMessage({
        name: "DELETE_TODO",
        res
    });
};

export default (request, response) => routerContainer({
    method: deleteTodo,
    type: "post",
    response,
    request,
    ...schema
});