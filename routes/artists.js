import { Router } from "express";
import * as controllers from "../controllers/artists.js";

const router = Router();

router.get("/", controllers.getArtists);
router.get("/artists/:id", controllers.getArtist);
router.get("/artists/name/:name", controllers.getArtistName);
router.get("/artists/genre/:genre", controllers.getArtistGenre);
router.post("/artists", controllers.createArtist);
router.put("/:id", controllers.updateArtist);
router.put("/artists/:name", controllers.updateArtistName);
router.delete("/:id", controllers.deleteArtist);
router.delete("/artists/:name", controllers.deleteArtistName);

// Albums

// router.get("/artists/albums/all", controllers.getAlbums);
// router.get("/album/:title", controllers.getAlbumTitle);
// router.post("/album/:title", controllers.createAlbum);
// router.put("/album/:title", controllers.updateAlbumTitle);
// router.delete("/album/:title", controllers.deleteAlbumTitle);

export default router;
