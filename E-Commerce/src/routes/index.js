const userRouter = require('./UserRouters');
const router = (app)=>{
    app.use('/user', userRouter)
}
module.exports = router;