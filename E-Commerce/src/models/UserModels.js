const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name : {type: String},
        email : {type : String , required : true , unique : true},
        isAdmin : {type: Boolean , default : false , required : true},
        phone : {type : Number , required : true},
        password : {type : String, required : true},
        // access_token : {type: String , required: true},
        // refresh_token : {type: String , require : true}
    },
    {
        timestamps : true,
    }
);
const User = mongoose.model('User', userSchema);
module.exports = User;