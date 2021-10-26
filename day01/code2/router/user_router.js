import express  from "express";

import { getAllUser } from "../controller/user_ctrl.js";
//创建路由对象
const router = new express.Router()
//挂载路由规则
router.get('/user',getAllUser)

export default router