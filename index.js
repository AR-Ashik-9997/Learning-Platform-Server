const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;
const data = require("./Databse/data.json");
const courseDetails = require("./Databse/courseDetails.json");

app.listen(port, () => {
  console.log("server is running");
});

app.get('/home',(req,res)=>{
    const homeData=data.data.find(h=>h.id===1);
    res.send(homeData);
})
