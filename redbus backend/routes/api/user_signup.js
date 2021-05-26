const express=require("express");
const router = express.Router()


var knex = require('../../config/db_connection')

// user sign_up
router.post("/signup",(req,res)=>{
    const value={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_no: req.body.phone_no,
        email: req.body.email,
        password: req.body.password,
        created_at: new Date()
    }
    
    knex('users_details').where("email",req.body.email).then((data)=>{
        if(data[0]){
            res.status(400).json({msg: "user already exits.Please login..."})
        }else{
            knex("users_details").insert(value).then(()=>{
                res.send(req.body)
                console.log("signup success");
            }).catch((err)=>{
                console.log(err);
            })
        }
         
        }
    )       
})



module.exports = router;

