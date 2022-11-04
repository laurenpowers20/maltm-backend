import { Router } from "express";
import * as controllers from "../controllers/artists.js"


const router = Router()

router.get("/", controllers.getArtists)
router.get("/:id", controllers.getArtist)
router.get("/artist/:name", controllers.getArtistName)
router.get("/artist/genre/:genre", controllers.getArtistGenre)
router.post("/", controllers.createArtist)
router.put("/:id", controllers.updateArtist)
router.put("/artist/:name", controllers.updateArtistName)
router.delete("/:id", controllers.deleteArtist)
router.delete("/artist/:name", controllers.deleteArtistName)

export default router