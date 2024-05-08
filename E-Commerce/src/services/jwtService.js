const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generalAccessToken = async (payload) => {
    const  accessToken = await jwt.sign({
        payload,
    } , process.env.ACCESS_TOKEN , {expiresIn : '24h'})
    return accessToken;
}

const generalRefreshToken = async (payload) => {
    const accessToken = await jwt.sign({
            payload,
        } , process.env.REFRESH_TOKEN , {expiresIn : '365d'})
    return accessToken;
}

module.exports = {
    generalAccessToken,
    generalRefreshToken
}
