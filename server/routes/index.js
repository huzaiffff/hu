const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//var router = express.Router();

//const admin = require('./admin');
const app = express();

const Admin1 = require('./admin');
//const Table = require('./tableno');
//const Reservation = require('./reservation');
const Customer = require('./customer');
//const Menu = require('./menu');
//const Tableno1 = require('./tableno');



app.use(cors());
app.use(express.json());

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://mahekdembra:mahek123@cluster0.xkt6u.mongodb.net/Scala?retryWrites=true&w=majority", {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Connected to the database");
})
.catch(err =>{
  console.log("Cannot Connect to the database",err);
  process.exit();
});

app.use("/admin", Admin1);
//app.use("/menu", Menu);
//app.use("/reservation", Reservation);
//app.use("/tableno", Tableno1);
app.use("/customer", Customer);

app.listen(5000, ()=>{
  console.log('Server is running up at port 5000');
})



