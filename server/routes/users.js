//set express requires

//
// post('/login', async(req, req) => {
//     try{
//         let user = await User.login(req.body);
//         res.send({...user, password: undefined})

//     }catch(err){
//         resizeBy.status(401).send({message: err.message})

//     }
// })




const express = require('express');
const User = require('../models/users');

const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const users = await User.getAllUsers();
      res.send(users);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

//   .post('/login', async (req, res) => {
//     try {
//       let user = await User.login(req.body);
//       res.send({...user, password: undefined})
//     } catch(err) {
//       res.status(401).send({message: err.message});
//     }
//   })


  
module.exports = router;