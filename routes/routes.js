const router=require("express").Router();
const db= require("../models/models");
let path= require("path");

router.get("/stats", (req,res)=> {
    res.sendFile(path.resolve("./public/stats.html"));
});

router.get("/exercise", (req,res)=>{
    res.sendFile(path.resolve("./public/exercise.html"));
});

router.get("/api/workouts", (req,res)=>{
    db.Workout.find({})
    .populate("exercises")
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.json(err);
    });
});

router.post("/api/workouts", ({body}, res)=>{
    db.Workout.create(body)
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req,res)=>{
    db.Exercise.create(req.body)
    .then((response)=> {
        console.log(response);
        let filter= { _id: req.params.id };
        let update= {
            $push: { exercises: response._id },
            $inc: { totalDuration: response.duration }
        };

        db.Workout.findByIdAndUpdate(filter, update, { new: true })
        .then(Exercise => {
            console.log(Exercise);
            res.json(Exercise);
        })
        .catch(err=> {
            res.json(err);
        });
    });
});

router.get("/api/workouts/range", (req, res)=>{
    db.Workout.find({})
    .populate("exercise")
    .then(data=> {
        res.json(data);
    })
    .catch(err=> {
        res.json(err);
    });
});

module.exports= router;