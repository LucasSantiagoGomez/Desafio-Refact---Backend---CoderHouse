import { Router } from "express";
import {
	addCart,
	getCarts,
	getCartById,
	
	
	
	
	
} from "../controllers/cart.controller.js";

const router = Router();

router.post("/", addCart);

router.get("/", getCarts);

router.get("/:cid", getCartById);




export default router;
