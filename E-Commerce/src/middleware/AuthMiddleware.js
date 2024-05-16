const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = (req , resp, next) => {
    console.log("check token : ", req.headers.token);
    const token = req.headers.token;
    jwt.verify(token, process.env.ACCESS_TOKEN , function(err , user) {
        if(err){
            return resp.status(404).json({
                message : "The authentication.",
                status : "Error"
            });
        }
        const {payload} = user;
        console.log(user);
        if(payload?.isAdmin){
            next();
        }
        else{
            return resp.status(404).json({
                message : "The authentication.",
                status : "Error"
            });
        }
    })
}

const authUserMiddleware = (req , resp, next) => {
    console.log("check token : ", req.headers.token);
    const token = req.headers.token;
    const userId = req.params.id;
    jwt.verify(token, process.env.ACCESS_TOKEN , function(err , user) {
        if(err){
            return resp.status(404).json({
                message : "The authentication.",
                status : "Error"
            });
        }
        const {payload} = user;
        console.log(user);
        if(payload?.isAdmin || payload.id){
            next();
        }
        else{
            return resp.status(404).json({
                message : "The authentication.",
                status : "Error"
            });
        }
    })
}

module.exports = {
    authMiddleware,
    authUserMiddleware,
}