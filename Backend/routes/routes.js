import express from "express"
import { getDrinks, createDrink, deleteDrink } from "../controllers/controllers.js"

const router = express.Router()

router.get("/", getDrinks)
router.post("/", createDrink)
router.delete("/:id", deleteDrink)

export default router