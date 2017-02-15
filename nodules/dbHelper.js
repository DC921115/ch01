/**
 * 数据库连接文件
 */
const user = 'root', pwd = '123456';    //数据库登陆密码，需要加密。

var mysql = require('mysql');


/**
 * 创建数据库连接对象
 * 连接数据库
 * @param host  数据库主机ip
 * @param port 数据库端口
 * @param database 数据库名称
 * @return {Connection}  数据库连接对象
 */
function connectServer(host, port, database) {
    host = host || 'localhost';
    port = port || 3306;
    return mysql.createConnection({
        host: host,
        port:port,
        user: user,
        password: pwd,
        database: database
    });
}


/**
 * 数据库查询函数
 * @param client  数据库连接对象
 * @param string  数据库查询语句
 * @param callback 回调函数
 */
function selectFun(client, string, callback) {
    client.query(string, function (err,result) {
        if (err)
            throw err;
        callback(result);
    });
}

/**
 * 数据库插入函数
 * @param client  数据库连接对象
 * @param string   数据库插入语句
 * @param data  插入的数据
 * @param callback 回调函数
 */
function insertFun(client,string,data,callback){
        client.query(string,data, function (err, result) {
            callback(err,result);
        });
}

/**
 * 数据库更新函数
 * @param client  连接对象
 * @param string  sql语句
 * @param data    需更新的数据
 * @param callback 回调函数。
 */
function updateFun(client,string,data,callback){
    client.query(string,data, function (err, result) {
        if(err) throw err;
        callback(result);
    })
}

exports.connectServer = connectServer;
exports.selectFun = selectFun;
exports.insertFun = insertFun;