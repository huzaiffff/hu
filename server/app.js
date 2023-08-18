const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const Admin = require('./routes/admin');

const Customer = require('./routes/customer');




app.use(cors());
app.use(express.json());

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017", {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Connected to the database");
})
.catch(err =>{
  console.log("Cannot Connect to the database",err);
  process.exit();
});

app.use("/admin", Admin);
app.use("/customer", Customer);

app.listen(5001, ()=>{
  console.log('Server is running up at port 5000');
})



