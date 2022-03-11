import express from 'express';
import createTodo from './createTodo';
import updateTodo from './updateTodo';
import deleteTodo from './deleteTodo';
import getTodos from './getTodos';
import getTodoDetail from './getTodoDetail';

const router = express.Router();

router.post("/createTodo", createTodo);
router.post("/updateTodo", updateTodo);
router.post("/deleteTodo", deleteTodo);
router.get("/getTodos", getTodos);
router.get("/getTodoDetail", getTodoDetail);

export default router;
