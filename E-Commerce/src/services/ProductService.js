const Product = require("../models/ProductModel");
// const jwt = require("./jwtService");
const bcrypt = require('bcryptjs');

const getListProduct = async (req) => {
    console.log(req)
    // const { key_search, type, is_out_of_stock, sort } = newUser;

    try {
        // Check if user with the given email already exists

        // Create a new user document
        const productList = await Product.find();

        if (productList) {
            return {
                status: "OK",
                message: "SUCCESS",
                data: productList
            };
        }
    } catch (error) {
        console.error("Error get list product:", error);
        throw error; // Rethrow the error to be caught by the caller
    }
};

module.exports = {
    getListProduct
};
