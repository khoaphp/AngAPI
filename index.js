var express = require("express");
var app = express();
app.listen(3000);

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mongodb.net/xxx-yyy?retryWrites=true&w=majority").then(()=>{console.log("Connect successful~")}).catch(()=>{console.log("Connect failed~")});

const Tin = require("./models/post.js");

app.get("/post", function(req, res){
    const post = new Tin({ title:"AAA", content: "BBB" });
    post.save();
    //res.end();
});

app.get("/", function(req, res){
    res.send("Hello");
});