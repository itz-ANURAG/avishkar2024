const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

var data;

const verifyUser = async (req, res, next) => {
    console.log(req.cookies)
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.send({ success: false, massage: "error no token" });
        }
        console.log(token)
        const decoded = await jwt.verify(token, process.env.KEY);
        console.log(decoded);
        if(!decoded){
            console.log("unauthorised");
           return  res.send({success:fasle})
        }
        console.log("succesfull")
        data=decoded;
        next();
    }
    catch(err){
        console.log("error")
        res.json(err);
    }
}

router.get('/', verifyUser, (req, res) => {
    res.send({ success: true , data:data});
})




module.exports = router;