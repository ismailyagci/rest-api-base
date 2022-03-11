import { routerContainer } from "services";
import { resolveMessage } from "utils";
import { Todo } from "models";
import schema from "./schema";

const createTodo = async (params, res) => {
    const {
        userId,
        content,
        title
    } = params;
    
    const todo = new Todo({
        visible: true,
        content,
        userId,
        title,
    });

    await todo.save();

    return resolveMessage({
        name: "CREATE_TODO",
        res
    });
};

export default (request, response) => routerContainer({
    method: createTodo,
    type: "post",
    response,
    request,
    ...schema
});