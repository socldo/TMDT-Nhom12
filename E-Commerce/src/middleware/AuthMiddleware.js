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
        if(user?.isAdmin){
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
    const token = req.headers.token.split(' ')[1];
    const userId = req.params.id;
    jwt.verify(token, process.env.ACCESS_TOKEN , function(err , user) {
        if(err){
            return resp.status(404).json({
                message : "The authentication error.",
                status : "Error"
            });
        }
        if(user?.isAdmin || user?.id === userId){
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