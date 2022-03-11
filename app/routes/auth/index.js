import express from 'express';
import login from "./login";
import signup from "./signup";
import tokenController from './tokenController';

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/tokenController", tokenController);

export default router;
