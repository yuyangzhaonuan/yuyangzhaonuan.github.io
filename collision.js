"use strict";

var oBall = document.querySelector('#dfg');
var body = document.querySelector('.body');
var leftNum = 3; //设置小球每次向左运动的像素值
var topNum = 3; //设置小球每次向下运动的像素值
var leftMax = document.documentElement.clientWidth - oBall.clientWidth; //浏览器窗口宽度减去小球的宽度等于小球能运动到的最大左边位置，下一行代码同理。
var topMax = document.documentElement.clientHeight - oBall.clientHeight;

window.onresize = function () { //当浏览器窗口发生变化时，实时获取浏览器窗口的宽高
    leftMax = document.documentElement.clientWidth - oBall.clientWidth;
    topMax = document.documentElement.clientHeight - oBall.clientHeight;
}
setInterval(function () { //为小球的运动新建一个计时器
    var Left = oBall.offsetLeft + leftNum, //小球每次运动完之后，距离浏览器左边边框的距离：上一次距离边框的距离加上这次运动的距离，下一行代码同理
        Top = oBall.offsetTop + topNum;
    //判断当小球向左移动的位置大于之前限定的最大距离或者小于0时，也就是超出浏览器窗口的左右边框时，
    //使他运动的方向取反leftNum = -leftNum，下面Top的判断同理。
    if (Left >= leftMax) {
        Left = leftMax;
        leftNum = -leftNum;
        //传参数到下面的获取随机颜色的function
        ballBg(oBall, 0, body);
    } else if (Left <= 0) {
        Left = 0;
        leftNum = -leftNum;
        ballBg(oBall, 1, body);
    };
    if (Top >= topMax) {
        Top = topMax;
        topNum = -topNum;
        ballBg(oBall, 2, body);
    } else if (Top <= 0) {
        Top = 0;
        topNum = -topNum;
        ballBg(oBall, 3, body);
    };
    oBall.style.left = Left + 'px';
    oBall.style.top = Top + 'px';

}, 30); //小球每次执行运动的时间

function ballBg(obj, n, obj2) {
    $('#dfg').fadeOut(500, function () {
        $('#dfg').fadeIn()
        if (n === 0) {
            obj.style.backgroundImage = "url(/5.png)";
        } else if (n === 1) {
            obj.style.backgroundImage = "url(/3.png)";
        } else if (n === 2) {
            obj.style.backgroundImage = "url(/5.png)";
        } else if (n === 3) {
            obj.style.backgroundImage = "url(/3.png)";
        }
    })


}