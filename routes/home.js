/**
 * Created by DingChao on 2017/2/15.
 */

var express = require('express');
var router = express.Router();
var sql = require('../nodules/dbHelper');
var LOG = "AAA"


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;