const userRouter = require('./UserRouters');
const router = (app)=>{
    app.use('/api/user', userRouter)
}
module.exports = router;