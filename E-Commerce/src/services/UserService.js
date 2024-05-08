const User = require("../models/UserModels");


const createUser = async (newUser) => {
    const { name, email, password, phone } = newUser;

    try {
        // Check if user with the given email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return {
                status: "FAILED",
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

const bcrypt = require('bcryptjs');

 // Function to hash a password and return the hashed password as a string
const hashPasswordSync = (password) => {
    // Generate a salt (a random string used in the hashing process)
    const salt = bcrypt.genSaltSync(10); // 10 is the number of salt rounds

    // Hash the password along with the salt synchronously
    const hashedPassword = bcrypt.hashSync(password, salt);

    return hashedPassword;
};


module.exports = {
    createUser
};

