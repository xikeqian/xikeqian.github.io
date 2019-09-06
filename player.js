var LSS_SITE = "https://j.vzan.cc/zhibo/livecontent/",
    lssPlayerLoad = !1,
    hlsPlayerLoad = !1,
    AODIANPLAY_UUID_BASE = 0;
console.log('start');
function aodianPlayer(a) {
    var l, n, t, o, i, s;
    if ((a = a).container && "" != a.container) if (document.getElementById(a.container)) {
        var e = "<div id='aodianplayer_uid_base" + ++AODIANPLAY_UUID_BASE + "'></div>";
        $("#" + a.container).append(e), a.mediaid = "aodianplayer_uid_base" + AODIANPLAY_UUID_BASE;
        for (var r = navigator.userAgent, d = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], c = !0, p = -1 != navigator.userAgent.toLowerCase().indexOf("micromessenger"), v = 0; v < d.length; v++) if (0 < r.indexOf(d[v])) {
            c = !1;
            break
        }
        if (a.isPc = c, a.videoUrl && "" != a.videoUrl && (a.hlsUrl = a.videoUrl), c && !p || p && a.hlsUrl.indexOf(".mp4") <= -1 && c) {
            if (a.rtmpUrl && "" != a.rtmpUrl) {
                console.log("rtmpUrl");
                var m = /^rtmp\:\/\/(.*)\/([a-z\_\-A-Z\-0-9]*)\/([a-z\_\-A-Z\-0-9]*)(\?k\=([a-z0-9]*)\&t\=\d{10,11})?$/;
                if (!m.test(a.rtmpUrl)) return void("undefined" == typeof console || console.error("rtmp地址格式错误"));
                var y = a.rtmpUrl.match(m);
                a.cname = y[1], a.app = y[2], a.key = "", a.pk = y[4] ? y[4] : "", a.stream = y[3] + a.pk, a.addr = "rtmp://" + a.cname + "/" + a.app, l = (h = "lssplayer") + "Run";
                var u = this;
                n = setInterval(function() {
                    if (1 == lssPlayerLoad) return l in window ? (lssplayerRun.call(u, a), void clearInterval(n)) : void 0;
                    var e = "https://common.xxpie.com/" + h + ".js?v=2019060411",
                        r = document.createElement("script");
                    r.type = "text/javascript", r.charset = "UTF-8", r.src = e, document.getElementsByTagName("body")[0].appendChild(r), lssPlayerLoad = !0, l && l in window && (clearInterval(n), lssplayerRun.call(u, a))
                }, 100)
            } else if (a.hlsUrl && "" != a.hlsUrl) {
                console.log("hlsUrl"), t = (h = "hlsplayer") + "Run";
                u = this;
                o = setInterval(function() {
                    if (1 == hlsPlayerLoad) return t in window ? (hlsplayerRun.call(u, a), void clearInterval(o)) : void 0;
                    var e = "https://common.xxpie.com/" + h + ".js?v=201906041133",
                        r = document.createElement("script");
                    r.type = "text/javascript", r.charset = "UTF-8", r.src = e, document.getElementsByTagName("body")[0].appendChild(r), hlsPlayerLoad = !0, t && t in window && (clearInterval(o), hlsplayerRun.call(u, a))
                }, 100)
            }
        } else if (a.hlsUrl && "" != a.hlsUrl) {
            var h;
            i = (h = "html5player") + "Run";
            u = this;
            console.log(window.sourceurl);
            s = setInterval(function() {
                if (1 == hlsPlayerLoad) return i in window ? (html5playerRun.call(u, a), void clearInterval(s)) : void 0;
                window.sourceurl || (window.sourceurl = "");
                var e = sourceurl + "html5player.js?v=20190418",
                    r = document.createElement("script");
                r.type = "text/javascript", r.charset = "UTF-8", r.src = e, document.getElementsByTagName("body")[0].appendChild(r), hlsPlayerLoad = !0, i && i in window && (clearInterval(s), html5playerRun.call(u, a))
            }, 100)
        } else document.getElementById(a.container).innerHTML += "hlsUrl地址未传递"
    } else "undefined" == typeof console || console.error("container不存在");
    else "undefined" == typeof console || console.error("缺少必要的参数：container")
}
window.aodianPlayer = aodianPlayer;
console.log('execute complete');