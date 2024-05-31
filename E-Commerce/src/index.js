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
mongoose.connect(`mongodb://admin:adminmongo_staging%40aloapp.vn@172.16.10.90:27017/fanout_notification_beta?authSource=admin`)
.then(() => {
    console.log("connect success!");
})
.catch((err) => {
    console.log(err);
})



app.listen(port, () => {
    console.log('server is running in port' + port);
})