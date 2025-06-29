const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());

//Write missing code here
require("./connection");
var blogs = require("./model")

//Write your POST API here
app.post('/add',async(req,res)=>{
  
    try{
          await blogs(req.body).save();
          res.send("Data sent")
    }
    catch (error) {}

})   

app.get("/get", async (req, res) => {
  try {
    let data = await blogs.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/:id',async(req,res) => {
    console.log(req.params.id);
    try{
       await blogs.findByIdAndDelete(req.params.id);
       res.send("blog card deleted ")

    }
    catch(error){
        res.send(error)
    }

}); 


app.put('/update/:id',async(req,res)=>{
     console.log(req.params.id);  
     try{
        await blogs.findByIdAndUpdate(req.params.id,req.body);
        res.send("blog updated")

     }
    catch(error){
        res.send(error)
    }

})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
