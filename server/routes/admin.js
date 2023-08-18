const express = require('express');


const router = express.Router();

const Admin = require('../models/admin.model');



router.post("/insert", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const status = req.body.status;
    
   

    const admin = new Admin({ username: username , password: password, status:status });
    try {
        await admin.save();
        console.log('added to db')
    } catch (err) {
        console.log(err);
    }
});

router.get('/read', async (req, res) => {
    const filter = { status: "Enrolled" }; // Specify your filter criteria here
  
    Admin.find(filter, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
  

router.put("/update", async (req, res) => {
    const newusername = req.body.newusername
    const newpassword = req.body.newpassword
    const newstatus= req.body.newstatus
    const id = req.body.id;

    try {
        await Admin.findById(id, (err, updateditem) => {
            updateditem.username = newusername;
            updateditem.password = newpassword;
            updateditem.status = newstatus;
            updateditem.save();
            res.send('Updated.')
        })
    } catch (err) {
        console.log(err);
    }
});

   
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
  await Admin.findByIdAndRemove(id).exec();
  res.send("Deleted");
    console.log('Deleted from db')
}) 
module.exports = router;
