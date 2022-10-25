const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;
const data = require("./Databse/data.json");
const courseDetailsData = require("./Databse/courseDetails.json");

app.listen(port, () => {
  console.log("server is running");
});

app.get('/home',(req,res)=>{
    const homeData=data.data.find(h=>h.id===1);
    res.send(homeData);
})

app.get('/course',(req,res)=>{
    const course=data.data.find(c=>c.id===2);
    res.send(course);
})

app.get('/course/:id',(req,res)=>{
    const courseID=req.params.id;
    const courseDetails=courseDetailsData.data.find(cd=>cd.id==courseID);    
    res.send(courseDetails);
})
