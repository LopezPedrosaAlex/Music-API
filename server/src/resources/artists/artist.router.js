const { Router } = require("express");
const { route } = require("express/lib/application");
const artistController = require("./artist.controller");

const router = Router();

router
  .route("/")
  .get(artistController.listArtists)
  .post(artistController.createOneArtist);

router
  .route("/:id")
  .get(artistController.findOneArtist)
  .put(artistController.updateOneArtist)
  .delete(artistController.deleteOneArtist);

module.exports = router;
