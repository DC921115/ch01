
var http = require('http');
var qs = require('querystring');

exports.get = function(url,data,call){
    var content = qs.stringify(data);
    var options = {
        hostname:'114.55.186.15',
        port:80,
        path:url+'?'+content,
        method:'GET'
    };
    var req = http.request(options, function (res) {
        //res.setEncoding('utf8');
        res.on('data', function (chunk) {
            call(chunk);
        });
    });

    req.on('error', function (e) {
        call(e.message);
    });

    req.end();
}

exports.post = function(url,data,call){
    var content = qs.stringify(data);
    var options = {
        hostname:'主机ip',
        port:80,
        path:url+'?'+content,
        method:'POST'
    };
    var req = http.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            call(chunk);
        });
    });

    req.on('error', function (e) {
        call(e.message);
    });

    req.end();
}
