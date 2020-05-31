//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
var cors = require('cors')

const app = express();
app.use(cors());

app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let URI = "mongodb+srv://krish:krish@cluster0-r7nxo.gcp.mongodb.net/eCommerce?retryWrites=true&w=majority;"

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DataBase Connected"))
  .catch((err) => console.log(err));


const userSchema = {
  name: String,
  email: String,
  username: String,
  password: String,
  phoneNo: Number,
  cart: Array,
  cardDetails: Array,
  prevOrders: Array,
  shippingAddres: Array
}

let User = mongoose.model("user", userSchema);


const itemSchema = {
  itemName: String,
  itemContent: String,
  itemCategory: String,
  price: Number,
  imagesUrl: Array,
}

let Item = mongoose.model("item", itemSchema);

/////////////////////////////////////////////// User Add and check //////////////////////////////////////////////

app.post("/addUser", function (req, res) {

  let z = req.body;
  const { email, password, username, name, phoneno } = z;
  const arr = [];
  const newUser = new User({
    name: name,
    email: email,
    username: username,
    password: password,
    phoneNo: phoneno,
    cart: arr,
    cardDetails: arr,
    prevOrders: arr,
    shippingAddres: arr
  });
  newUser.save(function (err) {
    let flag = false;
    if (!err) {
      flag = true;
    }
    res.send(flag);
  });
});


app.post("/verifyUser", function (req, res) {
  console.log(req.body.email);
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) {
      console.log(err);
      return res.send("Error!!");
    }
    if (user === null) {
      console.log("Incorrect Username");
    }
    else if (user.password === req.body.password) {
      console.log("Password Correct");
    }
    else {
      console.log("Password Incorrect");
    }
  })
});



////////////////////////////////////////// User Add and Check End /////////////////////////////////////









app.get("/", function (req, res) {
  User.find({}, function (err, results) {
    res.send(results);
  });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  let z = req.body;
  console.log(z);
  const postBody = req.body.title;
  const postContent = req.body.content;
  const newPost = new Blog({
    title: postBody,
    content: postContent
  });
  newPost.save(function (err) {
    let flag = false;
    if (!err) {
      flag = true;
    }
    res.send(flag);
  });
});

app.get("/posts/:postID", function (req, res) {
  const idCheck = req.params.postID;
  Blog.findOne({ _id: idCheck }, function (err, foundList) {
    const TitleTemp = foundList.title;
    const ContentTemp = foundList.content;
    res.render("post", {
      title: TitleTemp,
      content: ContentTemp
    });
  });
});

app.listen(4000, function () {
  console.log("Server started on port 4000");
});
