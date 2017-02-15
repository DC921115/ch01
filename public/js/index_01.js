/**
 * Created by DingChao on 2017/2/15.
 */

var doc = document;
var btn = doc.getElementById('commit');
var LOG = "BBB";
var util = new Utils();

btn.onclick = function (e) {
    var user = jQuery('#userId').val();
    var name = jQuery('#name').val();
    var psd = jQuery('#password').val();
    if(util.isEmpty(user)){
        alert("账号为空！");
        return;
    }
    if(util.isEmpty(name)){
        alert("姓名为空！");
        return;
    }
    if(util.isEmpty(psd)){
        alert("密码为空！");
        return;
    }
    var data = {
        username:user,
        name:name,
        pwd:psd
    };
    $.ajax({
        type: "POST",
        url: '/register',
        data: data,
        success: function (res) {
            if(res && res.resCode == 200){
               location.href = "/";
            }else{
                alert(res.msg);
            }
        }
    });
};

$('#login').click(function (e) {
   var userId = $('#log-userId').val();
    var psd = $('#log-password').val();
    if(util.isEmpty(userId)){
        alert("账号为空！");
        return;
    }
    if(util.isEmpty(psd)){
        alert("密码为空！");
        return;
    }
    var data = {
        user:userId,
        psd:psd
    }
    $.ajax({
        type: "POST",
        url: '/login',
        data: data,
        success: function (res) {
            if(res && res.resCode == 200){
                location.href = '/home';
            }else{
                alert(res.msg);
            }
        }
    })
});

$('#reg').click(function (e) {
    $('.login-content').eq(0).css({"display":"none"});
    $('.register').eq(0).css({"display":"block"})
});