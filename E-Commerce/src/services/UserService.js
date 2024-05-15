const User = require("../models/UserModels");
// const jwt = require("./jwtService");
const bcrypt = require('bcryptjs');
const { generalAccessToken , generalRefreshToken} = require("./jwtService");

const createUser = async (newUser) => {
    console.log(newUser)
    const { name, email, password, phone } = newUser;

    try {
        // Check if user with the given email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return {
                status: "ERR",
                message: "Email đã tồn tại"
            };
        }
        // Create a new user document
        const createdUser = await User.create({
            name,
            email,
            password : hashPasswordSync(password),
            phone
        });

        if (createdUser) {
            return {
                status: "OK",
                message: "Đăng ký thành công",
                data: createdUser
            };
        }
    } catch (error) {
        console.error("Error creating user:", error);
        throw error; // Rethrow the error to be caught by the caller
    }
};


const userSignIn = async ({email, password}) => {
    return new Promise(async (resolve , reject) => {
        try{
            const checkUser = await User.findOne({
                email : email,
            })
    
            if(!checkUser){
                resolve({
                    status : "ERR",
                    message : "Email không tồn tại trong hệ thống.",
                })
            }

            const checkPassword = bcrypt.compareSync(password, checkUser.password);
    
            const access_token = await generalAccessToken({
                id : checkUser._id,
                isAdmin : checkUser.isAdmin
            })

            const refresh_token = await generalRefreshToken({
                id : checkUser._id,
                isAdmin : checkUser.isAdmin,
            })

            if(checkUser){
                resolve({
                    id : checkUser._id,
                    status : "OK",
                    message : "Đăng nhập thành công",
                    access_token,
                    refresh_token
                })
            }

            else if(!checkUser){
                resolve({
                    status : "ERR",
                    message : "Mật khẩu không đúng",
                })
            }
        }
        catch(e){
           reject(e);
        }
    })
    
}

const updateUser = (id , data) => {
    return new Promise(async (resolve , reject) => {
        try{
            const checkUser = await User.findOne({
                _id : id,
            })

            if(checkUser){
                const updatedUser = await User.findAndUpdate(id, data , {new : true});
                resolve({
                    status : "OK",
                    message : "Thay đổi thành công.",
                    data : data,
                })
            }

            else if(!checkUser){
                resolve({
                    status : "Failed",
                    message : "id người dùng không tồn tại trong hệ thống.",
                })
            }
        }
        catch(e){
           reject(e);
        }
    })
    
}

const deleteUser = (id) => {
    return new Promise(async (resolve , reject) => {
        try{
            const checkUser = await User.findOne({
                _id : id,
            })

            if(checkUser){
                await User.findOneAndDelete(id, {new : true});
                resolve({
                    status : "OK",
                    message : "Xóa người dùng thành công.",
                })
            }

            else if(!checkUser){
                resolve({
                    status : "Failed",
                    message : "id người dùng không tồn tại trong hệ thống.",
                })
            }
        }
        catch(e){
           reject(e);
        }
    })
}

const getAll = () => {
    return new Promise(async (resolve , reject) => {
        try{
            const allUser = await User.find();
            resolve({
                status : "OK",
                data : allUser
            })
            
        }
        catch(e){
           reject(e);
        }
    })
}

const getUserDetail = (id) => {
    return new Promise(async (resolve , reject) => {
        try{
            const user = await User.findOne({
                _id : id,
            });
            resolve({
                status : "OK",
                data : user
            })
            
        }
        catch(e){
           reject(e);
        }
    })
}
 // Function to hash a password and return the hashed password as a string
const hashPasswordSync = (password) => {
    // Hash the password along with the salt synchronously
    const hashedPassword = bcrypt.hashSync(password, 10);

    return hashedPassword;
};

module.exports = {
    createUser,
    userSignIn,
    updateUser,
    deleteUser,
    getAll,
    getUserDetail,
};

