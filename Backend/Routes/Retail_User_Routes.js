// const express = require('express')
// const router = express.Router();


// const {login , logout ,  signup , isLoggedin , forgotPassword , resetpassword} = require('../Controller/Retail_User_Controller')

// const auth = require('../Middleware/auth');

// //login

// router.post('/login' , login)

// //signup


// router.post('/signup' , signup);

// //logout

// router.get('/logout' ,auth ,  logout);

// router.get('/check' , auth , (req,res)=>{
//     //console.log(req.rootuser);
//     res.status(200).send({
//         user : req.rootuser,
//     })
// })

// router.post('/forgot-password' , forgotPassword)

// router.post('/reset-password/:id/:token' , resetpassword);

// router.get('/loggedin' , isLoggedin);



// module.exports = router;