const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://mariyarahael:mariya@cluster0.a7yqqxm.mongodb.net/endtest?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
