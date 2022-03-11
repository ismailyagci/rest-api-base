import express from 'express';
import getProfile from './getProfile';
import updateProfile from './updateProfile';

const router = express.Router();

router.get("/getProfile", getProfile);
router.post("/updateProfile", updateProfile);

export default router;
