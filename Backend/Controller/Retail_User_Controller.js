const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const Retail_UserModel = require('../Models/Retail_UserModel');
const { use } = require('../Routes/Retail_User_Routes');


const login = async(req,res)=>{
    try {
        console.log(req.body);
        const {email , password} = req.body;
        console.log(email+password)

        if(!email || !password){
            console.log("I am stuck here");
            console.log(email + password);
            return res.status(400).json({errorMessage : "Please Enter the all fields"});
        }
        const user = await Retail_UserModel.findOne({email});

        console.log(user);

        if(!user){
            return res.status(401).json({errorMessage : "Wrong email or password"});
        }

        console.log(password + user.password);
        const passwordCorrect = await bcrypt.compare(password , user.password);

        if(!passwordCorrect){
            return res.status(401).json({errorMessage : "Wrong email or password"});
        }
        const token = jwt.sign({
            user : user._id , 
            email : user.email
        } , process.env.JWT_Secret)

        //send the token in cookie

        return res.cookie("Token" , token , {
            httpOnly : true , 
            sameSite: 'none',
            secure : true,
        }).status(200).send({
            message : "User Logged in Successfully" , 
            user : user
        });
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                errorMessage : error
            })
        }
}

const logout = async(req,res)=>{
    res.cookie("Token" , "" ,{
        httpOnly : true , 
        expires : new Date(0)
    }).send({
        message : "User Logged out successfully"
    });
}


const signup = async(req,res)=>{
    try {

        const user = req.body;
        const {email , password , passwordverify , firstName , lastName , DOB} = user;  
        

        console.log(email + password + passwordverify + firstName)
        
        if(!email || !password || !passwordverify || !firstName || !lastName || !DOB){
            return res.status(400).json({errorMessage : "Please Enter the all fields of the form"});
        }

        if(password.length<6){
            return res.status(400).json({errorMessage : "Please Enter a password of more than 6 characters"});
        }

        if(password !== passwordverify){
            return res.status(400).json({errorMessage : "Please Enter the same password "});
        }
        const users = await Retail_UserModel.findOne({email});

        console.log(users);

        if(users){
            return res.status(400).json({errorMessage : "The account with this email already exits .Please use another email for Signup"});
        }

        //Hash the password

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password , salt);

        // console.log(passwordHash);

        const newUser = new Retail_UserModel({
            email : email , 
            password : passwordHash , 
            firstName : firstName ,
            lastName: lastName ,
            DOB : DOB
        })

        const SavedUser = await newUser.save();

        const token = jwt.sign({
            user : SavedUser._id,
            email : SavedUser.email,
            _id : SavedUser._id,
            count : SavedUser.count,
        } , process.env.JWT_Secret)

        //send the token in cookie

        res.cookie("Token" , token , {
            httpOnly : true , 
        })
        return res.status(200).send({
            message : "Record save successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send();
        
    }
}

const isLoggedin = async(req,res)=>{
    try {

        console.log(req.cookies);
        const token = req.cookies.Token;
        

        if(!token){
            return res.status(401).send({
                message : "Unauthorized access",
            })
        }else{
            try {
                const verifyToken = jwt.verify(token , process.env.JWT_Secret);
                return res.status(200).send({
                    user : verifyToken
                })
            } catch (error) {
                return res.status(401).send({
                    message : "Unauthorized access",
                })
            }
            
        }
        
        //res.send(true);
    } catch (error) {
        return res.status(401).send({
            message : "Unauthorized access",
        })
    }
}


const forgotPassword = async(req,res)=>{
    try {
        const {email} = req.body;
        if(!email){
            res.status(400).send({
                message : "Please enter all fields"
            })
        }
        let user = await Retail_UserModel.findOne({email})
        console.log(user)
        if (!user){
            res.status(400).send({
                message : "Please enter a valid email address which is registered with"+
                "our system"
            })
        }
        const token = jwt.sign({
            user : user._id , 
            email : user.email,
            count : user.count,
        } , process.env.JWT_Secret)

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'muneebwaqas416@gmail.com',
              pass: 'snfg zsiu dtcf krud'
            }
          });
          
          var mailOptions = {
            from: 'muneebwaqas416@gmail.com',
            to: 'muneebwaqas900@gmail.com',
            subject: 'Reset Your Aaron Hakso Chatbot Password',
            text: `http://localhost:5173/reset-password/${user._id}/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              return res.status(200).send({
                message : "Success"
              })
            }
          });

    } catch (error) {
        res.status(400).send({
            message : "A technical error occured please try again"
        })
    }
}

const resetpassword = async(req,res)=>{
    try {
        console.log("I am here")
        const {id , token} = req.params;
        console.log(id)
        console.log(token)
        const {password} = req.body;

        jwt.verify(token , process.env.JWT_Secret , async (err , decoded)=>{
            if(err){
                return res.status(401).json({
                    message : "Error with token"
                })
            }else{
                const salt = await  bcrypt.genSalt();
                const passwordHash = await bcrypt.hash(password , salt);
                Retail_UserModel.findByIdAndUpdate({_id : id} , {password : passwordHash}).then((u)=>{
                    return res.status(200).send({
                        message : "Password Updated sucessfully"
                    })
                }).catch((err)=>{
                    console.log(err)
                    return res.status(500).send({
                        message : "There was a technical error.Please try again"
                    })
                })
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message : error
        })
    }
}

module.exports = {login , logout , signup , isLoggedin , forgotPassword , resetpassword};