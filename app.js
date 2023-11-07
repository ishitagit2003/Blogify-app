const path = require("path");
const express= require("express");

const userRoute = require('./routes/user')

const app=express();
const port=8003;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (req, res) => {
    // const allBlogs = await Blog.find({});
    res.render("home");
  });
  
  app.use("/user", userRoute);

app.listen(port,()=> console.log(`server started at:${port}`));