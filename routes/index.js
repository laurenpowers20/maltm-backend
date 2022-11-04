import { Router } from "express";
import artistsRoutes from "./artists.js"

const router = Router()

router.get("/", (req, res) => res.send("This is the MALTM api root!"))

router.use("/", artistsRoutes)

export default router
