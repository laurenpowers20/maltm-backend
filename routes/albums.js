import { Router } from "express";
import * as controllers from "../controllers/albums.js"

const router = Router()

router.get("/", controllers.getAlbums)
router.get("/albums/:title", controllers.getAlbumTitle)
router.post("/albums", controllers.createAlbum)
router.put("/:id", controllers.updateAlbum)
router.put("/albums/:title", controllers.updateAlbumTitle)
router.delete("/:id", controllers.deleteAlbumTitle)
router.delete("/albums/:title", controllers.deleteAlbumTitle)

export default router