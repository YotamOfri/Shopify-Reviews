const express = require("express");
const exercisesController = require("../controllers/exercisesController");
const router = express.Router();
// Get All
// @ /exercise
router.route("/").get(exercisesController.getAllExercise);
// Search
// @ /exercise/name
router.route("/:id").get(exercisesController.searchExercise);

module.exports = router;
