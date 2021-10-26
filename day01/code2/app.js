import express from "express";
import userRouter from './router/user_router.js'

const app = express()

app.use('/api',userRouter)

app.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
})