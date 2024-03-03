const asyncHandler = require("express-async-handler");
const Exercise = require("../models/Exercise");
const getAllExercise = asyncHandler(async (req, res) => {
  const Exercises = await Exercise.find();
  if (!Exercises)
    return res.status(400).json({ message: "No Exercises Found" });
  else res.json({ exercises: Exercises });
});
const addExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;
});
const searchExercise = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { muscles, difficulty } = req.query;
  let query = {};
  if (id !== "none") {
    const name = id.replaceAll("-", " ");
    query.name = { $regex: new RegExp(name, "i") };
  }
  if (muscles) {
    const musclesArray = muscles.split(","); // Convert string to an array
    query["muscles.muscles_primary"] = { $in: musclesArray };
  }
  if (difficulty !== undefined && difficulty !== "0") {
    const difficultyArray = difficulty.split(",").map(Number);
    query.difficulty = { $in: difficultyArray };
  }
  try {
    const exercises = await Exercise.find(query);
    if (exercises.length === 0) {
      return res.status(400).json({ message: "No Exercises Found" });
    } else {
      return res.status(200).json({ exercises });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error fetching exercises" });
  }
});

module.exports = {
  getAllExercise,
  addExercise,
  searchExercise,
};
// const FetchURL =
//     "https://musclewiki.com/newapi/exercise/exercises/?limit=15&offset=0&category=&muscles=11&status=Published&ordering=-featured_weight";
//   const response = await fetch(FetchURL);
//   const data = await response.json();
//   if (!data) return res.json("Error Fetching Data");
//   let index = 0; // Initialize the index
//   const processData = async () => {
//     if (index < data.results.length) {
//       console.log("Started");
//       const name = data.results[index].name
//         .toLocaleLowerCase()
//         .replaceAll(" ", "-");
//       const duplicate = await Exercise.find({ name: data.results[index].name })
//         .lean()
//         .exec();
//       if (duplicate && duplicate?.length > 0) {
//         console.log(`Exercise ${duplicate[0]?.name} Found Not Needed To Add`);
//         return index++;
//       }
//       const exerciseInfo = await fetch(
//         `https://musclewiki.com/newapi/exercise/exercises/?slug=${name}`
//       );
//       const exerciseData = await exerciseInfo.json();
//       if (exerciseData.results.length > 0) {
//         const muscles = {};
//         const primaryMuscle = [];
//         const secondary = [];
//         const thhird = [];
//         exerciseData.results[0].muscles_primary.forEach((muscle) => {
//           const muscleObject = muscle.name;
//           primaryMuscle.push(muscleObject);
//         });
//         exerciseData.results[0].muscles_secondary.forEach((muscle) => {
//           const muscleObject = muscle.name;
//           secondary.push(muscleObject);
//         });
//         exerciseData.results[0].muscles_tertiary.forEach((muscle) => {
//           const muscleObject = muscle.name;
//           thhird.push(muscleObject);
//         });
//         muscles.muscles_primary = primaryMuscle;
//         muscles.muscles_secondary = secondary;
//         muscles.muscles_tertiary = thhird;
//         const ExObject = {
//           name: exerciseData?.results[0].name,
//           description: exerciseData?.results[0]?.muscles[0]?.description,
//           muscles: muscles,
//           category: [exerciseData.results[0].category.name],
//           difficulty: exerciseData.results[0].difficulty.id,
//           type: "Strength",
//         };
//         const exercises = await Exercise.create(ExObject);
//         if (!exercises) console.log("Error");
//         else console.log(`Exercise ${exerciseData?.results[0].name} Added`);
//       }
//       index++;
//       if (index >= data.results.length) {
//         clearInterval(interval);
//         console.log("Finised");
//         res.json({ message: "All itmes Added" });
//       }
//     }
//   };
//   const interval = setInterval(processData, 2000);
