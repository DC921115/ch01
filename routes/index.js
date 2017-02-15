var express = require('express');
var router = express.Router();
var sql = require('../nodules/dbHelper');
var LOG = "AAA"

// 静态常量，数据库查询语句
const SELECT_ALL_NAME = 'select * from person';       //查询所有的
const SELECT_ALL_USERI_ID = 'select pwd from person where userId = ';       //查询所有的账号
const INSERT_USER = 'insert into person value(?,?,?)';

var client = sql.connectServer('192.168.1.6', null, 'test');

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.cookies.islogin) {
        req.session.islogin = req.cookies.islogin;
    }
    if (req.session.islogin) {
        res.locals.islogin = req.session.islogin;
    }
    res.render('index', {title: 'home'});
}).post('/login', function (req, res) {
    var newUser = req.body.user;
    var pwd = req.body.psd;
    var data = {
        resCode: 200,
        msg: "注册成功！"
    }
    console.log(LOG + "====>" + newUser);
    sql.selectFun(client, SELECT_ALL_USERI_ID + '"' + newUser + '"', function (result) {
        if (result && result[0].pwd == pwd) {
            data.resCode = 200;
            data.msg = '登陆成功！';
            //req.session.islogin=req.body.user;
            //res.locals.islogin=req.session.islogin;
            //res.cookie('islogin',res.locals.islogin,{maxAge:60000});
           res.send(data);
        } else if(result[0] == undefined){
            data.resCode = 400;
            data.msg = '该用户不存在！';
            res.send(data);
        }else{
            data.resCode = 400;
            data.msg = "登录失败";
            res.send(data);
        }

    });
}).post('/register', function (req, res) {
    var newUser = req.body.username;
    var name = req.body.name;
    var pwd = req.body.pwd;
    var data = {
        resCode: 200,
        msg: "注册成功！"
    }
    sql.insertFun(client, INSERT_USER, [newUser, name, pwd], function (error, result) {
        if (result) {
            data.resCode = 200;
            data.msg = '注册成功！';
        } else if (error) {
            data.resCode = 400;
            data.msg = '用户已存在！';
        }
        res.send(data);
    });
});


module.exports = router;
