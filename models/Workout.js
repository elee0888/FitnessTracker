const mongoose = require("mongoose"),
 Schema = mongoose.Schema;

const WorkoutSchema = new Schema({ 
  
  day: {
    type: Date,
    default: Date.now
  },
  
  totalDuration: {
    type: Number,
    default: 0
  },

  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;