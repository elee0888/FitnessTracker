const express= require("express");
const mongoose= require("mongoose");
const logger= require("morgan");

const routes= require("./routes/routes");

const PORT=process.env.PORT || 3001;
const app= express()

app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {useNewUrlParser: true});

app.use(routes);

app.listen(PORT,()=> {
    console.log("App running on port http://localhost:3001");
});


