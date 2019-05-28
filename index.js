"use strict";

function poll() {
    one(0, strs[0])
}

function one(n, t) {
    for (var i = JSON.stringify(t), e = JSON.parse(i), s = [], o = 0; o < e.length; o++) s.push(e[o]);
    admin(n);
    new Typed(".element" + JSON.stringify(n), {
        strings: s,
        typeSpeed: 30,
        startDelay: 300,
        showCursor: !1,
        onComplete: function (t) {
            return 0 == n ? void two(0, strs2[0]) : 1 == n ? void two(1, strs2[1]) : 2 == n ? void two(2, strs2[2]) : void 0
        }
    })
}

function two(n, t) {
    for (var i = JSON.stringify(t), e = JSON.parse(i), s = [], o = 0; o < e.length; o++) s.push(e[o]);
    visitor(n);
    new Typed(".element2" + JSON.stringify(n), {
        strings: s,
        typeSpeed: 10,
        startDelay: 100,
        showCursor: !1,
        onComplete: function (t) {
            return 0 == n ? void one(1, strs[1]) : 1 == n ? void one(2, strs[2]) : 2 == n ? void three(3, strs[3]) : void 0
        }
    })
}

function three(n, t) {
    for (var i = JSON.stringify(t), e = JSON.parse(i), s = [], o = 0; o < e.length; o++) s.push(e[o]);
    res(n);
    new Typed(".element" + JSON.stringify(n), {
        strings: s,
        typeSpeed: 30,
        startDelay: 300,
        cursorChar: "❤"
    })
}

function admin(n) {
    $(".tbody").append('<tr>\n                <td>\n                    <div class="box" style="margin:0 auto">\n                        <div class="send2">\n                            <div style="margin:0 10px 0 12px;padding:8px 0 12px 0;">\n                                <span class="element' + JSON.stringify(n) + '" style="font-size:12px;"></span>\n                            </div>\n                            <div class="arrow2"></div>\n                        </div>\n                        <div class="contentDiv2"><img src="/violet.jpg" style="display:block;"></div>\n                    </div>\n                </td>\n            </tr>\n                    ')
}

function visitor(n) {
    $(".tbody").append('\n            <tr>\n                \n                <td>\n                    <div class="box" style="margin:0 auto">\n                        <div class="send">\n                            <div style="margin:0 10px 0 12px;padding:8px 0 12px 0;">\n                                <span class="element2' + JSON.stringify(n) + '" style="font-size:12px;"></span>\n                            </div>\n                            <div class="arrow"></div>\n                        </div>\n                        <div class="contentDiv"><img src="/violet.jpg" style="display:block;"></div>\n                    </div>\n                </td>\n            </tr>\n                ')
}

function res(n) {
    $(".tbody").append('<tr>\n                <td>\n                    <div class="box" style="margin:0 auto">\n                        <div class="send2">\n                            <div style="margin:0 10px 0 12px;padding:8px 0 12px 0;">\n                                <button id="blogbt" onclick="blog()" style="background:rgb(0,0,0,0);border:0px rgb(0,0,0,0)" >\n                                    <span class="element' + JSON.stringify(n) + '" style="font-size:12px;letter-spacing:3px;"></span>\n                                </button>\n                            </div>\n                            <div class="arrow2"></div>\n                        </div>\n                        <div class="contentDiv2"><img src="/violet.jpg" style="display:block;"></div>\n                    </div>\n                </td>\n            </tr>\n                    ')
}

function blog() {
    window.location.href = "blog/"
}

function sleep(n) {
    for (var t = (new Date).getTime();
        (new Date).getTime() - t < n;);
}

function begin() {
    var n = new RainyDay("canvas", "rain", window.innerWidth, window.innerHeight);
    n.gravity = n.GRAVITY_NON_LINEAR, n.trail = n.TRAIL_DROPS, n.VARIABLE_GRAVITY_ANGLE = Math.PI / 8, n.rain([n.preset(0, 2, .5), n.preset(4, 4, 1)], 50)
}
var strs = [],
    strs2 = [];
$("#dfg").click(function () {
   $.get("https://api.tecchen.xyz/api/quote/history/random/", function (n) {
        var n = n.data,
            t = n.content + "\n" + n.translation,
            i = "---- " + n.author;
        strs = [
            ["~欢迎来到渔阳照暖的秘密花园~", "愿你今天有个好的心情~"],
            [t],
            ["还想知道更多关于我的有趣故事吗?"],
            ["❤Enter my little world!"]
        ], strs2 = [
            ["Hi~ o(*￣▽￣*)ブ...喵喵喵!!!", "生命总是充满了惊喜,就像现在..."],
            ["---- 渔阳照暖", "Pull a leg !!!", i],
            ["那就看清楚我要说的下一句话哦 ╰(*°▽°*)╯"]
        ], poll()
    })
}), $(function () {
    document.onkeydown = function (n) {
        var t = n || window.event || arguments.callee.caller.arguments[0];
        t && 13 == t.keyCode && $(".element3").length > 0 && (window.location.href = "blog/")
    }
});