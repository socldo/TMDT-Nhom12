const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generalAccessToken = async (payload) => {
    const accessToken = await jwt.sign({
        payload,
    }, process.env.ACCESS_TOKEN, {expiresIn: '1hh'})
    return accessToken;
}

const generalRefreshToken = async (payload) => {
    const accessToken = await jwt.sign({
        payload,
    }, process.env.REFRESH_TOKEN, {expiresIn: '365d'})
    return accessToken;
}

const refreshTokenJwtService = async (token) => {
    return new Promise(async (resolve, reject) => {
        try{
            console.log('token : ' , token);
            jwt.verify(token , process.env.REFRESH_TOKEN, async (err , user)=>{
                if(err){
                    resolve({
                        status : "ERROR",
                        message : "The authentication."
                    })
                }
                console.log('user', user);
                const {payload} = user;
                const access_token = await generalAccessToken({
                    id : payload?.id,
                    isAdmin : payload?.isAdmin,
                });
                resolve({
                    status : 'OK',
                    message : 'SUCCESS',
                    access_token : access_token,
                })
            });
            
        }
        catch(e){
            reject(e);
        }
    })
}

module.exports = {
    generalAccessToken,
    generalRefreshToken,
    refreshTokenJwtService
}
