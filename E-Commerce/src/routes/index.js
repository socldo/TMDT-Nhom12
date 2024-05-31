const userRouter = require('./UserRouters');
const productRouter = require('./ProductRouters');
const router = (app)=>{
    app.use('/user', userRouter);
    app.use('/products', productRouter);
}
module.exports = router;