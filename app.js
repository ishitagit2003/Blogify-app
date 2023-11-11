const path = require("path");
const express= require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user');
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app=express();
const port=8003;

mongoose.connect('mongodb+srv://ishitagupta2003:qwerty12@cluster0.8z4ifni.mongodb.net/?retryWrites=true&w=majority')
.then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

app.get("/", async (req, res) => {
    // const allBlogs = await Blog.find({});
    res.render("home", {
      user: req.user,
      // blogs: allBlogs,
    });
  });
  
  app.use("/user", userRoute);

app.listen(port,()=> console.log(`server started at:${port}`));