//Write missing codes here
var mongoose = require("mongoose")  //import mongoose

const BlogSchema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

//Write missing codes here
var BlogModel= mongoose.model("blog",BlogSchema)

module.exports = BlogModel