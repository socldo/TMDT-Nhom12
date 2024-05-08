const UserService = require('../services/UserService');
const bcrypt = require('bcryptjs');

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
        console.log(response);
        return resp.status(200).json(response);
    }
    catch(e){
        console.log(e);
        return resp.status(404).json({
            message : e,
        });
    }
}

const checkValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

module.exports = {
    createUser
};