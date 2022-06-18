const { Router } = require("express");
const { route } = require("express/lib/application");
const songsController = require("./songs.controller");

const router = Router();

router.route("/").get(songsController.listSongs);

router
  .route("/:artistId")
  .get(songsController.songsByArtist)
  .post(songsController.createOneSong);

router
  .route("/:songId")
  .put(songsController.updateOneSong)
  .delete(songsController.deleteOneSong);

module.exports = router;
