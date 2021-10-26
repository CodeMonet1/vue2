import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    database: 'newboy',//数据库名称
    user: 'root',
    password: 'admin'
})

//默认导出一个支持Promise API 的 pool
export default pool.promise()