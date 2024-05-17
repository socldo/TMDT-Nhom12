const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const router = require("./routes");
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
dotenv.config();

const app = express();
const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json());
app.use(cookieParser());

router(app);
mongoose.connect(`mongodb+srv://lephilongd6ddt2021:${process.env.MONGO_DB}@cluster0.usoblmf.mongodb.net/`)
.then(() => {
    console.log("connect success!");
})
.catch((err) => {
    console.log(err);
})



app.listen(port, () => {
    console.log('server is running in port' + port);
})