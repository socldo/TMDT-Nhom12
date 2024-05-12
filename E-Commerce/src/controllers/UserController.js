const UserService = require('../services/UserService');

const createUser = async (req , resp) => {
    try{
        console.log(req.body);
        const {name , email , password , confirmPassword , phone} = req.body;
        
        if(!name || !email || !password || !confirmPassword || !phone){
            resp.status(200).json({
                status : 'ERR',
                message : 'Khách hàng phải nhập đầy đủ thông tin.',
            })
        }
        if(!checkValidEmail(email)){
            resp.status(200).json({
                status : 'ERR',
                message : 'Email không đúng.',
            })
        }
        if(password !== confirmPassword){
            resp.status(500).json({
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
            resp.status(200).json({
                status : 'ERR',
                message : 'Khách hàng phải nhập đầy đủ thông tin.',
            })
        }
        if(!checkValidEmail(email)){
            resp.status(200).json({
                status : 'ERR',
                message : 'Email không đúng.',
            })
        }
       
        const response = await UserService.userSignIn(req.body);
        return resp.status(200).json(response);
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
        console.log(e);
        return resp.status(404).json({
            message : e,
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
};