import db from '../db/index.js'

//使用ES6的按需导出语法，将getAlluser方法导出去
 export async function getAllUser(req, res) {
try {
    const [rows] = await db.query('select id, student_name, sex,nickname from students')
    res.send({
        status: 0,
        message: '获取用户列表数据成功！',
        data: rows

    })
} catch (error) {
    res.send({
        status: 1,
        message: '获取用户列表数据失败！',
        desc: error.message
    })
}
    
}
