import { Router } from "express";
import * as controllers from "../controllers/artists.js";

const router = Router();

router.get("/artists", controllers.getArtists);
router.get("/:id", controllers.getArtist);
router.get("/artist/:name", controllers.getArtistName);
router.get("/artist/genre/:genre", controllers.getArtistGenre);
router.post("/artists", controllers.createArtist);
router.put("/:id", controllers.updateArtist);
router.put("/artist/:name", controllers.updateArtistName);
router.delete("/:id", controllers.deleteArtist);
router.delete("/artist/:name", controllers.deleteArtistName);

// Albums

router.get("/artists/albums/all", controllers.getAlbums);
router.get("/album/:title", controllers.getAlbumTitle);
router.post("/album/:title", controllers.createAlbum);
router.put("/album/:title", controllers.updateAlbumTitle);
router.delete("/album/:title", controllers.deleteAlbumTitle);

export default router;
