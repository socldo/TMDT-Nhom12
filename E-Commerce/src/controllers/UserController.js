const UserService = require('../services/UserService');
const jwtService = require('../services/jwtService');

const createUser = async (req , resp) => {
    try{
        console.log("body", req.body);
        const {name , email , password , confirmPassword , phone} = req.body;
        
        if( !email || !password || !confirmPassword){
            return resp.status(200).json({
                status : 'ERR',
                message : 'Khách hàng phải nhập đầy đủ thông tin.',
            })
        }
        if(!checkValidEmail(email)){
            return resp.status(200).json({
                status : 'ERR',
                message : 'Email không đúng.',
            })
        }
        if(password !== confirmPassword){
            return resp.status(200).json({
                status : 'ERR',
                message : 'Mật khẩu xác nhận phải trùng với mật khẩu muốn đặt.',
            })

        }

        const response = await UserService.createUser(req.body);
        return resp.status(200).json(response);
    }
    catch(e){
        console.log(e);
        return resp.status(404).json({
            message : e,
        });
    }
}

const userSignIn = async (req, resp) => {
    try{
        console.log(req.body);
        const {email , password} = req.body;
        
        if(!email || !password){
           return resp.status(200).json({
                status : 'ERR',
                message : 'Khách hàng phải nhập đầy đủ thông tin.',
            })
        }
        if(!checkValidEmail(email)){
            return resp.status(200).json({
                status : 'ERR',
                message : 'Email không đúng.',
            })
        }
        const response = await UserService.userSignIn(req.body);
        const {refresh_token, ...newResponse} = response
        resp.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict'
        })
        return resp.status(200).json(newResponse);
    }
    catch(e){
        console.log(e);
        return resp.status(404).json({
            message : e,
        });
    }
}

const updateUser = async (req , resp) => {
    try{
        const id = req.params.id;
        
        if(!id){
            return resp.status(500).json({
                status : 'ERR',
                message : 'Yêu cầu userId.',
            })
        }

        const response = await UserService.updateUser(id , req.body);
        return resp.status(200).json(response);
    }
    catch(e){
        console.log(e);
        return resp.status(404).json({
            message : e,
        });
    }
}

const deleteUser = async ( req , resp) => {
    try{
        const id = req.params.id;

        console.log(id);
        if(!id){
            return resp.status(500).json({
                status : 'ERR',
                message : 'Yêu cầu userId.',
            })
        }

        const response = await UserService.deleteUser(id);
        return resp.status(200).json(response);
    }
    catch(e){
        console.log(e);
        return resp.status(404).json({
            message : e,
        });
    }
}

const getAll = async (req , resp) => {
    try{
        const response = await UserService.getAll();
        return resp.status(200).json(response);
    }
    catch(e){
        console.log(e);
        return resp.status(404).json({
            message : e,
        });
    }
}

const getDetail = async (req , resp) => {
    try{
        const id = req.params.id;
        console.log(id);
        const response = await UserService.getUserDetail(id);
        return resp.status(200).json(response);
    }
    catch(e){
        return resp.status(404).json({
            message : e,
        })
    }
}

const refreshToken = async (req , resp) => {
    try{
        const token = req.cookies.refresh_token;
        if(!token){
            resp.status(500).json({
                status : "ERROR",
                message : "The token is required."
            })
        }
        const response = await jwtService.refreshTokenJwtService(token);
        return resp.status(200).json(response);
    }
    catch(e){
        return resp.status(404).json({
            message : e,
        })
    }
}
const logoutUser = async (req , resp) => {
    try{
        resp.clearCookie('refresh_token')
          return resp.status(200).json({
                status: "OK",
                message: "Logout successfully"
            })
    }catch (e) {
        return resp.status(404).json({
            message: e
        })
    }
}
const checkValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

module.exports = {
    createUser,
    userSignIn,
    updateUser,
    deleteUser,
    getAll,
    getDetail,
    refreshToken,
    logoutUser
};