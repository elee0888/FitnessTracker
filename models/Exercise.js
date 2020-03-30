const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const ExercisesSchema= new Schema({
    type:{
        type: String,
    },

    name:{
        type: String,
        trim: true
    },

    weight:{
        type: Number,
        trim: true
    },

    sets: {
        type: Number,
        trim: true
    },

    reps: {
        type: Number,
        trim: true
    },

    duration: {
        type: Number,
        trim: true
    },

    distance: {
        type: Number,
        trim: true
    }
});

const Exercise=mongoose.model("Exercise", ExercisesSchema);

module.exports=Exercise;