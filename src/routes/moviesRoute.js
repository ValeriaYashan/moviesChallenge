// ************ Require's ************
const express = require("express");
const router = express.Router();

const movieController = require("../controllers/moviesController");

const validations = require("../middlewares/ValidateCreateAndEdit");
const admin = require("../middlewares/admRoute");


router.get("/crud", movieController.crud);

router.get("detailMovies/:id", movieController.detail);

router.get("/createMovies", admin, movieController.add);

router.post("/createMovies", [admin, validations], movieController.create);


router.get("/editMovies/:id", admin, movieController.update);

router.put("/editMovies/:id", [admin, validations], movieController.edit);



router.get("/deleteMovies/:id", admin, movieController.delete);

router.delete("/deleteMovies/:id", admin, movieController.destroy);

module.exports = router;
