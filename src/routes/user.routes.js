import { Router } from "express";
import { regester } from "../controllers/user.controller.js";

const router = Router();

router.route("/regester").post(registerUser) 
// router.route("/login").post(registeruser) 



export default router;
