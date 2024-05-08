const UserService = require('../services/UserService');

const createUser = async (req , resp) => {
    try{
        console.log(req.body);
        const resp = await UserService.createUser();
        return resp.status(200).json(resp);
    }
    catch(e){
        return resp.status(404).json({
            message : e,
        });
    }
}

module.exports = {
    createUser
};