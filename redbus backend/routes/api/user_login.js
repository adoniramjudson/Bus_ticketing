var knex = require('../../config/db_connection')
const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require('passport');
const router = express.Router()

// user login
router.post("/login", (req, res) => {
  let a = false;
  let email=    req.body.email
  let password= req.body.password
  let phone_no= req.body.phone_no
  
  knex.select("*").from('users_details').then((data)=>{
    for (i of data){
      if(i.email == email && i.password == password || i.phone_no == phone_no && i.password == password){
        a = true;
        // let's create token for user email.
        let token = jwt.sign({ email: i.email }, 'yousuf',{ expiresIn:"24h" });
        res.cookie("yousuf",token)
        // in decode we have the user token
        let decode= req.headers.cookie
        console.log(decode);
      }
    }
    if (a){
      res.status(200).json({msg: "login success "})
      // console.log("login success");
    }else{
      res.status(401).json({msg: "login your email or your password is wrong "})
      console.log("your email or your password is wrong");
    }
  }).catch((err)=>{
    console.log(err);
  })
})


// router.put("/update",(req,res)=>{
//   var decoded = jwt.verify(req.headers.authorization, 'yousuf');
//       console.log(decoded.email)
//       knex('users_details')
//   .where({ email:decoded.email})
//   .update(req.body).then((data)=>{
//     res.send("update succesfully")
//     console.log("update succesfully");
//   }).catch((err)=>{
//     console.log(err);
//   })
// })


// router.delete("/delete",(req,res)=>{
//   var decoded = jwt.verify(req.headers.authorization, 'yousuf');
//   console.log(decoded.email)
//   knex('users2')
//   .where({email:decoded.email})
//   .del(req.body).then((data)=>{
//     console.log("data deleted succesfully");
//   }).catch((err)=>{
//     console.log(err);

//   })

// })


module.exports = router;