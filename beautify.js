function setQiPaoStyle(e) {
    $("#chat-msglist").find(".msg-content").each(function() {
        var e = $(this);
        if ("msg-content" == e.attr("class").trim() || "msg-content huifu" == e.attr("class").trim()) {
            var t = t || Math.ceil(5 * Math.random()),
            i = "msg-style-" + t,
            o = "qipao-icon-" + t + ".png";
            qipaoIndex = t,
            e.addClass(i);
            $("<div class='qipao-icon'><img src='" + sourceurl + "/livecommon/skin/newyear/images/2018/" + o + "' ></div>").appendTo($(this))
        }
    })
}

function buffer2string(e) {
    return String.fromCharCode.apply(null, new Uint16Array(e))
}

function string2buffer(e) {
    for (var t = new ArrayBuffer(2 * e.length), i = new Uint16Array(t), o = 0, n = e.length; o < n; o++) i[o] = e.charCodeAt(o);
    return t
}

function dropAnimate() {
    var e = [],
    t = document.querySelector(".box");
    if (null != t) {
        t.style.position = "relative";
        for (var i = 0; i < 30; i++) {
            var o = document.createElement("div"),
            n = new Image,
            s = Math.floor(6 * Math.random()) + 1;
            n.src = sourceurl + "/livecommon/skin/newyear/images/2018/newyear" + s + ".png",
            $("body").hasClass("childrenday") && (n.src = sourceurl + "/livecommon/images/children/children-gift" + s + ".png"),
            o.appendChild(n),
            o.classList.add("drop-gift", "drop-gift-" + s);
            var a = Math.random() * t.clientWidth;
            a + n.width > t.clientWidth && (a = t.clientWidth - n.width),
            o.style.left = a + "px",
            o.style.bottom = t.clientHeight + Math.floor(500 * Math.random()) + "px",
            e.push(o),
            t.appendChild(o)
        }
        for (var d = 0; d < e.length; d++) !
        function(t) {
            setTimeout(function() {
                Math.random() > .8 && (e[t].style.left = "-50px"),
                e[t].style.bottom = 0,
                e[t].style.bottom = "-999px"
            },
            1500 * Math.random())
        } (d);
        dropAnimated = !1,
        setTimeout(function() {
            $(".drop-gift").remove(),
            dropAnimated = !0,
            document.body.style.maxWidth = "none"
        },
        5e3)
    }
}

function startDropAnimate(e) {
    if (dropAnimated) {
        zbvd.JubilationKey = zbvd.JubilationKey.length > 0 ? zbvd.JubilationKey: ["恭贺新春", "年年有余", "财源滚滚", "万事大吉", "恭喜发财", "狗年吉祥", "新年快乐", "生意兴隆", "大吉大利", "新年", "年年有", "一帆风顺", "大展宏图", "狗", "新春", "春节", "恭喜", "恭贺"];
        for (var t = zbvd.JubilationKey,
        i = 0; i < t.length; i++) if ( - 1 !== e.indexOf(t[i])) {
            dropAnimate();
            break
        }
    }
}

function setWeddingStyle(e) {
    $("#chat-msglist").find(".msg-content").each(function() {
        var e = $(this);
        if ("msg-content" == e.attr("class").trim() || "msg-content huifu" == e.attr("class").trim()) {
            var t = t || Math.floor(14 * Math.random()) + 1,
            i = "msg-style-" + t,
            o = "animation" + t + ".png";
            weddingIndex = t,
            e.addClass(i);
            $("<div class='wedding-icon'><img class=animation" + t + " src='" + sourceurl + "/weddingNew/image/" + o + "' ></div>").appendTo($(this))
        }
    })
}

function giftDrop(e) {
    if (dropTimer) return void console.log("动画还在");
    var t = document.createDocumentFragment(),
    i = document.createElement("div"),
    o = document.body.clientWidth - 50;
    dropTimer = !0,
    i.classList.add("giftCon");
    for (var n = 1; n < 15; n++) {
        var s = document.createElement("div"),
        a = document.createElement("img"),
        d = Math.ceil(Math.random() * o),
        r = Math.ceil(10 * Math.random()) + 70;
        a.setAttribute("src", sourceurl + "/weddingNew/image/animation" + n + ".png"),
        a.classList.add("animation" + n),
        s.classList.add("drogGift"),
        s.style.cssText = "left:" + d + "px;transform:translate3d(0," + -r + "px,0)",
        s.appendChild(a),
        i.appendChild(s),
        t.appendChild(i)
    }
    document.getElementsByClassName("giftAnimationCon")[0].appendChild(t),
    setTimeout(function() {
        for (var e = document.getElementsByClassName("drogGift"), t = 0; t < e.length; t++) {
            var i = Math.ceil(6 * Math.random()) + 4,
            o = (1.5 * Math.random()).toFixed(1);
            e[t].style.cssText += "transform:translate3d(0,999px,0);transition:transform " + i + "s ease " + o + "s"
        }
    },
    100),
    setTimeout(function() {
        dropTimer = !1,
        document.getElementsByClassName("giftAnimationCon")[0].innerHTML = ""
    },
    9e3)
}

function startGiftDrop(e) {
    if (dropAnimated) for (var t = ["新婚快乐", "早生贵子", "白头偕老", "一生一世", "相亲相爱", "恭喜恭喜", "百年好合", "新婚幸福", "祝福", "新福美满", "恭贺新禧", "幸福快乐", "永结同心"], i = 0; i < t.length; i++) if ( - 1 !== e.indexOf(t[i])) {
        giftDrop();
        break
    }
}

function imReaded(e) {
    recordReaded[e] && $("li[attr-id=" + e + "]").find(".recordingMsg").addClass("isReaded")
}

function rememberImReaded(e) {
    recordReaded[e] || (recordReaded[e] = (new Date).getTime(), localStorage.setItem("recordReaded", JSON.stringify(recordReaded)))
} !
function() {
    function e(e, t) {
        var i = new XMLHttpRequest;
        return "withCredentials" in i ? i.open(e, t, !0) : void 0 !== i ? (i = new XDomainRequest, i.open(e, t)) : i = null,
        i
    }

    function t(e) {}

    function o(e, t, i) {
        if (e.addEventListener) e.addEventListener(t, i, !1);
        else {
            if (!e.attachEvent) throw new Error("not supported or DOM not loaded");
            e.attachEvent("on" + t,
            function() {
                i.call(e)
            })
        }
    }

    function n(e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e.style[i] = t[i])
    }

    function s(e) {
        return e.replace(/.*(\/|\\)/, "")
    }

    function a(e) {
        return - 1 !== e.indexOf(".") ? e.replace(/.*[.]/, "") : ""
    }

    function d(e, t) {
        return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? (propprop = t.replace(/([A-Z])/g, "-$1"), propprop = t.toLowerCase(), document.defaultView.getComputedStyle(e, null)[t]) : null
    }

    function r(e) {
        e.parentNode.removeChild(e)
    }
    window.imgUpload = function(e, t) {
        this._settings = {
            project: "wtWap",
            folder: "temp",
            autoSubmit: !0,
            responseType: !1,
            multiple: "N",
            onChange: function() {},
            onComplete: function(e) {},
            onError: function() {},
            onAllComplete: function() {},
            isPass: function() {
                return ! 0
            }
        },
        this.fileArray = [];
        for (var i in t) t.hasOwnProperty(i) && (this._settings[i] = t[i]);
        if (e.jquery ? e = e[0] : "string" == typeof e && (/^#.*/.test(e) && (e = e.slice(1)), e = document.getElementById(e)), !e || 1 !== e.nodeType) throw new Error("Please make sure that you're passing a valid element");
        "A" == e.nodeName.toUpperCase() && o(e, "click",
        function(e) {
            e && e.preventDefault ? e.preventDefault() : window.event && (window.event.returnValue = !1)
        }),
        "CANVAS" == e.tagName ? this.canvasImg(e) : (e.style.overflow = "hidden", "static" == d(e, "position") && (e.style.position = "relative"), this._button = e, this._input = null, this.createInput())
    },
    imgUpload.prototype = {
        createInput: function() {
            var e = this,
            t = document.createElement("input");
            t.setAttribute("type", "file"),
            t.setAttribute("accept", "image/*"),
            t.setAttribute("onmousedown", "return false"),
            t.setAttribute("name", "file"),
            t.setAttribute("id", "file"),
            "Y" == e._settings.multiple && t.setAttribute("multiple", "multiple"),
            n(t, {
                position: "absolute",
                right: 0,
                bottom: 0,
                opacity: 0,
                margin: 0,
                padding: 0,
                fontSize: "480px",
                cursor: "pointer",
                "z-index": "10",
                filter: "alpha(opacity=0)"
            }),
            o(t, "change",
            function() {
                if (t && "" !== t.value) {
                    var i = s(t.value);
                    if (!i || !/^(jpg|JPG|png|PNG|gif|GIF|bmp|BMP|jpeg|JPEG)$/.test(a(i))) return $(this).popBox({
                        boxTitle: "温馨提示",
                        boxContent: "只支持jpg|JPG|png|PNG|gif|GIF|bmp，请重新选择！",
                        btnType: "confirm",
                        confirmFunction: function() {
                            return ! 1
                        }
                    }),
                    !1;
                    e._settings.autoSubmit && e._settings.isPass() && (e._settings.onChange(), e.submit())
                }
            }),
            this._button.appendChild(t),
            this._input = t
        },
        canvasImg: function(e) {
            var t = dataURLtoBlob(e.toDataURL("image/jpeg"));
            this.send2OSS(t)
        },
        clearInputVal: function() {
            r(this._input),
            this._input = null,
            this.createInput()
        },
        submit: function() {
            var e = this;
            if (e._input.files.length > 1) for (i = 1; i < e._input.files.length; i++) e.fileArray[i - 1] = e._input.files[i];
            this.uploadFile(this._input.files[0]),
            e.clearInputVal()
        },
        uploadElseFile: function() {
            var e = this;
            this.uploadFile(e.fileArray.shift())
        },
        uploadFile: function(i) {
            var o = this,
            n = i,
            s = new FormData;
            imgLoadUrl = "",
            i.size > 10485760 ? ($(document).popBox({
                boxTitle: "温馨提示",
                boxContent: "请选择小于2M的图片",
                btnType: "confirm",
                confirmFunction: function() {}
            }), $(".uploadStatus2").show(), $(".uploadStatus1").hide(), $(".marker").hide()) : function() {
                s.append("Content-Type", i.type),
                s.append("file", n);
                var a = e("POST", "/liveajax/UploadImages");
                a.upload.addEventListener("progress", t, !1),
                a.addEventListener("load",
                function(e) {
                    a.status >= 200 && a.status < 300 || 304 == a.status ? o._settings.onComplete(a.responseText) : alert("Request was unsuccessful:" + a.status),
                    o.fileArray.length > 0 ? o.uploadElseFile() : o._settings.onAllComplete()
                },
                !1),
                a.addEventListener("error",
                function(e) {
                    $(document).popBox({
                        boxContent: "上传失败，请重试。",
                        btnType: "confirm"
                    }),
                    o._settings.onError()
                },
                !1),
                a.addEventListener("abort",
                function(e) {
                    $(document).popBox({
                        boxContent: "上传失败，请重试。",
                        btnType: "confirm"
                    }),
                    o._settings.onError()
                },
                !1),
                a.send(s)
            } ()
        },
        uploadFailed: function() {
            $(document).popBox({
                boxContent: "上传失败，请重试。",
                btnType: "confirm"
            })
        }
    }
} (),
define("jquery.imgUpload",
function() {}),
function(e) {
    e.fn.extend({
        popBox: function(t) {
            function i() {
                switch (e(o).html(t.boxContent), e(n).removeClass("both"), t.btnType) {
                case "confirm":
                    e(n).html(s);
                    break;
                case "cancel":
                    e(n).html(a);
                    break;
                case "both":
                    e(n).addClass("both"),
                    e(n).html(a + s);
                    break;
                default:
                    e(n).html("")
                }
            }
            t = e.extend({
                boxType: "",
                boxContent: "",
                btnType: "",
                confirmName: "确定",
                cancelName: "取消",
                textAlign: "center",
                confirmFunction: function() {}
            },
            t);
            var o = ".pop_content span",
            n = ".pop_bottom",
            s = '<span><a href="javascript:;" class="pop_btn btn_confirm">' + t.confirmName + "</a></span>",
            a = '<span><a href="javascript:;" class="pop_btn btn_cancel">' + t.cancelName + "</a></span>",
            d = '<div class="popBox"><b class="bg"></b><div class="main centerwin"><div class="pop_content';
            "left" == t.textAlign && (d += " alignLeft"),
            d += '"><span></span></div><div class="pop_bottom"></div></div></div>',
            e(".popBox").length > 0 ? (i(), e(".popBox").show()) : (e(d).appendTo("body"), i()),
            e(document).on("click", ".btn_cancel",
            function() {
                e(".popBox").hide()
            }).off("click", ".btn_confirm").on("click", ".btn_confirm",
            function() {
                t.confirmFunction(),
                e(".popBox").hide()
            })
        }
    }),
    e.fn.extend({
        minTipsBox: function(t) {
            function i() {
                e(o).html(t.tipsContent);
                var i = e(o).width() / 2 + 10;
                e(o).css("margin-left", "-" + i + "px")
            }
            t = e.extend({
                tipsContent: "",
                tipsTime: 1
            },
            t);
            var o = ".min_tips_box .tips_content",
            n = 1e3 * parseFloat(t.tipsTime);
            e(".min_tips_box").length > 0 ? (e(".min_tips_box").show(), i(), setTimeout(function() {
                e(".min_tips_box").hide()
            },
            n)) : (e('<div class="min_tips_box"><b class="bg"></b><span class="tips_content"></span></div>').appendTo("body"), i(), setTimeout(function() {
                e(".min_tips_box").hide()
            },
            n))
        }
    })
} (jQuery),
define("jquery.popBox",
function() {}),
Date.prototype.Format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var i in t) new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[i] : ("00" + t[i]).substr(("" + t[i]).length)));
    return e
},
define("livecommon/module/utils", [],
function() {
    var e = {
        symbolFilter: function(e) {
            var t = e;
            return t = t.replace(/\&/g, "&amp;"),
            t = t.replace(/(\u0085)|(\u2028)|(\u2029)/g, ""),
            t = t.replace(/\%/g, "%25"),
            t = t.replace(/\</g, "&lt;"),
            t = t.replace(/\>/g, "&gt;"),
            t = t.replace(/\"/g, "&quot;"),
            t = t.replace(/\'/g, "&#39;"),
            t = t.replace(/\n|\r|(\r\n)/g, "<br/>")
        },
        IsNullOrEmpty: function(e) {
            return void 0 == e || null == e || "" == e
        },
        getCookieHost: function() {
            var e = window.location.host,
            t = e.substr(e.indexOf("."), e.length - e.indexOf("."));
            return t.length <= 4 && (t = "." + e),
            t
        },
        moveToEnd: function(e) {
            var t = e.height(),
            i = e.find(".liveBoxContent").outerHeight();
            e.scrollTop();
            e.scrollTop(i - t + 50)
        },
        moveToEndByOuPai: function(e) {
            var t = e.height(),
            i = e.find("div").outerHeight();
            e.scrollTop();
            e.scrollTop(i - t + 50)
        },
        IsPC: function() {
            return - 1 == navigator.userAgent.indexOf("Mobile")
        },
        IsWeiXinChat: function() {
            return - 1 != navigator.userAgent.toLowerCase().indexOf("micromessenger")
        },
        isWapBrowser: function() {
            var t = navigator.userAgent;
            return ! e.IsNullOrEmpty(t) && !!(null != t.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) && t.indexOf("MicroMessenger") <= -1)
        },
        isMobileQQBrowser: function() {
            var t = navigator.userAgent;
            return !! e.IsNullOrEmpty(t) || !(t.indexOf("MicroMessenger") > -1) && ((t.indexOf("QQBrowser") > -1 || t.indexOf("VivoBrowser") > -1) && t.indexOf("MicroMessenger") <= -1)
        },
        isAndroid: function() {
            var e = navigator.userAgent;
            navigator.appVersion;
            return e.indexOf("Android") > -1 || e.indexOf("Linux") > -1
        },
        IsIOS: function() {
            return /iphone|ipad|ipod|ios/.test(navigator.userAgent.toLowerCase())
        },
        getRandomColor: function() {
            return "#" +
            function(e) {
                return new Array(7 - e.length).join("0") + e
            } ((16777216 * Math.random() << 0).toString(16))
        },
        getDmRandomColor: function() {
            return ["#ff002a", "#007eff", "#00ff00", "#ffc000", "#ffffff"][Math.floor(5 * Math.random())]
        },
        iscommonleveltbs: function() {
            var t = navigator.userAgent;
            return !! e.IsNullOrEmpty(t) || (/TBS\/(\d{6})/gi.test(t) ? parseInt(t.match(/TBS\/(\d{6})/)[1]) > 36849 : !!/MQQBrowser\/(\d.\d)/gi.test(t) && parseFloat(t.match(/MQQBrowser\/(\d.\d)/)[1]).toFixed(1) >= 7.1)
        },
        FormatNum: function(e) {
            return "[object Number]" != Object.prototype.toString.call(e) && (e = parseInt(e)),
            e > 1e4 ? parseFloat(e / 1e4).toFixed(2) + "万": e.toString()
        },
        CustomStartAndEndSubstr: function(e, t, i) {
            return i = i || "...",
            e.length <= 3 ? e: e.substr(0, t - 1) + "..." + e.substr(e.length - 1, 1)
        },
        checkFullScreenFn: function(e) {
            for (var t, i, o, n, s, a = ["webkit", "moz"], d = 0, r = a.length; d < r; d++) {
                var c = a[d] + "RequestFullScreen",
                l = a[d] + "CancelFullScreen";
                "function" == typeof e[c] && (t = c, o = e, s = a[d] + "fullscreenchange"),
                "function" == typeof document[l] && (i = l, n = document)
            }
            return t || "function" != typeof e.msRequestFullscreen || (t = "msRequestFullscreen", o = e),
            t || "function" != typeof e.webkitEnterFullScreen || (t = "webkitEnterFullScreen", o = e),
            i || "function" != typeof document.msExitFullscreen || (i = "webkitExitFullScreen", n = document),
            i || "function" != typeof e.webkitExitFullScreen || (i = "webkitExitFullScreen", n = e),
            {
                requestFn: t,
                requestEl: o,
                cancelFn: i,
                cancelEl: n,
                changeEventName: s
            }
        },
        replaceHtml: function(e) {
            return e = e.replace(/<br>/g, ""),
            e = e.replace(/<br\/>/g, "")
        },
        getQueryString: function(e, t) {
            var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
            o = window.location.search.substr(1).match(i);
            return null != o ? unescape(o[2]) : t || null
        },
        resizeImg: function(e, t, i, o, n, s, a, d) {
            return d = d || 100,
            null == e || void 0 == e || "" == e ? "": (e = e.replace("vzan-img.oss-cn-hangzhou.aliyuncs.com", "i.vzan.cc"), e.indexOf("//i2.vzan.cc/") > -1 && e.indexOf("imageView2") < 0 ? (1 == o && "" != n && void 0 != n && (e = e.replace("i2.vzan.cc", "i2cut.vzan.cc"), e += "?watermark/1/image/" + n + "/gravity/northwest/dx/" + s + "/dy/" + a), e.indexOf("watermark") > -1 ? e += "|": e += "?", t && i && t > 0 && i > 0 ? e = e.replace("i2.vzan.cc", "i2cut.vzan.cc") + "imageMogr2/auto-orient/crop/" + 2 * t + "x" + 2 * i + "!/quality/" + d: t && t > 0 ? e = e.replace("i2.vzan.cc", "i2cut.vzan.cc") + "imageMogr2/auto-orient/thumbnail/" + 2 * t + "x/quality/" + d: i && i > 0 ? e = e.replace("i2.vzan.cc", "i2cut.vzan.cc") + "imageMogr2/auto-orient/thumbnail/x" + 2 * i + "/quality/" + d: t || i || (e = e.replace("i2.vzan.cc", "i2cut.vzan.cc") + "imageMogr2/auto-orient/quality/" + d), e) : e.indexOf("//i.vzan.cc/") > -1 && e.indexOf("imageView2") < 0 ? t && i && t > 0 && i > 0 ? e.replace("i.vzan.cc", "icut.vzan.cc") + "?imageMogr2/auto-orient/crop/" + 2 * t + "x" + 2 * i + "!/quality/" + d: t && t > 0 ? e.replace("i.vzan.cc", "icut.vzan.cc") + "?imageMogr2/auto-orient/thumbnail/" + 2 * t + "x/quality/" + d: i && i > 0 ? e.replace("i.vzan.cc", "icut.vzan.cc") + "?imageMogr2/auto-orient/thumbnail/x" + 2 * i + "/quality/" + d: e: e.indexOf("//i.vzan.cc/") > -1 && e.indexOf("?x-oss-process") < 0 ? (t && t > 0 && i && i > 0 ? e += "?x-oss-process=image/resize,limit_0,m_fill,w_" + t + ",h_" + i + "/format,": i && i > 0 ? e += "?x-oss-process=image/resize,h_" + i + "/format,": t && t > 0 && (e += "?x-oss-process=image/resize,w_" + t + "/format,"), e += "jpeg") : e)
        },
        drawImageByCanvas: function(e, t, i, o) {
            var n = document.createElement("canvas"),
            s = n.getContext("2d"),
            a = 0,
            d = [];
            n.width = e,
            n.height = t,
            i.forEach(function(e, t) {
                "" != e.src && (d[t] = new Image, d[t].src = e.src, d[t].onload = function() { (a += 1) === i.length && d.forEach(function(e, t, a) {
                        "circle" === i[t].shape && (s.save(), s.arc(n.width / 2, n.height / 2, 77, 0, 2 * Math.PI), s.clip()),
                        s.drawImage(e, i[t].x ? i[t].x: 0, i[t].y ? i[t].y: 0, i[t].w ? i[t].w: n.width, i[t].h ? i[t].h: n.height),
                        s.restore(),
                        t === a.length - 1 && "function" == typeof o && o(n.toDataURL("image/jpeg"))
                    })
                })
            })
        }
    };
    return e
}),
define("livecommon/module/redbag", ["livecommon/module/utils"],
function(e, t) {
    function i() {
        if (!/\s+/.test($("#bagAmount").val()) && !/\s+/.test($("#bagMoney").val())) {
            var e = parseInt($("#bagAmount").val()) || 0,
            t = parseFloat($("#bagMoney").val()) || 0,
            i = $("#bagAmount").closest(".line"),
            o = $("#bagMoney").closest(".line"),
            l = $(".service-money"),
            p = $("#authCode").val(),
            u = $("#redbagpresend").prop("checked") ? 1 : 0,
            m = $("#redbagpresendtime").val();
            if (e > 500) return i.addClass("line-error"),
            d.html("最多只能发送500个红包").show(),
            void $("#btnSendRedBag").attr("disabled", "disabled");
            if ("" != p) {
                if (!/^([\u2E80-\u9FFF]|[0-9]|[a-zA-Z]){2,}$/g.test(p)) return i.addClass("line-error"),
                d.html("请输入最少2位红包口令(只能是汉字,字母,数字)").show(),
                void $("#btnSendRedBag").attr("disabled", "disabled");
                i.removeClass("line-error"),
                d.html("").hide()
            }
            c.bagAmount = e,
            c.bagMoney = t,
            e <= 0 ? (i.addClass("line-error"), d.html(a.msg1).show()) : (i.removeClass("line-error"), d.html("").hide());
            var g = 100 * c.bagMoney / (100 * c.bagAmount);
            console.log(g + "_" + n),
            g < n ? (o.addClass("line-error"), d.html(a.msg2).show()) : (o.removeClass("line-error"), d.html("").hide()),
            c.bagServiceMoney = .02 * c.bagMoney,
            r.text(parseFloat(c.bagMoney).toFixed(2)),
            c.bagMoney > 0 && c.bagMoney < s && (o.addClass("line-error"), d.html("红包总金额不能少于" + s + "元").show());
            var v = 0,
            h = 0,
            f = !1;
            1 == u && ("" == m ? d.html("请填写红包发送时间").show() : (v = new Date($("#redbagpresendtime").val().replace(/-/g, "/").replace("T", " ")).getTime(), h = (new Date).getTime(), v - h < 12e4 ? d.html("发送时间至少要提前2分钟").show() : f = !0)),
            c.bagAmount > 0 && c.bagMoney > 0 && g >= n && (1 == u && "" != m && f || 0 == u) && c.bagMoney >= s ? $("#btnSendRedBag").removeAttr("disabled") : $("#btnSendRedBag").attr("disabled", "disabled"),
            $(".service-money em").text(parseFloat(c.bagServiceMoney).toFixed(2)),
            c.bagServiceMoney > 0 ? l.show() : l.hide()
        }
    }
    var o = !1,
    n = .1,
    s = 5,
    a = {
        randomBtn: "改为拼手气红包",
        fixedBtn: "改为普通红包",
        randomText: "金额随机",
        fixedText: "金额固定",
        bagMessage: "",
        msg1: "红包个数不能低于1个",
        msg2: "红包金额不能低于" + n + "元"
    },
    d = $("#msg-tipbar"),
    r = $(".bag-money-show"),
    c = {
        bagAmount: 0,
        bagMoney: 0,
        bagType: 1,
        bagMessage: a.bagMessage,
        bagServiceMoney: 0
    },
    l = {
        Init: function() {
            this.BindEvent()
        },
        BindEvent: function() {
            var t = !1;
            $(".redbaglist .contentwrap").scroll(function() {
                var e = $(".redbaglist .contentwrap"),
                i = e.find(".redbaglist-top").height() + e.find(".info").height() + e.find(".redbag-title").height() + e.find(".redbag-list-wrap").height();
                if ($(".redbaglist .contentwrap").scrollTop() + $(".redbaglist .contentwrap").height() >= .9 * i && !t) {
                    var o = $(".redbaglist .redbag-list"),
                    n = (parseInt(o.attr("pageindex")) || 0) + 1;
                    if (n > parseInt(o.attr("pages"))) return;
                    t = !0,
                    $.post("/live/GetMoreRedBagUsers", {
                        rid: $(".redbaglist").attr("rid"),
                        lastid: $(".redbaglist .redbag-list li:last").attr("id"),
                        pageindex: n
                    },
                    function(i) {
                        if (console.log(n), "" != i && "object" != typeof i) {
                            o.attr("pageindex", (parseInt(o.attr("pageindex")) || 0) + 1),
                            i = JSON.parse(i);
                            var s = juicer(document.getElementById("redbag-user-list").innerHTML, i);
                            e.find(".redbag-list").append(s),
                            t = !1
                        }
                    })
                }
            }),
            $(document).on("click", "#redbagauthcode",
            function() {
                $(this).attr("src", "/live/ValidateCode?v=" + Math.random())
            }).on("click", "#redbagpresend",
            function() {
                $(this).prop("checked") ? $("#redbagpresendtime").closest("li").slideDown("fast") : $("#redbagpresendtime").closest("li").slideUp("fast"),
                i()
            }).on("click", "#redbagfocus",
            function() {
                $("#authCode,#authCodeTip").prop("disabled", !$(this).prop("checked")),
                (zbvd.roleid > 0 || 1 == zbvd.levels) && ($(this).prop("checked") ? ($("#authCode").closest("li").slideDown("fast"), $("#authCodeTip").closest("li").slideDown("fast")) : ($("#authCode").closest("li").slideUp("fast"), $("#authCodeTip").closest("li").slideUp("fast")))
            }).on("click", ".rpna-ul.hongbao,.qianghongbao,.side-tip_rb",
            function() {
                var e = $(this).attr("rid"),
                t = $(this);
                if ("object" == typeof newredbag) return newredbag.newredbagContentApp.GetRedPacketCheck(e),
                void(newredbag.newredbagContentApp.tagelid = t.is(".qianghongbao") ? ".qianghongbao": "");
                $.ajax({
                    type: "POST",
                    url: "/live/GetRedPacketCheck",
                    data: {
                        rid: e
                    },
                    beforeSend: function() {
                        $("#loadingToast").show()
                    },
                    dataType: "json",
                    success: function(i) {
                        if (o = !1, $("#loadingToast").hide(), i && i.isok) i.msg.haspwd ? $(".openredbg .bag-open").data("haspwd", 1).data("redmsgtip", i.msg.redmsgtip).data("hasfocus", i.msg.hasfocus) : $(".openredbg .bag-open").data("haspwd", "").data("redmsgtip", i.msg.redmsgtip).data("hasfocus", i.msg.hasfocus),
                        l.ShowRedBagOpen(i.msg);
                        else switch (i.code) {
                        case "notlogin":
                            window.location = "/live/tvchat-" + zbvd.topicid + "?types=oauths&t=" + Math.random();
                            break;
                        case "topic404":
                        case "redbag404":
                            return void alert(i.Msg);
                        case "over":
                            return void(t.is(".qianghongbao") ? $.post("/live/GetNewRedPacket", {
                                tpid: zbvd.topicid,
                                __RequestVerificationToken: gettoken()
                            },
                            function(t) {
                                t && t.isok ? t.Msg == e ? (l.RedBagIsOver(i), $(".qianghongbao").hide(), $(document).minTipsBox({
                                    tipsContent: "红包抢完了，下次手速要快一点哦^_^",
                                    tipsTime: 1
                                })) : $(".qianghongbao").attr("rid", t.Msg).fadeIn() : (l.RedBagIsOver(i), $(".qianghongbao").hide(), $(document).minTipsBox({
                                    tipsContent: "红包抢完了，下次手速要快一点哦^_^",
                                    tipsTime: 1
                                }))
                            }) : l.RedBagIsOver(i));
                        case "have":
                            t.is(".qianghongbao") ? $.post("/live/GetNewRedPacket", {
                                tpid: zbvd.topicid,
                                __RequestVerificationToken: gettoken()
                            },
                            function(t) {
                                t && t.isok ? t.Msg == e ? (l.ShowRedBagDetail(e), $(".qianghongbao").hide()) : $(".qianghongbao").attr("rid", t.Msg).fadeIn() : (l.ShowRedBagDetail(e), $(".qianghongbao").hide())
                            }) : l.ShowRedBagDetail(e);
                            break;
                        default:
                            alert(i.Msg)
                        }
                    },
                    error: function() {
                        o = !1,
                        $("#loadingToast").hide(),
                        $(document).minTipsBox({
                            tipsContent: "Error",
                            tipsTime: 1
                        })
                    }
                })
            }).on("click", ".bag-open",
            function() {
                var e = $(this).attr("rid");
                if (zbvd.userid) {
                    var t = $(".openredbg .bag-open").data("haspwd"),
                    i = $(".openredbg .bag-open").data("redmsgtip");
                    if ( - 1 == $(".openredbg .bag-open").data("hasfocus")) return void l.OpenRedBag("", e);
                    t ? layer.prompt({
                        title: "请输入红包口令，并确认",
                        formType: 0
                    },
                    function(t, i) {
                        if (layer.close(i), "" == t) return void layer.msg("请输入红包口令");
                        l.OpenRedBag(t, e)
                    }) : l.OpenRedBag("", e);
                    var o = setInterval(function() {
                        var e = $(".layui-layer-prompt .layui-layer-input");
                        1 == e.length && (clearInterval(o), e.removeAttr("placeholder"), void 0 != i && "" != i && e.attr("placeholder", "口令提醒：" + i))
                    },
                    1)
                } else window.location = baseURL + "/live/tvchat-" + zbvd.topicid + "?types=oauths"
            }).on("click", ".lookothers,.news-alert-red-packet.redbag",
            function() {
                if ($(".openredbg").hide(), "object" == typeof newredbag) return void newredbag.newredbagContentApp.lookRedbagDetail($(this).attr("rid"));
                l.ShowRedBagDetail($(this).attr("rid"))
            }).on("click", ".bag-close,.redbaglist,.bag-mask",
            function(e) {
                $(e).is("img") || ($(".openredbg").hide(), $(".redbaglist").hide(), $(".openredbg .bag-open").data("haspwd", "").data("redmsgtip", ""))
            }).on("input", "#bagAmount",
            function() {
                i()
            }).on("input", "#bagMoney,#redbagpresendtime",
            function() {
                i()
            }).on("input", "#bagMessage",
            function() {
                var e = $(this).val();
                e.length > 25 && $(this).val(e.substring(0, 25)),
                i()
            }).on("input", "#authCode",
            function() {
                i()
            }).on("click", "#changeRedType",
            function() {
                c.bagType = 1 == c.bagType ? 0 : 1,
                1 == c.bagType ? ($(".redtype .typemsg").html(a.randomText), $("#changeRedType").html(a.fixedBtn), $(".totalmoney i").show()) : 0 == c.bagType && ($(".redtype .typemsg").html(a.fixedText), $("#changeRedType").html(a.randomBtn), $(".totalmoney i").hide())
            }).on("click", ".redbagbtn,.fahongbao,.icon-user-red-packet,.inputicon.redpacket",
            function() {
                $(".panel-more").hide(),
                $(".sendredbagwin").show()
            }).on("click", ".btn-cancel",
            function() {
                $("#redbagpresend").prop("checked") && ($("#redbagpresend").click(), $("#redbagpresendtime").val("")),
                $(".sendredbagwin").hide()
            }).on("click", "#btnSendRedBag",
            function() {
                i();
                var e = !1;
                if (!e) {
                    $("#loadingToast").show(),
                    c.bagMessage = $("#bagMessage").val() || $("#bagMessage").attr("placeholder");
                    var t = {
                        liveId: zbvd.zbid || 0,
                        topicId: zbvd.topicid || 0,
                        total_fee: parseInt(100 * c.bagMoney),
                        byUserId: parseInt(zbvd.userid) || 0,
                        rtype: c.bagType,
                        focus: -1,
                        nums: c.bagAmount,
                        note: (c.bagMessage || "").replace(/\s/gi, ""),
                        redpwd: ($("#authCode").val() || "").replace(/\s/gi, ""),
                        redmsgtip: ($("#authCodeTip").val() || "").replace(/\s/gi, ""),
                        rptype: $("#redbagpresend").prop("checked") ? 1 : 0,
                        rptime: $("#redbagpresendtime").val(),
                        citys: ($("#scitys").val() || "").replace("所有城市", "").replace(",所有区域", ""),
                        shoperAd: $("#shoper_type_img").attr("src")
                    };
                    e = !0,
                    $.ajax({
                        type: "POST",
                        url: baseURL + "/live/PayCenter",
                        data: t,
                        success: function(e) {
                            if (e && e.isok && null != e.Msg) callPay(e.Msg, t);
                            else {
                                if (e && "001" == e.code) return void(window.location.href = e.Msg);
                                $("#loadingToast").hide(),
                                $(document).minTipsBox({
                                    tipsContent: e.Msg,
                                    tipsTime: 1
                                })
                            }
                        },
                        error: function() {
                            e = !1,
                            $("#loadingToast").hide(),
                            $(document).minTipsBox({
                                tipsContent: "error",
                                tipsTime: 1
                            })
                        }
                    })
                }
            }).on("click", ".tianjia-pic",
            function(t) {
                e.IsWeiXinChat() ? wx.chooseImage({
                    count: 1,
                    success: function(e) {
                        var t = {
                            localId: [],
                            serverId: []
                        };
                        t.localId = e.localIds;
                        t.localId.length;
                        t.serverId = [],
                        function() {
                            wx.uploadImage({
                                localId: t.localId[0],
                                isShowProgressTips: 1,
                                success: function(e) {
                                    t.serverId.push(e.serverId),
                                    $.ajax({
                                        type: "post",
                                        url: "/liveajax/UploadImagesByWx",
                                        data: {
                                            mediaId: e.serverId,
                                            zbid: zbvd.zbid,
                                            tpid: zbvd.topicid,
                                            types: "img",
                                            upType: 1
                                        },
                                        dataType: "JSON",
                                        success: function(e) {
                                            e && e.isok ? $("#shoper_type_img").attr("src", e.filepath) : $(document).minTipsBox({
                                                tipsContent: e.Msg,
                                                tipsTime: 1
                                            })
                                        },
                                        error: function() {
                                            $(document).minTipsBox({
                                                tipsContent: "图片上传错误！",
                                                tipsTime: 1
                                            })
                                        }
                                    })
                                },
                                fail: function(e) {
                                    $(document).minTipsBox({
                                        tipsContent: "图片上传失败！",
                                        tipsTime: 1
                                    })
                                }
                            })
                        } ()
                    }
                }) : $("#pcshoperfileUpload").click()
            }).on("change", "#pcshoperfileUpload",
            function() {
                $.ajaxFileUpload({
                    url: "/liveajax/UploadImagesByWx",
                    secureuri: !1,
                    data: {
                        mediaId: "pcUpload",
                        zbid: zbvd.zbid,
                        tpid: zbvd.topicid,
                        types: "img",
                        upType: 1
                    },
                    fileElementId: "pcshoperfileUpload",
                    dataType: "json",
                    success: function(e, t) {
                        e && e.isok ? $("#shoper_type_img").attr("src", e.filepath) : $(document).minTipsBox({
                            tipsContent: e.Msg,
                            tipsTime: 1
                        })
                    }
                })
            })
        },
        OpenRedBag: function(e, t) {
            if (zbvd.userid) {
                if (!o) {
                    o = !0,
                    $("#loadingToast").show();
                    var i = {
                        zbid: zbvd.zbid || 0,
                        tpid: zbvd.enc_topicid,
                        rid: t,
                        code: e,
                        __RequestVerificationToken: gettoken()
                    };
                    $.ajax({
                        type: "POST",
                        url: "/live/GetRedPacket",
                        data: i,
                        beforeSend: function() {},
                        success: function(e) {
                            o = !1;
                            var t = null;
                            if (e && e.isok) {
                                l.ShowRedBagDetail(i.rid),
                                window.openkey = "",
                                window.lastmsg = "";
                                try {
                                    $(".layui-layer-close").click(),
                                    clearInterval(t)
                                } catch(e) {}
                            } else if ($("#loadingToast").hide(), "抱歉,您已领取了红包！" == e.Msg) $(document).minTipsBox({
                                tipsContent: e.Msg,
                                tipsTime: 3
                            }),
                            l.ShowRedBagDetail(i.rid);
                            else if ("抱歉,红包已抢完" == e.Msg) $(document).minTipsBox({
                                tipsContent: e.Msg,
                                tipsTime: 3
                            }),
                            l.ShowRedBagDetail(i.rid);
                            else if ("shoperAd" == e.Msg) {
                                var n = e.code.split(",");
                                m = 0,
                                layer.open({
                                    title: "商家红包",
                                    shade: .5,
                                    area: ["90%", "225px"],
                                    content: "<img src=" + n[1] + ' style="width:100%; height:120px;" />',
                                    btn: ["等待[" + n[0] + "]", "关闭"],
                                    btn1: function(e, t) {},
                                    btn2: function(e, i) {
                                        clearInterval(t),
                                        $.post("/live/DelRedPacketCache", {
                                            tpId: zbvd.topicid,
                                            uid: zbvd.userid
                                        },
                                        function(e) {})
                                    },
                                    success: function(e, i) {
                                        t = setInterval(function() {
                                            m == n[0] && (clearInterval(t), $(".bag-open").click()),
                                            $(".layui-layer-title").html("商家广告 <font color='red'>" + (n[0] - m) + " 秒</font>"),
                                            $(".layui-layer-btn0").html("等待 [<font color='red'>" + (n[0] - m) + " 秒</font>]"),
                                            m += 1
                                        },
                                        1e3),
                                        $(".layui-layer-dialog .layui-layer-content").css("padding", "10px")
                                    },
                                    cancel: function(e) {
                                        clearInterval(t),
                                        $.post("/live/DelRedPacketCache", {
                                            tpId: zbvd.topicid,
                                            uid: zbvd.userid
                                        },
                                        function(e) {})
                                    }
                                })
                            } else $(document).minTipsBox({
                                tipsContent: e.Msg,
                                tipsTime: 3
                            })
                        },
                        error: function() {
                            o = !1,
                            $("#loadingToast").hide(),
                            $(document).minTipsBox({
                                tipsContent: "请求异常，请重试！",
                                tipsTime: 3
                            })
                        }
                    })
                }
            } else window.location = baseURL + "/live/tvchat-" + zbvd.topicid + "?types=oauths"
        },
        ShowRedBagOpen: function(e) {
            $(".openredbg .bag-photo").attr("src", e.headimgurl),
            $(".openredbg .bag-username").html(e.nickname),
            $(".bag-open").attr("rid", e.id).show(),
            $(".lookothers").attr("rid", e.id).show(),
            $(".bag-bagtype").show(),
            $(".bag-des").html(e.content),
            1 == e.type ? $(".bag-bagtype i").show() : $(".bag-bagtype i").hide(),
            $(".openredbg").show()
        },
        RedBagIsOver: function(e) {
            $(".bag-bagtype").hide(),
            $(".bag-des").html("手慢了，红包派完了"),
            $(".bag-open").hide(),
            $(".openredbg .bag-photo").attr("src", e.headimgurl),
            $(".openredbg").attr("rid", e.id).show(),
            $(".bag-open").attr("rid", e.id),
            $(".lookothers").attr("rid", e.id).show(),
            $(".openredbg .bag-username").html(e.nickname)
        },
        ShowRedBagDetail: function(e) {
            $(".openredbg").hide(),
            $.ajax({
                type: "POST",
                url: "/live/GetRedPacketInfo",
                data: {
                    rid: e
                },
                beforeSend: function() {
                    $("#loadingToast").show()
                },
                dataType: "json",
                success: function(t) {
                    if ($("#loadingToast").hide(), !t || !t.isok) return void alert(t.msg);
                    "null" != !t.mybag && ($(".info-moeny").hide(), $(".info-tips").hide());
                    var i = $(".redbaglist"),
                    o = (t.userinfo, t.redbag);
                    i.find(".bag-photo").attr("src", t.redbag.headimgurl),
                    i.find(".info-name span").html(t.redbag.nickname),
                    1 == t.redbag.rtype ? i.find(".info-name i").show() : i.find(".info-name i").hide(),
                    i.find(".info-moeny span").html(o),
                    i.find(".redbag-title i").html(parseFloat(t.redbag.total_amount / 100).toFixed(2)),
                    i.find(".redbag-title span").html(t.redbag.target_user_count);
                    var n = t.redbag.target_user_count - t.redbag.current_user_count;
                    n > 0 ? i.find(".redbag-title em").html(",还剩" + n + "个").show() : i.find(".redbag-title em").html("").hide(),
                    null != t.mybag && (i.find(".info-moeny span").text(parseFloat(t.mybag.packet_money / 100).toFixed(2)), i.find(".info-moeny").show()),
                    i.find(".info-des").html(t.redbag.content);
                    var s = juicer(document.getElementById("redbag-user-list").innerHTML, t);
                    i.find(".redbag-list").html(s);
                    var a = 0;
                    a = t.redbag.current_user_count <= 20 ? 1 : t.redbag.current_user_count % 20 > 0 ? parseInt(t.redbag.current_user_count / 20) + 1 : t.redbag.current_user_count / 20,
                    i.find(".redbag-list").attr({
                        allcount: t.allcount,
                        pages: a,
                        pageindex: 0
                    }),
                    i.attr("rid", e),
                    i.show(),
                    1 == t.redbag.rtype && t.redbag.target_user_count == t.redbag.current_user_count && t.users.length > 0 && t.redbag.total_amount / t.redbag.target_user_count > 10 && $(".redbag-list li:first div:last").append("<span class='thebest'>手气最佳</span>")
                }
            })
        },
        GetNewRedBag: function() {
            setTimeout(function() {
                $.post("/live/GetNewRedPacket", {
                    tpid: zbvd.enc_topicid,
                    __RequestVerificationToken: gettoken()
                },
                function(e) {
                    e && e.isok && $(".qianghongbao").attr("rid", e.Msg).fadeIn()
                })
            },
            4e3)
        }
    };
    return l
}),
define("livecommon/module/shop", [],
function(e) {
    if ("Shop" != zbvd.tplname) return {};
    window.shopReq = window.shopReq || {};
    var t = {
        Init: function() {
            "" != window.shopReq.bid && this.BindEvent()
        },
        BindEvent: function() {
            $(document).ajaxSuccess(function(e, i, o) {
                for (var n = !0,
                s = ["getSpeak", "GetOnlineNumber", "savefocus"], a = 0; a < s.length; a++) if ( - 1 != o.url.indexOf(s[a])) {
                    n = !1;
                    break
                }
                n && t.log(JSON.parse(i.responseText))
            }),
            $(document).ajaxError(function(e, i, o) {
                t.log([e, i, o]),
                $("#loadingToast").hide()
            }),
            this.loadData(),
            $(document).on("click", ".addshoplink",
            function() {
                $("div#addshopBox").show()
            }),
            $(".shopImg-up").length > 0 && new imgUpload($(".shopImg-up"), {
                onComplete: function(e) {
                    $("#loadingToast").hide(),
                    e = JSON.parse(e),
                    e && e.isok ? ($(".shopImg-up img").attr("src", e.thumbimg), $("#shopImg").attr("hasImg", 1)) : alert(e.msg)
                },
                onChange: function() {
                    $("#loadingToast").show()
                },
                onError: function() {}
            }),
            $("#shopAdd").click(function() {
                var e = $("#shopTitle").val(),
                i = $("#shopPrice").val(),
                o = $("#shopBuyLink").val(),
                n = $("#shopImg").attr("src");
                return e ? i ? i && isNaN(i) ? $(document).minTipsBox({
                    tipsContent: "价格只能填写数字",
                    tipsTime: 1
                }) : o ? isURL(o) ? 1 != $("#shopImg").attr("hasImg") ? $(document).minTipsBox({
                    tipsContent: "请上传商品图片",
                    tipsTime: 1
                }) : void $.ajax({
                    type: "POST",
                    url: "/liveajax/addShop",
                    data: {
                        TopicId: zbvd.topicid,
                        ProductName: e,
                        BuyLinkUrl: o,
                        CurrentPrice: i,
                        PicIds: n
                    },
                    success: function(e) {
                        $(document).minTipsBox({
                            tipsContent: e.Msg,
                            tipsTime: 1
                        }),
                        e && e.isok && ($("div#addshopBox").hide(), t.loadData(), $("#shopTitle,#shopPrice,#shopBuyLink").val(""), $("#shopImg").attr("src", "/livecontent/livecommon/images/img-upload.png"))
                    },
                    error: function() {
                        $(document).minTipsBox({
                            tipsContent: "网络异常",
                            tipsTime: 1
                        })
                    }
                }) : void $(document).minTipsBox({
                    tipsContent: "请输入正确的Url",
                    tipsTime: 1
                }) : $(document).minTipsBox({
                    tipsContent: "购买链接不能为空",
                    tipsTime: 1
                }) : $(document).minTipsBox({
                    tipsContent: "价格不能为空",
                    tipsTime: 1
                }) : $(document).minTipsBox({
                    tipsContent: "商品名称不能为空",
                    tipsTime: 1
                })
            }),
            $(document).on("click", ".icon-shop-del",
            function(e) {
                var i = $(this),
                o = i.data("id"),
                n = i.data("gsps");
                $(document).popBox({
                    boxContent: "确定要从购物车中移除?",
                    btnType: "both",
                    confirmFunction: function() {
                        t.ajaxApiProcess(t.shopApi.deleteGoodsOfCarts, {
                            topicId: zbvd.topicid,
                            sid: shopReq.sid,
                            bid: shopReq.bid,
                            gid: o,
                            gsps: n
                        },
                        function(e) {
                            $("#shopCar").html(parseInt($("#shopCar").html()) - 1),
                            i.closest(".ul_car_shop").remove(),
                            t.processCarList()
                        })
                    }
                })
            }),
            $(document).on("click", ".addvzlink",
            function() {
                t.preventScroll(),
                $("#wzyxBox").show(),
                $(".shop-index-search-bt").click(),
                t.nodeScroll($("#search_pager"),
                function() {
                    t.loadvzyxData(!0)
                })
            }),
            $(document).on("click", ".shop-index-search-bt",
            function() {
                $("#search_pager").data("pi", 1),
                t.loadFlag = !1,
                t.loadvzyxData()
            }),
            $(document).on(ClickOrTap, ".vzyx_sel",
            function(e) {
                var t = $(this).data("id");
                $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active"),
                $.post("/liveajax/VZYXShopOpt", {
                    topicId: zbvd.topicid,
                    Id: t
                },
                function(e) {
                    e && e.isok ? $(document).minTipsBox({
                        tipsContent: "已选择" + $(".vzyx_sel.active").length + "件商品",
                        tipsTime: 1
                    }) : $(document).minTipsBox({
                        tipsContent: e.Msg,
                        tipsTime: 1
                    })
                },
                "json"),
                e.preventDefault()
            }),
            $("#wzyxBox .dianshang-black-mask").click(function(e) {
                $("#wzyxBox").hide(),
                $(".shop-index-input").val(""),
                t.loadData()
            }),
            $(document).on("click", "#shopList ul.look-buy-cell",
            function() {
                var e = $(this).data("url");
                e && 0 == $(this).data("type") && (window.location.href = e)
            }),
            $(document).on("click", "#shopList .look-buy-head,#shopList .look-buy-title,#topShop .dianshang-head,#topShop .dianshang-hudong-title",
            function(e) {
                var i = $(this).closest(".look-buy-cell"),
                o = "1" == i.data("type") && i.data("id");
                o || (o = $(this).closest("#topShop").find(".icon-tui-cart").data("id")),
                o && ($("#loadingToast").show(), t.preventScroll(), $("#yx_shop_intro").find("iframe").attr("src", shopReq.apiAddress + "getGoodsDetail-" + o + ".htm").data("id", o).end().stop().animate({
                    top: "0"
                },
                500,
                function() {
                    $("#yx_shop_intro #shop_intro_box").css({
                        top: "",
                        bottom: 0
                    })
                }))
            }),
            $("#yx_shop_intro iframe").load(function() {
                $("#loadingToast").hide()
            }),
            $("#yx_shop_intro #shop_intro_buy").click(function(e) {
                var t = $("#yx_shop_intro iframe").data("id");
                $(".icon-tui-cart").trigger(ClickOrTap, t)
            }),
            $("#yx_shop_intro #shop_intro_close").click(function(e) {
                t.enabledScroll(),
                $("#yx_shop_intro").animate({
                    top: "100%"
                },
                600).find("#shop_intro_box").css({
                    top: "100%",
                    bottom: ""
                }).end().find("iframe").attr("src", "")
            }),
            $("#div_carList .dianshang-black-mask").click(function(e) {
                $("#div_carList").hide()
            }),
            $(".address_cancle").click(function(e) {
                t.videoOpt(1),
                $("#shop_user_address").hide(),
                $("#shopCar").show(),
                !t.isGoBuy && $("#div_carList").show(),
                t.isGoBuy = !1,
                t.goBuyData = null
            }),
            $(document).on(ClickOrTap, ".icon-buy-cart,.icon-tui-cart",
            function(e, i) {
                if (!zbvd.userid) return $(document).minTipsBox({
                    tipsContent: "请先登录!",
                    tipsTime: 1
                });
                t.ids = null,
                $("#i_byu_num").html("1"),
                $("#shopCar").hide();
                var o = i || $(this).data("id");
                $("#loadingToast").show(),
                t.ajaxApiProcess(t.shopApi.getGoods, {
                    gids: o,
                    wxid: shopReq.sid
                },
                function(e) {
                    $("div.sd-tk-option-infor ul:not(.choose-Num)").remove(),
                    e && e.size > 0 ? (t.goodDetail = e.datas[0], $("#yxShopImg").css("background-image", "url(" + t.goodDetail.img + ")"), $("#yxShopPrice").html(t.goodDetail.price), $("#yxShopInventory").html("库存：" + t.goodDetail.inventory), $("#yxShopChoose").html(""), laytpl($("#yxShopDetailTpl").html()).render(t.goodDetail.specsList,
                    function(e) {
                        $("div.sd-tk-option-infor").prepend(e),
                        $("#yx_shop_detail").show()
                    })) : $(document).minTipsBox({
                        tipsContent: "没有找到对应商品",
                        tipsTime: 1
                    })
                }),
                e.preventDefault()
            }),
            $(document).on(ClickOrTap, "#icon_shop_close",
            function(e) {
                $("#yx_shop_detail").hide(),
                $("ul.live-qiye-nav li.on").data("showcar") && $("#shopCar").show(),
                e.preventDefault()
            }),
            $(document).on(ClickOrTap, "#i_byu_plus",
            function(e) {
                var i = parseInt($("#i_byu_num").html()),
                o = t.getInvetory_detail();
                if (i < o.inventory) {
                    i += 1,
                    $("#i_byu_num").html(i);
                    var n = (o.price * i).toFixed(2);
                    $("#yxShopPrice").html(n)
                } else $(document).minTipsBox({
                    tipsContent: "已超出该商品库存",
                    tipsTime: .8
                });
                e.preventDefault()
            }),
            $(document).on(ClickOrTap, "#i_byu_reduce",
            function(e) {
                var i = parseInt($("#i_byu_num").html()),
                o = t.getInvetory_detail();
                if (i > 1) {
                    i -= 1,
                    $("#i_byu_num").html(i);
                    var n = (o.price * i).toFixed(2);
                    $("#yxShopPrice").html(n)
                }
                e.preventDefault()
            }),
            $(document).on(ClickOrTap, ".sd-option",
            function(e) {
                var i = $(this).data("img"),
                o = parseInt($("#i_byu_num").html());
                i && $("#yxShopImg").css("background-image", "url(" + i + ")"),
                $(this).addClass("sd-option-02").siblings().removeClass("sd-option-02");
                var n = "",
                s = "",
                a = [];
                $(".sd-tk-option-infor-ul .sd-option-all a.sd-option-02").each(function(e, t) {
                    var i = $(t).parent().prev("li").html();
                    n += i + ":" + $(t).html() + ",",
                    a.push($(t).data("id"))
                }),
                n = n.substring(0, n.length - 1),
                $("#yxShopChoose").html("已选：" + n),
                s = a.sort().join("_") + "_";
                for (var d = 0; d < t.goodDetail.invetory_details.length; d++) {
                    var r = t.goodDetail.invetory_details[d];
                    if (r.ids == s) {
                        $("#yxShopPrice").html(o > r.inventory ? r.price: (r.price * o).toFixed(2)),
                        $("#yxShopInventory").html("库存：" + r.inventory),
                        $("#i_byu_num").html(o > r.inventory ? 1 : o);
                        break
                    }
                }
                t.ids = s
            }),
            $(document).on(ClickOrTap, "#addToCar",
            function(e) {
                if (t.getInvetory_detail().inventory <= 0) return $(document).minTipsBox({
                    tipsContent: "该商品库存不足",
                    tipsTime: 1
                });
                if ($(".sd-tk-option-infor-ul:not(.choose-Num)", "#yx_shop_detail").length > 0 && $(".sd-tk-option-infor-ul:not(.choose-Num)", "#yx_shop_detail").length != $(".sd-tk-option-infor-ul:not(.choose-Num) .sd-option-02", "#yx_shop_detail").length) return $(document).minTipsBox({
                    tipsContent: "请选择商品规格",
                    tipsTime: 1
                });
                var i = parseInt($("#i_byu_num").html());
                $("#loadingToast").show(),
                t.ajaxApiProcess(t.shopApi.addCart, {
                    gid: t.goodDetail.id,
                    topicId: zbvd.topicid,
                    sid: shopReq.sid,
                    bid: shopReq.bid,
                    count: i,
                    gsps: t.ids
                },
                function(e) {
                    $("#yx_shop_intro #shop_intro_close").click(),
                    $("#shopCar").html(e.total),
                    $("#yx_shop_detail").hide(),
                    $("ul.live-qiye-nav li.on").data("showcar") && $("#shopCar").show(),
                    $(document).minTipsBox({
                        tipsContent: "该商品已加入到购物车!",
                        tipsTime: .6
                    })
                })
            }),
            $("#go_buy").click(function(e) {
                return t.iswx() ? t.getInvetory_detail().inventory <= 0 ? $(document).minTipsBox({
                    tipsContent: "该商品库存不足",
                    tipsTime: 1
                }) : $(".sd-tk-option-infor-ul:not(.choose-Num)", "#yx_shop_detail").length > 0 && $(".sd-tk-option-infor-ul:not(.choose-Num)", "#yx_shop_detail").length != $(".sd-tk-option-infor-ul:not(.choose-Num) .sd-option-02", "#yx_shop_detail").length ? $(document).minTipsBox({
                    tipsContent: "请选择商品规格",
                    tipsTime: 1
                }) : (t.isGoBuy = !0, t.goBuyData = {
                    gid: t.goodDetail.id,
                    count: parseInt($("#i_byu_num").html()),
                    gsps: t.ids,
                    topicId: zbvd.topicid
                },
                $("#yx_shop_detail").hide(), $("#yx_shop_intro #shop_intro_close").click(), 1 == t.goodDetail.isVirtual ? ($("#shop_area").closest(".admin-tk-link-cell").hide(), $("#shop_detail_address").closest(".admin-tk-link-cell").hide()) : ($("#shop_area").closest(".admin-tk-link-cell").show(), $("#shop_detail_address").closest(".admin-tk-link-cell").show()), void $("#shop_user_address").show()) : $(document).minTipsBox({
                    tipsContent: "请在微信端操作",
                    tipsTime: 1.5
                })
            }),
            $(document).on(ClickOrTap, "#shopCar",
            function(e) {
                if (!zbvd.userid) return $(document).minTipsBox({
                    tipsContent: "请先登录!",
                    tipsTime: 1
                });
                t.preventScroll(),
                t.processCarList(!0),
                e.preventDefault()
            }),
            $("#a_save_address").click(function(e) {
                var i = $("#shop_consignee").val(),
                o = $("#shop_phone").val(),
                n = $("#shop_area").val(),
                s = $("#shop_detail_address").val();
                if (!i) return $(document).minTipsBox({
                    tipsContent: "收货人不能为空",
                    tipsTime: 1
                });
                if (!o || !/^1[3|4|5|7|8]\d{9}$/.test(o)) return $(document).minTipsBox({
                    tipsContent: "手机号码为空或格式有误",
                    tipsTime: 1
                });
                if ($("#shop_area").closest(".admin-tk-link-cell").is(":hidden")) t.placeOrder(null, i, o);
                else {
                    if (!n) return $(document).minTipsBox({
                        tipsContent: "地区不能为空",
                        tipsTime: 1
                    });
                    if (!s) return $(document).minTipsBox({
                        tipsContent: "详细地址不能为空",
                        tipsTime: 1
                    });
                    var a = $("#shop_area_hidden").val().split(",").pop(),
                    d = {
                        bid: shopReq.bid,
                        mobile: o,
                        name: i,
                        addr_info: s,
                        arear_id: a
                    },
                    r = $("#shop_address_aid").val();
                    "" != r && (d.aid = r),
                    t.videoOpt(1),
                    $("#loadingToast").show(),
                    t.ajaxApiProcess(t.shopApi.newOrEditAddress, d,
                    function(e) {
                        $("#shop_address_aid").val(e.aid),
                        t.placeOrder(e.aid)
                    })
                }
            }),
            $(document).on("click", "#shop_payfeiBox #shop_pay_cancle",
            function(e) {
                $(document).popBox({
                    boxContent: "确定要取消支付?",
                    btnType: "both",
                    confirmFunction: function() {
                        $("#shop_payfeiBox,#shop_user_address,#div_carList").hide(),
                        $("#shopCar").show()
                    }
                })
            }),
            $(document).on("click", "#shop_payfeiBox #shop_pay_ok",
            function(e) {
                t.payProcess()
            }),
            $("#a_shop_cal").click(function(e) {
                if (!t.iswx()) return $(document).minTipsBox({
                    tipsContent: "请在微信端操作",
                    tipsTime: 1.5
                });
                if (parseInt($("#span_cal_num").html()) <= 0) return $(document).minTipsBox({
                    tipsContent: "请先选择商品之后再结算",
                    tipsTime: 2
                });
                var i = [],
                o = !0;
                $("#shop_car_list .ul_car_shop li a.active").each(function(e, t) {
                    if ("0" == $(t).data("isvirtual")) return o = !1,
                    !1;
                    var n = $(t).data("id"),
                    s = $(t).data("gsps"),
                    a = $(t).data("count");
                    i.push({
                        gid: n,
                        count: a,
                        gsps: s,
                        topicId: zbvd.topicid
                    })
                }),
                o ? ($("#shop_area").closest(".admin-tk-link-cell").hide(), $("#shop_detail_address").closest(".admin-tk-link-cell").hide()) : ($("#shop_area").closest(".admin-tk-link-cell").show(), $("#shop_detail_address").closest(".admin-tk-link-cell").show(), $("#a_save_address").html($("#shop_address_aid").val() ? "确定": "保存")),
                t.videoOpt(2),
                $("#shop_user_address").show(),
                $("#div_carList").hide()
            }),
            $(document).on(ClickOrTap, "a.a_car_sel",
            function(e) {
                $(this).toggleClass("active"),
                t.processCarList(),
                e.preventDefault()
            }),
            $(document).on(ClickOrTap, "li#not_jiesuan",
            function(e) {
                $(this).children("a").addClass("active").end().siblings().children("a").removeClass("active"),
                t.processCarList(),
                e.preventDefault()
            }),
            $(document).on(ClickOrTap, "li#ok_jiesuan",
            function(e) {
                $(this).children("a").addClass("active").end().siblings().children("a").removeClass("active"),
                $("#shop_car_list,#div_shopcar_bottom").hide(),
                $("#shop_jiesuan_list,#div_shopjisuan_bottom").show(),
                $("#loadingToast").show(),
                t.ajaxApiProcess(t.shopApi.getOrders, {
                    topicId: zbvd.topicid,
                    sid: shopReq.sid,
                    bid: shopReq.bid
                },
                function(e) {
                    $("#loadingToast").hide(),
                    laytpl($("#shopjisuanTpl").html()).render(e.datas || [],
                    function(e) {
                        $("div#shop_jiesuan_list div").remove(),
                        $("div#shop_jiesuan_list").prepend(e)
                    })
                }),
                e.preventDefault()
            }),
            $(document).on("click", "#div_look_orders",
            function(e) {
                window.location.href = shopReq.apiAddress + "buyerCenter?bid=" + shopReq.bid + "&sid=" + shopReq.sid
            }),
            $(document).on("click", ".i_car_num_plus",
            function(e) {
                t.carOpt.call(this, 1)
            }),
            $(document).on("click", ".i_car_num_reduce",
            function(e) {
                t.carOpt.call(this, 2)
            }),
            $("#topShop").click(function() {
                var e = $(this).data("url");
                e && (window.location.href = e)
            }),
            $(".dianshang-black-mask").click(function(e) {
                t.enabledScroll()
            })
        },
        carOpt: function(e) {
            var i = $(this),
            o = i.closest(".ul_car_shop"),
            n = parseInt($(".a_car_sel", o).data("count"));
            if (2 == e && 1 == n) return $(document).minTipsBox({
                tipsContent: "商品数量不能小于1",
                tipsTime: 1
            });
            1 == e ? n += 1 : n -= 1;
            var s = $(".a_car_sel", o).data("id"),
            a = parseFloat($(".a_car_sel", o).data("price")),
            d = $(".a_car_sel", o).data("gsps");
            $("#loadingToast").show(),
            t.ajaxApiProcess(t.shopApi.updateGoodsOfCarts, {
                topicId: zbvd.topicid,
                sid: shopReq.sid,
                bid: shopReq.bid,
                gid: s,
                oldGsps: d,
                newGsps: d,
                count: n
            },
            function(e) {
                $("#loadingToast").hide(),
                $(".look-buy-price", o).html(a * n),
                $(".a_car_sel", o).data("count", n),
                i.siblings(".i_car_num").html(n),
                t.processCarList()
            })
        },
        preventScroll: function() {},
        enabledScroll: function() {},
        larea: null,
        initArea: function() {
            function e(t, i, o) {
                for (var n = 0; n < t.length; n++) t[n].id == i[o.length] && (o.push(n), e(t[n].child || [], i, o))
            }
            zbvd.isadmin || $.post("/liveajax/GetShopAreaList",
            function(i) {
                if (i && i.length > 0) {
                    var o = i;
                    t.larea = new LArea,
                    t.larea.init({
                        trigger: "#shop_area",
                        valueTo: "#shop_area_hidden",
                        keys: {
                            id: "id",
                            name: "name"
                        },
                        type: 1,
                        data: o
                    }),
                    t.ajaxApiProcess(t.shopApi.getAddress, {
                        bid: shopReq.bid
                    },
                    function(i) {
                        if (i.data && i.data.length) {
                            var n = i.data[0];
                            $("#shop_consignee").val(n.truename),
                            $("#shop_phone").val(n.mobile);
                            var s = [];
                            e(o, n.areaIds.split(","), s),
                            t.larea.value = s,
                            $("#shop_area_hidden").val(n.areaIds),
                            $("#shop_area").val(n.areaName),
                            $("#shop_detail_address").val(n.addr_info),
                            $("#shop_address_aid").val(n.id),
                            $("#a_save_address").html("确定")
                        } else $("#a_save_address").html("保存")
                    },
                    function() {})
                }
            },
            "json")
        },
        loadData: function() {
            function e(e) {
                e = e.filter(function(e) {
                    return "" != e.ProductName
                });
                for (var i = 0; i < e.length; i++) if (e[i].IsStick) {
                    t.setShopTop(e[i]);
                    break
                }
                laytpl($("#listTpl").html()).render(e,
                function(e) {
                    $("div#shopList").prepend(e),
                    tabSwiper && tabSwiper.onResize()
                })
            }
            $.post("/liveajax/GetShopList", {
                topicid: zbvd.topicid
            },
            function(i) {
                if (! (i.length <= 0)) {
                    $("div#shopList ul").remove();
                    for (var o = "",
                    n = 0; n < i.length; n++) {
                        var s = i[n];
                        1 == s.Type && (o += s.yxId + ",")
                    }
                    var a = i;
                    t.ajaxApiProcess(t.shopApi.getGoods, {
                        wxid: shopReq.sid,
                        gids: o.substr(0, o.length - 1)
                    },
                    function(t) {
                        for (var i = 0; i < t.datas.length; i++) for (var o = t.datas[i], n = 0; n < a.length; n++) if (a[n].yxId == o.id && 0 == o.status) {
                            a[n].CurrentPrice = o.price,
                            a[n].ProductName = o.name,
                            a[n].PicIds = o.img,
                            a[n].IsSellOut = o.inventory <= 0;
                            break
                        }
                        e(a)
                    },
                    function() {
                        e(a)
                    })
                }
            },
            "json")
        },
        loadFlag: !1,
        loadvzyxData: function(e) {
            if (!t.loadFlag) {
                t.loadFlag = !0;
                var i = $("#search_pager").data("pi") || 1,
                o = $(".shop-index-input").val();
                $("#loadingToast").show(),
                $.post("/liveajax/GetvzyxList", {
                    topicId: zbvd.topicid,
                    searchStr: o,
                    pi: i
                },
                function(n) {
                    if ($("#loadingToast").hide(), 1 == i && $("div#yxSearchList ul").remove(), n && n.hasOwnProperty("isok")) return $(document).minTipsBox({
                        tipsContent: "请求数据失败",
                        tipsTime: 1
                    }); ! n || n.length <= 0 ? (t.loadFlag = !0, !e && $(document).minTipsBox({
                        tipsContent: 1 == i ? "没有搜索到数据": "数据加载完毕",
                        tipsTime: 1
                    }), o ? $("#noshoptip").hide() : $("#noshoptip").show()) : (t.loadFlag = !1, i++, laytpl($("#vzyxlistTpl").html()).render(n,
                    function(e) {
                        $("div#yxSearchList").append(e)
                    }), $("#noshoptip").hide(), $("#search_pager").data("pi", i))
                },
                "json")
            }
        },
        setShopTop: function(e) {
            t.log(e),
            $(".dianshang-head img").attr("src", -1 != e.PicIds.indexOf("</a>") ? $(e.PicIds).attr("href") : e.PicIds),
            $(".dianshang-hudong-title").html(e.ProductName),
            $(".dianshang-price").html(e.CurrentPrice),
            0 == e.Type ? ($("#topShop").data("url", -1 != e.BuyLinkUrl.indexOf("</a>") ? $(e.BuyLinkUrl).attr("href") : e.BuyLinkUrl), $(".icon-tui-cart").hide()) : ($("#topShop").data("url", ""), $(".icon-tui-cart").data("id", e.yxId).show()),
            0 != e.Type && e.IsSellOut || ($(".line-vote").hide(), $("#topShop").show()),
            $("body").addClass("liveshop")
        },
        goodDetail: null,
        ids: "",
        getInvetory_detail: function() {
            if (!t.goodDetail) return {
                price: 0,
                inventory: 0
            };
            var e = null;
            if (t.goodDetail.invetory_details) for (var i = 0; i < t.goodDetail.invetory_details.length; i++) {
                var o = t.goodDetail.invetory_details[i];
                o.ids == t.ids && (e = {
                    price: o.price,
                    inventory: o.inventory
                })
            }
            return e || {
                price: t.goodDetail.price,
                inventory: t.goodDetail.inventory
            }
        },
        getCarList: function(e) {
            t.ajaxApiProcess(t.shopApi.getCarts, {
                topicId: zbvd.topicid,
                sid: shopReq.sid,
                bid: shopReq.bid
            },
            function(t) {
                e && e(t.datas || [])
            })
        },
        processCarList: function(e) {
            function i() {
                var e = {
                    totalPiece: 0,
                    totalPrice: 0
                };
                $("#shop_car_list .ul_car_shop li a.active").each(function(i, o) {
                    var n = $(o).closest(".ul_car_shop").find(".look-buy-price").html();
                    e.totalPiece += 1,
                    e.totalPrice = t.floatAdd(parseFloat(n), e.totalPrice)
                }),
                $("#div_carList,#shop_car_list,#div_shopcar_bottom").show(),
                $("#shop_jiesuan_list,#div_shopjisuan_bottom").hide(),
                $("#div_shopcar_bottom #span_cal_num").html(e.totalPiece + "种商品"),
                $("#div_shopcar_bottom #span_cal_price").html(e.totalPrice.toFixed(2) + "元")
            }
            e ? ($("#loadingToast").show(), t.getCarList(function(e) {
                laytpl($("#shopCarlistTpl").html()).render(e,
                function(e) {
                    $("div#shop_car_list ul").remove(),
                    $("div#shop_car_list").prepend(e),
                    $("#loadingToast").hide()
                }),
                i()
            })) : i()
        },
        placeOrder: function(e, i, o) {
            var n = [];
            t.isGoBuy ? n.push(t.goBuyData) : $("#shop_car_list .ul_car_shop li a.active").each(function(e, t) {
                var i = $(t).data("id"),
                o = $(t).data("gsps"),
                s = $(t).data("count");
                n.push({
                    gid: i,
                    count: s,
                    gsps: o,
                    topicId: zbvd.topicid
                })
            });
            var s = {
                glist: JSON.stringify(n),
                topicId: zbvd.topicid,
                isDirect: !!t.isGoBuy,
                bid: shopReq.bid,
                sid: shopReq.sid
            };
            e && (s.aid = e),
            i && (s.name = i),
            o && (s.mobile = o),
            t.ajaxApiProcess(t.shopApi.checkAndNewOrder, s,
            function(e) {
                $("#shop_payfeiBox #aText").html("总额:￥" + e.data.total_price + (0 != e.data.ship_price ? "(已含运费" + e.data.ship_price + "元)": "")),
                t.oId = e.data.oid,
                $("#shop_payfeiBox").show(),
                t.isGoBuy = !1,
                t.goBuyData = null
            })
        },
        payProcess: function() {
            function e(e, t) {
                "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", i, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", i), document.attachEvent("onWeixinJSBridgeReady", i)) : i(e, t)
            }

            function i(e, t) {
                WeixinJSBridge.invoke("getBrandWCPayRequest", JSON.parse(e),
                function(e) {
                    "get_brand_wcpay_request:ok" == e.err_msg ? ($("#shop_payfeiBox,#shop_user_address").hide(), $("#shop_paySucbox,#div_carList").show(), $("#ok_jiesuan").trigger(ClickOrTap)) : "get_brand_wcpay_request:cancel" != e.err_msg && setTimeout(function() {
                        o(t)
                    },
                    500)
                })
            }

            function o(e) {
                $(document).minTipsBox({
                    tipsContent: "准备付款",
                    tipsTime: 1
                }),
                $.ajax({
                    type: "POST",
                    url: baseURL + "/liveajax/ShoppingPay?t=2",
                    data: e,
                    dataType: "json",
                    success: function(e) {
                        e.isok ? ($("#payqrcode").attr("src", "/live/nt?data=" + e.Msg), $(".QRcodePay").show()) : $(document).minTipsBox({
                            tipsContent: e.Msg,
                            tipsTime: 1
                        })
                    },
                    error: function(e, t, i) {
                        $(document).minTipsBox({
                            tipsContent: "支付失败",
                            tipsTime: 1
                        })
                    }
                })
            }
            $("#loadingToast").show();
            var n = {
                topicId: zbvd.topicid,
                oId: t.oId
            };
            $.ajax({
                type: "POST",
                url: baseURL + "/liveajax/ShoppingPay?t=1",
                data: n,
                success: function(t) {
                    if ($("#loadingToast").hide(), t.isok && null != t.Msg) e(t.Msg, n);
                    else {
                        if (t && "001" == t.code) return void(window.location.href = t.Msg);
                        $(document).minTipsBox({
                            tipsContent: t.Msg,
                            tipsTime: 1
                        })
                    }
                },
                error: function() {
                    $("#loadingToast").hide(),
                    redbagbol = !0,
                    $(document).minTipsBox({
                        tipsContent: "error",
                        tipsTime: 1
                    })
                }
            })
        },
        oId: "",
        floatAdd: function(e, t) {
            var i, o, n;
            try {
                i = e.toString().split(".")[1].length
            } catch(e) {
                i = 0
            }
            try {
                o = t.toString().split(".")[1].length
            } catch(e) {
                o = 0
            }
            return n = Math.pow(10, Math.max(i, o)),
            (e * n + t * n) / n
        },
        videoOpt: function(e) {},
        iswx: function() {
            return - 1 != navigator.userAgent.toLowerCase().indexOf("micromessenger")
        },
        isGoBuy: !1,
        goBuyData: null,
        log: function(e) {
            t.isDebug && console.log(e)
        },
        isDebug: !1,
        nodeScroll: function(e, t) {
            e.scroll(function() {
                nodeScrollTotalHeigth = e[0].scrollHeight,
                nodeScrollTop = e[0].scrollTop,
                nodeHight = e.height(),
                nodeScrollTotalHeigth - nodeScrollTop - nodeHight < 10 && t()
            })
        },
        ajaxApiProcess: function(e, i, o, n) {
            $.post(e, i,
            function(s) {
                return $("#loadingToast").hide(),
                t.log([e, i, s]),
                s ? 200 != s.code ? n ? n(s) : $(document).minTipsBox({
                    tipsContent: s.msg,
                    tipsTime: 1
                }) : void(o && o(s)) : n ? n(s) : $(document).minTipsBox({
                    tipsContent: "请求数据失败",
                    tipsTime: 1
                })
            },
            "json").error(function() {
                n && n()
            })
        },
        shopApi: {
            getGoods: shopReq.apiAddress + "getGoods",
            getGoodsDetails: shopReq.apiAddress + "getGoodsDetails",
            checkAndNewOrder: shopReq.apiAddress + "checkAndNewOrder",
            getAddress: shopReq.apiAddress + "getAddress",
            getOrders: shopReq.apiAddress + "getOrders",
            newOrEditAddress: shopReq.apiAddress + "newOrEditAddress",
            getAreas: shopReq.apiAddress + "getAreas",
            checkOrderStatus: shopReq.apiAddress + "checkOrderStatus",
            getOrderByOid: shopReq.apiAddress + "getOrderByOid",
            addCart: shopReq.apiAddress + "addCart",
            getCarts: shopReq.apiAddress + "getCarts",
            deleteGoodsOfCarts: shopReq.apiAddress + "deleteGoodsOfCarts",
            updateGoodsOfCarts: shopReq.apiAddress + "updateGoodsOfCarts"
        }
    };
    return t
}),
define("livecommon/module/fps", [],
function() {
    var e = [],
    t = 0;
    return {
        init: function(e) {
            window.requestAnimationFrame && this.run()
        },
        getLatestFrames: function(t) {
            var i, o = [];
            for (t = t || 1, i = e.length - 1; i >= 0 && t > 0; i--) o.push(e[i]),
            t--;
            return o
        },
        getFPS: function() {
            var e, t = this.getLatestFrames(10),
            i = t.length,
            o = 0;
            if (0 === i) return 0;
            for (e = 0; e < i; e++) o += t[e];
            return o / i
        },
        run: function() {
            var i = this;
            t || (t = (new Date).getTime()),
            window.requestAnimationFrame(function() {
                var o = (new Date).getTime();
                e.push(1e3 / (o - t)),
                e.length > 500 && e.shift(),
                t = o,
                i.run()
            })
        }
    }
}),
define("livecommon/module/heart", ["livecommon/module/fps"],
function(e) {
    var t = {
        likeAnimationList_qzone: function(e) {
            var i = [],
            o = function(e) {
                i.push(e)
            };
            e = e || {};
            var n, s, a = e.list || [];
            for (n = 0, s = a.length; n < s; n++) o(t.likeAnimationItem_qzone(a[n]));
            return i.push(""),
            i.join("")
        },
        likeAnimationItem_qzone: function(e) {
            var t = [],
            i = function(e) {
                t.push(e)
            };
            return e = e || {},
            t.push('<div class="heart'),
            i(e.special ? "-large": ""),
            t.push(" "),
            i(e.batchId || ""),
            t.push('" id="'),
            i(e.id || ""),
            t.push("\">\n    <div class='heart-inner' style='background-image:url("),
            i(e.background || ""),
            t.push(")'></div>\n</div>"),
            t.join("")
        }
    },
    i = ((new Date).getTime(), 0),
    o = null,
    n = {
        Init: function() {
            e.run(),
            this.BindEvent()
        },
        BindEvent: function() {
            $(".zan-click").on("click",
            function(e) {
                e.stopPropagation(),
                ++i,
                null != o && clearTimeout(o),
                o = setTimeout(function() {
                    $.post("/liveajax/userpraise", {
                        tpid: zbvd.topicid,
                        v: (new Date).getTime()
                    },
                    function(e) {
                        e.isok && (n.fmtNumber(e.Msg), i = 0)
                    })
                },
                300),
                n.playLike({
                    message: {
                        likeCnt: 2,
                        userId: Math.ceil(1e3 * Math.random()),
                        special: !1
                    }
                })
            })
        },
        fmtNumber: function(e) {
            e.toString().length > 4 && (e = e.toString().replace(/^\d+$/g,
            function(e) {
                return (e / 1e4).toFixed(2) + "万"
            })),
            $("#userpraise").html(e)
        },
        loginUinBg: -1,
        likeBox: $(".j-likes-animate-box"),
        likeIdx: 0,
        playLike: function(e) {
            window.TweenMax && this.playLikeAnimation(e.message.likeCnt, e.message.userId, e.message.special)
        },
        playLikeAnimation: function(e, i, o) {
            if (this.curLikeCount > 50) return logger.log("too many likes"),
            void(this.delayLike = {
                cnt: e,
                uid: i,
                special: o
            });
            var n, s, a = this,
            d = "j-like-batch-" + (new Date).getTime(),
            r = [];
            for (e = e || 0, e = Math.min(e, 50), this.delayLike = null, s = 0; s < e; s++)(s + 1) % 10 == 0 && (o = !0),
            n = Math.ceil(12 * Math.random()),
            o ? Math.floor(10 * Math.random()) + 1 : 0,
            r.push({
                id: "j-like-item-" + this.likeIdx++,
                batchId: d,
                special: o,
                background: "https://j.vzan.cc/zhibo/images/flyico/0-" + n + ".png"
            }),
            o = !1;
            r.length > 0 && (this.likeBox.append(t.likeAnimationList_qzone({
                list: r
            })), setTimeout(function() {
                a.startAnimation(d)
            },
            i != zbvd.userid ? 200 : 0), this.curLikeCount += e)
        },
        randomBetween: function(e, t) {
            return e + Math.floor((t - e) * Math.random())
        },
        startAnimation: function() {
            var e = null;
            return function(t) {
                var i = this;
                i.likeBox.find("." + t).each(function(t, o) {
                    setTimeout(function(t) {
                        return function() {
                            var o, n = [];
                            for (o = 0; o < 3; o++) n.push({
                                x: o * i.randomBetween( - 30, 20),
                                y: o * i.randomBetween( - 150, -80)
                            });
                            TweenMax.to(t, 3, {
                                bezier: {
                                    type: "soft",
                                    lazy: !0,
                                    values: n
                                },
                                onComplete: function(t) {
                                    return function() {
                                        e = e ? e.add($(t)) : $(t),
                                        e.size() > 20 && (e.remove(), i.curLikeCount = Math.max(0, i.curLikeCount - e.size()), e = null),
                                        i.delayLike && i.playLikeAnimation(i.delayLike.cnt, i.delayLike.uid, i.delayLike.special)
                                    }
                                } (t),
                                ease: Power1.linear
                            }),
                            TweenMax.fromTo(t, 1.5, {
                                opacity: 1
                            },
                            {
                                opacity: 0,
                                delay: 1,
                                ease: Back.linear
                            })
                        }
                    } (o), 100 * t)
                })
            }
        } ()
    };
    return n
}),
define("livecommon/module/Praise", [],
function(e, t) {
    var i = (new Date).getTime(),
    o = {
        Init: function() {
            this.BindEvent()
        },
        BindEvent: function() {
            o.goJudge(o.clickLovePC, o.clickLoveMO),
            $(".zan-click").on("click",
            function(e) { (new Date).getTime() > i + 200 && (popqueue.push(1, 1, 1), $.post("/liveajax/userpraise", {
                    tpid: zbvd.topicid,
                    v: (new Date).getTime()
                },
                function(e) {
                    e.isok && o.SetTopicPraise(e.Msg)
                })),
                i = (new Date).getTime()
            })
        },
        goJudge: function(e, t) {
            navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? t() : e()
        },
        clickLovePC: function() {
            $(".zan-click").on("mousedown",
            function(e) {
                $(".toolmenu .zan-box i").css("color", "rgb(245, 28, 48)")
            }),
            $(".zan-click").on("mouseup",
            function(e) {
                $(".toolmenu .zan-box i").css("color", "#ff3d03")
            })
        },
        clickLoveMO: function() {
            $(".zan-click").on("touchstart",
            function(e) {
                $(".toolmenu .zan-box i").css("color", "rgb(245, 28, 48)")
            }),
            $(".zan-click").on("touchend",
            function(e) {
                $(".toolmenu .zan-box i").css("color", "#ff3d03")
            })
        },
        SetTopicPraise: function(e, t) {
            var i = $(".zan-num").data("praise");
            if (e > 0 && (i = e, $(".zan-num").data("praise", e)), i.toString().length > 4) {
                var o = $(".zan-num").data("praise");
                null != o && (i = o.toString().replace(/^\d+$/g,
                function(e) {
                    return (e / 1e4).toFixed(2) + "万"
                }))
            }
            $(".zan-num").html(i)
        },
        sendLove: function(e, t, i, o, n) {
            var s = ($(".zan-num").data("praise"), Math.floor(Math.random() * i + 1)),
            a = $(e).children("img").length,
            d = parseInt(Math.random() * t);
            $(e).append("<img class = 'loveimg' src=''>"),
            $(e).children().eq(a).attr("src", "https://j.vzan.cc/zhibo/livecontent/livecommon/images/flash/kawayi" + s + ".png"),
            d < t / 3 && $(".loveimg:last").animate({
                bottom: o,
                opacity: "0",
                left: -d,
                width: 40,
                height: 40
            },
            2500,
            function() {
                $(this).remove()
            }),
            d > 2 * t / 3 && $(".loveimg:last").animate({
                bottom: o,
                opacity: "0",
                left: -d,
                width: 36,
                height: 36
            },
            3500,
            function() {
                $(this).remove()
            }),
            (d >= t / 3 || d <= 2 * t / 3) && $(".loveimg:last").animate({
                bottom: o,
                opacity: "0",
                left: -d,
                width: 32,
                height: 32
            },
            2500,
            function() {
                $(this).remove()
            })
        }
    };
    return o
}),
define("livecommon/module/controls", ["livecommon/module/utils"],
function(e) {
    var t = function(e, t) {
        return ['<div class="auctioncode-fixed-tk" id="alertCodeMain">', , '<div class="base-wrap new-tk tk-mask"></div>', '<div class="tktk auction-bg auction-bj">', "<p>" + e + "</p>", '<div class="erweima"><img src="' + t + '" alt="" /></div>', '<div class="close-button"></div>', "</div>", "</div>"].join("")
    },
    i = {
        popupAuctionQrcode: function() {
            layer.closeAll();
            var t = $(".showAuctionQrcode").data("xcqQRImg");
            if (void 0 == t) {
                $.post("/live/GetMiniQRSrc", {
                    apppage: "pages/auction/index",
                    liveid: zbvd.zbid,
                    query: zbvd.topicid + ",0",
                    pages: 1,
                    ver: (new Date).getDate()
                },
                function(t) {
                    if (t && t.isok) if ("" != t.dataObj.baseimg) {
                        var o = [{
                            src: t.dataObj.baseimg
                        },
                        {
                            src: t.dataObj.logoimg,
                            x: 95,
                            y: 95,
                            w: 153,
                            h: 153,
                            shape: "circle"
                        }];
                        e.drawImageByCanvas(344, 344, o,
                        function(e) {
                            $(".showAuctionQrcode").data("xcqQRImg", e),
                            i.popupCode("进入小程序参与竞拍，体验0延迟", e)
                        })
                    } else $(".showAuctionQrcode").data("xcqQRImg", t.Msg),
                    i.popupCode("进入小程序参与竞拍，体验0延迟", t.Msg)
                },
                "json")
            } else i.popupCode("进入小程序参与竞拍，体验0延迟", t)
        },
        popupCode: function(e, i) {
            $("#alertCodeMain").remove(),
            $("body").append(t(e, i)),
            $(".close-button,.tk-mask").on("click",
            function() {
                $("#alertCodeMain").remove()
            })
        },
        popupMiniCode: function(t) {
            var i = '<p style="text-align: center;padding: 12px 0px 6px 0px;color: #353535;font-size: 14px;">长按识别小程序码看直播</p><img src=\'' + t + "' width='250px' height='250px' style='margin:0px 20px;' /><p style=\"text-align: center;padding: 0px 0px 16px 0px;color: #353535;font-size: 14px;\"><img src=\"//j.vzan.cc/zhibo/livecontent/img/miniQRksIcon.png\" style=\"width:16px;height:20px;\" /> 直播观看更便捷，更流畅</p>";
            e.IsPC() && (i = '<p style="text-align: center;padding: 12px 0px 6px 0px;color: #353535;font-size: 14px;">扫描小程序二维码看直播</p><img src=\'' + t + "' width='250px' height='250px' style='margin:0px 20px;' /><p style=\"text-align: center;padding: 0px 0px 16px 0px;color: #353535;font-size: 14px;\"><img src=\"//j.vzan.cc/zhibo/livecontent/img/miniQRksIcon.png\" style=\"width:16px;height:20px;vertical-align:middle;\" /> 请使用微信扫描二维码</p>"),
            layer.open({
                type: 1,
                anim: 5,
                title: !1,
                shadeClose: !0,
                closeBtn: 0,
                content: i
            }),
            "function" == typeof ShowCloseCode && ShowCloseCode()
        }
    };
    return i
}),
window.videoW = 0,
window.videoH = 0,
window.fswinH = screen.height,
window.fswinW = screen.width,
window.normalwinH = window.innerHeight,
window.calvideoH = 0,
window.vduration = 0,
window.nextSeekTime = -1,
define("livecommon/module/wxvideoplayer", ["livecommon/module/utils"],
function(e) {
    function t(e) {
        if (!e || e == 1 / 0) return "00:00";
        var t = parseInt(e / 60),
        i = parseInt(e % 60),
        o = 0;
        return t >= 60 && (o = parseInt(e / 3600), t -= 60 * o),
        t = t >= 10 ? t: "0" + t,
        i = i >= 10 ? i: "0" + i,
        o = o >= 10 ? o: "0" + o,
        o > 0 ? o + ":" + t + ":" + i: t + ":" + i
    }

    function i() {
        return null != m ? "Infinity" == m.duration && Number(m.currentTime) ? Number(m.currentTime).toFixed(4) : Number(m.duration) ? Number(m.duration).toFixed(4) : 0 : 0
    }

    function o() {
        return null != m && m.currentTime != 1 / 0 && m.currentTime != -1 / 0 && Number(m.currentTime) ? Number(m.currentTime).toFixed(4) : 0
    }

    function n() {
        viewtimes++;
        var e = sessionStorage.getItem("redbagtimings");
        if (null != e) {
            var t = e.split(",");
            null != t && t.length > 0 && t.indexOf(viewtimes + "") > -1 && (console.log("reward=" + viewtimes), timingredbag && timingredbag.checkTimingRedbag(viewtimes))
        } else viewtimes = 0,
        clearInterval(v)
    }

    function s() {
        var e = $(".progress"),
        n = e.find(".p-dot"),
        s = e.find(".p-play"),
        a = (Number(e.width() - n.width()), Number(e.width())),
        d = (n.width(), t(o())),
        c = t(i());
        if (!p) {
            var l = o() / i(),
            u = a * l;
            n.css("left", u - 15 + "px"),
            s.css("width", u + "px")
        }
        $(".time-current").html(d),
        $(".time-duration").html(c),
        r.LimitFreeView()
    }

    function a(e) {
        e = e || 6,
        null != b && (clearTimeout(b), b = null),
        b = setTimeout(function() {
            r.HideIconOrControls(),
            w = !1
        },
        1e3 * e)
    }
    var d, r = this,
    c = e.IsPC(),
    l = $(".loading-box"),
    p = !1,
    u = !0,
    m = null,
    g = null,
    v = null,
    h = null,
    f = null,
    b = null,
    w = !0,
    b = null,
    y = null,
    k = null,
    _ = 0;
    r.IsWeChat = e.IsWeiXinChat(),
    r.hostname = window.location.host,
    r.UseNewX5Player = !e.isMobileQQBrowser() || e.isWapBrowser() && ("Vertical" != zbvd.tplname || 0 == zbvd.IsScreen),
    r.isloading = !1,
    r.isgetstatusloading = !1,
    r.outsetAd = null,
    r.pauseAd = null,
    r.liveinfo = null,
    r.adUrl = "",
    r.isPlayAd = !1,
    r.playAdType = "",
    r.AdCountDownTimer = null,
    r.isPlayAded = !1,
    r.LimitFreeViewTimes = 0,
    r.viewtimes = 0,
    r.isBindEvent = !1,
    r.IsChangeUrl = !1,
    r.HideIconOrControls = function() {
        $("#videoPlayer video").length > 0 && (w = !1, $(".icon-back-index,.icon-refresh,.refresh-page").hide(), "1" == $(".btnShowMiniAppIcon").data("isopen") && $(".btnShowMiniAppIcon").hide(), $(".controls").hide())
    },
    r.ShowIconOrControls = function() {
        w = !0,
        $(".icon-back-index,.icon-refresh,.refresh-page").show(),
        "1" == $(".btnShowMiniAppIcon").data("isopen") && $(".btnShowMiniAppIcon").show(),
        $("#videoPlayer video").length > 0 && (0 == $("#div_live_status").length || $("#div_live_status").is(":hidden") || r.isPlayAd) && $(".controls").show(),
        r.LimitFreeViewTimes > 0 && r.LimitFreeViewTimes && $(".controls").show()
    },
    r.CheckVideoIsExitfullscreen = function() {
        return console.log("CheckVideoIsExitfullscreen"),
        !1
    },
    r.HideLoadingBox = function() {
        l.is(":hidden") ? clearInterval(h) : h = setInterval(function() {
            l.hide()
        },
        800)
    },
    r.GetLiveStatus = function() {
        if (r.isgetstatusloading) return ! 1;
        r.isgetstatusloading = !0,
        $.post("/liveajax/GetTopicStatus", {
            tpid: r.liveinfo.tpid
        },
        function(e) {
            if (e && e.isok) {
                var t = e.dataObj;
                if (t) if (1 == t.status)"notsignal" == r.liveinfo.livestatus && t.playurl && (l.find("p").text("正在加载实时直播"), 1 != parseInt(r.liveinfo.isScreen) && setTimeout(function() {
                    layer.msg("正在加载实时直播")
                },
                12e3)),
                "beginning" != r.liveinfo.livestatus && "" != t.playurl && setTimeout(function() {
                    r.liveinfo.livestatus = "beginning",
                    r.liveinfo.playurl = t.playurl,
                    r.startPlay(!1, !0)
                },
                12e3);
                else if ((0 == t.status || -1 == t.status) && "beginning" == r.liveinfo.livestatus) {
                    var i = 7e3;
                    r.liveinfo.playbackurl = t.playurl,
                    t.playurl ? (i = 12e3, $(".new-count-down.vertical-countdown").css("top", "31%"), l.find("p").text("直播暂停中，观看回放"), 1 != parseInt(r.liveinfo.isScreen) && setTimeout(function() {
                        layer.msg("直播暂停中，正在加载实时回放")
                    },
                    i)) : ($(".vertical-view .fsl-bg").css("background", "url(" + r.liveinfo.cover + ") center no-repeat #000"), $(".video-poster").attr("src", r.liveinfo.cover), l.find("p").text("正在加载")),
                    setTimeout(function() {
                        r.liveinfo.livestatus = "notsignal",
                        r.startPlay()
                    },
                    i)
                }
            }
            r.isgetstatusloading = !1
        })
    },
    r.startPlay = function(t, i) {
        if (r.liveinfo.playurl.indexOf(".mp4") <= -1 && r.IsWeChat && c) return ! 1;
        if (null != r.AdCountDownTimer && (clearTimeout(r.AdCountDownTimer), r.AdCountDownTimer = null), $(".plan-name").empty().html($(".plan-name").data("qrname")), r.isPlayAd && "outsetad" == r.playAdType && r.SetAdViewedCookie(), r.isPlayAd = !1, window.videoW = 0, $(".vertical-new-btns").hide(), $(".vertical-new-countdown").hide(), $("#videoPlayer").css("height", "auto"), $("#liveVideo").css("height", $(".video-poster").height() + "px"), "notbegin" == r.liveinfo.livestatus || "notsignal" == r.liveinfo.livestatus || "endlive" == r.liveinfo.livestatus) {
            $("#div_live_status").show();
            var o = "",
            n = "";
            "notsignal" == r.liveinfo.livestatus && ($("#div_live_status").addClass("new-count-down"), !t && r.pauseAd.isOpen && "" != r.pauseAd.videolink && (r.isPlayAd = !0, o = r.pauseAd.videolink)),
            !o && r.liveinfo.playbackurl ? (n = "直播暂停中，观看回放", o = r.liveinfo.playbackurl) : t && "" == o ? (m.pause(), $("#videoPlayer").empty(), $("#videoPlayer").css({
                width: "100%",
                height: "auto"
            })) : t && (m.pause(), $("#liveVideo").hide(), $("#liveVideo").attr("src", ""), $("#videoPlayer").css({
                width: "100%",
                height: "auto"
            }), setTimeout(function() {
                r.HideLoadingBox()
            },
            1500)),
            n || (n = 1 != parseInt(r.liveinfo.isScreen) ? "主播暂时不在，稍后再来": "endlive" == r.liveinfo.livestatus ? "直播已结束，请稍后观看回放": "直播暂停中，稍后再来"),
            "notsignal" == r.liveinfo.livestatus && $("#div_live_status").html(n),
            r.ShowIconOrControls(),
            $(".controls").hide(),
            "" != o ? ($("#videoPlayer video").attr("src", o), $("#videoPlayer video").css("width", $("#LiveVideoArea").width()), r.IsChangeUrl = !0, $("#playbtn").show(), e.IsIOS() || r.UseNewX5Player || ($("body").addClass("wxfs"), r.CheckVideoIsExitfullscreen()), m.play()) : ($("#liveVideo").length > 0 && (m.pause(), $("#liveVideo").remove(), console.log("liveVideo-remove"), $("body").css("overflow-y", "auto"), $("body").removeClass("tbsfs wxfs"), x.ReMakePage("normal"), 0 == parseInt(r.liveinfo.isScreen) && ($("#div_live_status").css("z-index", "2").show(), $("#livePoster").css("height", document.body.clientHeight + "px").show())), "0" != r.liveinfo.isScreen && ($(".videoPoster").length > 0 ? ($(".videoPoster").show(), $(".videoPoster #livePoster").show()) : $(".video-poster").length > 0 && $(".video-poster").show()), $(".videoPoster #playbtn,.controls").hide(), $("#videoPlayer").css({
                width: "100%",
                height: "auto"
            }), $(".vertical-new-btns").show(), setTimeout(function() {
                r.HideLoadingBox()
            },
            1500), $(".plan-name").css("padding-right", "0px")),
            $("#videoPlayer").css("height", "auto")
        } else if ("playback" == r.liveinfo.livestatus || "smallvideo" == r.liveinfo.livestatus || "videosrc" == r.liveinfo.livestatus) setTimeout(function() {
            r.HideLoadingBox()
        },
        1500),
        $("#videoPlayer video").attr("src", r.liveinfo.playurl),
        $(".controls .progress .p-play").css("width", "0px"),
        $(".controls .progress .p-dot").css("left", "-1.5rem"),
        r.IsChangeUrl = !0,
        m.currentTime = 0,
        l.show(),
        setTimeout(function() {
            m.play()
        },
        1500);
        else if ("beginning" == r.liveinfo.livestatus) {
            var s = 1e3,
            a = !1;
            if ($("#videoPlayer video").length > 0) {
                var d = m.src.indexOf("?") > -1 ? m.src.substring(0, m.src.indexOf("?")) : m.src,
                p = r.liveinfo.playurl.indexOf("?") > -1 ? r.liveinfo.playurl.substring(0, r.liveinfo.playurl.indexOf("?")) : r.liveinfo.playurl;
                if (d == p) return ! 1;
                window.videoW = 0,
                $("#videoPlayer video").attr("src", r.liveinfo.playurl),
                e.IsIOS() || r.UseNewX5Player ? (m.play(), s = 100) : (s = 100, $("body").addClass("wxfs")),
                a = !$("#videoPlayer video").is(":hidden"),
                a && $("#livePoster").hide(),
                r.IsChangeUrl = !0
            } else {
                var u = r.UseNewX5Player ? "h5-page": "h5",
                g = "<video x5-video-player-type='" + u + "' x5-video-player-fullscreen='true'  class='video' preload='auto' id='liveVideo' type='application/x-mpegURL' poster='" + r.liveinfo.cover + "'  src='" + r.liveinfo.playurl + "' style='display:none;width:100%;' playsinline  webkit-inline='true'  webkit-playsinline x-webkit-airplay='allow'></video>";
                $(".videoPoster").length <= 0 && (g += "<div class='videoPoster'>", g += "<img id='playbtn' style='top: 50%;left: 50%;-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);position: absolute;cursor:pointer;display:none;' src='//j.vzan.cc/zhibo/img/play.png' width='80px'>", g += "<img src='" + r.liveinfo.cover + "' style='cursor:pointer;border:0;width:100%;' id='livePoster' />", g += "</div>"),
                $("#videoPlayer").prepend(g),
                $(".video-poster").hide(),
                $(".vertical-new-countdown").hide(),
                setTimeout(function() {
                    m = null,
                    m = document.getElementById("liveVideo"),
                    f = $(m),
                    x.BindVideoEvent(),
                    x.BindEvent()
                },
                550)
            }
            setTimeout(function() {
                a || $("#livePoster").show(),
                r.liveinfo.playbackurl || t ? $(".controls,.btn-pause").show() : ($(".videoPoster,#playbtn,.btn-play").show(), $(".controls,.btn-pause").hide()),
                $(".controls .timestatus").html("实时直播"),
                $(".controls .timestatus").show(),
                $(".controls .progress,.time").hide(),
                $("#div_live_status").hide(),
                m.play()
            },
            s),
            setTimeout(function() {
                r.HideLoadingBox()
            },
            1500)
        }
    },
    r.SetAdViewedCookie = function() {
        var t = e.getCookieHost();
        $.cookie("TopicOutsetADView_" + r.liveinfo.tpid, 1, {
            expires: 1,
            path: "/",
            domain: t
        })
    },
    r.SetAdCountDownStr = function() {
        if (r.isPlayAd) {
            var e = '<span id="t" style="color:red;">' + parseInt(m.duration) + "</span> 秒"; (r.outsetAd.isskip || r.pauseAd.isskip) && (e += '<span class="skipad">跳过</span>'),
            $(".plan-name").html(e),
            $(".plan-name,.progress").show(),
            $(".controls .timestatus").html(""),
            $(".controls .timestatus").hide(),
            r.AdCountDown()
        }
    },
    r.AdCountDown = function() {
        if (m.duration > 0) {
            var e = parseInt(m.duration - m.currentTime);
            0 != e ? ($("#t").html(e), r.AdCountDownTimer = setTimeout(r.AdCountDown, 1e3)) : (console.log("endAd"), r.isPlayAded = !0, $(".plan-name").empty(), clearTimeout(r.AdCountDownTimer), "outsetad" == r.playAdType ? (r.SetAdViewedCookie(), 1 == r.outsetAd.nopaytimetype && "notbegin" == r.liveinfo.livestatus ? setTimeout(function() {
                r.SetAdCountDownStr()
            },
            300) : 0 == r.liveinfo.status && "playback" == r.liveinfo.livestatus || "videosrc" == r.liveinfo.livestatus ? (r.isPlayAd = !1, r.startPlay(!0)) : (r.liveinfo.livestatus, r.isPlayAd = !1, r.startPlay(!0))) : 1 == r.pauseAd.payingtimetype ? setTimeout(function() {
                r.SetAdCountDownStr()
            },
            300) : (r.isPlayAd = !1, r.startPlay(!0)))
        } else r.AdCountDownTimer = setTimeout(r.AdCountDown, 150)
    },
    r.LimitFreeView = function() {
        if (r.LimitFreeViewTimes > 0 && !r.isPlayAd) {
            u = !1,
            r.viewtimes++,
            $("#div_live_status").show();
            var e = parseInt(r.LimitFreeViewTimes) - r.viewtimes;
            e <= 0 && (e = 1, $(".countdown-tip").data("total", 0), $(".btn-pause").click(), $(".tanchu4").show());
            var t = 0,
            i = 0,
            o = 0,
            n = 0;
            e > 0 && (t = Math.floor(e / 86400), i = Math.floor(e / 3600) - 24 * t, o = Math.floor(e / 60) - 24 * t * 60 - 60 * i, n = Math.floor(e) - 24 * t * 60 * 60 - 60 * i * 60 - 60 * o),
            t <= 9 && (t = "0" + t),
            i <= 9 && (i = "0" + i),
            o <= 9 && (o = "0" + o),
            n <= 9 && (n = "0" + n),
            $("#showday var").html(t),
            $("#showhour var").html(i),
            $("#showminute var").html(o),
            $("#showsecond var").html(n)
        }
    },
    r.GetLiveInfo = function() {
        return r.outsetAd = JSON.parse(sessionStorage.getItem("outsetAd_" + zbvd.topicid) || "{}"),
        r.pauseAd = JSON.parse(sessionStorage.getItem("pauseAd_" + zbvd.topicid) || "{}"),
        r.liveinfo = JSON.parse(sessionStorage.getItem("liveinfo_" + zbvd.topicid) || "{}"),
        r.liveinfo.tpid ? !(r.liveinfo.playurl.indexOf(".mp4") <= -1 && r.IsWeChat && c) && void("notsignal" != r.liveinfo.livestatus && "notbegin" != r.liveinfo.livestatus || setTimeout(function() {
            r.GetLiveStatus()
        },
        2100)) : (setTimeout(function() {
            r.GetLiveInfo()
        },
        300), !1)
    },
    r.InitPlayer = function() {
        var e = document.getElementById("liveVideo");
        if (e) m = e,
        f = $(m),
        setTimeout(function() {
            x.BindEvent(),
            x.BindVideoEvent()
        },
        600);
        else if (r.liveinfo) {
            if (r.liveinfo.playurl.indexOf(".mp4") <= -1 && r.IsWeChat && c) return ! 1;
            r.liveinfo && !r.liveinfo.livestatus || "notbegin" != r.liveinfo.livestatus ? setTimeout(function() {
                r.InitPlayer()
            },
            1e3) : r.outsetAd.isOpen && setTimeout(function() {
                r.InitPlayer()
            },
            1e3)
        } else setTimeout(function() {
            r.InitPlayer()
        },
        1e3)
    };
    var x = {
        Init: function(e) {
            if (r.GetLiveInfo(), r.IsWeChat && c) return ! 1;
            r.InitPlayer(),
            r.LimitFreeViewTimes = $(".countdown-tip").data("time") || 0
        },
        BindVideoEvent: function() {
            if (r.IsWeChat && c) return ! 1;
            e.iscommonleveltbs() && (r.UseNewX5Player || m.addEventListener("x5videoenterfullscreen",
            function() {
                setTimeout(function() {
                    console.log("inall"),
                    0 == fswinH && (fswinH = screen.height),
                    0 == fswinW && (fswinW = screen.width()),
                    $("#videoPlayer").css({
                        width: "100%",
                        height: 257
                    }),
                    $("#liveVideo").css({
                        width: "100%",
                        height: fswinH
                    }),
                    "Vertical" == zbvd.tplname && "smallvideo" != r.liveinfo.livestatus && $("#videoPlayer, #liveVideo").css("height", window.screen.height + "px")
                },
                800),
                $("body").addClass("wxfs"),
                "beginning" != r.liveinfo.livestatus || r.isPlayAd || $(".btn-play").hide(),
                $(".btn-pause").show(),
                window.navigator.userAgent.indexOf("MI 8") > -1 && ($(".inputbox").addClass("mi8input"), $("#inputbar").addClass("mi8input-container"), $(".inputbox input").on("blur",
                function() {
                    x.ReMakePage()
                }))
            }), m.addEventListener("x5videoexitfullscreen",
            function() {
                if (console.log("exitall"), f.removeAttr("x5-video-orientation"), $("#videoPlayer").css("height", "auto"), $("body").removeClass("tbsfs wxfs"), 0 != parseInt(r.liveinfo.isScreen)) {
                    var e = fswinW,
                    t = e / videoW * videoH;
                    window.calvideoH != t && (window.calvideoH = t),
                    window.calvideoH = e / videoW * videoH,
                    $("#videoPlayer").css({
                        width: "100%",
                        height: window.calvideoH
                    }),
                    window.calvideoH > 0 ? $("#videoPlayer video").height(window.calvideoH) : ($("#videoPlayer video").hide(), $("#videoPlayer #livePoster").show()),
                    x.ReMakePage("normal")
                }
                setTimeout(function() {
                    $(".btn-play").show()
                },
                1e3),
                r.ShowIconOrControls(),
                $(".btn-pause").hide(),
                $(".return-live-btn").show(),
                $("body").css("overflow-y", "auto"),
                1 === zbvd.IsScreen && setTimeout(function() {
                    x.resizeContentHeight()
                },
                500),
                $("#inputbar").css("bottom", 0),
                $(".inputbox input").removeAttr("disabled"),
                $(".inputbox").removeClass("mi8input"),
                $("#inputbar").removeClass("mi8input-container")
            })),
            $(window).resize(function() {
                m && 2 == zbvd.modeltype && !e.iscommonleveltbs() && "Vertical" != zbvd.tplname && parseInt(r.liveinfo.isScreen) && $("#liveVideo").length > 0 && setTimeout(function() {
                    window.videoW = m.videoWidth,
                    window.videoH = m.videoHeight;
                    var e = $("#LiveVideoArea").width() - (c ? 14 : 0),
                    t = e / videoW * videoH;
                    window.calvideoH != t && (window.calvideoH = t),
                    window.calvideoH = e / videoW * videoH,
                    $("#videoPlayer").css({
                        width: "100%",
                        height: window.calvideoH
                    }),
                    $("#liveVideo").css({
                        width: "100%",
                        height: window.calvideoH
                    }),
                    x.resizeContentHeight()
                },
                500)
            }),
            window.addEventListener("orientationchange",
            function() {
                setTimeout(function() {
                    if (x.resizeContentHeight(), window.videoW > 0 && window.videoH > 0 && "none" != $("#liveVideo").css("display")) {
                        var e = $("#LiveVideoArea").width() - (c ? 14 : 0);
                        window.calvideoH = e / videoW * videoH,
                        $("body").hasClass("wxfs") && (window.calvideoH += 50),
                        $("#videoPlayer").css({
                            width: "100%",
                            height: window.calvideoH
                        }),
                        console.log(" window.calvideoH:--", window.calvideoH, $("#LiveVideoArea").width())
                    }
                },
                500)
            },
            !1),
            f.on("end playing",
            function() {
                var e;
                setTimeout(function() {
                    l.hide(),
                    e = setInterval(function() {
                        l.hide(),
                        l.is(":hidden") && (clearInterval(e), console.log("clearInterval"))
                    },
                    800)
                },
                800)
            }).on("loadstart",
            function() {
                console.log("loadstart"),
                $("#liveVideo").length > 0 && "" != $("#liveVideo").attr("src") && l.show()
            }),
            m.addEventListener("error",
            function(e) {
                console.log("error")
            }),
            m.addEventListener("loadstart",
            function(e) {
                console.log("loadstart"),
                l.show()
            }),
            m.addEventListener("waiting",
            function(e) {
                console.log("waiting"),
                l.show(),
                setTimeout(function() {
                    l.hide()
                },
                1e3)
            }),
            m.addEventListener("playing",
            function() {
                console.log("playing"),
                _ = 0,
                clearInterval(d),
                $("#div_live_status").hide(),
                r.hostname.indexOf("vzan.com") <= -1 && ("" != zbvd.rightTopWatermark || r.isPlayAd) && !e.IsIOS() && 1 == zbvd.IsScreen && $(".plan-name").css("padding-right", "40px"),
                r.SetAdCountDownStr(),
                l.find("p").text("正在加载"),
                $(".btn-pause").show(),
                $(".videoPoster").hide(),
                $("#playbtn, .btn-play").hide(),
                setTimeout(function() {
                    screen.width < screen.height && "landscape" == $("#liveVideo").attr("x5-video-orientation") && ($("body").removeClass("tbsfs"), $("#liveVideo").removeAttr("x5-video-orientation"))
                },
                1e3),
                r.IsChangeUrl && (window.videoW = 0, $("#videoPlayer").css({
                    width: "100%",
                    height: "auto"
                }), 1 == parseInt(r.liveinfo.isScreen) ? $("#liveVideo").css({
                    height: "210px"
                }) : $("#liveVideo").css({
                    width: "100%",
                    height: "auto"
                }), m = null, m = document.getElementById("liveVideo"), r.IsChangeUrl = !1),
                setTimeout(function() { ! (window.videoW <= 0 || window.videoH <= 0) || 0 == parseInt(r.liveinfo.isScreen) && "smallvideo" != window.liveStatus ? x.ReMakePage() : (null != y && (clearInterval(y), y = null), y = setInterval(function() {
                        if (m.videoWidth > 0 && m.videoHeight > 0 && $("#liveVideo").length > 0) {
                            clearInterval(y),
                            y = null,
                            window.videoW = m.videoWidth,
                            window.videoH = m.videoHeight;
                            var e = $("#LiveVideoArea").width(),
                            t = e / videoW * videoH;
                            window.calvideoH != t && (window.calvideoH = t),
                            window.calvideoH = e / videoW * videoH,
                            $("#videoPlayer").css({
                                width: "100%",
                                height: window.calvideoH
                            }),
                            $("#liveVideo").css({
                                width: "100%",
                                height: window.calvideoH
                            }),
                            console.log("window.calvideoH:" + window.calvideoH + "showWidth:" + e),
                            x.ReMakePage()
                        }
                    },
                    800))
                },
                1e3),
                "playback" == r.liveinfo.livestatus || "videosrc" == r.liveinfo.livestatus || "smallvideo" == r.liveinfo.livestatus || r.isPlayAd || "notsignal" == r.liveinfo.livestatus && r.liveinfo.playbackurl ? ($(".progress,.time").show(), $(".controls .timestatus").hide(), null != k && (clearInterval(k), k = null), k = setInterval(function() {
                    console.log(m.duration),
                    m.duration != 1 / 0 && m.duration > 0 && (clearInterval(k), k = null, window.vduration = m.duration, -1 != window.nextSeekTime && m && (m.currentTime = window.nextSeekTime, window.nextSeekTime = -1), x.ShowProcess(), a(), !r.isPlayAd && timingredbag && timingredbag.StartViewTimeClock())
                })) : "beginning" == r.liveinfo.livestatus && ($(".progress,.time").hide(), $(".controls .timestatus").html("实时直播").show(), r.ShowIconOrControls(), a(), "smallvideo" != window.liveStatus && !r.isPlayAd && timingredbag && timingredbag.StartViewTimeClock())
            },
            !1),
            m.addEventListener("pause",
            function() {
                console.log("Event:pause"),
                $("#videoPlayer video").attr("src") && $(".btn-play,#playbtn").show(),
                $(".btn-pause").hide(),
                l.hide(),
                r.ShowIconOrControls(),
                $(".videoPoster").show(),
                f.is(":visible") ? ($(".controls").show(), $("#livePoster").hide()) : ($("#livePoster").show(), $("#videoPlayer").css("height", "auto")),
                $("#liveVideo").length < 0 && $("#playbtn").hide(),
                timingredbag && timingredbag.StopViewTimeClock()
            },
            !1),
            m.addEventListener("loadstart",
            function() {
                console.log("loadstart")
            }),
            m.addEventListener("loadeddata",
            function() {
                console.log("loadeddata"),
                _ = 0,
                "notsignal" == r.liveinfo.livestatus && r.liveinfo.playbackurl && (d = setInterval(function() {
                    10 == ++_ && layer.msg("网络连接不稳定，请检查后重试")
                },
                1e3))
            },
            !1),
            m.addEventListener("ended",
            function() {
                if (console.log("ended"), timingredbag && (timingredbag.StopViewTimeClock(), timingredbag.viewtimes = 0), $(".btn-play").show(), $(".btn-pause").hide(), "EntTVChat" == zbvd.tplname) {
                    var e = {},
                    t = $("#ul_wonderfulvod").data("wonderlist") || [];
                    if (t && !(t.length <= 0)) {
                        var i = $("#liveVideo");
                        if (parseInt(i.attr("woderful_tv_id")) > 0) {
                            var o = t.findIndex(function(e) {
                                return e.Id == i.attr("woderful_tv_id")
                            });
                            if (t.length - 1 == o) return void m.pause();
                            e = t[o + 1]
                        } else e = t[0];
                        x.changeWondfulShareUrl(e.Id)
                    }
                }
            },
            !1)
        },
        BindEvent: function() {
            if (r.isBindEvent) return ! 1;
            r.isBindEvent = !0,
            $(document).on("click", "#playbtn",
            function(t) {
                console.log("playbtn click"),
                e.isAndroid() && window.videoW <= 0 && l.show(),
                $(".videoPoster,.video-poster").hide(),
                $(".vertical-view .fsl-bg").css("background", "#000"),
                f.show(),
                $(".btn-play,#playbtn").hide(),
                $(".vertical-new-btns").hide(),
                $(".btn-pause").show(),
                "smallvideo" != r.liveinfo.livestatus && r.GetLiveStatus(),
                "function" == typeof guideTouchTip && guideTouchTip(),
                (r.LimitFreeViewTimes <= 0 || !r.LimitFreeViewTimes) && "Vertical" != r.liveinfo.topicTplName ? ("notsignal" == r.liveinfo.livestatus || 1 != r.outsetAd.payingtimetype && 1 == $.cookie("TopicOutsetADView_" + r.liveinfo.tpid) ? r.pauseAd.isOpen && "notsignal" == r.liveinfo.livestatus && "" != r.pauseAd.videolink && !r.isPlayAded ? (r.isPlayAd = !0, r.playAdType = "pausead", r.adUrl = r.pauseAd.videolink) : (r.adUrl = "", $("#videoPlayer video").attr("src") != r.liveinfo.playurl && $("#videoPlayer video").attr("src", r.liveinfo.playurl)) : r.outsetAd.isOpen && "smallvideo" != r.liveinfo.livestatus && "" != r.outsetAd.videolink && !r.isPlayAded ? (r.isPlayAd = !0, r.playAdType = "outsetad", r.adUrl = r.outsetAd.videolink) : r.adUrl = "", "" == r.adUrl || r.isPlayAded || ($("#videoPlayer video").attr("src", r.adUrl), (1 == r.outsetAd.nopaytimetype && "notbegin" == r.liveinfo.livestatus || 1 == r.pauseAd.payingtimetype) && ($("#videoPlayer video").attr("loop", "loop"), $("#videoPlayer video").attr("autoplay", "autoplay")), $(".progress").show())) : $("#videoPlayer video").attr("src") != r.liveinfo.playurl && $("#videoPlayer video").attr("src", r.liveinfo.playurl),
                m.play(),
                e.iscommonleveltbs() && !r.UseNewX5Player && $("body").addClass("wxfs"),
                t.stopPropagation()
            }),
            $(document).on("click", "#liveVideo",
            function() {
                w ? (null != b && (clearTimeout(b), b = null), r.HideIconOrControls()) : (r.ShowIconOrControls(), a())
            }).on("click", ".btn-full,.btn-normal",
            function(t) {
                if (! (r.LimitFreeViewTimes > 0) || r.isPlayAd) {
                    if (e.iscommonleveltbs()) try {
                        if (m.webkitEnterFullscreen && m.webkitEnterFullscreen(), !r.UseNewX5Player) {
                            var i = $("#liveVideo").attr("x5-video-orientation");
                            void 0 == i || "" == i ? ($("#liveVideo").attr("x5-video-orientation", "landscape"), $(".return-live-btn").hide()) : ($("#liveVideo").removeAttr("x5-video-orientation"), $(".return-live-btn").show(), setTimeout(function() {
                                x.resizeContentHeight()
                            },
                            800)),
                            $(".wxfs").toggleClass("tbsfs")
                        }
                    } catch(t) {} else {
                        var o = e.checkFullScreenFn(m);
                        o && (o.requestEl[o.requestFn](), t.stopPropagation())
                    }
                    t.stopPropagation()
                }
            }).on("click", ".skipad",
            function(e) {
                r.isPlayAd && (r.isPlayAded = !0, m && m.pause(), r.startPlay(!0)),
                e.stopPropagation()
            }),
            $(document).on(c ? "mousedown": "touchstart", ".progress .p-dot",
            function(e) {
                function i(e) {
                    x.Pause(),
                    a(),
                    e.stopPropagation(),
                    e = c ? e.originalEvent.pageX: e.originalEvent.touches[0].pageX,
                    e = h + (e - u),
                    0 > e && (e = 0),
                    e > v && (e = v),
                    g = e / (v - 0);
                    var i = (l * g).toFixed(0);
                    s.css("left", String(f * g - 9) + "px"),
                    d.css("width", String(f * g) + "px"),
                    $(".time-current").text(t(i))
                }

                function o(e) {
                    return a(),
                    e.stopPropagation(),
                    e = Number((V * g).toFixed(3)),
                    m.currentTime = e,
                    x.Play(),
                    p = !1,
                    $(document).off(c ? "mousemove": "touchmove"),
                    $(document).off(c ? "mouseup": "touchend"),
                    !1
                }
                if (! (r.LimitFreeViewTimes > 0) || r.isPlayAd) {
                    p = !0;
                    var n = $(".progress"),
                    s = $(this),
                    d = n.find(".p-play"),
                    l = m.duration;
                    V = Number(m.duration);
                    var u;
                    u = c ? e.originalEvent.pageX: e.originalEvent.touches[0].pageX;
                    var g, v = Number(n.width() - (s.width() - 9)),
                    h = Number(s.css("left").replace("px", "")),
                    f = Number(n.width() - (s.width() - 9));
                    return $(document).on(c ? "mousemove": "touchmove", i),
                    $(document).on(c ? "mouseup": "touchend", o),
                    e.stopPropagation(),
                    e.preventDefault(),
                    !1
                }
            }),
            $(document).on("click", ".btn-play",
            function(e) {
                x.Play(),
                a(),
                e.stopPropagation()
            }),
            $(document).on("click", ".btn-pause",
            function(e) {
                x.Pause(),
                null != b && clearTimeout(b),
                e.stopPropagation()
            }),
            $("#wonderful_default_tv").click(function() {
                $("#liveVideo").attr("src", $("#live_source_url").val()).attr("woderful_tv_id", 0),
                $("#playbtn").click(),
                x.changeWondfulShareUrl(0)
            })
        },
        FreshPlayer: function(e) {
            if ("smallvideo" == r.liveinfo.livestatus) return ! 1;
            r.IsWeChat && c ? livevideoplayer && livevideoplayer.FreshPlayer(e) : r.GetLiveStatus()
        },
        ReMakePage: function(t) {
            if ("Vertical" != zbvd.tplname && parseInt(r.liveinfo.isScreen)) {
                var i = 0;
                if ("normal" == t || e.IsIOS() || !e.iscommonleveltbs()) i = normalwinH - window.calvideoH - ($(".live-qiye-nav").height() || 0) - ($(".live-qiye-notice").height() || 0) - ($(".undervideoimg").height() || 0);
                else {
                    i = (r.UseNewX5Player ? normalwinH: fswinH - 50) - window.calvideoH - ($(".live-qiye-nav").height() || 0) - ($(".live-qiye-notice").height() || 0) - ($(".undervideoimg").height() || 0);
                    var o = window.calvideoH;
                    $("body").hasClass("wxfs") ? o += 50 : $("#inputbar").css("bottom", 0),
                    $("#videoPlayer").css({
                        width: "100%",
                        height: o
                    }),
                    r.UseNewX5Player || $("#liveVideo").css({
                        width: "100%",
                        height: fswinH
                    })
                }
                window.navigator.userAgent.indexOf("MI 8") > -1 && $("body").hasClass("wxfs") && (i -= 88),
                $(".scrollContentBox").css({
                    height: i
                }),
                $("#tab-content-msgwrapper").css({
                    height: i
                }),
                $("#tab-content-msgwrapper>.swiper-slide").css({
                    height: i,
                    "overflow-y": "scroll"
                }),
                (e.IsIOS() || r.UseNewX5Player) && ($(".abovevideo").length > 0 || $(".relaytopicin").length > 0) && $(".skin-dark").animate({
                    scrollTop: ($(".abovevideo").height() || 0) + ($(".relaytopicin").height() || 0)
                },
                400)
            }
        },
        resizeContentHeight: function() {
            var e = $(".zb-tips").height() || 0,
            t = $(".videowrap").height() || 0,
            i = $(".topimg.undervideo").height() || 0,
            o = $(".live-qiye-nav").height() || $(".marry-live-nav").height() || 0,
            n = $(".live-qiye-notice").height() || 0,
            s = "none" == $("#oupai-custom").css("display") ? 0 : $("#oupai-custom").height() || 0,
            a = $(document.body).height() - t - i - o - e - n - s;
            a = a <= 80 ? 280 : a,
            $(".scrollContentBox, #tab-content-msgwrapper, #tab-content-msgwrapper > .swiper-slide").height(a)
        },
        StartClock: function() {
            null != g && (clearInterval(g), g = null),
            console.log("StartClock"),
            g = setInterval(function() {
                s()
            },
            1e3)
        },
        StopClock: function() {
            null != g && (clearInterval(g), g = null)
        },
        StartViewTimeClock: function() {
            null != v && (clearInterval(v), v = null),
            console.log("StartViewTimeClock"),
            v = setInterval(function() {
                n()
            },
            1e3)
        },
        StopViewTimeClock: function() {
            console.log("StopViewTimeClock"),
            null != v && (clearInterval(v), v = null)
        },
        Play: function() {
            m.play(),
            $(".vertical-new-btns").hide(),
            x.StartClock()
        },
        Pause: function() {
            m.pause(),
            x.StopClock(),
            $(".vertical-new-btns").show()
        },
        SetCurrentTime: function(e) {
            m.currentTime = e,
            m.play(),
            setTimeout(function() {
                l.hide()
            },
            1e3)
        },
        ShowProcess: function() {
            $(".time,.controls").show(),
            x.StartClock()
        },
        ShowLookVideoReward: function() {
            var e = o();
            setTimeout(function() {
                var t = o();
                e != t && (!r.isPlayAd && timingredbag ? timingredbag.getTimingRedbags(1) : timingredbag && timingredbag.getTimingRedbags(0))
            },
            1500)
        },
        changeWondfulShareUrl: function(e) {
            var t = $(".live_title_bar").attr("attr-url");
            if ("vzan.com" != location.hostname.toLowerCase()) {
                var i = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
                try {
                    var o = i.exec(shareurl)[0];
                    o.toLowerCase() != location.hostname.toLowerCase() && (shareurl = shareurl.replace(o, location.hostname))
                } catch(e) {}
            }
            var n = t.indexOf("wfid");
            t = -1 != n ? t.substring(0, n) + "wfid=" + e: t + "&wfid=" + e,
            $(".live_title_bar").attr("attr-url", t);
            var s = $("#ul_wonderfulvod").data("wonderlist") || [],
            a = s.findIndex(function(t) {
                return t.Id == e
            });
            if ( - 1 != a) {
                var d = s[a];
                $(".live_title_bar").attr("attr-title", d.title).attr("attr-pic", d.cover).attr("attr-descript", d.remark),
                $("#liveVideo").attr("woderful_tv_id", d.Id).attr("src", d.playurl);
                var r = $(".wonderful_tv[data-id='" + d.Id + "']").find("img").attr("src");
                $("#livePoster").attr("src", r),
                console.log(d),
                document.title = d.title
            }
            console.log(t),
            x.wxShareShow()
        },
        wxShareShow: function() {
            var e = $(".live_title_bar").attr("attr-title"),
            t = $(".live_title_bar").attr("attr-descript"),
            i = $(".live_title_bar").attr("attr-pic"),
            o = $(".live_title_bar").attr("attr-url"),
            n = $(".live_title_bar").attr("attr-state"),
            s = $(".live_title_bar").attr("attr-callback");
            switch ("" == t && (t = e), "vzan.com" != location.hostname.toLowerCase() && (o = o.replace("vzan.com", location.hostname)), n) {
            case "-1":
                e += " 即将开播，敬请观看";
                break;
            case "1":
                e += " 正在直播，邀您一起观看";
                break;
            case "0":
                e += " 精彩回顾，等你观看"
            }
            wx.onMenuShareAppMessage({
                title: e,
                desc: t,
                link: o,
                imgUrl: i,
                type: "link",
                dataUrl: "",
                success: function() {
                    $(this).minTipsBox({
                        tipsContent: "分享成功",
                        tipsTime: 1
                    }),
                    "AfterShareCouponCode" == s && AfterShareCouponCode(),
                    "function" == typeof menuShareCallBack && menuShareCallBack()
                },
                cancel: function() {}
            }),
            wx.onMenuShareTimeline({
                title: e,
                link: o,
                imgUrl: i,
                success: function() {
                    $(this).minTipsBox({
                        tipsContent: "分享成功",
                        tipsTime: 1
                    })
                },
                cancel: function() {}
            }),
            wx.onMenuShareQQ({
                title: e,
                desc: t,
                link: o,
                imgUrl: i,
                success: function() {
                    $(this).minTipsBox({
                        tipsContent: "分享成功",
                        tipsTime: 1
                    })
                },
                cancel: function() {}
            }),
            wx.onMenuShareWeibo({
                title: e,
                desc: t,
                link: o,
                imgUrl: i,
                success: function() {
                    $(this).minTipsBox({
                        tipsContent: "分享成功",
                        tipsTime: 1
                    })
                },
                cancel: function() {}
            }),
            wx.onMenuShareQZone({
                title: e,
                desc: t,
                link: o,
                imgUrl: i,
                success: function() {
                    $(this).minTipsBox({
                        tipsContent: "分享成功",
                        tipsTime: 1
                    })
                },
                cancel: function() {}
            }),
            wx.showOptionMenu()
        }
    };
    return window.resizeContentHeight = x.resizeContentHeight,
    x
}),
define("livecommon/module/lottery", ["livecommon/module/utils", "jquery.popBox"],
function(e, t) {
    return {
        Init: function() {
            this.BindEvent()
        },
        BindEvent: function() {},
        switchWinImg: function(e, t) {
            var i = this;
            e.length == t ? ($("#live_lottery_getwin .headImg").attr("src", e[t - 1].headimgurl), i.switchWinImg(e, --t)) : setTimeout(function() {
                t > 0 && ($("#live_lottery_getwin .headImg").attr("src", e[t - 1].headimgurl), i.switchWinImg(e, --t))
            },
            1e3)
        },
        handleLottery: function(e, t) {
            var i = this;
            if (0 == e) {
                if (!t || t.length <= 0) return $(".lottery_cj_back").show(),
                popup.confirm("温馨提示", "抱歉,当前没有在线用户或在线用户已经成为幸运观众", ["确定"],
                function() {
                    this.hide()
                }),
                !1;
                $("#live_lottery_boxRight,#live_lottery_boxLeft").addClass("none"),
                $("#live_lottery_boxFront,#live_lottery_boxImg").removeClass("none"),
                $("#live_lottery_shou_show").removeClass("none"),
                setTimeout(function() {
                    $("#live_lottery_shou_show").addClass("none"),
                    $("#live_lottery_getwin").removeClass("none"),
                    i.switchWinImg(t, winUs.length),
                    setTimeout(function() {
                        $("#live_lottery_getwin,.lottery_gun2").addClass("none");
                        for (var e = "",
                        t = 0; t < winUs.length; t++) e += '<li>                                            <a class="huojiang-pic"><img src="' + winUs[t].headimgurl + '"></a>                                            <p class="name">' + winUs[t].nickname + "</p>                                            </li>";
                        $("#live_lottery_winlist").find("li").remove().end().append(e),
                        $(".xingyunguanzhong,#live_lottery_winlist,.lotter_bg2").removeClass("none"),
                        $(".juanzhouzhi").addClass("juanzhou-active"),
                        $(".lottery_cj_back").show()
                    },
                    1e3 * t.length)
                },
                1e3)
            } else $("#live_lottery_awardstext").html($("#live_lottery_set_awards option[value=" + msg.Msg.tuserId + "]").text()),
            $(".lottery_gun2").removeClass("none"),
            $(".xingyunguanzhong,#live_lottery_winlist,.lotter_bg2").addClass("none"),
            $(".juanzhouzhi").removeClass("juanzhou-active"),
            $("#live_lottery_boxImg,#live_lottery_boxFront,#live_lottery_getwin").addClass("none"),
            $("#live_lottery_boxLeft,#live_lottery_boxRight").removeClass("none"),
            $("#live_lottery_box").show(),
            zbvd.isadmin || $(".lottery_cj_back").hide()
        }
    }
});
var wss = null,
_fs_msgtip = null,
msgqueue = [],
imdebug = !1,
tabSwiper = null,
pptSwiper = null,
bangSwiper = null,
videoheight = 0,
videoinitheight = 0,
windowInitHeight = 0,
ismsgtop = !1,
scrollbottomtimer = null,
ScrollTop = 0,
popqueue = [],
couponData = null,
qipaoIndex = 0,
dropAnimated = !0,
weddingIndex = 0,
dropTimer = !1;
define("livecommon/module/im", ["livecommon/module/utils", "livecommon/module/redbag", "livecommon/module/shop", "livecommon/module/heart", "livecommon/module/Praise", "livecommon/module/controls", "livecommon/module/wxvideoplayer", "livecommon/module/lottery"],
function(utils, RedBag, shop, heart, Praise, liveControl, wxvideoplayer, lottery) {
    juicer.set({
        "tag::operationOpen": "{#",
        "tag::operationClose": "}",
        "tag::interpolateOpen": "${",
        "tag::interpolateClose": "}",
        "tag::noneencodeOpen": "$${",
        "tag::noneencodeClose": "}",
        "tag::commentOpen": "{##",
        "tag::commentClose": "}"
    });
    var msgTpl = {
        welcomeMsg: ['<div class="start_tips">', '<b class="st_date">$msg$</b>', "</div>"].join(""),
        normalMsg: document.getElementById("tpl_normalmsg").innerHTML
    };
    zbvd.ouPaiCustomId.indexOf("," + zbvd.zbid + ",") > -1 && zbvd.IsScreen && "2" == zbvd.modeltype && (msgTpl = {
        welcomeMsg: ['<div class="start_tips">', '<b class="st_date">$msg$</b>', "</div>"].join(""),
        normalMsg: document.getElementById("oupaitpl_normalmsg").innerHTML
    });
    var timefmt = function(e) {
        return new Date(e).Format("MM-dd HH:mm")
    },
    recommendedbtn = function(e) {
        if (zbvd && zbvd.siteuser == e.userId && 0 != zbvd.siteid) return '<i class="recommended" ids="' + e.Ids + '">推荐</i>'
    },
    hasTime = function(e) {
        var t = $(".chat-msglist li[attr-id]:last");
        if (t.length > 0) return (new Date(e.addtime) - new Date(t.data("addtime"))) / 1e3 / 60 >= 5 ? "hasTime": ""
    },
    showTime = function(e) {
        var t = $(".chat-msglist li[attr-id]:last");
        if (t.length > 0) return (new Date(e.addtime) - new Date(t.data("addtime"))) / 1e3 / 60 >= 5 ? '<li class="news-alert-time"><span>' + timefmt(e.addtime) + "</span></li>": ""
    },
    showFile = function(e) {
        var t = "";
        if (e.content.indexOf("|") > -1 && 2 == e.content.split("|").length) {
            var i = e.content.split("|");
            t = '<a href="' + i[1] + '" target="_blank">' + i[0] + "</a>"
        }
        return t
    };
    juicer.register("timefmt_build", timefmt),
    juicer.register("recommended_build", recommendedbtn),
    juicer.register("hasTime_build", hasTime),
    juicer.register("showTime_build", showTime),
    juicer.register("showFile_build", showFile);
    var dm_top = -35,
    isScrollBottom = !0;
    $(function() {
        $("#speakBox").scroll(function(e) {
            $("#speakBox").scrollTop() + $("#speakBox").height() < $("#speakBox .liveBoxContent").innerHeight() - 250 ? isScrollBottom = !1 : (isScrollBottom = !0, msgUtils.ResetUnreadMsgCount()),
            e.stopPropagation()
        }),
        $("#speakBox .liveBoxContent").scroll(function(e) {
            $("#speakBox .liveBoxContent").scrollTop() + $("#speakBox .liveBoxContent").height() < $("#speakBox .liveBoxContent div").innerHeight() - 250 ? isScrollBottom = !1 : (isScrollBottom = !0, msgUtils.ResetUnreadMsgCount()),
            e.stopPropagation()
        })
    }),
    juicer.register("nicknameFilters",
    function(e) {
        return e.length <= 3 ? e: e.substr(0, 2) + "..." + e.substr(e.length - 1, 1)
    }),
    juicer.register("nicknameReplace",
    function(e) {
        var t = e.content,
        i = e.tnickName;
        if (i.length <= 3) return i;
        var o = i.substr(0, 2) + "..." + i.substr(i.length - 1, 1);
        return t.replace(i, o)
    });
    var msgUtils = {
        facedb: {
            "[微笑]": "https://j.vzan.cc/content/skin/emoji/new/1.gif",
            "[撇嘴]": "https://j.vzan.cc/content/skin/emoji/new/2.gif",
            "[色]": "https://j.vzan.cc/content/skin/emoji/new/3.gif",
            "[发呆]": "https://j.vzan.cc/content/skin/emoji/new/4.gif",
            "[得意]": "https://j.vzan.cc/content/skin/emoji/new/5.gif",
            "[流泪]": "https://j.vzan.cc/content/skin/emoji/new/6.gif",
            "[害羞]": "https://j.vzan.cc/content/skin/emoji/new/7.gif",
            "[闭嘴]": "https://j.vzan.cc/content/skin/emoji/new/8.gif",
            "[睡]": "https://j.vzan.cc/content/skin/emoji/new/9.gif",
            "[大哭]": "https://j.vzan.cc/content/skin/emoji/new/10.gif",
            "[尴尬]": "https://j.vzan.cc/content/skin/emoji/new/11.gif",
            "[发怒]": "https://j.vzan.cc/content/skin/emoji/new/12.gif",
            "[调皮]": "https://j.vzan.cc/content/skin/emoji/new/13.gif",
            "[呲牙]": "https://j.vzan.cc/content/skin/emoji/new/14.gif",
            "[惊讶]": "https://j.vzan.cc/content/skin/emoji/new/15.gif",
            "[难过]": "https://j.vzan.cc/content/skin/emoji/new/16.gif",
            "[酷]": "https://j.vzan.cc/content/skin/emoji/new/17.gif",
            "[冷汗]": "https://j.vzan.cc/content/skin/emoji/new/18.gif",
            "[抓狂]": "https://j.vzan.cc/content/skin/emoji/new/19.gif",
            "[吐]": "https://j.vzan.cc/content/skin/emoji/new/20.gif",
            "[偷笑]": "https://j.vzan.cc/content/skin/emoji/new/21.gif",
            "[可爱]": "https://j.vzan.cc/content/skin/emoji/new/22.gif",
            "[白眼]": "https://j.vzan.cc/content/skin/emoji/new/23.gif",
            "[傲慢]": "https://j.vzan.cc/content/skin/emoji/new/24.gif",
            "[饥饿]": "https://j.vzan.cc/content/skin/emoji/new/25.gif",
            "[困]": "https://j.vzan.cc/content/skin/emoji/new/26.gif",
            "[惊恐]": "https://j.vzan.cc/content/skin/emoji/new/27.gif",
            "[流汗]": "https://j.vzan.cc/content/skin/emoji/new/28.gif",
            "[憨笑]": "https://j.vzan.cc/content/skin/emoji/new/29.gif",
            "[大兵]": "https://j.vzan.cc/content/skin/emoji/new/30.gif",
            "[奋斗]": "https://j.vzan.cc/content/skin/emoji/new/31.gif",
            "[咒骂]": "https://j.vzan.cc/content/skin/emoji/new/32.gif",
            "[疑问]": "https://j.vzan.cc/content/skin/emoji/new/33.gif",
            "[嘘]": "https://j.vzan.cc/content/skin/emoji/new/34.gif",
            "[晕]": "https://j.vzan.cc/content/skin/emoji/new/35.gif",
            "[折磨]": "https://j.vzan.cc/content/skin/emoji/new/36.gif",
            "[哀]": "https://j.vzan.cc/content/skin/emoji/new/37.gif",
            "[骷髅]": "https://j.vzan.cc/content/skin/emoji/new/38.gif",
            "[敲打]": "https://j.vzan.cc/content/skin/emoji/new/39.gif",
            "[再见]": "https://j.vzan.cc/content/skin/emoji/new/40.gif",
            "[擦汗]": "https://j.vzan.cc/content/skin/emoji/new/41.gif",
            "[抠鼻]": "https://j.vzan.cc/content/skin/emoji/new/42.gif",
            "[鼓掌]": "https://j.vzan.cc/content/skin/emoji/new/43.gif",
            "[糗大了]": "https://j.vzan.cc/content/skin/emoji/new/44.gif",
            "[坏笑]": "https://j.vzan.cc/content/skin/emoji/new/45.gif",
            "[左哼哼]": "https://j.vzan.cc/content/skin/emoji/new/46.gif",
            "[右哼哼]": "https://j.vzan.cc/content/skin/emoji/new/47.gif",
            "[哈欠]": "https://j.vzan.cc/content/skin/emoji/new/48.gif",
            "[鄙视]": "https://j.vzan.cc/content/skin/emoji/new/49.gif",
            "[委屈]": "https://j.vzan.cc/content/skin/emoji/new/50.gif",
            "[快哭了]": "https://j.vzan.cc/content/skin/emoji/new/51.gif",
            "[阴险]": "https://j.vzan.cc/content/skin/emoji/new/52.gif",
            "[亲亲]": "https://j.vzan.cc/content/skin/emoji/new/53.gif",
            "[吓]": "https://j.vzan.cc/content/skin/emoji/new/54.gif",
            "[可怜]": "https://j.vzan.cc/content/skin/emoji/new/55.gif",
            "[菜刀]": "https://j.vzan.cc/content/skin/emoji/new/56.gif",
            "[西瓜]": "https://j.vzan.cc/content/skin/emoji/new/57.gif",
            "[啤酒]": "https://j.vzan.cc/content/skin/emoji/new/58.gif",
            "[篮球]": "https://j.vzan.cc/content/skin/emoji/new/59.gif",
            "[乒乓]": "https://j.vzan.cc/content/skin/emoji/new/60.gif",
            "[咖啡]": "https://j.vzan.cc/content/skin/emoji/new/61.gif",
            "[饭]": "https://j.vzan.cc/content/skin/emoji/new/62.gif",
            "[猪头]": "https://j.vzan.cc/content/skin/emoji/new/63.gif",
            "[玫瑰]": "https://j.vzan.cc/content/skin/emoji/new/64.gif",
            "[凋谢]": "https://j.vzan.cc/content/skin/emoji/new/65.gif",
            "[示爱]": "https://j.vzan.cc/content/skin/emoji/new/66.gif",
            "[爱心]": "https://j.vzan.cc/content/skin/emoji/new/67.gif",
            "[心碎]": "https://j.vzan.cc/content/skin/emoji/new/68.gif",
            "[蛋糕]": "https://j.vzan.cc/content/skin/emoji/new/69.gif",
            "[闪电]": "https://j.vzan.cc/content/skin/emoji/new/70.gif",
            "[炸弹]": "https://j.vzan.cc/content/skin/emoji/new/71.gif",
            "[刀]": "https://j.vzan.cc/content/skin/emoji/new/72.gif",
            "[足球]": "https://j.vzan.cc/content/skin/emoji/new/73.gif",
            "[瓢虫]": "https://j.vzan.cc/content/skin/emoji/new/74.gif",
            "[便便]": "https://j.vzan.cc/content/skin/emoji/new/75.gif",
            "[月亮]": "https://j.vzan.cc/content/skin/emoji/new/76.gif",
            "[太阳]": "https://j.vzan.cc/content/skin/emoji/new/77.gif",
            "[礼物]": "https://j.vzan.cc/content/skin/emoji/new/78.gif",
            "[拥抱]": "https://j.vzan.cc/content/skin/emoji/new/79.gif",
            "[强]": "https://j.vzan.cc/content/skin/emoji/new/80.gif",
            "[弱]": "https://j.vzan.cc/content/skin/emoji/new/81.gif",
            "[握手]": "https://j.vzan.cc/content/skin/emoji/new/82.gif",
            "[胜利]": "https://j.vzan.cc/content/skin/emoji/new/83.gif",
            "[抱拳]": "https://j.vzan.cc/content/skin/emoji/new/84.gif",
            "[勾引]": "https://j.vzan.cc/content/skin/emoji/new/85.gif",
            "[拳头]": "https://j.vzan.cc/content/skin/emoji/new/86.gif",
            "[差劲]": "https://j.vzan.cc/content/skin/emoji/new/87.gif",
            "[爱你]": "https://j.vzan.cc/content/skin/emoji/new/88.gif",
            "[no]": "https://j.vzan.cc/content/skin/emoji/new/89.gif",
            "[ok]": "https://j.vzan.cc/content/skin/emoji/new/90.gif",
            "[爱情]": "https://j.vzan.cc/content/skin/emoji/new/91.gif",
            "[飞吻]": "https://j.vzan.cc/content/skin/emoji/new/92.gif",
            "[跳跳]": "https://j.vzan.cc/content/skin/emoji/new/93.gif",
            "[发抖]": "https://j.vzan.cc/content/skin/emoji/new/94.gif",
            "[怄火]": "https://j.vzan.cc/content/skin/emoji/new/95.gif",
            "[转圈]": "https://j.vzan.cc/content/skin/emoji/new/96.gif",
            "[磕头]": "https://j.vzan.cc/content/skin/emoji/new/97.gif",
            "[回头]": "https://j.vzan.cc/content/skin/emoji/new/98.gif",
            "[跳绳]": "https://j.vzan.cc/content/skin/emoji/new/99.gif",
            "[挥手]": "https://j.vzan.cc/content/skin/emoji/new/100.gif",
            "[跳高]": "https://j.vzan.cc/content/skin/emoji/new/101.gif",
            "[吼叫]": "https://j.vzan.cc/content/skin/emoji/new/102.gif",
            "[练武]": "https://j.vzan.cc/content/skin/emoji/new/103.gif",
            "[左摆]": "https://j.vzan.cc/content/skin/emoji/new/104.gif",
            "[右摆]": "https://j.vzan.cc/content/skin/emoji/new/105.gif",
            "[囍]": "https://j.vzan.cc/content/skin/emoji/new/106.gif",
            "[鞭炮]": "https://j.vzan.cc/content/skin/emoji/new/107.gif",
            "[灯笼]": "https://j.vzan.cc/content/skin/emoji/new/108gif",
            "[发]": "https://j.vzan.cc/content/skin/emoji/new/109.gif",
            "[麦克风]": "https://j.vzan.cc/content/skin/emoji/new/110.gif",
            "[手袋]": "https://j.vzan.cc/content/skin/emoji/new/111.gif",
            "[信]": "https://j.vzan.cc/content/skin/emoji/new/112.gif",
            "[帅]": "https://j.vzan.cc/content/skin/emoji/new/113.gif",
            "[庆祝]": "https://j.vzan.cc/content/skin/emoji/new/114.gif",
            "[蜡烛]": "https://j.vzan.cc/content/skin/emoji/new/115.gif",
            "[生气]": "https://j.vzan.cc/content/skin/emoji/new/116.gif",
            "[棒棒糖]": "https://j.vzan.cc/content/skin/emoji/new/117.gif",
            "[奶瓶]": "https://j.vzan.cc/content/skin/emoji/new/118.gif",
            "[面条]": "https://j.vzan.cc/content/skin/emoji/new/119.gif",
            "[香蕉]": "https://j.vzan.cc/content/skin/emoji/new/120.gif",
            "[飞机]": "https://j.vzan.cc/content/skin/emoji/new/121.gif",
            "[汽车]": "https://j.vzan.cc/content/skin/emoji/new/122.gif",
            "[车头]": "https://j.vzan.cc/content/skin/emoji/new/123.gif",
            "[车厢]": "https://j.vzan.cc/content/skin/emoji/new/124.gif",
            "[车尾]": "https://j.vzan.cc/content/skin/emoji/new/125.gif",
            "[多云]": "https://j.vzan.cc/content/skin/emoji/new/126.gif",
            "[下雨]": "https://j.vzan.cc/content/skin/emoji/new/127.gif",
            "[钞票]": "https://j.vzan.cc/content/skin/emoji/new/128.gif",
            "[熊猫]": "https://j.vzan.cc/content/skin/emoji/new/129.gif",
            "[灯泡]": "https://j.vzan.cc/content/skin/emoji/new/130.gif",
            "[风车]": "https://j.vzan.cc/content/skin/emoji/new/131.gif",
            "[闹钟]": "https://j.vzan.cc/content/skin/emoji/new/132.gif",
            "[雨伞]": "https://j.vzan.cc/content/skin/emoji/new/133.gif",
            "[气球]": "https://j.vzan.cc/content/skin/emoji/new/134.gif",
            "[钻戒]": "https://j.vzan.cc/content/skin/emoji/new/135.gif",
            "[沙发]": "https://j.vzan.cc/content/skin/emoji/new/136.gif",
            "[厕纸]": "https://j.vzan.cc/content/skin/emoji/new/137.gif",
            "[药丸]": "https://j.vzan.cc/content/skin/emoji/new/138.gif",
            "[手枪]": "https://j.vzan.cc/content/skin/emoji/new/139.gif",
            "[青蛙]": "https://j.vzan.cc/content/skin/emoji/new/140.gif"
        },
        ResetUnreadMsgCount: function() {
            var e = $(".unreadMsgTip");
            e.find("var").text(0),
            e.removeAttr("firstmsgid"),
            e.hide()
        },
        showNormal: function(e) {
            function t(e) {
                var t = $("#tpl_recpro_" + e.content);
                $("#tpl_recprobanner_" + e.content).remove(),
                t.parent("li").remove(),
                t.parent("li").next(".news-alert-time").remove(),
                t.parent("li").prev(".news-alert-time").remove(),
                imwebsocket.delLiveMsgHandle(t.parent("li").attr("attr-id")),
                queryUtils.loadRecoProduct()
            }
            if (1 == zbvd.levels && (e.UserInfo = e.UserInfo || {},
            e.UserInfo.RoleId = 0, e.UserInfo.RoleName = ""), 39 == e.Msg.msgtype) e.goods = JSON.parse(e.Msg.content);
            else if (43 == e.Msg.msgtype || 44 == e.Msg.msgtype) {
                44 == e.Msg.msgtype && (e.Msg.msgtype = 1);
                var i = JSON.parse(e.tempid);
                i && (i.rolename && (e.UserInfo.RoleName = i.rolename), i.nickname && (e.UserInfo.nickname = i.nickname), i.userphoto && (e.UserInfo.headimgurl = i.userphoto), 1 != i.openShang && "1" != i.openShang || (e.UserInfo.RoleId = 4)),
                e.tempid = ""
            } else 50 == e.Msg.msgtype && (e.Msg.content = JSON.parse(e.Msg.content));
            if (e._zbvd = zbvd, imdebug && console.log(o), imdebug && console.log(e.Msg), (39 != e.Msg.msgtype || zbvd.IsScreen && 0 != zbvd.IsScreen) && 59 != e.Msg.msgtype) {
                var o = juicer(msgTpl.normalMsg, e);
                $("#chat-msglist").append(o)
            }
            if ($("#chat-msglist li").length > 40 && isScrollBottom && $("#chat-msglist li").slice(0, $("#chat-msglist li").length - 40).remove(), ("" != zbvd.skin || "2" == zbvd.shangType) && 6 == e.Msg.msgtype && "" != e.Msg.ParentId) {
                var n = ($(".live-wish-layout"), $(".wished-layout"));
                try {
                    if (e.Msg.ParentId.split("|").length <= 1) return;
                    wishedImg = e.Msg.ParentId.split("|")[0],
                    wishedPrice = '<font style="font-weight:bolder;max-width: 40%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">' + e.UserInfo.nickname + '</font>给主播祝福了<font style="font-weight:bolder;padding-left:3px;">¥' + (.01 * parseInt(e.Msg.ParentId.split("|")[1])).toFixed(2) + " 元</font>",
                    wishedTxt = e.Msg.ParentId.split("|")[2],
                    n.find("img").attr("src", wishedImg).end().find(".price").html(wishedPrice).end().find(".wish-txt").text(wishedTxt),
                    setTimeout(function() {
                        n.fadeIn(),
                        showWish = !1
                    },
                    300),
                    setTimeout(function() {
                        n.fadeOut(),
                        showWish = !0
                    },
                    6e3)
                } catch(e) {}
            }
            if (49 === e.Msg.msgtype && "提问" == e.Types)"function" == typeof getSocketQuestion && getSocketQuestion(e);
            else if (50 === e.Msg.msgtype) imdebug && console.log("remindAllRight"),
            "function" == typeof getSocketQuestion && remindAllRight(e);
            else if (25 == e.Msg.msgtype) {
                var s = {
                    id: e.Msg.VoteInfo.VoteId,
                    title: e.Msg.content,
                    datatype: e.Msg.VoteInfo.DataType,
                    votetype: e.Msg.VoteInfo.VoteType,
                    votetype_name: e.Msg.VoteInfo.VoteType_Name,
                    msgIds: e.Msg.msgIds
                };
                1 == s.votetype ? $(".vertical-vote-icon").children("a").attr("href", "/live/votetext?tpid=" + zbvd.topicid + "&voteid=" + s.id + "&datatype=" + s.datatype) : $(".vertical-vote-icon").children("a").attr("href", "/live/VoteSmallVodieAndPic?tpid=" + zbvd.topicid + "&voteid=" + s.id + "&datatype=" + s.datatype),
                $(".vertical-vote-icon").show(),
                $(".line-vote").html(juicer($("#tpl_topvote").html(), s)).fadeIn()
            } else if (15 == e.Msg.msgtype || 18 == e.Msg.msgtype) $(".qianghongbao").attr("rid", e.Msg.ParentId).fadeIn();
            else if (29 == e.Msg.msgtype) $(".youhuiquan").attr("guid", e.Msg.tnickName).fadeIn();
            else if (39 == e.Msg.msgtype) {
                if ("-1" == e.Msg.ParentId) try {
                    var a = JSON.parse(e.Msg.content);
                    "[object Array]" == Object.prototype.toString.call(a) ? $.each(a,
                    function(e, i) {
                        t(i)
                    }) : t(e.Msg)
                } catch(i) {
                    t(e.Msg)
                } else {
                    var a = JSON.parse(e.Msg.content);
                    a.link = -1 == a.freight ? a.Subtitle: "/live/product-" + a.Id + "?ztpid=" + zbvd.topicid,
                    $(".line-vote").hide(),
                    $(".line-Product").html(juicer($("#tpl_recprobanner").html(), {
                        goods: a
                    })).fadeIn()
                }
                goodsApp && goodsApp.refreshData()
            } else if (40 == e.Msg.msgtype) $("#liveshop-immsg").html(juicer($("#live-win-msg").html(), {
                msgwords: e.Msg.content
            })).fadeIn();
            else if (48 == e.Msg.msgtype) {
                var d = parseInt(e.Msg.ParentId || -999);
                if (d > -999) switch (imdebug && console.log(d), d) {
                case 0:
                case 2:
                    "none" == $(".showAuctionQrcode").css("display") && $(".showAuctionQrcode").show(),
                    $("#showAuctionIcon").attr("src", $("#showAuctionIcon")[0].src.replace("nobegin", "begin")),
                    liveControl.popupAuctionQrcode();
                    break;
                case 1:
                case 3:
                    "none" == $(".showAuctionQrcode").css("display") && $(".showAuctionQrcode").show();
                    break;
                case - 1 : $(".showAuctionQrcode").hide()
                }
                return ! 1
            }
            if (isScrollBottom) scrollbottomtimer && (clearTimeout(scrollbottomtimer), scrollbottomtimer = null),
            scrollbottomtimer = setTimeout(function() {
                zbvd.IsScreen && "2" == zbvd.modeltype && zbvd.ouPaiCustomId.indexOf("," + zbvd.zbid + ",") > -1 ? utils.moveToEndByOuPai($(".liveBoxContent"),
                function() {}) : utils.moveToEnd($("#speakBox"),
                function() {})
            },
            1);
            else if (11 != e.Msg.msgtype && 10 != e.Msg.msgtype && 9 != e.Msg.msgtype && 8 != e.Msg.msgtype && (!zbvd.IsScreen || "2" != zbvd.modeltype || zbvd.ouPaiCustomId.indexOf("," + zbvd.zbid + ",") <= -1 || 16 != e.Msg.msgtype)) {
                var r = $(".unreadMsgTip"),
                c = parseInt(r.find("var").text()) || 0;
                0 == c && r.attr("firstmsgid", e.Msg.Ids),
                r.find("var").text(c += 1),
                r.show()
            }
            if (1 == e.Msg.msgtype && "" != e.Msg.ParentId && 0 != zbvd.userid && e.Msg.tuserId == zbvd.userid) {
                var l = $(".huifu-alert");
                l.attr("lastmsgids", e.Msg.Ids),
                l.show()
            }
            59 === e.Msg.msgtype && ShowLotteryViewer(e.Msg)
        }
    },
    queryUtils = {
        loadRecoProduct: function() {
            "Shop" != zbvd.tplname && 1 != zbvd.shopMenu || (1 == zbvd.IsScreen ? setTimeout(function() {
                $.post("/live/GetNewVote", {
                    tpid: zbvd.topicid,
                    zbid: zbvd.zbid,
                    msgtype: 39
                },
                function(e) {
                    if (e && e.isok && "" != e.Msg) {
                        var t = JSON.parse(e.Msg);
                        t.link = -1 == t.freight ? t.Subtitle: "/live/product-" + t.Id + "?ztpid=" + zbvd.topicid,
                        $("#tpl_recprobanner").length > 0 && ($(".line-vote").hide(), $(".line-Product").html(juicer($("#tpl_recprobanner").html(), {
                            goods: t
                        })).fadeIn())
                    }
                })
            },
            3500) : setTimeout(function() {
                $.post("/live/getrecomendinfo", {
                    tpid: zbvd.topicid,
                    zbid: zbvd.zbid,
                    msgtype: 39,
                    rctype: 1
                },
                function(e) {
                    if (e && e.isok && e.dataObj) {
                        var t = e.dataObj;
                        t.link = -1 == t.freight ? t.Subtitle: "/live/product-" + t.Id + "?ztpid=" + zbvd.topicid,
                        $("#tpl_recprobanner").length > 0 && $(".line-Product").html(juicer($("#tpl_recprobanner").html(), {
                            goods: t
                        })).fadeIn()
                    }
                })
            },
            3500))
        }
    },
    dohand = null,
    isTalking = !1,
    reconncount = 0,
    isLoading = !0,
    hasTalkHistory = !0,
    queue_gift = {},
    gift_time = 6e3,
    msgScroll = null,
    imwebsocket = {
        Init: function() {
            this.BindEvent(),
            zbvd.block && imwebsocket.BlockUser(),
            zbvd.blockall && ((parseInt(zbvd.roleid) || 0) <= 0 || zbvd.repayId > 0) && imwebsocket.BlockAll(),
            imwebsocket.GetHistoryMsg(function() {
                "Vertical" == zbvd.tplname ? utils.moveToEnd($("#speakBox")) : (wxvideoplayer.resizeContentHeight(), utils.moveToEnd($("#speakBox")))
            });
            new Swiper("#topimgSlide", {
                useCSS3Transforms: !1,
                autoHeight: !0,
                pagination: "#topimgSlide .swiper-pagination",
                paginationClickable: !0,
                autoplay: 3600,
                onPaginationRendered: function(e, t) {
                    e.slides.length > 1 ? $("#topimgSlide .swiper-pagination").show() : $("#topimgSlide .swiper-pagination").hide()
                }
            });
            $(".scrollWrap .live-qiye-notice").length > 0 && $(".line-vote").css({
                top: $(".live-qiye-notice").height()
            }),
            queryUtils.loadRecoProduct(),
            setTimeout(function() {
                $.post("/live/GetNewVote", {
                    tpid: zbvd.topicid,
                    zbid: zbvd.zbid,
                    msgtype: 25
                },
                function(e) {
                    if (e && e.isok) {
                        var t = {
                            id: e.dataObj.VoteInfo.VoteId,
                            title: e.dataObj.VoteTitle,
                            datatype: e.dataObj.VoteInfo.DataType,
                            votetype: e.dataObj.VoteInfo.VoteType,
                            votetype_name: e.dataObj.VoteInfo.VoteType_Name
                        };
                        $(".line-vote").html(juicer($("#tpl_topvote").html(), t)).fadeIn()
                    }
                })
            },
            3500),
            setTimeout(function() {
                utils.moveToEnd($("#speakBox"))
            },
            500),
            heart.Init(),
            WebSocket && null == wss && imwebsocket.ConnectServer(),
            null == pptSwiper && (pptSwiper = new Swiper(".swiper-container.liveppt", {
                nextButton: ".liveppt-btn-wrap .btn-next",
                prevButton: ".liveppt-btn-wrap .btn-pre",
                pagination: ".swiper-pagination",
                paginationType: "fraction",
                lazyLoading: !0,
                preloadImages: !1,
                onLazyImageReady: function(e, t, i) {
                    tabSwiper && tabSwiper.onResize()
                }
            }))
        },
        BindEvent: function() {
            wxvideoplayer.resizeContentHeight(),
            tabSwiper = new Swiper("#tab-content", {
                useCSS3Transforms: !1,
                autoHeight: !0,
                lazyLoading: !0,
                preloadImages: !1,
                onSlideChangeStart: function(e) {
                    22 == $(".live-qiye-nav li").eq(e.activeIndex).attr("menustate") ? $("#oupai-custom").show() : $("#oupai-custom").hide(),
                    wxvideoplayer.resizeContentHeight()
                },
                onSlideChangeEnd: function(e) {
                    $(".live-qiye-nav li:not([nobind])").eq(e.activeIndex).addClass("on").siblings().removeClass("on")
                },
                onTransitionEnd: function(e) {
                    var t = $(".live-qiye-nav li").eq(e.activeIndex),
                    i = parseInt(t.attr("menustate"));
                    if (22 == i) {
                        var o = $("#tab-content-msgwrapper"),
                        n = (o.attr("style") || "").replace(/\s/gi, "").replace("transform:translate3d(0px,0px,0px);", "").replace("transition-duration:0ms;", "").replace("-webkit-transform:translate3d(0px,0px,0px);", "");
                        o.attr("style", n),
                        $(".inputbar,.toolmenu").show(),
                        $("#new-menu-btn").css("display", "none")
                    } else $(".inputbar,#c-gift,.toolmenu").hide(),
                    $("#new-menu-btn").css("display", "block"),
                    19 == i ? $(".interact-btn").show() : $(".interact-btn").hide();
                    t.data("showcar") ? zbvd.isadmin ? $("div.look-buy-bottom-nav-fix").show() : $("#shopCar").show() : ($("#shopCar").hide(), $("div.look-buy-bottom-nav-fix").hide()),
                    $(".live-qiye-nav li").eq(e.activeIndex).hasClass("house_intro") ? $("#house_intro").show() : $("#house_intro").hide(),
                    $(".live-qiye-nav li").eq(e.activeIndex).hasClass("house_type") ? $("#house_typeInfo").show() : $("#house_typeInfo").hide(),
                    $(".live-qiye-nav li").eq(e.activeIndex).hasClass("house_coupon") ? zbvd.isadmin ? $("#house_couponInfo").show() : $("#house_coupon_appoint").show() : zbvd.isadmin ? $("#house_couponInfo").hide() : $("#house_coupon_appoint").hide(),
                    $("#tab-content-msgwrapper>.swiper-slide").eq(e.activeIndex).hasClass("isfree") ? (zbvd.isfree && (zbvd.isadmin || zbvd.levels), $("#upgradelink").show()) : $("#upgradelink").hide(),
                    setTimeout(function() {
                        e.onResize()
                    },
                    2e3)
                }
            }),
            $("#banglist-content").length > 0 && (imwebsocket.InitInviteTabList(), $(document).on(ClickOrTap, ".ranking-tab li",
            function() {
                $(this).addClass("on").siblings().removeClass("on");
                var e = $(this).index(".ranking-tab li");
                bangSwiper.slideTo(e, 300,
                function() {
                    bangSwiper.onResize(),
                    tabSwiper.onResize()
                })
            }).on(ClickOrTap, ".p_rule",
            function(e) {
                return e.stopPropagation(),
                $(this).find(".rule-down").toggleClass("rule-up"),
                $(this).next().toggle(),
                bangSwiper.onResize(),
                tabSwiper.onResize(),
                !1
            })),
            $(document).on("click", ".live-qiye-nav li:not([nobind])",
            function() {
                var e = $(this).index(".live-qiye-nav li:not([nobind])");
                8 == $(this).attr("menustate") ? tabSwiper.slideTo(e, 300, !0) : 2 == $(this).attr("menustate") ? (imwebsocket.InitInviteTabList(), tabSwiper.slideTo(e, 300, !0)) : tabSwiper.slideTo(e, 300, !0)
            }),
            $(".recordingMsg").each(function() {
                imReaded($(this).closest("li").attr("attr-id"))
            }),
            $(".c_loading").length < 0 && $("#chat-msglist").before("<div class='c_loading' style='text-align: center;font-size:14px;color: gray;visibility: hidden;'>下拉加载更多</div>"),
            $("#speakBox").scroll(function(e) {
                $("#speakBox").scrollTop() <= 0 && (ismsgtop = !0, imwebsocket.GetHistoryMsg(function() {
                    $(".recordingMsg").each(function() {
                        imReaded($(this).closest("li").attr("attr-id"))
                    }),
                    ismsgtop = !1
                }))
            }),
            $("#speakBox .liveBoxContent").scroll(function(e) {
                $("#speakBox .liveBoxContent").scrollTop() <= 0 && (ismsgtop = !0, imwebsocket.GetHistoryMsg(function() {
                    $(".recordingMsg").each(function() {
                        imReaded($(this).closest("li").attr("attr-id"))
                    }),
                    ismsgtop = !1
                }))
            });
            var e = "",
            t = "",
            i = "",
            o = !0;
            $(document).on("click", ".liveppt-btn.btn-first",
            function() {
                null != pptSwiper && pptSwiper.slideTo(0, 300)
            }).on("click", ".liveppt-btn.btn-last",
            function() {
                null != pptSwiper && pptSwiper.slides.length > 0 && pptSwiper.slideTo(pptSwiper.slides.length - 1, 300)
            }).on("click", ".first-btn.btn-first",
            function() {
                null != pptSwiper && pptSwiper.slideTo(0, 300)
            }).on("click", ".last-btn.btn-first",
            function() {
                null != pptSwiper && pptSwiper.slides.length > 0 && pptSwiper.slideTo(pptSwiper.slides.length - 1, 300)
            }).on("click", ".huifu-alert",
            function(e) {
                var t = $(this).attr("lastmsgids");
                if (!utils.IsNullOrEmpty(t) && $("#chat-msglist li[attr-id='" + t + "']").get(0)) {
                    $("#chat-msglist li[attr-id='" + t + "']").get(0).scrollIntoView();
                    var i = $("#chat-msglist li[attr-id='" + t + "']")[0].offsetTop;
                    $("#speakBox").animate({
                        scrollTop: i - 20
                    },
                    "slow")
                }
                $(".huifu-alert").attr("lastmsgids", "").hide(),
                e.stopPropagation()
            }).on("click", ".huifu-alert-icon-close",
            function(e) {
                $(".huifu-alert").attr("lastmsgids", "").hide(),
                e.stopPropagation()
            }).on("click", "li[attr-nickname][data-msgtype='1'][attr-uid!='-1'] .msg-content",
            function(e) {
                if (!$(this).parent().is(".oupai-dynamic")) {
                    var t = $(this).closest("li"),
                    i = t.attr("attr-nickname"),
                    o = t.attr("attr-id");
                    if (!utils.IsNullOrEmpty(o)) {
                        var n = "";
                        n = $(this).hasClass("huifu") ? i + ":" + $(this).find(".msg-content-huifu>span").text() : i + ":" + $.trim($(this).text()),
                        "Vertical" == zbvd.tplname ? ($("#btn_clicksend").attr({
                            commentid: t.attr("attr-id"),
                            tuserid: t.attr("attr-uid")
                        }), n = "回复 " + n, VerticalModel && VerticalModel.SpeakInputShow()) : ($("body").addClass("replymsg"), $(".dm_switch").prop("checked", !1), $(".btnLiveTalk").attr({
                            commentid: t.attr("attr-id"),
                            tuserid: t.attr("attr-uid")
                        })),
                        $(".speakInput").attr("placeholder", n).data("msgtype", 1),
                        e.stopPropagation()
                    }
                }
            }).on("click", "li[attr-nickname][data-msgtype='1'][attr-uid!='-1'] .oupaiMsgContent",
            function(e) {
                console.log("消息回复");
                var t = $(this).closest("li"),
                i = t.attr("attr-nickname"),
                o = t.attr("attr-id");
                if (!utils.IsNullOrEmpty(o)) {
                    var n = "";
                    n = $(this).hasClass("huifu") ? i + ":" + $(this).find(".msg-content-huifu>span").text() : i + ":" + $.trim($(this).text()),
                    "Vertical" == zbvd.tplname ? ($("#btn_clicksend").attr({
                        commentid: t.attr("attr-id"),
                        tuserid: t.attr("attr-uid")
                    }), n = "回复 " + n, VerticalModel && VerticalModel.SpeakInputShow()) : ($("body").addClass("replymsg"), $(".dm_switch").prop("checked", !1), $(".btnLiveTalk").attr({
                        commentid: t.attr("attr-id"),
                        tuserid: t.attr("attr-uid")
                    })),
                    $(".speakInput").attr("placeholder", n).data("msgtype", 1),
                    e.stopPropagation()
                }
            }).on("click", ".backContentBox",
            function() {
                $("body").removeClass("replymsg"),
                $(".speakInput").attr("placeholder", "来说点什么吧..."),
                $(".btnLiveTalk").attr({
                    commentid: "",
                    tuserid: 0
                })
            }).on("click", ".marry-chat-delete",
            function(e) {
                $(this);
                speakId = $(this).closest("li").attr("attr-id"),
                popup.confirm("温馨提示", "确定撤回吗？", ["确定", "取消"],
                function(e) {
                    "ok" == $(e.target).attr("class") && imwebsocket.UnDo(speakId, 1),
                    this.hide()
                }),
                e.stopPropagation()
            }).on("click", ".unreadMsgTip",
            function() {
                $(this).attr("firstmsgid");
                1 == zbvd.IsScreen && "2" == zbvd.modeltype && zbvd.ouPaiCustomId.indexOf("," + zbvd.zbid + ",") > -1 ? utils.moveToEndByOuPai($(".liveBoxContent"),
                function() {}) : utils.moveToEnd($("#speakBox"),
                function() {}),
                $(this).find("var").text(0),
                $(this).removeAttr("firstmsgid"),
                $(this).hide()
            }).on("click", ".userphoto,.redbag-list>li>img,a.remove-msg,.oupaiName",
            function(e) {
                function t(e, t) {
                    e.removeClass("weui_actionsheet_toggle"),
                    t.removeClass("weui_fade_toggle"),
                    t.on("transitionend",
                    function() {
                        t.hide()
                    }).on("webkitTransitionEnd",
                    function() {
                        t.hide()
                    }),
                    $("#actionSheet_wrap").hide()
                }
                var i = zbvd.roleid > 0 || zbvd.levels > 0,
                o = $("#actionSheet_wrap").data("issuper");
                i ? $(".weui_actionsheet_menu[block],.weui_actionsheet_menu[unblock]").show() : $(".weui_actionsheet_menu[block],.weui_actionsheet_menu[unblock]").hide(),
                i && (0 != zbvd.repayId && zbvd.topicid != $(this).parent("div").parent("li").attr("relayTopicId") ? 1 != o && ($(".weui_actionsheet_menu[block]").find(".weui_actionsheet_cell[type='1']").hide(), $(".weui_actionsheet_menu[unblock]").find(".weui_actionsheet_cell[type='1']").hide()) : ($(".weui_actionsheet_menu[block]").find(".weui_actionsheet_cell[type='1']").show(), $(".weui_actionsheet_menu[unblock]").find(".weui_actionsheet_cell[type='1']").show()));
                var n, s;
                if ($(e.target).is("[from_reward]")) s = $(this).attr("uid"),
                $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[delmsg]").hide(),
                $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[shang]").hide();
                else {
                    n = $(this).closest("li"),
                    s = n.attr("attr-uid"),
                    $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[shang]").show(),
                    $(".weui_actionsheet_menu[delmsg]").data("msgid", n.attr("attr-id"));
                    try {
                        $(".weui_actionsheet_menu[topmsg]").data("msgid", n.attr("attr-id")),
                        $(".weui_actionsheet_menu[deltopmsg]").data("msgid", n.attr("attr-id")),
                        1 == n.data("msgtype") ? ($(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[topmsg]").show(), $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[deltopmsg]").hide(), $(".weui_actionsheet_menu[topmsg]").data("msgtype", n.data("msgtype"))) : 43 == n.data("msgtype") ? ($(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[topmsg]").hide(), $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[deltopmsg]").show(), $(".weui_actionsheet_menu[deltopmsg]").data("msgtype", n.data("msgtype"))) : ($(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[topmsg]").hide(), $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[deltopmsg]").hide())
                    } catch(e) {}
                    zbvd.roleid > 0 || zbvd.levels > 0 || zbvd.userid > 0 && zbvd.userid == s ? $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[delmsg]").show() : $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[delmsg]").hide(),
                    i && 0 != zbvd.repayId && zbvd.topicid != $(this).parent("div").parent("li").attr("relayTopicId") && (1 != o ? $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[delmsg]").hide() : $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[delmsg]").show(), $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[topmsg]").hide(), $(".weui_actionsheet.userphotomenu .weui_actionsheet_menu[deltopmsg]").hide())
                }
                var a = $(this).closest("li").attr("attr-id");
                $(".weui_actionsheet_cell,.complaint").attr("ids", a),
                $("#actionSheet_wrap").show();
                var d = $("#mask"),
                r = $("#weui_actionsheet");
                r.addClass("weui_actionsheet_toggle"),
                d.show().focus().addClass("weui_fade_toggle").one("click",
                function() {
                    t(r, d)
                }),
                $(".weui_actionsheet_menu").attr("uid", s);
                var c = $(this).closest("li").attr("attr-headimg"),
                l = $(this).closest("li").attr("attr-nickname"),
                p = $("#weui_actionsheet").find(".weui_actionsheet_cell.shangzhubo");
                p.data("hostimg", c),
                p.data("hostuserid", s),
                p.data("hostusername", l),
                $("#actionsheet_cancel").one("click",
                function() {
                    $(".weui_actionsheet_menu").removeAttr("uid", s),
                    t(r, d)
                }),
                d.unbind("transitionend").unbind("webkitTransitionEnd")
            }).on("click", ".unglobalword",
            function(e) {
                var t = $(this).attr("ids"),
                i = $(this).attr("type");
                $.ajax({
                    type: "POST",
                    url: "/liveajax/globalwordoper",
                    data: {
                        topicid: zbvd.topicid,
                        types: i,
                        ids: t
                    },
                    success: function(e) {
                        layer.msg(e.Msg),
                        setTimeout(function() {
                            $("#actionSheet_wrap").hide(),
                            layer.closeAll()
                        },
                        1e3)
                    }
                }),
                e.stopPropagation()
            }).on("click", ".setgolbalbackreason",
            function(e) {
                var t = $(".setgolbalbackreason").attr("uid"),
                i = $("input[name='golbalbackreason']:checked").val(),
                o = "1" == i ? "欺诈": "2" == i ? "色情低俗": "3" == i ? "政治敏感": "4" == i ? "违法暴力": "5" == i ? "血腥残暴": "6" == i ? "广告骚扰": "7" == i ? "侮辱谩骂": "";
                $.ajax({
                    type: "POST",
                    url: "/liveajax/globallock",
                    data: {
                        id: zbvd.zbid,
                        uid: t,
                        tpid: zbvd.topicid,
                        types: 0,
                        reasonstr: o
                    },
                    success: function(e) {
                        layer.msg(e.Msg),
                        setTimeout(function() {
                            layer.closeAll(),
                            $("#actionSheet_wrap").hide()
                        },
                        1e3)
                    }
                }),
                e.stopPropagation()
            }).on("click", ".weui_actionsheet_menu[block] .weui_actionsheet_cell",
            function() {
                if ($(this).attr("class").indexOf("unglobalword") > -1) return ! 1;
                var e = $(this).closest(".weui_actionsheet_menu").attr("uid");
                e = parseInt(e) || 0;
                var t = "",
                i = $(this).attr("type"),
                o = $(this).attr("tag"),
                n = "",
                s = "";
                if (1 == i) t = "setuserback";
                else {
                    if (2 == i) return $(".setgolbalbackreason").attr("uid", e),
                    layer.open({
                        title: "选择原因",
                        type: 1,
                        skin: "layui-layer-demo",
                        area: ["80%", "50%"],
                        closeBtn: 1,
                        anim: 2,
                        shadeClose: !0,
                        content: $("#gobal_backreason").html()
                    }),
                    !1;
                    if (3 == i) {
                        e = $(".setgolbalbackreason").attr("uid");
                        var a = $("input[name='golbalbackreason']:checked").val();
                        n = "1" == a ? "欺诈": "2" == a ? "色情低俗": "3" == a ? "政治敏感": "4" == a ? "违法暴力": "5" == a ? "血腥残暴": "6" == a ? "广告骚扰": "7" == a ? "侮辱谩骂": "",
                        t = "globallock",
                        s = 0
                    }
                }
                if (0 == e || "" == t) return void layer.msg("拉黑失败");
                $.ajax({
                    type: "POST",
                    url: "/liveajax/" + t,
                    data: {
                        id: zbvd.zbid,
                        uid: e,
                        tpid: zbvd.topicid,
                        types: s,
                        tag: o,
                        reasonstr: n
                    },
                    success: function(e) {
                        layer.msg(e.Msg),
                        setTimeout(function() {
                            layer.closeAll()
                        },
                        1e3)
                    }
                });
                var d = $("#mask"),
                r = $("#weui_actionsheet");
                r.addClass("weui_actionsheet_toggle"),
                $(".weui_actionsheet_menu").removeAttr("uid", e),
                function(e, t) {
                    e.removeClass("weui_actionsheet_toggle"),
                    t.removeClass("weui_fade_toggle"),
                    t.on("transitionend",
                    function() {
                        t.hide()
                    }).on("webkitTransitionEnd",
                    function() {
                        t.hide()
                    }),
                    $(".backContentBox").click(),
                    $("#actionSheet_wrap").hide()
                } (r, d)
            }).on("click", ".weui_actionsheet_menu[unblock] .weui_actionsheet_cell",
            function() {
                var e = $(this).closest(".weui_actionsheet_menu").attr("uid"),
                t = "",
                i = $(this).attr("type"),
                o = "";
                if (1 == i ? t = "unlock": 2 == i && (t = "globallock", o = 1), 0 == (e = parseInt(e) || 0) || "" == t) return void $(document).minTipsBox({
                    tipsContent: "设置失败",
                    tipsTime: 1
                });
                $.ajax({
                    type: "POST",
                    url: "/liveajax/" + t,
                    data: {
                        id: zbvd.zbid,
                        uid: e,
                        tpid: zbvd.topicid,
                        types: o
                    },
                    success: function(e) {
                        $(document).minTipsBox({
                            tipsContent: e.Msg,
                            tipsTime: 1
                        })
                    }
                });
                var n = $("#mask"),
                s = $("#weui_actionsheet");
                s.addClass("weui_actionsheet_toggle"),
                $(".weui_actionsheet_menu").removeAttr("uid", e),
                function(e, t) {
                    e.removeClass("weui_actionsheet_toggle"),
                    t.removeClass("weui_fade_toggle"),
                    t.on("transitionend",
                    function() {
                        t.hide()
                    }).on("webkitTransitionEnd",
                    function() {
                        t.hide()
                    }),
                    $("#actionSheet_wrap").hide()
                } (s, n)
            }).on("click", ".weui_actionsheet_menu[delmsg]",
            function() {
                try {
                    $("#actionsheet_cancel").click()
                } catch(e) {}
                speakId = $(this).data("msgid"),
                popup.confirm("温馨提示", "确定撤回吗？", ["确定", "取消"],
                function(e) {
                    if ("ok" == $(e.target).attr("class")) {
                        imwebsocket.UnDo(speakId, 1);
                        var t = $(".chat-msglist li[attr-id='" + speakId + "']");
                        t.next(".news-alert-time").remove(),
                        t.prev(".news-alert-time").remove(),
                        t.slideUp("fast",
                        function() {
                            t.remove()
                        })
                    }
                    this.hide()
                })
            }).on("click", ".weui_actionsheet_menu[topmsg]",
            function() {
                try {
                    $("#actionsheet_cancel").click()
                } catch(e) {}
                speakId = $(this).data("msgid");
                var e = -1;
                $.when($.post("/liveajax/checkVouchNums", {
                    tpid: zbvd.topicid
                })).done(function(t) {
                    t.isok ? e = parseInt(t.code) : "01" == t.code && layer.msg(t.Msg)
                }).always(function() {
                    e > -1 && e < 3 ? popup.confirm("温馨提示", "确定推荐消息吗？", ["确定", "取消"],
                    function(e) {
                        if ("ok" == $(e.target).attr("class")) {
                            var t = $(".chat-msglist li[attr-id='" + speakId + "']"),
                            i = {
                                userphoto: t.find(".userphoto").attr("src"),
                                rolename: t.find(".rolename").text(),
                                openShang: t.find("img").hasClass("RoleShang") ? 1 : 0
                            },
                            o = t.find(".nickname").clone();
                            o.find(":nth-child(n)").remove(),
                            i.nickname = $.trim(o.text()),
                            imwebsocket.TopMsg(speakId, 43, i);
                            var n = $(".chat-msglist li[attr-id='" + speakId + "']");
                            n.slideUp("fast",
                            function() {
                                n.remove()
                            })
                        }
                        this.hide()
                    }) : e >= 3 ? layer.msg("消息推荐失败，消息推荐最大数量不能超过3条！") : layer.msg("消息推荐失败,请稍后再试！")
                })
            }).on("click", ".weui_actionsheet_menu[deltopmsg]",
            function() {
                try {
                    $("#actionsheet_cancel").click()
                } catch(e) {}
                speakId = $(this).data("msgid"),
                popup.confirm("温馨提示", "确定取消推荐消息吗？", ["确定", "取消"],
                function(e) {
                    if ("ok" == $(e.target).attr("class")) {
                        var t = $(".chat-msglist li[attr-id='" + speakId + "']"),
                        i = {
                            userphoto: t.find(".userphoto").attr("src"),
                            rolename: t.find(".rolename").text(),
                            openShang: t.find("img").hasClass("RoleShang") ? 1 : 0
                        },
                        o = t.find(".nickname").clone();
                        o.find(":nth-child(n)").remove(),
                        i.nickname = $.trim(o.text()),
                        imwebsocket.TopMsg(speakId, 44, i);
                        var n = $(".chat-msglist li[attr-id='" + speakId + "']");
                        n.slideUp("fast",
                        function() {
                            n.remove()
                        })
                    }
                    this.hide()
                })
            }).on("click", ".live_otherPay",
            function() {
                $(".QRcodePay").show()
            }).on("click", ".QRcodePay",
            function(e) {
                if ("redbag_count_label" == e.target.className || "money_count" == e.target.className || "gene_btn gene_confirm" == e.target.className) return ! 1;
                $(".QRcodePay").hide()
            }).on("click", ".news-alert-red-packet.reward>span",
            function() {
                $(".LmTipsBox").attr("attr-id", $(this).closest("li").attr("attr-id")),
                $(".live_headpic img,.live_head_pic img").attr("src", $(this).data("imgurl")),
                $(".thank_money var").text(Number($(this).data("money")) / 100),
                i = $(this).data("response"),
                e = $(this).find("var").eq(0).text(),
                t = $(this).find("var").eq(1).text(),
                $(".replyresult .r1").text(t),
                $(".replyresult .r2").text(e);
                var o = $(this).closest("li");
                $(".LmTipsBox .live_towhy").html(e + "<var>赞赏了</var>" + t),
                o.hasClass("qiangqinbag") && $(".LmTipsBox .live_towhy").html(e + "<var>为抢亲加油！</var>"),
                "" != i && "null" != i ? ("baobao" == i ? $(".replyresult .r3").text("拥抱") : "loveyou" == i ? $(".replyresult .r3").text("握手") : "meme" == i && $(".replyresult .r3").text("么么哒"), $(".replyresult").show(), $(".thankBox").hide()) : ($(".replyresult").hide(), $(".replyresultNone").show(), "true" == $(this).data("myself") && ($(".LmTipsBox .live_towhy").html(e + "<var>赞赏了</var>你"), $(".thankBox").show(), $(".rgdetail").show())),
                $(".rgdetail").show(),
                $(".redbag_rule_2").show(),
                "true" == $(this).data("myself") && ($(".redbag_rule_2").hide(), $(".redbag_rule_3").show()),
                $(".thank_money").show(),
                "" != $(this).attr("data-money") && "null" != $(this).attr("data-money") && void 0 != $(this).attr("data-money") || $(".thank_money").hide(),
                $(".LmTipsBox").css({
                    top: "0",
                    display: "block"
                })
            }).on("click", ".rgdetail .rglist",
            function() {
                $(".managerThankBox").slideToggle(),
                o ? (o = !1, $(this).parent(".rgdetail").addClass("on")) : (o = !0, $(this).parent(".rgdetail").removeClass("on")),
                $(".rewrd-content-box").slideToggle()
            }).on("click", ".LmTipsBox",
            function(e) {
                if ("rglist" == e.target.className) return ! 1;
                $(this).hide(),
                $(".managerThankBox").hide(),
                $(".rgdetail").hide(),
                $(".replyresultNone").hide(),
                $(".redbag_rule_3").hide(),
                o = !0,
                $(".rgdetail").removeClass("on")
            }).on("click", ".redbag_box .redbag_cancel",
            function(e) {
                $(".redbag_box").css("top", "999px")
            }).on("click", "#livevote-sendvote .dialog-vote-select-bt",
            function() {
                var e = parseInt($("#livevote-sendvote :radio:checked").eq(0).val()) || 0,
                t = $("#livevote-sendvote :radio:checked").eq(0).parent().find("label").text();
                if (e <= 0) return $(document).minTipsBox({
                    tipsContent: "请选择要发送的投票！",
                    tipsTime: 1
                }),
                !1;
                imwebsocket.SendMessage("vote", t, "", e, 0, 25),
                $("#livevote-sendvote").hide()
            }).on("click", "#btnVoterPublish",
            function() {
                UpdateVote(),
                $("#divConfirm").toggle(),
                $("#livevote").toggle(),
                imwebsocket.SendMessage("vote", _votetitle, "", _voteid + "@" + _datatype + "@" + _votetype_name + "@" + _votetype, 0, 25)
            }).on("click", "#coupon-select-send",
            function() {
                if (1 != $("#coupon-select-list :radio[name='RememberMe']:checked").length) return void $(document).minTipsBox({
                    tipsContent: "请选择要发送的优惠券",
                    tipsTime: 1
                });
                var e = $("#coupon-select-list :radio[name='RememberMe']:checked").eq(0),
                t = e.val() || "",
                i = e.parent().find(".f-15rem").eq(0).text(),
                o = parseInt(e.attr("_id")) || 0,
                n = e.attr("_ltype") || "0";
                imwebsocket.SendMessage("coupon", i, o, t, 0, 29, n),
                e.prop("checked", !1),
                $("#coupon-select-win").hide()
            }).on("click", "#recommend-product",
            function() {
                var e = $(this);
                if (1 == e.attr("isloading")) return ! 1;
                e.attr("isloading", 1);
                var t = e.data("pid") == e.data("type") && e.data("type") > 0;
                $.post("/liveajax/RecommendProduct", {
                    tpid: zbvd.topicid,
                    productId: e.data("pid"),
                    type: t ? 0 : 1
                },
                function(t) {
                    if (setTimeout(function() {
                        e.attr("isloading", 0)
                    },
                    1500), t.isok) {
                        var i = !1;
                        e.data("pid") == e.data("type") ? (i = !0, layer.msg("取消推荐成功")) : (i = !1, layer.msg("推荐成功"));
                        var o = {
                            productid: e.data("pid"),
                            type: i ? "cancel_recommend_procuct": "recommend_procuct"
                        };
                        imwebsocket.SendMessage("recommend_procuct", JSON.stringify(o), 0, 0, 0, 68, "NotInSave")
                    } else layer.msg(t.Msg)
                })
            }).on("click", ".btnSetRecPro",
            function(e) {
                var t = $(this).attr("data-target"),
                i = $(this).data("id");
                $.post("/liveajax/setrecpro", {
                    id: i,
                    target: t,
                    zid: $(this).data("zid"),
                    tpid: zbvd.topicid
                },
                function(e) {
                    return ! (!e || !e.isok) && (getProList(), $(document).minTipsBox({
                        tipsContent: "操作成功",
                        tipsTime: 1
                    }), "1" == t ? imwebsocket.SendMessage("", i, "", 0, 0, 39, "SysMsg") : imwebsocket.SendMessage("", i, "-1", 0, 0, 39, "SysMsg"), !0)
                },
                "json"),
                e.stopPropagation()
            }).on("click", "#handle-undo-product",
            function(e) {
                var t = $(this).data("id");
                "1" == $(this).data("target") ? imwebsocket.SendMessage("", t, "", 0, 0, 39) : imwebsocket.SendMessage("", t, "-1", 0, 0, 39),
                e.stopPropagation()
            }).on("click", "#getshopcoupon",
            function(e) {
                var t = $("#getshopcoupon").attr("code");
                $.post("/liveajax/CouponHandler", {
                    otype: "GetCoupon",
                    CouponGuid: t,
                    topicId: zbvd.topicid
                },
                function(e) {
                    layer.msg(e.Msg)
                })
            }).on("click", ".ver-pick-btn.addcar,.ver-pick-btn.tobuy",
            function(e) {
                var t = zbvd.loginuser.nickname;
                /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(t) && t.length > 2 && (t = t.substr(0, 1) + "***" + t.substr( - 1));
                var i = t;
                $(this).hasClass("tobuy") ? i += "正在购买": i += "已加入购物车",
                imwebsocket.SendMessage("", i, "", 0, 0, 1, "SysMsg")
            })
        },
        uid: zbvd.userid,
        rid: zbvd.roleid,
        islogin: function() {
            return ! 0
        },
        ReConnect: function() {
            clearInterval(dohand),
            zbvd.block || (dohand = setInterval(function() { (null == wss || 3 == wss.readyState) && reconncount < 8 ? (imwebsocket.ConnectServer(), reconncount += 1) : clearInterval(dohand)
            },
            5e3))
        },
        ProcessMsg: function(msg) {
            if (zbvd.ouPaiCustomId.indexOf("," + zbvd.zbid + ",") > -1 && zbvd.IsScreen && "2" == zbvd.modeltype && (msg.UserInfo && (msg.UserInfo.nickname = utils.CustomStartAndEndSubstr(msg.UserInfo.nickname, 3)), msg.ReplyUser && "" != msg.ReplyUser.nickname && (msg.ReplyUser.nickname = utils.CustomStartAndEndSubstr(msg.ReplyUser.nickname, 3))), msg.UserInfo && "" != msg.UserInfo.headimgurl && (msg.UserInfo.headimgurl = utils.resizeImg(msg.UserInfo.headimgurl, 132, 132)), "欢迎消息" == msg.Types)(window.zbvd && zbvd.isopenonline && zbvd.roleid > 0 || 1 == zbvd.levels || 1006603 == zbvd.zbid) && !utils.IsNullOrEmpty(msg) && "onlineCount" in msg && (msg.onlineCount = msg.onlineCount || 0, "Vertical" == zbvd.tplname ? $(".onlinecount").text("(" + msg.onlineCount + ")") : 4 == zbvd.modeltype ? $("#lbl_onlinecount").text("(" + msg.onlineCount + ")") : $(".onlineuser .onlinecount").text("(" + msg.onlineCount + ")"));
            else if ("访客进入" == msg.Types) {
                if ("2" == zbvd.modeltype || "4" == zbvd.modeltype) {
                    if ("number" == typeof _curActMenuType && 22 != _curActMenuType) return;
                    var nickName = "";
                    nickName = void 0 !== msg.todoType && 1 == msg.todoType ? msg.Msg.nickName: msg.Msg,
                    $("#whocomein  span").text(nickName),
                    $("#whocomein").show(),
                    $("#whocomein").addClass("enter"),
                    setTimeout(function() {
                        this.tipItem = !1,
                        $("#whocomein").removeClass("enter"),
                        $("#whocomein").hide()
                    },
                    2500)
                }
            } else if ("提问" === msg.Types) imdebug && console.log("提问"),
            msgUtils.showNormal(msg);
            else if ("直播红包" == msg.Types) if (15 == msg.Msg.msgtype) {
                "object" != typeof msg.Msg.MsgInfo && (msg.Msg.MsgInfo = JSON.parse(msg.Msg.MsgInfo)),
                msgUtils.showNormal(msg),
                zbvd.ouPaiCustomId.indexOf("," + zbvd.zbid + ",") > -1 && "object" == typeof newredbag && newredbag.newredbagContentApp.ouPaiRedBagHandle(msg.Msg.ParentId);
                var msgjson = "GATHERVISITLOGS " + JSON.stringify({
                    evtId: 1002,
                    refUrl: document.referrer,
                    curUrl: document.URL
                });
                wss.send(msgjson),
                imdebug && console.log(msgjson)
            } else 13 == msg.Msg.msgtype ? msg.Msg.tuserId == zbvd.userid ? ($(".loadingToast").hide(), msg.Msg.tuserId, msg.Msg.userId, msgUtils.showNormal(msg)) : msgUtils.showNormal(msg) : 18 !== msg.Msg.msgtype && 62 != msg.Msg.msgtype || msgUtils.showNormal(msg);
            else if ("正常消息" == msg.Types) {
                if (59 == msg.Msg.msgtype) imdebug && console.log("多轮抽奖"),
                msgUtils.showNormal(msg);
                else if (61 == msg.Msg.msgtype) imdebug && console.log("观看奖励");
                else if (64 === msg.Msg.msgtype) $(".nine-main-picture").parent().scrollTop() < 112 ? (appImgTopic.postdata.page = 1, appImgTopic.getImgList()) : appImgTopic.showWssTip = !0;
                else if (67 === msg.Msg.msgtype) topicdyapp.pindex = 1,
                topicdyapp.getinteracts(),
                topicdyapp.isNewCoi = !0;
                else if (68 === msg.Msg.msgtype) {
                    var obj = JSON.parse(msg.Msg.content);
                    if ("object" == typeof oupaiCustomApp) return "recommend_procuct" == obj.type ? oupaiCustomApp.recommendProductId = obj.productid: oupaiCustomApp.recommendProductId = 0,
                    void oupaiCustomApp.resetRecommendProduct(function() {
                        setTimeout(wxvideoplayer.resizeContentHeight, 1e3)
                    })
                } else {
                    if (71 == msg.Msg.msgtype) return "object" == typeof oupaiCustomApp && "" != msg.Msg.tnickName && (console.log(msg.Msg.tnickName), oupaiCustomApp.refreshProductSales(JSON.parse(msg.Msg.tnickName))),
                    void msgUtils.showNormal(msg);
                    if (49 == msg.Msg.msgtype || 50 == msg.Msg.msgtype) return void msgUtils.showNormal(msg)
                }
                if (0 == msg.todoType) msg.Msg.OnWall ? imwebsocket.delLiveMsgHandle(msg.Msg.Ids) : imwebsocket.delLiveCommentHandle(msg.Msg.Ids);
                else if (msg.Msg.OnWall) {
                    var ids = msg.Msg.Ids;
                    if (43 == msg.Msg.msgtype || 44 == msg.Msg.msgtype) {
                        var del_node = $(".chat-msglist li[attr-id='" + ids + "']");
                        del_node.slideUp("fast",
                        function() {
                            del_node.remove()
                        })
                    } else if ("" != ids && $("#chat-msglist li[attr-id='" + ids + "']").length > 0) return;
                    var _comment_count = parseInt(msg.UV) || 0;
                    switch (_comment_count > 0 && $("#tab_chat var").text("(" + _comment_count + ")"), msg.Msg.msgtype) {
                    case 3:
                        setTimeout(function() {
                            msgUtils.showNormal(msg)
                        },
                        2e3);
                        break;
                    case 1:
                        zbvd.IsOpenInteractionEffects && startDropAnimate(msg.Msg.content),
                        "Wedding" == zbvd.tplname && startGiftDrop(msg.Msg.content);
                    case 2:
                    case 5:
                        if ("annualmetting" == $("body").data("skin")) {
                            msgUtils.showNormal(msg),
                            setQiPaoStyle(qipaoIndex);
                            break
                        }
                        if ("Wedding" == zbvd.tplname) {
                            msgUtils.showNormal(msg),
                            setWeddingStyle(weddingIndex);
                            break
                        }
                    case 0:
                    case 6:
                    case 7:
                    case 12:
                    case 16:
                    case 17:
                    case 29:
                    case 41:
                    case 43:
                    case 44:
                    case 48:
                        msgUtils.showNormal(msg);
                        break;
                    case 25:
                        msg.Msg.tnickName = msg.Msg.tnickName.replace(/@/g, '"'),
                        msg.Msg.VoteInfo = eval("(" + msg.Msg.tnickName + ")"),
                        msg.Msg.UserInfo = msg.UserInfo,
                        msg.Msg.msgIds = msg.Msg.Ids,
                        msgUtils.showNormal(msg);
                        break;
                    case 23:
                        (0 == zbvd.repayId && 0 == msg.Msg.RelayTopicId || 0 != zbvd.repayId && msg.Msg.RelayTopicId == zbvd.topicid) && (!zbvd.lookdm && zbvd.isOpenDm || imwebsocket.sendDM(msg.Msg.content), msg.Msg.msgtype = 1, msgUtils.showNormal(msg), "annualmetting" == $("body").data("skin") && setQiPaoStyle(qipaoIndex), "Wedding" == zbvd.tplname && startGiftDrop(msg.Msg.content));
                        break;
                    case 26:
                        if (0 == zbvd.repayId && 0 == msg.Msg.RelayTopicId || 0 != zbvd.repayId && msg.Msg.RelayTopicId == zbvd.topicid) {
                            var v_url = msg.Msg.content;
                            v_url ? (v_url = imwebsocket.htmlDecode(v_url), $("#videowrap .video-container iframe#iframeVi").length > 0 ? $("#videowrap .video-container iframe#iframeVi").attr("src", v_url).show() : $("iframe#iframeVi").attr("src", v_url).show().appendTo("#videowrap .video-container"), $("iframe#iframeVi").siblings().remove(), $(".video").length > 0 && $(".video").remove(), $("ul#videowrap").removeAttr("style"), $("div#play,div#action_wrap,div#handle_wrap,div#videoPlayer,.new-count-down").hide(), $("iframe#iframeVi").next("img").hide(), zbvd.isvideochange = !0) : window.location.reload(!0)
                        }
                        break;
                    case 28:
                        var obj = JSON.parse(msg.Msg.content);
                        obj && (1 == msg.Msg.tuserId ? shop.setShopTop(obj) : (2 == msg.Msg.tuserId && shop.loadData(), (2 == msg.Msg.tuserId && obj.IsStick || 0 == msg.Msg.tuserId) && ($("#topShop").hide(), $("body").removeClass("liveshop"))));
                        break;
                    case 30:
                        imwebsocket.processLottery(msg);
                        break;
                    case 31:
                        if (zbvd.isOpenDm = "1" == msg.Msg.content, zbvd.userid == msg.Msg.userId) {
                            var msgTips = zbvd.isOpenDm ? "已允许观众发布弹幕": "已禁止观众发布弹幕";
                            $(document).minTipsBox({
                                tipsContent: msgTips,
                                tipsTime: 2
                            })
                        }
                        if (zbvd.isOpenDm ? ($("#danmukuOpt").addClass("on"), $("#danmukuOpt").next("p").html("禁用弹幕")) : ($("#danmukuOpt").removeClass("on"), $("#danmukuOpt").next("p").html("允许弹幕")), zbvd.isOpenDm) $("#lookdanmuOpt").length > 0 ? $("#lookdanmuOpt").parent().show() : $(".dmswitchopt").length <= 0 && $(".morebutton-wrap").append("<li class='swiper-slide'><a class='dmswitchopt on' id='lookdanmuOpt'></a><p>关闭弹幕</p></li>");
                        else {
                            if (zbvd.roleid > 0) return ! 1;
                            $("#ckdanmu").hide().find(".dm_switch").prop("checked", !1),
                            $(".speakInput").attr("placeholder", "来说点什么吧...").data("msgtype", 1),
                            $("#lookdanmuOpt").parent().hide()
                        }
                        break;
                    case 39:
                        msgUtils.showNormal(msg)
                    }
                    6 == msg.Msg.msgtype && zbvd.isOpenDm ? (imwebsocket.sendDM(msg.UserInfo.nickname + "赞赏了" + msg.Msg.tnickName + "一个" + parseFloat(msg.Msg.content / 100).toFixed(2) + "元红包"), msg.Msg.userid == zbvd.userid && showIntegral()) : 16 == msg.Msg.msgtype && zbvd.isOpenDm && imwebsocket.sendDM(msg.UserInfo.nickname + msg.Msg.content),
                    2 != zbvd.modeltype && 4 != zbvd.modeltype || 16 != msg.Msg.msgtype || (zbvd.IsOpenZeroGift = void 0 != msg.Msg.gift.isOpenZeroGiftEffect ? msg.Msg.gift.isOpenZeroGiftEffect: zbvd.IsOpenZeroGift, (msg.Msg.gift.GiftMoney > 0 || zbvd.IsOpenZeroGift) && imwebsocket.ShowGift(msg), msg.Msg.userid == zbvd.userid && showIntegral())
                } else {
                    if (48 === msg.Msg.msgtype) msgUtils.showNormal(msg);
                    else {
                        if (51 === msg.Msg.msgtype) {
                            var obj = JSON.parse(msg.Msg.content);
                            return void(null != obj && ($(".couponWin").find("[name='CouponMoney']").text(obj.money), $(".couponWin").find("[name='limitStr']").text(obj.limitStr), $(".couponWin").find("[name='getcoupon']").attr("code", obj.code), $(".couponWin").show(), $(".vertical-coupon-icon").addClass("animation-shake")))
                        }
                        if (58 == msg.Msg.msgtype) {
                            imdebug && console.log("控制发图：", msg.Msg);
                            var imgcontent = JSON.parse(msg.Msg.content);
                            return void(zbvd.isadmin || (0 == imgcontent.type ? $("#photoLi").hide() : $("#photoLi").show()))
                        }
                        if (39 == msg.Msg.msgtype) return void msgUtils.showNormal(msg);
                        if (29 == msg.Msg.msgtype) {
                            if (zbvd.userid == msg.Msg.userId) return;
                            "function" == typeof getSocketCouponShow && getSocketCouponShow(msg),
                            $(".youhuiquan").attr("guid", msg.Msg.tnickName).fadeIn(),
                            $(".vertical-coupon-icon").addClass("animation-shake"),
                            couponData = msg.Msg
                        }
                    }
                    2 != zbvd.modeltype && 4 != zbvd.modeltype || 16 != msg.Msg.msgtype || (zbvd.IsOpenZeroGift = void 0 != msg.Msg.gift.isOpenZeroGiftEffect ? msg.Msg.gift.isOpenZeroGiftEffect: zbvd.IsOpenZeroGift, (msg.Msg.gift.GiftMoney > 0 || zbvd.IsOpenZeroGift) && imwebsocket.ShowGift(msg), msg.Msg.userid == zbvd.userid && showIntegral())
                }
            } else if ("扩展消息" == msg.Types) switch (msg.Msg.msgtype) {
            case 40:
                msgUtils.showNormal(msg)
            } else "直播竞拍" == msg.Types && 48 == msg.Msg.msgtype && msgUtils.showNormal(msg)
        },
        ConnectServer: function() {
            function getRandomUserId(e, t) {
                return parseInt(Math.random() * (t - e) + e, 10)
            }

            function distribution(e) {
                e = e.toString(),
                "" == e && (e = getRandomUserId(0, 100).toString()),
                e = e.length <= 2 ? parseInt(e, 10) : e.substr( - 2);
                for (var t = m / n,
                i = m % n,
                o = 0,
                s = 0,
                a = 0; a < n; a++) {
                    s = i > 0 ? 1 : 0;
                    var d = t + s;
                    if (e >= o && e < o + d) {
                        _wslink = wslinkList[a],
                        imdebug && console.log("userid=" + e + ",range=" + o + "," + (o + d) + ",wslink=" + wslinkList[a]);
                        break
                    }
                    o += d,
                    --i
                }
            }
            var wslinkList = "";
            if (! (zbvd.wsbanids.indexOf("," + zbvd.topicid + ",") > -1)) {
                wslinkList = reconncount > 5 ? zbvd.WsLinkSpare.split(",") : zbvd.WsLinkItem.split(",");
                var _wslink;
                if (wslinkList.length <= 0) return console.warn("can't find ws server wslink is null"),
                !1;
                if ("post" == zbvd.sendmode) {
                    var connTpId = zbvd.repayId || zbvd.topicid,
                    m = 100,
                    n = wslinkList.length;
                    distribution(getRandomUserId(0, 100).toString()),
                    "" != zbvd.wstpId && connTpId == zbvd.wstpId && (_wslink = wslinkList[wslinkList.length - 1])
                } else {
                    var connTpId = zbvd.repayId || zbvd.topicid,
                    lastnum = parseInt(connTpId.toString().substr( - 1)),
                    _index = Math.ceil((lastnum + 1) / (10 / wslinkList.length)) - 1;
                    _index > wslinkList.length && (_index = wslinkList.length),
                    _wslink = wslinkList[_index],
                    "" != zbvd.wstpId && connTpId == zbvd.wstpId && (_wslink = wslinkList[wslinkList.length - 1])
                }
                var _rid = this.rid;
                0 == _rid && zbvd.levels > 0 && (_rid = 20);
                var _mtype = "Vertical" == zbvd.tplname ? "2": "",
                protocolname = "https:" == location.protocol ? "wss": "ws";
                _wslink.indexOf("://") < 0 && (_wslink = protocolname + "://" + _wslink);
                var _uname = "loginuser" in zbvd ? zbvd.loginuser.nickname: "";
                _uname.length > 0 && (_uname = encodeURIComponent(_uname));
                var strkey = _wslink + "/vzfrom=" + zbvd.ThirdType + "&uname=" + _uname + "&zbid=" + zbvd.zbid + "&tid=" + connTpId + "&uid=" + ($.cookie(zbvd.usercookie) || zbvd.userid) + "&rid=" + _rid + "&rtid=" + zbvd.topicid + "&shareuid=" + zbvd.shareuid + "&tpstate=" + zbvd.status + "&scene=" + ("Shop" == zbvd.tplname ? "1": "0");
                wss = new WebSocket(strkey),
                wss.onclose = function() {
                    imdebug && console.log("wss  is  closeed"),
                    wss = null,
                    isTalking = !1,
                    imwebsocket.ReConnect()
                },
                wss.onopen = function() {
                    imdebug && console.log("wss  is  open"),
                    clearInterval(dohand),
                    reconncount = 0,
                    isTalking = !0;
                    var e = "GATHERVISITLOGS " + JSON.stringify({
                        evtId: 1001,
                        refUrl: document.referrer,
                        curUrl: document.URL
                    });
                    wss.send(e),
                    imdebug && console.log(e)
                },
                wss.onmessage = function(evt) {
                    function processSignalMsg(e) {
                        if ("正常消息" == e.Types && 0 != e.todoType) {
                            if ("audit" == e.Msg.MsgInfo) {
                                if (zbvd.userid == e.Msg.userId) return ! 1;
                                var t = juicer(msgTpl.normalMsg, e);
                                console.log(t),
                                $("#chat-msglist").append(t)
                            }
                            if ((1 == e.Msg.msgtype || 23 == e.Msg.msgtype) && "tempid" in e && "" != e.tempid && $('#chat-msglist>li[tempid="' + e.tempid + '"]').length > 0) {
                                var i = $('#chat-msglist>li[tempid="' + e.tempid + '"]');
                                i.attr("attr-id", e.Msg.Ids),
                                i.find(".msg-content").text().trim() != e.Msg.content && (zbvd.ouPaiCustomId.indexOf("," + zbvd.zbid + ",") > -1 ? -1 != e.Msg.content.indexOf("正在购买") ? i.find(".msg-content").html(e.Msg.content) : i.find(".msg-content").find("label").html(e.Msg.content) : i.find(".msg-content").html(e.Msg.content))
                            } else if (0 == e.Msg.msgtype || 7 == e.Msg.msgtype) {
                                imdebug && console.log("通知消息-" + e.Msg.msgtype);
                                var o = 0 == e.Msg.msgtype ? 1 : 0;
                                wxvideoplayer.FreshPlayer(o)
                            } else {
                                if (69 == e.Msg.msgtype) {
                                    var n = [];
                                    return "" != e.Msg.content && (n = JSON.parse(e.Msg.content)),
                                    void(oupaiCustomApp && oupaiCustomApp.refreshProduct(n))
                                }
                                imwebsocket.ProcessMsg(e)
                            }
                            1 == e.Msg.msgtype && "" != e.Msg.content && (window.lastmsg = e.Msg.content),
                            heart.playLike({
                                message: {
                                    likeCnt: 2,
                                    userId: Math.ceil(1e3 * Math.random()),
                                    special: !1
                                }
                            })
                        } else if ("直播红包" == e.Types) imwebsocket.ProcessMsg(e);
                        else if ("用户拉黑" == e.Types) switch (e.Msg.msgtype) {
                        case 8:
                            imwebsocket.BlockAll(e);
                            break;
                        case 9:
                            imwebsocket.BlockUser(e);
                            break;
                        case 10:
                            imwebsocket.UnBlockUser(e);
                            break;
                        case 11:
                            imwebsocket.UnBlockAll(e)
                        } else imdebug && console.log("其他消息"),
                        imwebsocket.ProcessMsg(e)
                    }
                    imdebug && console.log(evt.data);
                    var msg = evt.data;
                    "object" != typeof evt.data && (msg = eval("(" + evt.data + ")")),
                    "[object Array]" == Object.prototype.toString.call(msg) ? (msg.forEach(function(e, t) {
                        processSignalMsg(e)
                    }), imwebsocket.SideTipProducer(msg, !0)) : (processSignalMsg(msg), imwebsocket.SideTipProducer(msg, !1))
                }
            }
        },
        SideTipProducer: function(e, t) {
            function i(e, t) {
                var i = {
                    nickname: "",
                    ctype: 0,
                    tpmsg: "",
                    typetx: ""
                };
                if ("访客进入" == e.Types) {
                    var o;
                    o = void 0 !== e.todoType && 1 == e.todoType ? e.Msg.nickName: e.Msg,
                    i.msgType = "观看",
                    i.ctype = 1,
                    i.nickname = o,
                    i.typetx = "观看",
                    i.tpmsg = o + "进入了直播间"
                } else {
                    if (!e.Msg || !e.Msg.msgtype) return;
                    6 == e.Msg.msgtype ? (i.msgType = "礼物", i.ctype = 16, i.nickname = e.UserInfo.nickname, i.typetx = "红包", i.tpmsg = e.UserInfo.nickname + "赞赏了" + e.Msg.tnickName + "一个" + parseFloat(e.Msg.content / 100).toFixed(2) + "元红包") : 13 == e.Msg.msgtype ? (i.msgType = "红包", i.ctype = 13, i.nickname = e.Msg.tnickName, i.typetx = "红包", i.tpmsg = e.Msg.tnickName + "领取了" + e.Msg.nickName + '的<em class="side-tip_rb" rid="' + e.Msg.ParentId + '" style="color:#FFB910;font-weight:bold;cursor:pointer">' + parseFloat(e.Msg.content / 100).toFixed(2) + "元红包</em>") : 57 == e.Msg.msgtype ? (i.nickname = e.Msg.UserInfo.nickname, "RemindLiveRoom" == e.Msg.content ? (i.msgType = "关注", i.ctype = 57, i.typetx = "关注", i.tpmsg = e.Msg.UserInfo.nickname + "关注了直播间", n[3].push(i)) : "GetCoupon" == e.Msg.content && (i.msgType = "优惠券", i.ctype = 29, i.typetx = "优惠券", i.tpmsg = e.Msg.UserInfo.nickname + '领取了<em class="side-tip_cp">优惠券</em>', n[2].push(i))) : "string" == typeof e.Msg.content && (e.Msg.content.indexOf("正在购买") > -1 || e.Msg.content.indexOf("已加入购物车") > -1) && (i.ctype = e.Msg.content.indexOf("正在购买") > -1 ? 2 : 3, i.msgType = e.Msg.content.indexOf("正在购买") > -1 ? "购买": "购物车", i.nickname = e.Msg.nickName, i.typetx = e.Msg.content.indexOf("正在购买") > -1 ? "购买": "购物车", i.tpmsg = e.Msg.content, n[e.Msg.content.indexOf("正在购买") > -1 ? 0 : 1].push(i))
                }
                if ((t || [1, 29, 57].indexOf(i.ctype) < 0) && i && "" != i.tpmsg) return void("function" == typeof sideTipsAdd && sideTipsAdd(i))
            }

            function o(e, t) {
                0 != e.length && (1 == e.length ? e[0].tpmsg = e[0].nickname + s[t] : 2 == e.length ? e[0].tpmsg = e[0].nickname + "," + e[1].nickname + "2人" + s[t] : e[0].tpmsg = e[0].nickname + "等" + e.length + "人" + s[t], "function" == typeof sideTipsAdd && sideTipsAdd(e[0]))
            }
            var n = [[], [], [], []],
            s = ["正在购买", "已加入购物车", "领取了优惠券", "关注了直播间"];
            t && 1 != e.length ?
            function(e) {
                e.forEach(function(e, t) {
                    i(e)
                }),
                n.forEach(function(e, t) {
                    o(e, t)
                })
            } (e) : i(t ? e[0] : e, !0)
        },
        ShowGift: function(e) {
            var t = 1 == zbvd.GiftEffectValue,
            i = e.Msg.userId + "_" + e.Msg.gift.GiftId,
            o = $("#" + i);
            if (t) var n = $("#" + i + " .ncGift-count .Nconunts");
            else var n = $("#" + i + " .nGift-count .counts");
            if (zbvd.ouPaiCustomId.indexOf("," + zbvd.zbid + ",") > -1 && zbvd.IsScreen && "2" == zbvd.modeltype) {
                var s = $("#gift-show-item").html(),
                a = juicer(s, e);
                return $("#gift-show-main").append(a),
                !1
            }
            if (0 == o.length) {
                if (t) {
                    var s = $("#cgift-show-item").html(),
                    a = juicer(s, e);
                    $(".giftCenter").append(a)
                } else {
                    var s = $("#gift-show-item").html(),
                    a = juicer(s, e);
                    $("#gift-show-main").prepend(a)
                }
                o.animateCss("bounceInLeft",
                function() {}),
                o = $("#" + i),
                clearTimeout(queue_gift[i]),
                queue_gift[i] = setTimeout(function() {
                    o.fadeOut(),
                    $("#" + i + " p").css({
                        transition: "none",
                        transform: "translate3d(0,0,0)"
                    })
                },
                gift_time)
            } else {
                var d = e.Msg.gift.GiftCount;
                o = $("#" + i),
                o.is(":hidden") ? (o.show(), n.text(d), clearTimeout(queue_gift[i]), queue_gift[i] = setTimeout(function() {
                    o.fadeOut(),
                    $("#" + i + " p").css({
                        transition: "none",
                        transform: "translate3d(0,0,0)"
                    })
                },
                gift_time)) : (console.log(n), n.text(d), queue_gift[i] = setTimeout(function() {
                    o.fadeOut(),
                    $("#" + i + " p").css({
                        transition: "none",
                        transform: "translate3d(0,0,0)"
                    })
                },
                gift_time))
            }
            var r = $("#" + i + " p"),
            c = 12 * r.text().length - 100;
            c < 0 || (r.css({
                transition: "transform 5.5s ease",
                width: 12 * r.text().length
            }), setTimeout(function() {
                r.css("transform", "translate3d(-" + c + "px,0,0)")
            },
            1e3))
        },
        SendMessage: function(e, t, i, o, n, s, a) {
            if (this.islogin()) {
                switch (1 === s && zbvd.IsOpenInteractionEffects && startDropAnimate(t), 1 === s && "Wedding" == zbvd.skin && startGiftDrop(t), $(".speakInput").val("").blur(), e) {
                case "text":
                    t = utils.symbolFilter(t)
                }
                var d = ($(".header_tab a.on").attr("name"), 0);
                d = (parseInt(zbvd.roleid) || 0) > 0 ? 1 : 0,
                "1,2,3,4".indexOf(zbvd.modeltype) > -1 && (d = 1),
                "SysMsg" != a && "NotInSave" != a || (d = 0);
                var r = (new Date).getTime(),
                c = {
                    zbId: parseInt(zbvd.zbid) || 0,
                    TopicId: parseInt(zbvd.topicid) || 0,
                    userId: parseInt(zbvd.userid) || 0,
                    tuserId: o,
                    ParentId: i,
                    content: t,
                    msgtype: s,
                    OnWall: d,
                    commentType: 0,
                    Duration: n,
                    tnickName: "",
                    tpaddtime: zbvd.tpaddtime,
                    nickName: "loginuser" in window.zbvd ? window.zbvd.loginuser.nickname || "": "",
                    MsgInfo: a || ""
                };
                if (!zbvd.isaudtcomment || 1 != s && 2 != s && 31 != s || 0 != zbvd.roleid || (c.state = 0), zbvd.block && (c.state = 0), 29 == s && (c.tuserId = i, c.tnickName = o), 25 == s) {
                    var l = (zbvd.loginuser.nickname, zbvd.loginuser.headimgurl, zbvd.topicid, zbvd.roleid, zbvd.zbid, o.split("@")),
                    p = "",
                    u = "",
                    m = "";
                    null != l && l.length > 0 && (p = l[0], u = l[1], m = l[2], votetype = l[3]),
                    c.tuserId = 0,
                    c.tnickName = "{VoteId:@" + p + "@,DataType:@" + u + "@,VoteType_Name:@" + m + "@,VoteType:@" + votetype + "@}"
                }
                if (0 == c.zbId || 0 == c.TopicId || 0 == c.userId) return void(imdebug && console.log("非法输入"));
                var g = 100;
                null != wss && 3 != wss.readyState || zbvd.block || (imwebsocket.ConnectServer(), g = 2e3),
                wss && setTimeout(function() {
                    function e() {
                        var e = 'SENGMSG {Types:"正常消息",Msg:' + JSON.stringify(c) + ',tempid: "' + zbvd.userid + "_" + r + '"}';
                        imdebug && console.log(e),
                        "post" == zbvd.sendmode && "" != zbvd.sendurl ? $.post(zbvd.sendurl, {
                            msg: e
                        }) : wss.send(e)
                    }
                    var i = {
                        0 : "",
                        1 : "管理员",
                        2 : "管理员",
                        3 : "嘉宾",
                        4 : "主持人",
                        5 : "管理员",
                        6 : "新郎",
                        8 : "新娘",
                        11 : "管理员",
                        14 : "管理员"
                    };
                    if (1 == c.msgtype && "" == c.ParentId) {
                        var o = c.content.replace(/(\[[\u2E80-\u9FFF|no|ok]{1,3}\])/gi,
                        function(e, t) {
                            return "<img src='" + msgUtils.facedb[t] + "'  class='vzan-ubb' />"
                        }),
                        n = {
                            Types: "正常消息",
                            todoType: -1,
                            UserInfo: {
                                userId: c.userId,
                                nickname: zbvd.loginuser.nickname,
                                headimgurl: zbvd.loginuser.headimgurl,
                                State: 1,
                                TopicId: zbvd.topicid,
                                RoleId: zbvd.roleid,
                                RoleName: i[zbvd.roleid],
                                zbId: zbvd.zbid,
                                LuckDraw: 0
                            },
                            ReplyUser: null,
                            Msg: {
                                Id: 0,
                                TopicId: zbvd.topicid,
                                userId: zbvd.userid,
                                nickName: "",
                                tuserId: 0,
                                tnickName: "",
                                ParentId: "",
                                content: o,
                                msgtype: 1,
                                OnWall: !0,
                                showType: 0,
                                Praise: 0,
                                commentType: 0,
                                Ids: "",
                                Duration: 0,
                                zbId: zbvd.zbid,
                                synch: !1,
                                state: c.state,
                                addtime: (new Date).Format("yyyy/MM/dd HH:mm:ss"),
                                MsgInfo: "",
                                Msg: null,
                                UserInfo: null,
                                voice: null,
                                gift: null
                            },
                            ReplyMsg: null,
                            viewCount: 0,
                            UV: 0,
                            onlineCount: 0,
                            tempid: zbvd.userid + "_" + r
                        };
                        imwebsocket.ProcessMsg(n)
                    }
                    "SysMsg" == a || 1 != c.msgtype && 23 != c.msgtype ? e() : $.when($.post("/liveajax/checkKeyWords", {
                        tpid: zbvd.topicid,
                        zbid: zbvd.zbid,
                        content: t
                    })).done(function(e) {
                        parseInt(e.Msg) >= 100 && (c.state = 0, $(document).minTipsBox({
                            tipsContent: "评论中包含敏感词，请修改",
                            tipsTime: 2
                        }))
                    }).always(function() {
                        e()
                    })
                },
                g)
            }
        },
        UnDo: function(e, t) {
            if (!this.islogin()) return ! 1;
            var i = {
                Ids: e,
                zbId: parseInt(zbvd.zbid) || 0,
                TopicId: parseInt(zbvd.topicid) || 0,
                userId: parseInt(zbvd.userid) || 0,
                OnWall: t,
                tpaddtime: zbvd.tpaddtime
            };
            null != wss && 3 != wss.readyState || imwebsocket.ConnectServer();
            var o = 'SENGMSG {Types:"正常消息",Msg:' + JSON.stringify(i) + ",todoType:0}";
            imdebug && console.log(o),
            "post" == zbvd.sendmode && "" != zbvd.sendurl ? $.post(zbvd.sendurl, {
                msg: o
            }) : wss.send(o)
        },
        TopMsg: function(e, t, i) {
            if (!this.islogin()) return ! 1;
            var o = {
                content: e,
                zbId: parseInt(zbvd.zbid) || 0,
                TopicId: parseInt(zbvd.topicid) || 0,
                userId: parseInt(zbvd.userid) || 0,
                OnWall: 1,
                tpaddtime: zbvd.tpaddtime,
                msgtype: t
            };
            null != wss && 3 != wss.readyState || imwebsocket.ConnectServer();
            var n = "";
            i && (n = ",tempid:'" + JSON.stringify(i) + "'");
            var s = 'SENGMSG {Types:"正常消息",Msg:' + JSON.stringify(o) + n + "}";
            imdebug && console.log(s),
            "post" == zbvd.sendmode && "" != zbvd.sendurl ? $.post(zbvd.sendurl, {
                msg: s
            }) : wss.send(s)
        },
        delLiveMsgHandle: function(e) {
            if ("" == e) return void(imdebug && console.log("speakId is empty delLiveMsgHandle fail"));
            if ($(".chat-msglist li[attr-id='" + e + "']").length > 0) {
                var t = $(".chat-msglist li[attr-id='" + e + "']");
                t.next(".news-alert-time").remove(),
                t.prev(".news-alert-time").remove(),
                t.slideUp("normal",
                function() {
                    t.remove()
                })
            }
            $("div[name='divVoteConta'][msgIds='" + e + "']").parent().hide(),
            $("div[name='divVoteConta'][msgIds='" + e + "']").remove()
        },
        SendFile: function(e) {
            var t = $("#upFile" + e).val();
            if (utils.IsNullOrEmpty(t)) return ! 1;
            for (var i = t.substring(t.lastIndexOf(".")), o = !1, n = MsgConfig.fileType.split("：")[1], s = 0; s < n.split(";").length; s++) if (n.split(";")[s].toLowerCase() == i.toLowerCase()) {
                o = !0;
                break
            }
            try {
                if (void 0 != document.getElementById("upFile" + e).files[0] && null != document.getElementById("upFile" + e).files[0]) {
                    if (document.getElementById("upFile" + e).files[0].size > 3145728) return alert("对不起,您发送的文件过大，请重新选择……"),
                    !1
                }
            } catch(e) {}
            var a = new Date,
            d = e + a.getYear() + a.getMonth() + a.getDate() + a.getHours() + a.getMinutes() + a.getSeconds() + a.getMilliseconds();
            if (!o) return alert("上传的文件类型错误!"),
            !1;
            $.ajaxFileUpload({
                url: LKconfig.WebURL + "/im/UploadFile?siteid=" + LKconfig.WebSiteId + "&fid=" + d,
                secureuri: !1,
                fileElementId: "upFile" + e,
                dataType: "jsonp",
                uid: e,
                fid: d,
                global: !1,
                iscross: !0,
                cross: function(e, t) {
                    imwebsocket.crossGet(e, t)
                },
                success: function(e) {},
                error: function(e, t, i) {}
            })
        },
        crossGet: function(e, t) {
            $.getJSON(LKconfig.WebURL + "/im/GetUploadFile?callback=?", {
                fid: t
            },
            function(t) {
                if (imdebug && console.log(t), 1 == t.Success) {
                    var i = "";
                    if (0 != t.Data.width && 0 != t.Data.height ? "" != t.Data.msg && (i = (t.Data.width, "<img style='max-width:200px;' src='" + LKconfig.ImgUrl + t.Data.msg + "'/>")) : "" != t.Data.msg && (i = "<a type=files href ='" + LKconfig.ImgUrl + t.Data.msg + "' target ='_blank'>" + t.Data.msg.substring(t.Data.msg.lastIndexOf("/") + 1) + "</a>"), wss && !utils.IsNullOrEmpty(i)) {
                        var o = 'SENDMSG_PC {Type:"正常消息",Msg:"' + i + '",StaffID:"' + e + '"}';
                        "post" == zbvd.sendmode && "" != zbvd.sendurl ? $.post(zbvd.sendurl, {
                            msg: o
                        }) : wss.send(o)
                    }
                } else console.log(t)
            })
        },
        SendImage: function(e) {
            var t = $("#upImg" + e).val();
            if (utils.IsNullOrEmpty(t)) return ! 1;
            for (var i = t.substring(t.lastIndexOf(".")), o = !1, n = MsgConfig.imageType.split("：")[1], s = 0; s < n.split(";").length; s++) if (n.split(";")[s].toLowerCase() == i.toLowerCase()) {
                o = !0;
                break
            }
            try {
                if (void 0 != document.getElementById("upImg" + e).files[0] && null != document.getElementById("upImg" + e).files[0]) {
                    if (document.getElementById("upImg" + e).files[0].size > 3145728) return alert("对不起,您发送的图片过大，请重新选择……"),
                    !1
                }
            } catch(e) {}
            if (!o) return alert("上传的图片类型错误!"),
            !1;
            var a = new Date,
            d = e + a.getYear() + a.getMonth() + a.getDate() + a.getHours() + a.getMinutes() + a.getSeconds() + a.getMilliseconds();
            $.ajaxFileUpload({
                url: LKconfig.WebURL + "/im/UploadFile?siteid=" + LKconfig.WebSiteId + "&fid=" + d,
                secureuri: !1,
                fileElementId: "upImg" + e,
                dataType: "jsonp",
                uid: e,
                fid: d,
                global: !1,
                iscross: !0,
                cross: function(e, t) {
                    imwebsocket.crossGet(e, t)
                },
                success: function(e) {},
                error: function(e, t, i) {
                    alert(MsgConfig.fileFail)
                }
            })
        },
        BlockUser: function(e) {
            $(".speakInput").attr("placeholder", e ? e.Msg.content: "您已被禁言！"),
            -2 != zbvd.levels ? $(".speakInput").attr("disabled", "disabled") : $(".speakInput").attr("placeholder", "您涉嫌违规发言，已被禁言"),
            utils.IsNullOrEmpty(e) || (zbvd.block = !0, 1 == e.Msg.tuserId && (window.location.href = window.location.href)),
            $("#incomedraw").parents("li").siblings().hide()
        },
        UnBlockUser: function(e) {
            zbvd.blockall ? imwebsocket.BlockAll() : (utils.IsIOS() ? $(".speakInput").attr("placeholder", "来说点什么吧...") : $(".speakInput").removeAttr("disabled").attr("placeholder", "来说点什么吧..."), e && (zbvd.block = !1), $(".morebutton").hide(), $("#incomedraw").parents("li").siblings().show())
        },
        BlockAll: function(e) {
            parseInt(zbvd.roleid || "0") <= 0 || zbvd.repayId > 0 ? ($(".speakInput").attr("disabled", "disabled").attr("placeholder", "全员禁言, 只允许管理员发言"), utils.IsNullOrEmpty(e) || (zbvd.blockall = !0), 0 == zbvd.levels ? $("#incomedraw").parents("li").siblings().hide() : $("#DisableChat").addClass("on")) : $("#DisableChat").addClass("on")
        },
        UnBlockAll: function(e) {
            zbvd.block ? imwebsocket.BlockUser(e) : (utils.IsIOS() ? $(".speakInput").attr("placeholder", "来说点什么吧...") : $(".speakInput").removeAttr("disabled", "disabled").attr("placeholder", "来说点什么吧..."), utils.IsNullOrEmpty(e) || (zbvd.blockall = !1), $(".morebutton").hide(), $("#incomedraw").parents("li").siblings().show()),
            $("#DisableChat").removeClass("on")
        },
        sendDM: function(e, t) {
            if (! ($(".danmuBox").length <= 0)) {
                e = utils.replaceHtml(e);
                var i = $("<span class='dm' style='color:" + utils.getDmRandomColor() + ";animation-iteration-count:" + (t || 1) + ";' >" + e + "</span>");
                i.on("webkitAnimationEnd",
                function(e) {
                    $(e.target).remove()
                }),
                $(".danmuBox").append(i);
                var o = $(".danmuBox .dm:last"),
                n = $("body").width() + o.width(),
                s = $(".videowrap").height() - 35;
                dm_top += 35,
                dm_top > s && (dm_top = 0);
                var a = 16;
                Math.floor(10 * Math.random()) % 2 == 0 && (a = 20),
                $("style#dynaicSty").length <= 0 && $("<style id='dynaicSty' type='text/css'></style>").appendTo("body"),
                $("style#dynaicSty").text("@-webkit-keyframes dmmove{from {left:" + $("body").width() + "px;}to {left:-" + n + "px;}}"),
                o.css({
                    "animation-name": "dmmove",
                    "animation-duration": a + "s",
                    left: n,
                    top: dm_top
                })
            }
        },
        htmlDecode: function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e,
            t.innerText || t.textContent
        },
        GetHistoryMsg: function(e) {
            var t = $(".liveBoxContent>div").height();
            if (isLoading && hasTalkHistory) {
                isLoading = !1;
                var i = $(".liveBoxContent").outerHeight() - $("#speakBox").scrollTop(),
                o = $("#chat-msglist li[attrtime]:first").eq(0).attr("attrtime") || zbvd.maxint,
                n = "desc";
                "asc" == zbvd.watchmode && (n = "asc", o = $("#chat-msglist li[attrtime]:last").eq(0).attr("attrtime") || 0);
                var s = ($("#chat-msglist li[attrtime='" + o + "']").get(0), {
                    zbid: parseInt(zbvd.zbid) || 0,
                    pagesize: "10",
                    time: o,
                    topicid: parseInt(zbvd.topicid) || 0,
                    skin: "ent_tv_bubble",
                    mode: n,
                    __RequestVerificationToken: gettoken()
                });
                $(".c_loading").length <= 0 ? $("#chat-msglist").before("<div class='c_loading' style='text-align: center;font-size:14px;color: gray;'>加载中...</div>") : $(".c_loading").text("加载中...").css({
                    visibility: "visible"
                }),
                $.ajax({
                    type: "POST",
                    url: "/live/getSpeak",
                    data: s,
                    success: function(o) {
                        if ($(".c_loading").text("下拉加载更多").css({
                            visibility: "visible"
                        }), $.isPlainObject(o) && "isok" in o) console.log(o);
                        else {
                            if ("" != o) {
                                $(o);
                                "asc" == zbvd.watchmode ? $(o).appendTo($("#chat-msglist")) : setTimeout(function() {
                                    $(".c_loading").css({
                                        visibility: "visible"
                                    }),
                                    $(o).prependTo($("#chat-msglist"));
                                    var e = $(".liveBoxContent").outerHeight() - i;
                                    $("#speakBox").scrollTop(e),
                                    ismsgtop ? setTimeout(function() {
                                        $("#speakBox .liveBoxContent").scrollTop($(".liveBoxContent>div").height())
                                    },
                                    500) : setTimeout(function() {
                                        var e = $(".liveBoxContent>div").height();
                                        $("#speakBox .liveBoxContent").scrollTop(parseInt(e - t))
                                    },
                                    100)
                                },
                                500),
                                "annualmetting" == $("body").data("skin") && setQiPaoStyle(),
                                "Wedding" == zbvd.tplname && setWeddingStyle(),
                                null != tabSwiper && "onResize" in tabSwiper && tabSwiper.onResize(),
                                $("#chat-msglist li").length < 10 && $(".c_loading").css({
                                    visibility: "hidden"
                                })
                            } else hasTalkHistory = !1,
                            0 == $("#chat-msglist li").length ? $(".c_loading").text("还没有评论").css({
                                visibility: "visible"
                            }) : $(".c_loading").text("已加载所有评论").css({
                                visibility: "visible"
                            });
                            "function" == typeof e && e()
                        }
                        setTimeout(function() {
                            isLoading = !0,
                            "annualmetting" == $("body").data("skin") && setQiPaoStyle(),
                            "Wedding" == zbvd.tplname && setWeddingStyle()
                        },
                        500)
                    },
                    error: function() {
                        isLoading = !0
                    }
                })
            }
        },
        GetGiftRanking: function() {
            var e = "/live/getgiftranking-" + zbvd.topicid;
            $.ajax({
                type: "POST",
                url: e,
                data: {},
                dataType: "json",
                success: function(e) {
                    if (e.isok) {
                        var t = juicer(document.getElementById("gift-user-list").innerHTML, e);
                        $("#giftuserlist").empty().append(t)
                    }
                }
            })
        },
        InitInviteTabList: function() {
            bangSwiper = null,
            bangSwiper = new Swiper("#banglist-content", {
                autoHeight: !0,
                useCSS3Transforms: !0,
                lazyLoading: !0,
                preloadImages: !1,
                onSlideChangeEnd: function(e) {
                    $(".ranking-tab li").eq(e.activeIndex).addClass("on").siblings().removeClass("on"),
                    tabSwiper.onResize()
                }
            })
        },
        processLottery: function(e) {
            lottery.handleLottery(e.Msg.ParentId, "" != e.Msg.content ? JSON.parse(e.Msg.content) : [])
        }
    };
    return imwebsocket
}),
define("livecommon/module/gift", ["livecommon/module/utils"],
function(e) {
    function t(e, t) {
        "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", i, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", i), document.attachEvent("onWeixinJSBridgeReady", i)) : i(e, t)
    }

    function i(e, t) {
        WeixinJSBridge.invoke("getBrandWCPayRequest", JSON.parse(e),
        function(e) {
            "get_brand_wcpay_request:ok" == e.err_msg ? ($(document).minTipsBox({
                tipsContent: "支付成功！",
                tipsTime: 1
            }), $("#loadingToast").hide(), n = !1, $("#QRcodePay").hide(), $("#qqmarrydialog").hide()) : "get_brand_wcpay_request:cancel" != e.err_msg && setTimeout(function() {
                o(t)
            },
            500),
            $("#loadingToast").hide(),
            redbagbol = !0
        })
    }

    function o(e) {
        $(document).minTipsBox({
            tipsContent: "准备支付",
            tipsTime: 1
        }),
        $.ajax({
            type: "POST",
            url: "/live/PayCenter?t=2",
            data: e,
            dataType: "json",
            success: function(e) {
                $("#loadingToast").hide(),
                n = !1,
                e.isok ? ($("#payqrcode").attr("src", "/live/nt?data=" + e.Msg), $("#QRcodePay").show()) : $(document).minTipsBox({
                    tipsContent: e.Msg,
                    tipsTime: 1
                })
            },
            error: function(e, t, i) {
                $(document).minTipsBox({
                    tipsContent: "支付失败",
                    tipsTime: 1
                }),
                $("#loadingToast").hide(),
                n = !1
            }
        })
    }
    var n = !1,
    s = {
        Init: function() {
            if (1 == zbvd.IsOpenGift) {
                var e = this;
                setTimeout(function() {
                    e.GetGiftList()
                },
                4e3)
            }
            this.BindEvent()
        },
        calcPrice: function() {
            var e = parseInt($("#fs-gift-amount").val()) || 0;
            if (0 == e) return void $("#fs-gift-total").text("0");
            e > 1e3 && (e = 999, $("#fs-gift-amount").val(e));
            var t = $("#fs-gift-total").data("price");
            $("#fs-gift-total").text(parseFloat(e * t).toFixed(2)),
            $("#fs-gift-send").addClass("enable")
        },
        BindEvent: function() {
            $(document).on("click", "li[data-giftprice]",
            function() {
                $("#fs-gift-number").slideDown("fast");
                var e = (parseFloat($(this).data("giftprice")) / 100).toFixed(2);
                $("#fs-gift-total").data({
                    price: e,
                    giftid: $(this).data("id")
                }),
                $(this).addClass("on").siblings().removeClass("on"),
                s.calcPrice()
            }).on("click", ".fsl-shuliang-plus",
            function() {
                var e = parseInt($("#fs-gift-amount").val()) || 1;
                e += 1;
                $("#fs-gift-total").data("price");
                $("#fs-gift-amount").val(e),
                s.calcPrice()
            }).on("click", ".fsl-shuliang-reduce",
            function() {
                var e = parseInt($("#fs-gift-amount").val()) || 1;
                if (! ((e -= 1) < 1)) {
                    $("#fs-gift-total").data("price");
                    $("#fs-gift-amount").val(e),
                    s.calcPrice()
                }
            }).on("input", "#fs-gift-amount",
            function(e) {
                var t = parseInt($(this).val()) || "";
                $(this).val(t),
                s.calcPrice()
            }).on("blur", "#fs-gift-amount",
            function() {
                "" == (parseInt($(this).val()) || "") && $(this).val("1"),
                s.calcPrice()
            }).on("click", "#fs-gift-send",
            function(e) {
                if ($(this).hasClass("enable")) {
                    var i = $("#fs-gift-total").data("giftid") || 0;
                    if (0 == i || void 0 == i) return void $(document).minTipsBox({
                        tipsContent: "请选择赠送的礼物",
                        tipsTime: 1
                    });
                    if (parseInt(parseFloat($("#fs-gift-amount").val())) * parseInt(parseFloat($("#fs-gift-total").data("price"))) > 3e3) return void $(document).minTipsBox({
                        tipsContent: "支付限额超过3000元，无法支付",
                        tipsTime: 1
                    });
                    if (!n) {
                        var s = {
                            liveId: zbvd.zbid,
                            topicId: zbvd.topicid,
                            total_fee: 0,
                            giftcount: parseInt($("#fs-gift-amount").val()),
                            giftid: i,
                            byUserId: $("#fs-gift-user").val() || zbvd.creator.id
                        };
                        $("#loadingToast").show(),
                        n = !0,
                        $.ajax({
                            type: "POST",
                            url: "/live/PayCenter",
                            data: s,
                            dataType: "JSON",
                            success: function(e) {
                                if (n = !1, e && e.isok)"zerogift" == e.code ? ($("#loadingToast").hide(), "Vertical" == zbvd.tplname ? $("#fs-gift-panel").hide() : $("#c-gift").hide()) : location.host.indexOf(".vzan.com") > 0 ? o(s) : t(e.Msg, s);
                                else {
                                    if (e && "001" == e.code) return void(window.location.href = e.Msg);
                                    $(document).minTipsBox({
                                        tipsContent: e.Msg,
                                        tipsTime: 1
                                    }),
                                    $("#loadingToast").hide()
                                }
                            },
                            error: function() {
                                n = !1,
                                $(document).minTipsBox({
                                    tipsContent: "请求失败",
                                    tipsTime: 1
                                }),
                                $("#loadingToast").hide()
                            }
                        })
                    }
                    e.stopPropagation()
                }
            })
        },
        GetGiftList: function() {
            var e = "/live/getzbgiftlist-" + zbvd.zbid;
            $.ajax({
                type: "POST",
                url: e,
                data: {
                    tpid: zbvd.topicid
                },
                dataType: "json",
                success: function(e) {
                    if (e.isok) {
                        var t = parseInt(e.code);
                        if (7 == t) {
                            var i = juicer(document.getElementById("gift-list").innerHTML, e);
                            switch (t) {
                            case 2:
                            case 7:
                            case 6:
                                $(".mlbn-present").append(i);
                                break;
                            case 5:
                                $(".fsl-present-ul").html(i)
                            }
                        } else {
                            var o = juicer(document.getElementById("gift-list").innerHTML, {
                                list: e.list
                            });
                            "Vertical" == zbvd.tplname ? $(".fsl-present-ul").html(o) : $(".mlbn-present").append(o)
                        }
                    }
                }
            })
        }
    };
    return s
}),
define("livecommon/module/coupon", ["livecommon/module/utils", "jquery.popBox"],
function(e, t) {
    var i = {
        Init: function() {
            this.BindEvent()
        },
        BindEvent: function() {
            var e = !1;
            $(".couponlist .contentwrap").scroll(function() {
                var t = $(".couponlist .contentwrap"),
                i = t.find(".couponlist-top").height() + t.find(".info").height() + t.find(".Coupon-title").height() + t.find(".Coupon-list-wrap").height();
                $(".couponlist .contentwrap").scrollTop() + $(".couponlist .contentwrap").height() >= .9 * i && (e || (e = !0, $.post("/live/GetCouponUserList", {
                    rid: $(".couponlist").attr("guid"),
                    lastid: $(".couponlist .coupon-list li:last").attr("id")
                },
                function(i) {
                    if (null != i && i.isok) {
                        var o = juicer(document.getElementById("coupon-user-list").innerHTML, {
                            dataObj: JSON.parse(i.dataObj)
                        });
                        t.find(".coupon-list").append(o),
                        e = !1
                    }
                })))
            }),
            $(document).on("click", ".content-youhui,.youhuiquan",
            function() {
                e = !1;
                var t = $(this).attr("guid"),
                o = $(this);
                if (null == t || void 0 == t) return $(".youhuiquan").hide(),
                void window.location.reload();
                $.ajax({
                    type: "POST",
                    url: "/live/GetCoupon",
                    data: {
                        codeid: t,
                        types: "ckcoupon",
                        __RequestVerificationToken: gettoken()
                    },
                    beforeSend: function() {
                        $("#loadingToast").show()
                    },
                    dataType: "json",
                    success: function(e) {
                        if (ispost = !1, $("#loadingToast").hide(), e && e.isok) i.ShowRedBagOpen(e.Msg);
                        else switch (e.code) {
                        case "notlogin":
                            window.location = "/live/tvchat-" + zbvd.topicid + "?types=oauths&t=" + Math.random();
                            break;
                        case "topic404":
                        case "coupon404":
                            return void $(document).minTipsBox({
                                tipsContent:
                                e.Msg,
                                tipsTime: 1
                            });
                        case "over":
                            return void(o.is(".youhuiquan") && $.post("/live/GetNewVote", {
                                zbid: zbvd.zbid,
                                tpid: zbvd.topicid,
                                msgtype: 29
                            },
                            function(e) {
                                e && e.isok ? e.Msg == t ? ($(".youhuiquan").hide(), $(document).minTipsBox({
                                    tipsContent: "优惠券已抢抢完了，下次手速要快一点哦^_^",
                                    tipsTime: 1
                                })) : $(".youhuiquan").attr("guid", e.Msg).fadeIn() : ($(".youhuiquan").hide(), $(document).minTipsBox({
                                    tipsContent: "优惠券已抢抢完了，下次手速要快一点哦^_^",
                                    tipsTime: 1
                                }))
                            }));
                        case "have":
                            $(document).minTipsBox({
                                tipsContent:
                                "您已经领取了这个优惠券^_^",
                                tipsTime: 1
                            }),
                            $(".youhuiquan").hide();
                            break;
                        default:
                            "" != e.Msg && $(document).minTipsBox({
                                tipsContent: e.Msg,
                                tipsTime: 1
                            })
                        }
                    },
                    error: function() {
                        ispost = !1,
                        $("#loadingToast").hide(),
                        $(document).minTipsBox({
                            tipsContent: "Error",
                            tipsTime: 1
                        })
                    }
                })
            }).on("click", ".coupon-open",
            function() {
                if (zbvd.userid) {
                    if (!ispost) {
                        ispost = !0,
                        $("#loadingToast").show();
                        var e = {
                            zbid: zbvd.zbid || 0,
                            tpid: zbvd.topicid,
                            codeid: $(this).attr("guid"),
                            __RequestVerificationToken: gettoken()
                        };
                        $.ajax({
                            type: "POST",
                            url: "/live/GetCoupon",
                            data: e,
                            beforeSend: function() {},
                            success: function(t) {
                                ispost = !1,
                                t && t.isok ? ($("#loadingToast").hide(), $(".opencoupon").hide(), i.ShowRedBagDetail(e.codeid)) : ($("#loadingToast").hide(), "have" == t.code ? i.ShowRedBagDetail(e.codeid) : "over" == t.Msg ? ($(".opencoupon").hide(), i.ShowRedBagDetail(e.codeid)) : i.ShowRedBagDetail(e.codeid))
                            },
                            error: function() {
                                ispost = !1,
                                $("#loadingToast").hide(),
                                $(document).minTipsBox({
                                    tipsContent: "Error",
                                    tipsTime: 1
                                })
                            }
                        })
                    }
                } else window.location = baseURL + "/live/tvchat-" + zbvd.topicid + "?types=oauths"
            }).on("click", ".lookotherscoupon",
            function() {
                $(".opencoupon").hide(),
                i.ShowRedBagDetail($(this).attr("guid"))
            }).on("click", ".bag-close,.couponlist,.bag-mask",
            function() {
                $(".opencoupon").hide(),
                $(".couponlist").hide(),
                $(".info-tips").hide()
            }).on("click", ".info .info-tips",
            function() {
                window.location.href = "/live/myCouponList"
            }).on("click", ".coupon-enter-icon,.side-tip_cp",
            function() {
                $(".vzui-raise-modal").removeClass("active"),
                $("#coupon-box-app").parent().addClass("active"),
                $(".coupon-mask").show(),
                couponApp && couponApp.reload()
            }).on("click", ".coupon-mask",
            function() {
                $("#coupon-box-app").parent().removeClass("active"),
                $(".coupon-mask").hide()
            })
        },
        ShowRedBagOpen: function(e) {
            isGet = !1;
            for (var t = navigator.userAgent,
            i = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], o = !0, n = 0; n < i.length; n++) if (t.indexOf(i[n]) > 0) {
                o = !1;
                break
            }
            if (o) return void("function" == typeof GetCode && GetCode(e));
            var s = JSON.parse(e),
            a = '{"CouponGuid":"' + s.id + '","CouponName":"' + s.CouponName + '","Id":"' + s.couponId + '","money":"' + s.money + '","validDate":"' + s.validDate + '","description":"' + s.description + '"}';
            if (couponData = {
                content: a,
                zbId: s.zbId,
                TopicId: s.topicId
            },
            null != s) {
                $(".couponNew").find("[name='money']").text(s.money),
                $(".couponNew").find("[name='couponUserImg']").attr("src", s.headimgurl),
                $(".couponNew").find("[name='UserNickname']").text(s.nickname),
                $(".couponNew").find("[name='description']").text(s.description),
                $(".couponNew").find("[name='CouponName']").text(s.CouponName),
                $(".couponNew").find("[name='validDate']").text("有效期至：" + s.validDate);
                var d = "";
                d = "" == s.description || null == s.description ? "暂无使用说明": s.description,
                $(".couponDesc").find("[name='descNow']").html(d),
                1 == s.isGet ? (1 == s.isUser ? $(".Ubutton").text("已经使用") : $(".Ubutton").text("已经领取"), $(".couponNew").find("[name='payfee']").text(""), $(".Ubutton").removeClass("PayUbutton"), $(".Ubutton").removeClass("GetUbutton"), $(".Ubutton").addClass("GoUbutton")) : ("" != s.payfee && null != s.payfee && void 0 != s.payfee ? ($(".Ubutton").addClass("PayUbutton"), $(".Ubutton").removeClass("GetUbutton"), $(".couponNew").find("[name='payfee']").text(s.payfee)) : ($(".Ubutton").addClass("GetUbutton"), $(".Ubutton").removeClass("PayUbutton"), $(".couponNew").find("[name='payfee']").text("")), $(".Ubutton").removeClass("GoUbutton"), $(".Ubutton").text("立即领取")),
                0 == s.LineType || "0" == s.LineType ? $(".UmineCoupon").attr("href", "/live/myverifylistnew?stype=0&state=0") : $(".UmineCoupon").attr("href", "/live/myCouponList"),
                $(".couponNew").show()
            } else layer.msg(msg.Msg)
        },
        RedBagIsOver: function(e) {
            e = JSON.parse(e.Msg),
            $(".bag-bagtype").hide(),
            $(".bag-des").html("手慢了，优惠券已经被领取完了！"),
            $(".coupon-open").hide(),
            $(".opencoupon .bag-photo").attr("src", e.headimgurl),
            $(".opencoupon").attr("guid", e.id).show(),
            $(".coupon-open").attr("guid", e.id),
            $(".lookotherscoupon").attr("guid", e.id).show(),
            $(".opencoupon .bag-username").html(e.nickname)
        },
        ShowRedBagDetail: function(e) {
            $(".opencoupon").hide(),
            $.ajax({
                type: "POST",
                url: "/live/GetCouponUserList",
                data: {
                    rid: e
                },
                beforeSend: function() {
                    $("#loadingToast").show()
                },
                dataType: "json",
                success: function(t) {
                    if ($("#loadingToast").hide(), !t || !t.isok) return void alert(t.Msg);
                    $(".info-tips").show();
                    var i = $(".couponlist"),
                    o = JSON.parse(t.Msg);
                    i.find(".bag-photo").attr("src", o.headimgurl),
                    i.find(".info-name span").html(o.nickname),
                    i.find(".coupon-title span").html(o.total_amount),
                    i.find(".info-des").html(o.content);
                    var n = juicer(document.getElementById("coupon-user-list").innerHTML, {
                        dataObj: JSON.parse(t.dataObj)
                    });
                    i.find(".coupon-list").html(n),
                    i.attr("guid", e),
                    i.show()
                }
            })
        },
        GetNewCoupon: function() {
            setTimeout(function() {
                $.post("/live/GetNewVote", {
                    tpid: zbvd.topicid,
                    zbid: zbvd.zbid,
                    msgtype: 29
                },
                function(e) {
                    e && e.isok ? 1 == zbvd.getCouponMul ? e.dataObj && $(".coupon-enter-icon").show() : ($(".youhuiquan").attr("guid", e.Msg).show(), $(".vertical-coupon-icon").addClass("animation-shake")) : ($(".vertical-coupon-icon").remove("animation-shake"), $(".youhuiquan").hide())
                })
            },
            3500)
        }
    };
    return i
}),
define("livecommon/module/inputVoice", ["livecommon/module/utils", "livecommon/module/im"],
function(e, t) {
    function i() {
        var e = navigator.userAgent;
        navigator.appVersion;
        return !! e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    }

    function o() {
        $("body").removeClass("voiceBottom")
    }

    function n() {
        0 < $(".isPlaying").length && $(".isPlaying").removeClass("audioloading").removeClass("isPlaying")
    }

    function s() {
        $(".recording_click .btn_dd").removeClass("stopRec").removeClass("startRec")
    }

    function a(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }

    function d(e) {
        var t = e;
        if (t.addClass("isReaded"), rememberImReaded(t.parents("li").attr("attr-id")), t.hasClass("isPlaying")) _ = !1,
        x.pause(),
        T.removeAttr("src"),
        clearInterval(I),
        z = 0,
        r();
        else {
            _ = !0,
            r(),
            t.addClass("isPlaying"),
            t.addClass("audioloading");
            var i = t.find(".audio_info").data("src");
            "" != i && (T.attr("src", i), x.volume = 1, x.play(), clearInterval(I), I = setInterval(function() {
                if (t.hasClass("audioloading") && z < 5) {
                    var e = Math.random();
                    T.attr("src", i + "?v=" + e),
                    z += 1,
                    x.volume = 1,
                    x.play()
                }
                z >= 5 && (r(), clearInterval(I), z = 0, x.pause(), T.removeAttr("src"), $(document).minTipsBox({
                    tipsContent: "音频加载失败，请稍后重试",
                    tipsTime: 1
                }))
            },
            2e3))
        }
    }

    function r() {
        $(".isPlaying").length > 0 && $(".isPlaying").removeClass("isPlaying").removeClass("audioloading")
    }

    function c(e) {
        y = !1,
        clearTimeout(l),
        wx.uploadVoice({
            localId: e,
            isShowProgressTips: 1,
            success: function(e) {
                e.serverId;
                $(".recordingSending").show(),
                $.ajax({
                    type: "post",
                    url: "/live/uploadRecordred",
                    data: {
                        mediaId: e.serverId,
                        voiceTime: u,
                        zbid: zbvd.zbid,
                        topicid: zbvd.topicid
                    },
                    dataType: "JSON",
                    success: function(e) {
                        e && e.isok ? (!
                        function(e, i) {
                            t.SendMessage("audio", e.msg, "", 0, i, 3),
                            h || o()
                        } (e, u), $(".recordingSending").find("b").html("上传成功！"), setTimeout(function() {
                            $("#btnCancelRec").trigger("click"),
                            h && $("#btnStartRec").click()
                        },
                        1e3)) : ($(".recordingSending").find("b").html(e.msg), setTimeout(function() {
                            $("#btnCancelRec").click()
                        },
                        1e3))
                    },
                    error: function() {
                        alert("语音上传失败，请重试！"),
                        $("#btnCancelRec").click()
                    }
                })
            }
        }),
        p && (wx.playVoice({
            localId: e
        }), wx.stopVoice({
            localId: e
        }))
    }
    var l, p = i(),
    u = 0,
    m = 0;
    document.getElementById("inputbar") && (m = document.getElementById("inputbar").offsetTop - $(".recording_tab_box").height());
    var g = !0,
    v = !0,
    h = !1,
    f = function() {
        u++,
        u > 60 ? (console.log("clockstop"), u = 60, $(".second_dd var").text(u), clearTimeout(l), $(".recording_tab_box").hasClass("clickRecording") && $("#btnStopRec").click()) : ($(".second_dd var").text(u), l = setTimeout(f, 1e3))
    },
    b = !0,
    w = !1,
    y = !0,
    g = !0,
    k = "",
    _ = !0,
    x = document.getElementById("audioPlayer"),
    T = $("#audioPlayer");
    if (null != x) {
        x.loop = !1,
        x.addEventListener("canplay",
        function() {
            imdebug && console.log("audio canplay")
        },
        !1);
        var I, z = 0;
        x.addEventListener("canplaythrough",
        function(e) {
            imdebug && console.log("audio canplaythrough readyState:" + x.readyState + " duration:" + x.duration)
        },
        !1),
        x.addEventListener("stalled",
        function(e) {
            imdebug && console.log("audio stalled"),
            0 < $(".audioloading").length && 1 > x.currentTime && T.attr("src", $(".isPlaying").find("audio").attr("src"))
        },
        !1),
        x.addEventListener("pause",
        function() {
            imdebug && console.log("audio pause duration:" + x.duration)
        },
        !1),
        x.addEventListener("ended",
        function() {
            imdebug && console.log("audio ended");
            var e, t, i;
            if (e = $("#speakBox .recordingMsg"), t = e.not(".isReaded"), i = e.index($(".isPlaying")), r(), e && e.length > 0 && t.length > 0 && -1 != i) for (var o = i; o + 1 < e.length;) {
                o += 1;
                var n = e.eq(o);
                if (!n.hasClass("isReaded")) {
                    d(n);
                    break
                }
            }
        },
        !1),
        x.addEventListener("error",
        function() {
            imdebug && console.log("audio error")
        },
        !1),
        x.addEventListener("playing",
        function() {
            $(".isPlaying").removeClass("audioloading").addClass("loadok"),
            clearInterval(I),
            z = 0,
            imdebug && console.log("audio playing")
        },
        !1)
    }
    var C = document.getElementById("btnRecording");
    return C && zbvd.userid > 0 && (C && C.addEventListener("touchstart",
    function(t) {
        console.log(t.changedTouches[0].clientY),
        t.preventDefault(),
        e.isAndroid() || i() || $(document).minTipsBox({
            tipsContent: "请到手机端录音",
            tipsTime: 1
        }),
        imdebug && console.log("touchstart"),
        v && (v = !1, $(document).minTipsBox({
            tipsContent: "如果不能按住说话，请切换至点击录音模式",
            tipsTime: 1
        })),
        g = !0,
        b && y && wx.startRecord({
            success: function(e) {
                r(),
                x.pause(),
                g ? (w = !0, b = !1, $("#btnRecording").addClass("on"), $(".inputbar").addClass("recording"), $(".recording_box .tips_dd").text("松开发送"), u = 0, $(".second_dd var").text(u), l = setTimeout(f, 1e3)) : wx.stopRecord({
                    complete: function(e) {
                        b = !0
                    }
                })
            }
        }),
        a(t)
    }), C && C.addEventListener("touchmove",
    function(e) {
        imdebug && console.log("touchmove"),
        0 == $(".clickRecording").length && (e.changedTouches[0].clientY >= m ? ($(".recordingTips_2").hide(), $(".recording_box .tips_dd").text("松开发送")) : ($(".recordingTips_2").show(), $(".recording_box .tips_dd").text("松开取消")))
    }), C && C.addEventListener("touchend",
    function(e) {
        if (imdebug && console.log("touchend"), 0 == $(".clickRecording").length) if (g = !1, $(".inputbar").removeClass("recording"), $(".recordingTips_2").hide(), $(".recording_box .tips_dd").text("按住说话"), $("#btnRecording").removeClass("on"), $(".second_dd var").text("0"), w) {
            var t, i = e.changedTouches[0].clientY;
            console.log(i),
            clearTimeout(l),
            1 > u ? ($(document).minTipsBox({
                tipsContent: "录音时间太短",
                tipsTime: 1
            }), wx.stopRecord({
                complete: function(e) {}
            }), b = !0, w = !1) : wx.stopRecord({
                success: function(e) {
                    t = e.localId,
                    i >= m ? c(t) : $(document).minTipsBox({
                        tipsContent: "已取消发送",
                        tipsTime: 1
                    })
                },
                complete: function(e) {
                    b = !0,
                    w = !1
                }
            })
        } else wx.stopRecord(),
        b = !0
    }), document.addEventListener("touchcancel",
    function(e) {
        g = !1
    })),
    wx.ready(function() {
        wx.onVoiceRecordEnd({
            complete: function(e) {
                console.log("autostop"),
                clearTimeout(l),
                u = 60,
                $(".inputbar").removeClass("recording").removeClass("recording_2"),
                $(".recordingTips_2").hide(),
                $("#btnRecording").removeClass("on"),
                w = !1,
                b = !0,
                $(".second_dd var").text(u),
                c(e.localId)
            }
        })
    }),
    $(".recordingMsg").each(function() {
        imReaded($(this).closest("dd").attr("attr-id"))
    }),
    {
        Init: function() {
            this.BindEvent()
        },
        BindEvent: function() {
            $(document).on("click", ".btnInputVoice",
            function(t) { - 2 == zbvd.levels && $(document).popBox({
                    boxContent: "您涉嫌违规发言，已被禁言",
                    btnType: "confirm",
                    confirmName: "知道了"
                }),
                e.IsWeiXinChat() ? ($("body").toggleClass("voiceBottom"), $("#c-gift,.morebutton,#pingQqFace").hide(), a(t)) : $(document).popBox({
                    boxContent: "请使用手机微信发语音！",
                    btnType: "confirm",
                    confirmName: "知道了"
                })
            }).on("click", ".tab_recordingType",
            function(e) {
                $(".recording_tab_box").toggleClass("clickRecording"),
                a(e)
            }).on("click", ".recording_tab_box",
            function(e) {
                e.stopPropagation()
            }).on("click", ".recordingMsg",
            function() {
                d($(this))
            }).on("click", "#btnStartRec",
            function(e) {
                clearTimeout(l),
                u = 0,
                b && (b = !1, wx.startRecord({
                    success: function(e) {
                        n(),
                        x.pause(),
                        s(),
                        $(".recording_click .btn_dd").addClass("startRec"),
                        $(".inputbar").addClass("recording_2"),
                        $(".recording_click .tips_dd").text("点击按钮，完成录音"),
                        u = 0,
                        $(".second_dd var").text(u),
                        l = setTimeout(f, 1e3)
                    },
                    fail: function(e) {
                        u = 0,
                        b = !0,
                        s()
                    }
                })),
                a(e)
            }).on("click", "#btnStopRec",
            function(e) {
                u < 1 ? $(document).minTipsBox({
                    tipsContent: "录音时间太短",
                    tipsTime: 1
                }) : (clearTimeout(l), wx.stopRecord({
                    success: function(e) {
                        console.log("stopRecord"),
                        k = e.localId,
                        s(),
                        $(".recording_click .btn_dd").addClass("stopRec"),
                        $(".recording_click .tips_dd").text(""),
                        h && $("#btnSentRec").click()
                    },
                    fail: function(e) {
                        s(),
                        b = !0,
                        $(".second_dd var").text("0"),
                        $(".inputbar").removeClass("recording_2"),
                        $(".recording_click .tips_dd").text("点击按钮录音"),
                        $(document).minTipsBox({
                            tipsContent: "录音时间太短",
                            tipsTime: 1
                        })
                    }
                })),
                u < 60 && (h = !1),
                a(e)
            }).on("click", "#btnSentRec",
            function(e) {
                "" != k && (c(k), $(".inputbar").removeClass("recording_2"), $(".recording_click .tips_dd").text("点击按钮录音")),
                a(e)
            }).on("click", "#btnCancelRec",
            function(e) {
                clearTimeout(l),
                k = "",
                b = !0,
                y = !0,
                u = 0,
                $(".recordingSending").hide(),
                $(".recordingSending").find("b").html("语音正在发送..."),
                $(".second_dd var").text("0"),
                $(".inputbar").removeClass("recording_2"),
                $(".recording_click .tips_dd").text("点击按钮录音"),
                s(),
                a(e)
            })
        }
    }
}),
define("livecommon/module/vote_custom", ["livecommon/module/utils"],
function(utils) {
    function callPay(e, t) {
        "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", onBridgeReady, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", onBridgeReady), document.attachEvent("onWeixinJSBridgeReady", onBridgeReady)) : onBridgeReady(e, t)
    }

    function onBridgeReady(e, t) {
        WeixinJSBridge.invoke("getBrandWCPayRequest", JSON.parse(e),
        function(e) {
            "get_brand_wcpay_request:ok" == e.err_msg ? ($(document).minTipsBox({
                tipsContent: "支付成功！",
                tipsTime: 1
            }), $("#loadingToast").hide(), is_pay_post = !1, $("#QRcodePay").hide(), $("#qqmarrydialog").hide(), $("#livevote-choose").hide(), $(".voteGiftBox").hide()) : "get_brand_wcpay_request:cancel" != e.err_msg && setTimeout(function() {
                jsNaticeCall(t)
            },
            500),
            $("#loadingToast").hide(),
            redbagbol = !0
        })
    }

    function jsNaticeCall(e) {
        $(document).minTipsBox({
            tipsContent: "准备支付",
            tipsTime: 1
        }),
        $.ajax({
            type: "POST",
            url: "/live/PayCenter?t=2",
            data: e,
            dataType: "json",
            success: function(e) {
                $("#loadingToast").hide(),
                is_pay_post = !1,
                e.isok ? ($("#payqrcode").attr("src", "/live/nt?data=" + e.Msg), $("#QRcodePay").show()) : $(document).minTipsBox({
                    tipsContent: e.Msg,
                    tipsTime: 1
                })
            },
            error: function(e, t, i) {
                $(document).minTipsBox({
                    tipsContent: "支付失败",
                    tipsTime: 1
                }),
                $("#loadingToast").hide(),
                is_pay_post = !1
            }
        })
    }
    var is_pay_post = !1,
    BuildVoteStatus = function(e) {
        switch (e) {
        case 0:
            return "";
        case 1:
            return "进行中";
        case - 1 : return "已结束"
        }
    };
    juicer.register("votestatus_build", BuildVoteStatus);
    var numMap = {
        1 : "一",
        2 : "二",
        3 : "三",
        4 : "四",
        5 : "五",
        6 : "六",
        7 : "七",
        8 : "八",
        9 : "九",
        0 : "十"
    },
    LiveVote = {
        Init: function() {
            this.BindEvent()
        },
        BindEvent: function() {
            $(document).on("click", ".toupiaobtn,.icon-admin-vote,.inputicon.vote",
            function() {
                $("#livevote").toggle(),
                $(".panel-more").hide()
            }).on("click", "#livevote .red-mask-02,#livevote .dialog-close",
            function() {
                $("#livevote").hide()
            }).on("click", "#livevote-choose .icon-vote-title-close,#livevote-choose .red-mask-02",
            function() {
                $("#livevote-choose").hide()
            }).on("click", "#livevote-result .icon-vote-title-close,#livevote-result .red-mask-02",
            function() {
                $("#livevote-result").hide()
            }).on("click", '.vote-send-ul,[data-msgtype="25"]',
            function(e) {
                e.stopPropagation();
                var vtid = $(this).attr("vtid");
                $(this).hasClass("vote-send-ul") && (vtid = $(this).parent().attr("vtid")),
                $.post("/liveajax/GetVote", {
                    vtid: vtid
                },
                function(data) {
                    if (data && data.isok) {
                        var msg = eval("(" + data.Msg + ")");
                        msg.zbid = zbvd.zbid,
                        LiveVote.ShowVoteChoose(msg)
                    } else $(document).minTipsBox({
                        tipsContent: data.Msg,
                        tipsTime: 1
                    })
                })
            }).on("click", "#livevote-choose .dialog-vote-select-bt.votebtn",
            function(e) {
                e.stopPropagation();
                var t = parseInt($(this).attr("vtid")) || 0,
                i = parseInt($("#livevote-choose :radio:checked").val()) || 0;
                $.post("/liveajax/userVote", {
                    vsid: i,
                    vtid: t
                },
                function(e) {
                    e && e.isok ? ($(document).minTipsBox({
                        tipsContent: "投票成功",
                        tipsTime: 1
                    }), $('li[vtid="' + t + '"]').click()) : ($("#livevote-choose").hide(), $(document).minTipsBox({
                        tipsContent: e.Msg,
                        tipsTime: 1
                    }))
                })
            }).on("click", "#btn-sendvote-1",
            function() {
                $("#livevote").hide(),
                LiveVote.ShowVoteList()
            }).on("click", "#livevote-sendvote .red-mask-02,#livevote-sendvote .icon-vote-title-close",
            function() {
                $("#livevote-sendvote").hide()
            }).on("click", "#btn-editvote",
            function() {
                LiveVote.ShowVoteManage()
            }).on("click", "#votemgr .vote-admin-bt",
            function() {
                LiveVote.ShowNewVote()
            }).on("click", "#votemgr .icon-vote-title-close",
            function() {
                $("#votemgr").hide()
            }).on("click", "#voteedit .icon-vote-title-close,#voteedit .red-mask-02",
            function() {
                LiveVote.IsEdit = !1,
                LiveVote.EditId = 0,
                $("#voteedit").hide()
            }).on("click", "#voteedit .a01",
            function() {
                var e = $("#voteedit").find("ul[copynode]").eq(0).clone(!0);
                e.find(":text").val(""),
                e.attr("subid", 0),
                e.removeAttr("copynode"),
                e.append('<li><a class="vote-edit-delete-select" href="javascript:;"></a></li>');
                var t = $(".voteedititems ul[nodeitem]").length;
                t += 1,
                t = t.toString().replace(/\d+/,
                function(e) {
                    return 10 == e ? "十": e > 0 && e < 10 ? numMap[e] : e
                }),
                e.find("span[nodenum]").text(t),
                $(".voteedititems").append(e)
            }).on("click", "#voteedit .vote-edit-delete-select",
            function() {
                var e = $(this).closest("ul");
                if (LiveVote.ResetItemNum(), LiveVote.IsEdit) {
                    var t = $(this).closest("ul").attr("subid") || 0,
                    i = {
                        tpid: zbvd.topicid,
                        vtid: LiveVote.EditId,
                        vsid: t
                    };
                    0 != t ? $(document).popBox({
                        boxContent: "删除后不可恢复，确定删除吗？",
                        btnType: "both",
                        confirmFunction: function() {
                            $.post("/liveajax/delsVote", i,
                            function(t) {
                                t && t.isok ? e.remove() : $(document).minTipsBox({
                                    tipsContent: t.Msg,
                                    tipsTime: 1
                                })
                            })
                        }
                    }) : e.remove()
                } else e.remove()
            }).on("click", "#voteedit .a02",
            function() {
                if ("" == $.trim($("#voteedit #vote_title").val())) return void $(document).minTipsBox({
                    tipsContent: "投票标题不能为空",
                    tipsTime: 1
                });
                var e = $("#voteedit ul[nodeitem]"),
                t = [],
                i = !1,
                o = {};
                if (LiveVote.IsEdit ? (e.each(function(e, o) {
                    var n = $(o).find(":text").eq(0).val();
                    "" == $.trim(n) && (i = !0),
                    t.push($(o).attr("subid") + "|" + n)
                }), o = {
                    vid: LiveVote.EditId,
                    title: $.trim($("#voteedit #vote_title").val()),
                    tpid: zbvd.topicid,
                    vtlist: t.join(","),
                    endtime: $("#vote_endtime").val()
                }) : (e.each(function(e, o) {
                    var n = $(o).find(":text").eq(0).val();
                    "" == $.trim(n) && (i = !0),
                    t.push(n)
                }), o = {
                    title: $.trim($("#voteedit #vote_title").val()),
                    tpid: zbvd.topicid,
                    vtlist: t.join(","),
                    endtime: $("#vote_endtime").val()
                }), i) return void $(document).minTipsBox({
                    tipsContent: "选项不能为空",
                    tipsTime: 1
                });
                $.post("/liveajax/addVote", o,
                function(e) {
                    $(document).minTipsBox({
                        tipsContent: e.Msg,
                        tipsTime: 1
                    }),
                    e && e.isok && ($("#voteedit").hide(), LiveVote.ShowVoteManage())
                })
            }).on("click", "#votemgr a[voteitemid]",
            function() {
                var e = parseInt($(this).attr("voteitemid")) || 0;
                if (e <= 0) return void $(document).minTipsBox({
                    tipsContent: "非法请求",
                    tipsTime: 1
                });
                LiveVote.ShowEditVote(e)
            }).on("click", "#votemgr .vote-del",
            function(e) {
                var t = $(this).closest("a[voteitemid]").attr("voteitemid");
                $(document).popBox({
                    boxContent: "删除后不可恢复，确定删除吗？",
                    btnType: "both",
                    confirmFunction: function() {
                        LiveVote.DeleteVote(t)
                    }
                }),
                e.stopPropagation()
            }).on("click", "#votemgr .vote-edit",
            function(e) {
                var t = $(this).closest("a[voteitemid]").attr("voteitemid");
                LiveVote.ShowEditVote(t, !0),
                e.stopPropagation()
            }).on("click", ".dialog-vote-gift-bt",
            function() {
                var e = parseInt($(this).data("vtid")) || 0;
                if (0 == (parseInt($("#livevote-choose :radio:checked").val()) || 0)) return void $(document).minTipsBox({
                    tipsContent: "请选择一个选项",
                    tipsTime: 1
                });
                $(".tuwen-mic-bt").data("voteid", e),
                $(".voteGiftBox").show()
            }).on("click", ".tuwen-close",
            function() {
                $(".voteGiftBox").hide()
            }).on("click", ".vote-gift-reduce",
            function() {
                var e = $(".mic-input-number");
                e.val() > 1 && e.val(e.val() - 1)
            }).on("click", ".vote-gift-add",
            function() {
                var e = $(".mic-input-number");
                e.val(parseInt(e.val()) + 1)
            }).on("click", ".tuwen-mic-bt",
            function(e) {
                if (!is_pay_post) {
                    var t = {
                        liveId: zbvd.zbid,
                        topicId: zbvd.topicid,
                        giftcount: parseInt($(".mic-input-number").val()),
                        voteId: $(this).data("voteid") || 0,
                        vsId: $("#livevote-choose :radio:checked").val() || 0,
                        byUserId: zbvd.creator.id
                    };
                    $("#loadingToast").show(),
                    is_pay_post = !0,
                    $.ajax({
                        type: "POST",
                        url: "/live/PayCenter",
                        data: t,
                        dataType: "JSON",
                        success: function(e) {
                            if (is_pay_post = !1, e && e.isok) callPay(e.Msg, t);
                            else {
                                if (e && "001" == e.code) return void(window.location.href = e.Msg);
                                $(document).minTipsBox({
                                    tipsContent: e.Msg,
                                    tipsTime: 1
                                }),
                                $("#loadingToast").hide()
                            }
                        },
                        error: function() {
                            is_pay_post = !1,
                            $(document).minTipsBox({
                                tipsContent: "请求失败",
                                tipsTime: 1
                            }),
                            $("#loadingToast").hide()
                        }
                    })
                }
                e.stopPropagation()
            })
        },
        BindTimePicker: function(e) {
            $("#vote_endtime").mobiscroll().datetime({
                theme: "android-holo-light",
                mode: "scroller",
                display: "bottom",
                lang: "zh",
                minDate: new Date((new Date).getMonth((new Date).getMonth() - 1)),
                maxDate: new Date((new Date).setMonth((new Date).getMonth() + 6)),
                dateFormat: "yy-mm-dd",
                timeFormat: "HH:ii",
                stepMinute: 1
            });
            void 0 != e && $("#vote_endtime").val(e)
        },
        ShowVoteResult: function(e) {
            $("#livevote-choose").hide(),
            $("#livevote-result").html(juicer($("#livevote-result-tpl").html(), e)).show()
        },
        ShowVoteChoose: function(e) {
            $("#livevote-result").hide(),
            $("#livevote-choose").html(juicer($("#livevote-choose-tpl").html(), e)).show()
        },
        ShowVoteList: function() {
            $.post("/liveajax/GetVoteList", {
                tpid: zbvd.topicid
            },
            function(data) {
                if (data && data.isok) {
                    var msg = eval("(" + data.Msg + ")");
                    msg.length <= 0 ? LiveVote.ShowVoteManage() : ($("#livevote-sendvote").html(juicer($("#livevote-sendvote-tpl").html(), {
                        votelist: msg
                    })), $("#livevote-sendvote").show())
                } else $(document).minTipsBox({
                    tipsContent: data.Msg,
                    tipsTime: 1
                })
            })
        },
        ShowVoteManage: function() {
            $("#livevote").hide(),
            $.post("/liveajax/GetVoteList", {
                tpid: zbvd.topicid
            },
            function(data) {
                if (data && data.isok) {
                    var msg = eval("(" + data.Msg + ")");
                    $("#votemgr").html(juicer($("#votemgr-tpl").html(), {
                        votelist: msg
                    })).show()
                } else $(document).minTipsBox({
                    tipsContent: data.Msg,
                    tipsTime: 1
                }),
                $("#votemgr").html(juicer($("#votemgr-tpl").html(), {
                    votelist: []
                })).show()
            })
        },
        ShowNewVote: function() {
            LiveVote.IsEdit = !1,
            $("#voteedit").html(juicer($("#voteedit-tpl").html(), {
                SignupList: [{},
                {},
                {}]
            })).show(),
            $("#voteedit").show(),
            LiveVote.BindTimePicker($("#server_time").val())
        },
        IsEdit: !1,
        EditId: 0,
        ShowEditVote: function(_vtid, flag) {
            $.post("/liveajax/GetVote", {
                vtid: _vtid
            },
            function(data) {
                if (data && data.isok) {
                    var msg = eval("(" + data.Msg + ")");
                    if (flag) msg.EndTime = msg.EndTime.replace("T", " "),
                    $("#voteedit").html(juicer($("#voteedit-tpl").html(), msg)).show(),
                    LiveVote.ResetItemNum(),
                    LiveVote.IsEdit = !0,
                    LiveVote.EditId = _vtid,
                    LiveVote.BindTimePicker(msg.EndTime);
                    else switch (msg.SqlStates) {
                    case - 1 : case 1:
                        LiveVote.ShowVoteResult(msg);
                        break;
                    case 0:
                        msg.EndTime = msg.EndTime.replace("T", " "),
                        $("#voteedit").html(juicer($("#voteedit-tpl").html(), msg)).show(),
                        LiveVote.ResetItemNum(),
                        LiveVote.IsEdit = !0,
                        LiveVote.EditId = _vtid,
                        LiveVote.BindTimePicker(msg.EndTime)
                    }
                } else $(document).minTipsBox({
                    tipsContent: data.Msg,
                    tipsTime: 1
                })
            })
        },
        ResetItemNum: function() {
            $("#voteedit ul[nodeitem]").each(function(e, t) {
                var i = e + 1;
                $(t).find("span[nodenum]").text(i.toString().replace(/\d+/,
                function(e) {
                    return 10 == e ? "十": e > 0 && e < 10 ? numMap[e] : e
                }))
            })
        },
        DeleteVote: function(e) {
            var t = {
                tpid: zbvd.topicid,
                vtid: e,
                vsid: 0
            };
            $.post("/liveajax/delsVote", t,
            function(t) {
                $(document).minTipsBox({
                    tipsContent: t.Msg,
                    tipsTime: 1
                }),
                t && t.isok && $("#votemgr a[voteitemid='" + e + "']").remove()
            })
        }
    };
    return LiveVote
}),
define("livecommon/module/vote", ["livecommon/module/utils"],
function(utils) {
    var BuildVoteStatus = function(e) {
        switch (e) {
        case 0:
            return "";
        case 1:
            return "进行中";
        case - 1 : return "已结束"
        }
    };
    juicer.register("votestatus_build", BuildVoteStatus);
    var numMap = {
        1 : "一",
        2 : "二",
        3 : "三",
        4 : "四",
        5 : "五",
        6 : "六",
        7 : "七",
        8 : "八",
        9 : "九",
        0 : "十"
    },
    LiveVote = {
        Init: function() {
            this.BindEvent()
        },
        BindEvent: function() {
            $(document).on("click", ".toupiaobtn,.icon-admin-vote,.inputicon.vote,.livevote",
            function() {
                $("#livevote").show(),
                $(".panel-more").hide()
            }).on("click", "#livevote .red-mask-02,#livevote .dialog-close",
            function() {
                $("#livevote").hide()
            }).on("click", "#livevote-choose .icon-vote-title-close,#livevote-choose .red-mask-02",
            function() {
                $("#livevote-choose").hide()
            }).on("click", "#livevote-result .icon-vote-title-close,#livevote-result .red-mask-02",
            function() {
                $("#livevote-result").hide()
            }).on("click", 'div[name="divVoteConta"]',
            function(e) {
                e.stopPropagation();
                var voteid = $(this).attr("voteid"),
                datatype = $(this).attr("datatype"),
                votetype_name = $(this).attr("votetype_name"),
                votetype = $(this).attr("votetype");
                if (2 == datatype) {
                    var vtid = $(this).attr("vtid");
                    $(this).hasClass("vote-send-ul") && (vtid = $(this).parent().attr("vtid")),
                    $.post("/liveajax/GetVote", {
                        vtid: voteid
                    },
                    function(data) {
                        if (data && data.isok) {
                            var msg = eval("(" + data.Msg + ")");
                            msg.IsVote ? LiveVote.ShowVoteResult(msg) : LiveVote.ShowVoteChoose(msg)
                        } else $(document).minTipsBox({
                            tipsContent: data.Msg,
                            tipsTime: 1
                        })
                    })
                } else {
                    var url = "";
                    url = 1 != votetype ? "/live/VoteSmallVodieAndPic?tpid=" + zbvd.topicid + "&voteid=" + voteid: "/live/votetext?tpid=" + zbvd.topicid + "&voteid=" + voteid + "&datatype=1",
                    url += "&v=" + Math.random(),
                    window.location.href = url
                }
            }).on("click", "#livevote-choose .dialog-vote-select-bt",
            function() {
                var e = parseInt($(this).attr("vtid")) || 0,
                t = parseInt($("#livevote-choose :radio:checked").val()) || 0;
                $.post("/liveajax/userVote", {
                    vsid: t,
                    vtid: e
                },
                function(t) {
                    t && t.isok ? $('[vtid="' + e + '"]').click() : ($("#livevote-choose").hide(), $(document).minTipsBox({
                        tipsContent: t.Msg,
                        tipsTime: 1
                    }))
                })
            }).on("click", "#btn-sendvote-1",
            function() {
                $("#livevote").hide(),
                LiveVote.ShowVoteList()
            }).on("click", "#livevote-sendvote .red-mask-02,#livevote-sendvote .icon-vote-title-close",
            function() {
                $("#livevote-sendvote").hide()
            }).on("click", "#btn-editvote",
            function() {
                LiveVote.ShowVoteManage()
            }).on("click", "#votemgr .vote-admin-bt",
            function() {
                LiveVote.ShowNewVote()
            }).on("click", "#votemgr .icon-vote-title-close",
            function() {
                $("#votemgr").hide()
            }).on("click", "#voteedit .icon-vote-title-close,#voteedit .red-mask-02",
            function() {
                LiveVote.IsEdit = !1,
                LiveVote.EditId = 0,
                $("#voteedit").hide()
            }).on("click", "#voteedit .a01",
            function() {
                var e = $("#voteedit").find("ul[copynode]").eq(0).clone(!0);
                e.find(":text").val(""),
                e.attr("subid", 0),
                e.removeAttr("copynode"),
                e.append('<li><a class="vote-edit-delete-select" href="javascript:;"></a></li>');
                var t = $(".voteedititems ul[nodeitem]").length;
                t += 1,
                t = t.toString().replace(/\d+/,
                function(e) {
                    return 10 == e ? "十": e > 0 && e < 10 ? numMap[e] : e
                }),
                e.find("span[nodenum]").text(t),
                $(".voteedititems").append(e)
            }).on("click", "#voteedit .vote-edit-delete-select",
            function() {
                var e = $(this).closest("ul");
                if (LiveVote.ResetItemNum(), LiveVote.IsEdit) {
                    var t = $(this).closest("ul").attr("subid") || 0,
                    i = {
                        tpid: zbvd.topicid,
                        vtid: LiveVote.EditId,
                        vsid: t
                    };
                    0 != t ? $(document).popBox({
                        boxContent: "删除后不可恢复，确定删除吗？",
                        btnType: "both",
                        confirmFunction: function() {
                            $.post("/liveajax/delsVote", i,
                            function(t) {
                                t && t.isok ? e.remove() : $(document).minTipsBox({
                                    tipsContent: t.Msg,
                                    tipsTime: 1
                                })
                            })
                        }
                    }) : e.remove()
                } else e.remove()
            }).on("click", "#voteedit .a02",
            function() {
                if ("" == $.trim($("#voteedit #vote_title").val())) return void $(document).minTipsBox({
                    tipsContent: "投票标题不能为空",
                    tipsTime: 1
                });
                var e = $("#voteedit ul[nodeitem]"),
                t = [],
                i = !1,
                o = {};
                if (LiveVote.IsEdit ? (e.each(function(e, o) {
                    var n = $(o).find(":text").eq(0).val();
                    "" == $.trim(n) && (i = !0),
                    t.push($(o).attr("subid") + "|" + n)
                }), o = {
                    vid: LiveVote.EditId,
                    title: $.trim($("#voteedit #vote_title").val()),
                    tpid: zbvd.topicid,
                    vtlist: t.join(","),
                    endtime: $("#vote_endtime").val()
                }) : (e.each(function(e, o) {
                    var n = $(o).find(":text").eq(0).val();
                    "" == $.trim(n) && (i = !0),
                    t.push(n)
                }), o = {
                    title: $.trim($("#voteedit #vote_title").val()),
                    tpid: zbvd.topicid,
                    vtlist: t.join(","),
                    endtime: $("#vote_endtime").val()
                }), i) return void $(document).minTipsBox({
                    tipsContent: "选项不能为空",
                    tipsTime: 1
                });
                $.post("/liveajax/addVote", o,
                function(e) {
                    $(document).minTipsBox({
                        tipsContent: e.Msg,
                        tipsTime: 1
                    }),
                    e && e.isok && ($("#voteedit").hide(), LiveVote.ShowVoteManage())
                })
            }).on("click", "#votemgr a[voteitemid]",
            function() {
                var e = parseInt($(this).attr("voteitemid")) || 0;
                if (e <= 0) return void $(document).minTipsBox({
                    tipsContent: "非法请求",
                    tipsTime: 1
                });
                LiveVote.ShowEditVote(e)
            }).on("click", "#votemgr .vote-del",
            function(e) {
                var t = $(this).closest("a[voteitemid]").attr("voteitemid");
                $(document).popBox({
                    boxContent: "删除后不可恢复，确定删除吗？",
                    btnType: "both",
                    confirmFunction: function() {
                        LiveVote.DeleteVote(t)
                    }
                }),
                e.stopPropagation()
            }).on("click", "#votemgr .vote-edit",
            function(e) {
                var t = $(this).closest("a[voteitemid]").attr("voteitemid");
                LiveVote.ShowEditVote(t, !0),
                e.stopPropagation()
            })
        },
        BindTimePicker: function(e) {
            $("#vote_endtime").mobiscroll().datetime({
                theme: "android-holo-light",
                mode: "scroller",
                display: "bottom",
                lang: "zh",
                minDate: new Date((new Date).getMonth((new Date).getMonth() - 1)),
                maxDate: new Date((new Date).setMonth((new Date).getMonth() + 6)),
                dateFormat: "yy-mm-dd",
                timeFormat: "HH:ii",
                stepMinute: 1
            });
            void 0 != e && $("#vote_endtime").val(e)
        },
        ShowVoteResult: function(e) {
            $("#livevote-choose").hide(),
            $("#livevote-result").html(juicer($("#livevote-result-tpl").html(), e)).show()
        },
        ShowVoteChoose: function(e) {
            $("#livevote-result").hide(),
            $("#livevote-choose").html(juicer($("#livevote-choose-tpl").html(), e)).show()
        },
        ShowVoteList: function() {
            $.post("/liveajax/GetVoteList", {
                tpid: zbvd.topicid
            },
            function(data) {
                if (data && data.isok) {
                    var msg = eval("(" + data.Msg + ")");
                    msg.length <= 0 ? LiveVote.ShowVoteManage() : ($("#livevote-sendvote").html(juicer($("#livevote-sendvote-tpl").html(), {
                        votelist: msg
                    })), $("#livevote-sendvote").show())
                } else $(document).minTipsBox({
                    tipsContent: data.Msg,
                    tipsTime: 1
                })
            })
        },
        ShowVoteManage: function() {
            $("#livevote").hide(),
            $.post("/liveajax/GetVoteList", {
                tpid: zbvd.topicid
            },
            function(data) {
                if (data && data.isok) {
                    var msg = eval("(" + data.Msg + ")");
                    $("#votemgr").html(juicer($("#votemgr-tpl").html(), {
                        votelist: msg
                    })).show()
                } else $(document).minTipsBox({
                    tipsContent: data.Msg,
                    tipsTime: 1
                }),
                $("#votemgr").html(juicer($("#votemgr-tpl").html(), {
                    votelist: []
                })).show()
            })
        },
        ShowNewVote: function() {
            LiveVote.IsEdit = !1,
            $("#voteedit").html(juicer($("#voteedit-tpl").html(), {
                SignupList: [{},
                {},
                {}]
            })).show(),
            $("#voteedit").show(),
            LiveVote.BindTimePicker($("#server_time").val())
        },
        IsEdit: !1,
        EditId: 0,
        ShowEditVote: function(_vtid, flag) {
            $.post("/liveajax/GetVote", {
                vtid: _vtid
            },
            function(data) {
                if (data && data.isok) {
                    var msg = eval("(" + data.Msg + ")");
                    if (flag) msg.EndTime = msg.EndTime.replace("T", " "),
                    $("#voteedit").html(juicer($("#voteedit-tpl").html(), msg)).show(),
                    LiveVote.ResetItemNum(),
                    LiveVote.IsEdit = !0,
                    LiveVote.EditId = _vtid,
                    LiveVote.BindTimePicker(msg.EndTime);
                    else switch (msg.SqlStates) {
                    case - 1 : case 1:
                        LiveVote.ShowVoteResult(msg);
                        break;
                    case 0:
                        msg.EndTime = msg.EndTime.replace("T", " "),
                        $("#voteedit").html(juicer($("#voteedit-tpl").html(), msg)).show(),
                        LiveVote.ResetItemNum(),
                        LiveVote.IsEdit = !0,
                        LiveVote.EditId = _vtid,
                        LiveVote.BindTimePicker(msg.EndTime)
                    }
                } else $(document).minTipsBox({
                    tipsContent: data.Msg,
                    tipsTime: 1
                })
            })
        },
        ResetItemNum: function() {
            $("#voteedit ul[nodeitem]").each(function(e, t) {
                var i = e + 1;
                $(t).find("span[nodenum]").text(i.toString().replace(/\d+/,
                function(e) {
                    return 10 == e ? "十": e > 0 && e < 10 ? numMap[e] : e
                }))
            })
        },
        DeleteVote: function(e) {
            var t = {
                tpid: zbvd.topicid,
                vtid: e,
                vsid: 0
            };
            $.post("/liveajax/delsVote", t,
            function(t) {
                $(document).minTipsBox({
                    tipsContent: t.Msg,
                    tipsTime: 1
                }),
                t && t.isok && $("#votemgr a[voteitemid='" + e + "']").remove()
            })
        }
    };
    return LiveVote
});
var qqfaceswiper = null,
inputbutton_swiper = null,
shang_swiper = null,
keyWordArr = [];
define("livecommon/module/inputbox", ["livecommon/module/im", "livecommon/module/gift", "livecommon/module/utils", "livecommon/module/redbag", "livecommon/module/coupon", "livecommon/module/inputVoice", "livecommon/module/vote_custom", "livecommon/module/vote", "livecommon/module/controls"],
function(e, t, i, o, n, s, a, d, r) {
    function c(t, i, o, n, s, a) {
        return i = (i || "").toString(),
        "" == i.trim() ? ($(document).minTipsBox({
            tipsContent: "内容不能为空",
            tipsTime: 1
        }), !1) : i.trim().length > 200 ? ($(document).minTipsBox({
            tipsContent: "最多只能输入200个汉字哦",
            tipsTime: 3
        }), !1) : (e.SendMessage(t, i, o, n, s, a), void u.Reset(!0))
    }

    function l(e, t, i, o, n, s) {
        if (p) {
            p = !1;
            var a = {
                byUserId: i,
                total_fee: t,
                liveId: o,
                topicId: n,
                parentid: s
            };
            if (location.host.indexOf(".vzan.com") > 0) return $("#loadingToast").show(),
            jsNaticeCall(a,
            function(e) {
                p = !0,
                $("#loadingToast").hide()
            }),
            !1;
            paymentByUrl(baseURL + "/live/PayCenter", a,
            function() {
                p = !0
            },
            function() {
                p = !0
            })
        }
    }
    var p = !0,
    u = {
        Init: function() {
            this.BindEvent(),
            o.Init(),
            t.Init(),
            156387 == zbvd.zbid || 86149 == zbvd.zbid || 15368 == zbvd.zbid ? a ? a.Init() : console.log("VoteCustom load fail") : d ? d.Init() : console.log("LiveVote load fail"),
            n.Init(),
            zbvd.tplname,
            "Vertical" != zbvd.tplname && $(".inputbar").length > 0 && s.Init()
        },
        Reset: function(e) {
            $("#tab-content .tab-content-msgchat").addClass("swiper-no-swiping"),
            $(".morebutton").hide(),
            $("#pingQqFace").hide(),
            $("body").removeClass("voiceBottom"),
            $("#c-gift,#fs-gift-number").hide(),
            $("li[data-giftprice]").removeClass("on");
            var t = $(".speakInput").data("msgtype");
            zbvd.blockall || zbvd.block || (e ? $(".speakInput").val("").blur().attr("placeholder", 1 == (t || 1) ? "来说点什么吧...": "请输入弹幕") : $(".speakInput").blur().attr("placeholder", 1 == (t || 1) ? "来说点什么吧...": "请输入弹幕"), $("#fs-shuru").val("").blur().attr("placeholder", "说点什么···"))
        },
        BindEvent: function() {
            var t = !0;
            $(window).bind("orientationchange",
            function(e) {
                $(".morebutton").hide(),
                $("#pingQqFace").hide(),
                $("#c-gift").hide(),
                e.preventDefault()
            }),
            i.IsIOS() && 4 != zbvd.modeltype && 1 == zbvd.IsScreen && $(".inputbox input").attr("disabled", !0),
            1 == $.cookie("closelookdm_" + zbvd.topicid) ? (zbvd.lookdm = !1, $("#lookdanmuOpt").removeClass("on"), $("#lookdanmuOpt").next().html("观看弹幕")) : zbvd.lookdm = !0,
            $(document).on("click", ".inputbar",
            function(e) {
                if ((zbvd.block || zbvd.blockall) && (parseInt(zbvd.roleid) || 0) <= 0 && 0 == zbvd.levels) return e.stopPropagation(),
                e.preventDefault(),
                !1
            }),
            $(document).on("click",
            function(e) {
                if ($(e.target).closest(".c-gift-white").length > 0) return void e.stopPropagation();
                u.Reset(!1),
                $("#fs-inputs").hide(),
                $("#fs-inputbtns").show()
            }).on("click", "#loginbtn",
            function() {
                window.location.href = "/live/" + $(this).data("actionname") + "-" + zbvd.topicid + "?types=oauths&skId=" + (new Date).getTime()
            }).on("click", ".inputicon.qqface,#icon-vface",
            function(e) {
                if ((zbvd.block || zbvd.blockall) && (parseInt(zbvd.roleid) || 0) <= 0) return e.stopPropagation(),
                e.preventDefault(),
                !1;
                $("#pingQqFace").toggle(),
                $(this).hasClass("qqface") || $(".new_bottom_input_ul_js").animate({
                    bottom: "0"
                },
                200),
                $(".morebutton").hide(),
                $("#c-gift").hide(),
                null == qqfaceswiper && (qqfaceswiper = new Swiper("#qqface-picker", {
                    pagination: ".swiper-pagination.qqface",
                    paginationClickable: !0,
                    onInit: function() {
                        $(".post-qq-face-all span i").off().on("click",
                        function(e) {
                            var t = $(this).attr("code"),
                            i = $(".speakInput").val();
                            if ("[删除]" == t) return i.length > 0 ? (i = i.lastIndexOf("]") == i.length - 1 ? i.substring(0, i.lastIndexOf("[")) : i.substr(0, i.length - 1), $(".speakInput").val(i).trigger("input"), !1) : ($(".speakInput").trigger("input"), !1);
                            $(".speakInput").val(i + t).trigger("input"),
                            e.stopPropagation()
                        })
                    },
                    onTap: function(e) {}
                })),
                $("body").removeClass("voiceBottom"),
                e.stopPropagation()
            }).on("click", "#pingQqFace,.morebutton,.mlbn-present",
            function(e) {
                $(e.target).is(".inviteGuest,.commentcheck,.introduce,.tianjia-pic") || e.stopPropagation()
            }).on("keydown", ".speakInput",
            function(e) {
                var t = $(this),
                i = t.val();
                if (i.length > 0 && 8 == e.keyCode && i.lastIndexOf("]") == i.length - 1) return i = i.substring(0, i.lastIndexOf("[")),
                t.val(i).trigger("input"),
                !1
            }).on("blur", ".speakInput",
            function(e) {
                4 == zbvd.modeltype && $("body").animate({
                    scrollTop: 0
                },
                200)
            }).on("click", ".inputicon.gift",
            function(e) {
                setTimeout(function() {
                    new Swiper(".gift-swiper", {
                        pagination: ".swiper-pagination"
                    })
                }),
                $("#c-gift").toggle(),
                $("#pingQqFace").hide(),
                $(".morebutton").hide(),
                $("body").removeClass("voiceBottom"),
                e.stopPropagation()
            }).on(ClickOrTap, ".inputicon.iconmore",
            function(e) { (zbvd.block || zbvd.blockall) && (parseInt(zbvd.roleid) || 0) <= 0 && 0 == zbvd.levels && $("#incomedraw").parents("li").siblings().hide(),
                $(".morebutton").toggle(),
                null == inputbutton_swiper && (inputbutton_swiper = new Swiper(".swiper-container[inputbutton]", {
                    pagination: "[inputbutton] .swiper-pagination",
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    paginationClickable: !0,
                    slidesPerColumnFill: "row",
                    spaceBetween: 0,
                    observer: !0,
                    observerParents: !0
                })),
                $("#pingQqFace").hide(),
                $("#c-gift").hide(),
                $("body").removeClass("voiceBottom"),
                $(".morebutton").is(":visible") ? $(".tab-content-msgchat").removeClass("swiper-no-swiping") : $(".tab-content-msgchat").addClass("swiper-no-swiping"),
                "touchstart" == e.type ? e.preventDefault() : e.stopPropagation()
            }).on("click", ".ios-input-box .ios-input-close",
            function() {
                return $(".ios-input-box").find(".ios-comment-area").val("").end().hide(),
                $(".backContentBox").click(),
                !1
            }).on("click", ".inputbox",
            function() {
                if (i.IsIOS() && 4 != zbvd.modeltype && 1 == zbvd.IsScreen) {
                    if ((zbvd.roleid <= 0 || zbvd.repayId > 0) && zbvd.blockall) return ! 1;
                    zbvd.isOpenDm || zbvd.roleid > 0 && 0 == zbvd.repayId ? $(".ios-input-box .danmu").show() : $(".ios-input-box .danmu").hide(),
                    $(".btnLiveTalk").attr("commentid") && $(".btnLiveTalk").attr("tuserid") ? ($(".ios-input-box .danmu").hide(), $(".ios-input-box .ios-comment-area").attr("placeholder", "请输入回复内容"), $(".ios-input-box .ios-comment-area").attr("msgtype", 1)) : $(".ios-input-box .danmu #iosinputdanmu").prop("checked") && zbvd.isOpenDm ? ($(".ios-input-box .ios-comment-area").attr("msgtype", 23), $(".ios-input-box .ios-comment-area").attr("placeholder", "请输入弹幕")) : $(".ios-input-box .ios-comment-area").attr("placeholder", "请输入评论内容"),
                    zbvd.block || $(".ios-input-box").show().find("textarea").focus()
                }
                if ( - 2 == zbvd.levels) return $.post("/live/IsZoneUserAppeal", {
                    userId: zbvd.userid
                },
                null, "json").then(function(e) {
                    if (e.isok) return layer.msg("我们已经收到您的申诉,请您耐心等待"),
                    !1;
                    $("#UserAppealBox").show()
                }),
                !1
            }).on("click", ".speakInput",
            function(e) {
                $(this).trigger("input"),
                e.stopPropagation()
            }).on("input", ".speakInput",
            function(e) {
                var t = $(this).val();
                "" != t && "" != t.trim() ? ($(".inputicon.iconmore").hide(), $(".btnLiveTalk").show()) : ($(".inputicon.iconmore").show(), $(".btnLiveTalk").hide())
            }).on("focus", ".speakInput",
            function(e) {
                if ( - 2 == zbvd.levels) return $.post("/live/IsZoneUserAppeal", {
                    userId: zbvd.userid
                },
                null, "json").then(function(e) {
                    if (e.isok) return layer.msg("我们已经收到您的申诉,请您耐心等待"),
                    !1;
                    $("#UserAppealBox").show()
                }),
                !1;
                if (zbvd.isOpenDm || !(zbvd.roleid <= 0)) {
                    if (4 == zbvd.modeltype || $("body").hasClass("replymsg") ? $("#ckdanmu").hide() : $("#ckdanmu").show(), !(null != window.navigator.userAgent.toLowerCase().match(/iphone os \d+/) && parseInt(window.navigator.userAgent.toLowerCase().match(/iphone os \d+/)[0].split(" ")[2]) <= 10)) return ! 1;
                    setTimeout(function() {
                        $("body").scrollTop($("html")[0].clientHeight)
                    },
                    500)
                }
            }).on("click", ".inputicon.photo,.inputicon.file",
            function(e) {
                if ((zbvd.blockall || zbvd.block) && zbvd.roleid <= 0) return layer.msg("已禁言，不能发送图片"),
                !1;
                i.IsWeiXinChat() && !$(this).hasClass("fileupload") ? (wx.chooseImage({
                    count: 5,
                    success: function(e) {
                        function t() {
                            wx.uploadImage({
                                localId: i.localId[o],
                                success: function(e) {
                                    o++,
                                    i.serverId.push(e.serverId),
                                    $.ajax({
                                        type: "post",
                                        url: "/liveajax/UploadImagesByWx",
                                        data: {
                                            mediaId: e.serverId,
                                            zbid: zbvd.zbid,
                                            tpid: zbvd.topicid,
                                            types: "img"
                                        },
                                        dataType: "JSON",
                                        success: function(e) {
                                            e && e.isok ? c("image", e.imgurl, "", 0, 0, 2) : $(document).minTipsBox({
                                                tipsContent: e.Msg,
                                                tipsTime: 1
                                            })
                                        },
                                        error: function() {
                                            $(document).minTipsBox({
                                                tipsContent: "error",
                                                tipsTime: 1
                                            })
                                        }
                                    }),
                                    o < n && t()
                                },
                                fail: function(e) {
                                    $(document).minTipsBox({
                                        tipsContent: "图片上传失败",
                                        tipsTime: 1
                                    })
                                }
                            })
                        }
                        var i = {
                            localId: [],
                            serverId: []
                        };
                        i.localId = e.localIds;
                        var o = 0,
                        n = i.localId.length;
                        i.serverId = [],
                        t(),
                        $(".inputicon.iconmore").trigger("click")
                    }
                }), e.stopPropagation(), e.preventDefault()) : ($(this).hasClass("imgupload") && $("#pcfileUpload").attr("attr-type", "img"), $(this).hasClass("fileupload") && $("#pcfileUpload").attr("attr-type", "file"), $("#pcfileUpload").click())
            }).on("touchstart", ".redbagmask",
            function(e) {
                $(".sendredbagwin").hide(),
                e.stopPropagation(),
                "touchstart" == e.type && e.preventDefault()
            }).on("click", ".inputicon.redpacket,.fahongbao,.icon-fsl-red-packet,#icon_redbag,li.hongbao",
            function(e) {
                $(".panel-more").hide(),
                $(".sendredbagwin").show(),
                $("#send-redpacket").show(),
                "object" == typeof newredbag && newredbag.redpacketapp.init(),
                e.stopPropagation(),
                "touchstart" == e.type && e.preventDefault()
            }).on("click", ".btn-cancel",
            function(e) {
                $(".sendredbagwin").hide(),
                e.stopPropagation(),
                "touchstart" == e.type && e.preventDefault()
            }).on("change", "#pcfileUpload",
            function() {
                if ($("#pcfileUpload").val().length > 0) {
                    var e = $("#pcfileUpload").attr("attr-type"),
                    t = "";
                    switch (e) {
                    case "img":
                        t = 2;
                        break;
                    case "file":
                        t = 12
                    }
                    if (1 == this.files.length && this.files[0].size / 1048576 > 10) return void $(document).minTipsBox({
                        tipsContent: "请上传小于10M的文件",
                        tipsTime: 1
                    });
                    $.ajaxFileUpload({
                        url: "/liveajax/UploadImagesByWx",
                        secureuri: !1,
                        data: {
                            mediaId: "pcUpload",
                            zbid: zbvd.zbid,
                            tpid: zbvd.topicid,
                            types: $("#pcfileUpload").attr("attr-type")
                        },
                        fileElementId: "pcfileUpload",
                        dataType: "json",
                        global: !1,
                        success: function(e, i) {
                            e && e.isok ? c("image", e.imgurl, "", 0, 0, t) : $(document).minTipsBox({
                                tipsContent: e.Msg,
                                tipsTime: 1
                            })
                        },
                        error: function(e, t, i) {
                            $(document).minTipsBox({
                                tipsContent: "上传失败！",
                                tipsTime: 1
                            })
                        }
                    })
                } else $(document).minTipsBox({
                    tipsContent: "请选择上传图片！",
                    tipsTime: 1
                });
                return ! 1
            }).on("click", ".btnLiveTalk, .ios-input-submit",
            function(e) {
                var t = $(".speakInput").data("msgtype"),
                i = $(".btnLiveTalk").attr("commentid") || "",
                o = $(".btnLiveTalk").attr("tuserid") || 0;
                $(e.target).is(".btnLiveTalk") ? ($("#ckdanmu").hide(), c("text", $(".speakInput").val(), i, o, 0, t || 1), $(".speakInput").trigger("input")) : (t = $(".ios-comment-area").data("msgtype"), c("text", $(".ios-comment-area").val(), i, o, 0, t || 1), $(".ios-input-box").find(".ios-comment-area").val("").end().hide()),
                $(".backContentBox").click(),
                e.stopPropagation()
            }).on("click", ".qpzb-pl-send",
            function(e) {
                c("text", $("#fs-shuru").val(), "", 0, 0, 1),
                e.stopPropagation()
            }).on("click", "#btn_clicksend",
            function(e) {
                var t = $(".speakInput").data("msgtype"),
                i = $("#btn_clicksend").attr("commentid") || "",
                o = $("#btn_clicksend").attr("tuserid") || 0;
                c("text", $(".talk-input02").val(), i, o, 0, t || 1),
                $(".talk-input02").val(""),
                $(".new_bottom_js ul").children().show(),
                $(".new_bottom_input_ul_js").animate({
                    bottom: "-4.9rem"
                },
                200),
                $("#btn_clicksend").removeAttr("commentid tuserid"),
                e.stopPropagation()
            }).on("click", "#DisableChat,li.notalk",
            function(e) {
                var t = $(this),
                i = t.hasClass("on") ? 0 : 1;
                $.post("/liveajax/modifyTopic", {
                    type: "ckIsNoTalk",
                    tpId: zbvd.topicid,
                    value: i
                },
                function(e) {
                    e && e.isok && (1 == i ? (t.addClass("on"), e.Msg = "已禁止观众评论") : (t.removeClass("on"), e.Msg = "已允许观众评论")),
                    $(document).minTipsBox({
                        tipsContent: e.Msg,
                        tipsTime: 1
                    })
                }),
                e.stopPropagation(),
                "touchstart" == e.type && e.preventDefault()
            }).on("click", "#danmukuOpt",
            function(t) {
                $(this);
                if (window.isposting) return ! 1;
                window.isposting = !0,
                $("#loadingToast").show(),
                $.when($.post("/liveajax/TopicHandle", {
                    tpid: zbvd.topicid,
                    type: "danmu"
                })).done(function(t) {
                    window.isposting = !1,
                    $("#loadingToast").hide(),
                    t.isok ? e.SendMessage("dmOpt", t.dataObj.val, 0, 0, 0, 31) : layer.msg(t.Msg)
                }),
                t.stopPropagation(),
                "touchstart" == t.type && t.preventDefault()
            }).on("click", "#netVedio",
            function(e) {
                openwrap("video"),
                e.stopPropagation(),
                $(".menu-box").hide(),
                "touchstart" == e.type && e.preventDefault()
            }).on("click", "#barUserManage",
            function(e) {
                window.location.href = "/live/UserManage?zbId=" + zbvd.zbid + "&tpid=" + zbvd.topicid + "&iszbsite=0&v=" + Math.random()
            }).on("click", "div.m_change_vs",
            function(t) {
                var i = $("ul.fujian-ul").find(".fujian-select-circle-init").parents(".fujian-ul").find("p.fujian-link-address").text();
                e.SendMessage("text", i, "", 0, 0, 26),
                t.stopPropagation(),
                "touchstart" == t.type && t.preventDefault()
            }).on("click", "div.m_recove_vs",
            function(t) {
                e.SendMessage("text", "VideoEmpty", "", 0, 0, 26),
                t.stopPropagation(),
                "touchstart" == t.type && t.preventDefault()
            }).on("keydown",
            function(e) {
                var t = e || window.event || arguments.callee.caller.arguments[0];
                if (t && 13 == t.keyCode && /(Android)/i.test(window.navigator.userAgent)) {
                    if ((zbvd.block || zbvd.blockall) && t.stopPropagation(), -1 != e.target.className.indexOf("shop-index-input") || -1 != e.target.className.indexOf("kfzb-textarea")) return;
                    var i = $(".speakInput").data("msgtype");
                    $("#ckdanmu").hide();
                    var i = $(".speakInput").data("msgtype"),
                    o = $(".btnLiveTalk").attr("commentid") || "",
                    n = $(".btnLiveTalk").attr("tuserid") || 0;
                    c("text", $(".speakInput").val(), o, n, 0, i || 1),
                    $(".backContentBox").click(),
                    $(".speakInput").trigger("input"),
                    t.stopPropagation()
                }
            }).on("click", ".live_headpic",
            function(e) {
                e.stopPropagation()
            }).on("click", ".live_othermoney",
            function(e) {
                $(".otherRedmoneyBox").show()
            }).on("click", ".otherRedmoneyBox",
            function(e) {
                if ("rglist" == e.target.className || "money_count" == e.target.className) return ! 1;
                $(this).hide()
            }).on("click", ".complaint",
            function(e) {
                var t = $(this).attr("ids");
                return "" == t || void 0 == t ? ($(document).minTipsBox({
                    tipsContent: "投诉消息不存在",
                    tipsTime: 1
                }), !1) : ($.ajax({
                    type: "POST",
                    url: "/liveajax/GetChatIdByIds",
                    data: {
                        ids: t,
                        tpid: zbvd.topicid
                    },
                    success: function(e) {
                        e.isok ? window.location = "/live/ZoneComplaint?tpid=" + zbvd.topicid + "&objId=" + e.dataObj.Id + "&beId=" + e.dataObj.userId: $(document).minTipsBox({
                            tipsContent: e.Msg,
                            tipsTime: 1
                        })
                    }
                }), !1)
            }).on("click", ".speaker_shang a,.btn_ilike,.guest_list .guest_img,.shangzhubo,.RoleShang,li.dashang",
            function(e) {
                if ($(".menu-box").hide(), i.IsWeiXinChat()) if ($(".reward-anchor-box").css({
                    top: 0,
                    display: "block"
                }), null == shang_swiper && (shang_swiper = new Swiper(".swiper-container-redbag", {
                    on: {
                        touchMove: function(e) {}
                    },
                    nextButton: ".swiper-button-next",
                    prevButton: ".swiper-button-prev"
                })), $(this).hasClass("shangzhubo") || $(this).hasClass("dashang")) {
                    if ($(this).hasClass("RoleShang") || $(this).hasClass("weui_actionsheet_cell") || $(this).hasClass("banglist-photo")) shang_swiper.slideTo(0, 1e3, !1),
                    $(".swiper-button-next, .swiper-button-prev").hide(),
                    $($(".reward-anchor-box .swiper-slide")[0]).addClass("swiper-no-swiping"),
                    $("#shangval").val($(this).data("hostuserid")),
                    $($(".live_headpic img")[0]).attr("src", $(this).data("hostimg")),
                    $($(".live_towho")[0]).attr("shangid", $(this).data("hostuserid")),
                    $($(".live_towho")[0]).attr("parentid", ""),
                    $($(".live_towho")[0]).text($(this).data("hostusername")),
                    $($(".reward-anchor-box .swiper-slide")[0]).show(),
                    $(".rolelist").hide(),
                    $(".reward-anchor-box").show();
                    else {
                        $(".swiper-button-next, .swiper-button-prev").show(),
                        $($(".reward-anchor-box .swiper-slide")[0]).removeClass("swiper-no-swiping"),
                        $(".rolelist").show(),
                        $($(".reward-anchor-box .swiper-slide")[0]).hide(),
                        $("#shangval").val(0);
                        var t = $(this).closest("dd");
                        if (t.hasClass("left_bubble")) {
                            var o = t.attr("attrcreateby"),
                            n = t.find(".speaker_name b").html(),
                            s = t.find(".head_portrait img").attr("src");
                            $(".live_headpic img").attr("src", s),
                            $(".live_towho").attr("shangid", o),
                            $(".live_towho").text(n),
                            $(".live_towho").attr("parentid", ""),
                            $(".reward-anchor-box").show()
                        } else if (t.hasClass("comment_dd")) {
                            var o = t.attr("attrcreateby"),
                            n = t.find(".author_name").html(),
                            s = t.find(".avatar img").attr("src");
                            $(".live_headpic img").attr("src", s),
                            $(".live_towho").attr("shangid", o),
                            $(".live_towho").attr("parentid", t.attr("attr-id")),
                            $(".live_towho").text(n),
                            $(".reward-anchor-box").show()
                        } else if (t.parent().hasClass("guest_list")) {
                            var o = t.attr("attrcreateby"),
                            n = t.find(".guest_title_1").html(),
                            s = t.find(".guest_img img").attr("src");
                            $(".live_headpic img").attr("src", s),
                            $(".live_towho").attr("shangid", o),
                            $(".live_towho").attr("parentid", ""),
                            $(".live_towho").text(n),
                            $(".reward-anchor-box").show()
                        }
                    }
                    try {
                        $("#actionsheet_cancel").click()
                    } catch(e) {}
                } else {
                    $(this).hasClass("icon-live-shang") ? ($(".swiper-button-next, .swiper-button-prev").show(), $("#shangval").val(0), $($(".reward-anchor-box .swiper-slide")[0]).hide(), $(".rolelist").show()) : (shang_swiper.slideTo(0, 1e3, !1), $(".swiper-button-next, .swiper-button-prev").hide(), $($(".reward-anchor-box .swiper-slide")[0]).addClass("swiper-no-swiping"), $("#shangval").val($(this).data("hostuserid")), $($(".live_headpic img")[0]).attr("src", $(this).data("hostimg")), $($(".live_towho")[0]).attr("shangid", $(this).data("hostuserid")), $($(".live_towho")[0]).attr("parentid", ""), $($(".live_towho")[0]).text($(this).data("hostusername")), $($(".reward-anchor-box .swiper-slide")[0]).show(), $(".rolelist").hide()),
                    $(".reward-anchor-box").show();
                    try {
                        $("#actionsheet_cancel").click()
                    } catch(e) {}
                } else $(document).popBox({
                    boxContent: "请使用手机微信赞赏",
                    btnType: "confirm",
                    confirmName: "知道了"
                });
                e.stopPropagation(),
                "touchstart" == e.type && e.preventDefault()
            }).on("click", ".otherRedmoneyBox .gene_confirm",
            function(e) {
                var t = Number($(".money_count").val()),
                i = void 0 == $("#shangval").val() || "" == $("#shangval").val() || null == $("#shangval").val() || 0 == $("#shangval").val() || "0" == $("#shangval").val() ? 0 : $("#shangval").val(),
                o = 0 == i ? $(".reward-anchor-box  .swiper-slide-next .live_towho").attr("shangid") : i;
                return "" == t ? ($(document).minTipsBox({
                    tipsContent: "金额不能为空",
                    tipsTime: 1
                }), !1) : /(^[0-9]*\.[0-9]*$)|(^[0-9]*$)/.test(t) ? Number(t) < .1 || Number(t) > 999 ? ($(document).minTipsBox({
                    tipsContent: "金额必须在0.1~999之间",
                    tipsTime: 1
                }), !1) : (t = (100 * t).toFixed(0), l("redpacket", t, o, zbvd.zbid, zbvd.topicid), $(".otherRedmoneyBox").hide(), e.stopPropagation(), void("touchstart" == e.type && e.preventDefault())) : ($(document).minTipsBox({
                    tipsContent: "请输入数字!",
                    tipsTime: 1
                }), !1)
            }).on("click", ".live_redbaglist li",
            function(e) {
                var t = void 0 == $("#shangval").val() || "" == $("#shangval").val() || null == $("#shangval").val() || 0 == $("#shangval").val() || "0" == $("#shangval").val() ? 0 : $("#shangval").val(),
                i = 0 == t ? $(".reward-anchor-box  .swiper-slide-next .live_towho").attr("shangid") : t,
                o = $(".live_towho").attr("parentid"),
                n = Number($(this).find("var").text());
                if (Number(n) < .1 || Number(n) > 999) return $(document).minTipsBox({
                    tipsContent: "金额必须在0.1~999之间",
                    tipsTime: 1
                }),
                !1;
                var n = (100 * n).toFixed(0);
                l("redpacket", n, i, zbvd.zbid, zbvd.topicid, o),
                e.stopPropagation(),
                "touchstart" == e.type && e.preventDefault()
            }).on("click", ".inputicon.endlive,.endlivebtn",
            function(e) {
                $(".menu-box").hide(),
                $(document).popBox({
                    boxContent: "结束直播话题后不能重新开始，</br>确定结束吗？",
                    btnType: "both",
                    confirmFunction: function() {
                        if (!t) return ! 1;
                        t = !1,
                        $("#loadingToast").show(),
                        $.ajax({
                            type: "POST",
                            url: "/liveajax/liveStart",
                            data: {
                                topicId: zbvd.topicid,
                                type: "endTopic"
                            },
                            success: function(e) {
                                t = !0,
                                $("#loadingToast").hide(),
                                $(document).minTipsBox({
                                    tipsContent: e.Msg,
                                    tipsTime: 1
                                }),
                                e.isok && setTimeout(function() {
                                    window.location = "/live/livedetail-" + zbvd.zbid + "?rand=" + Math.random()
                                },
                                1e3)
                            },
                            error: function() {
                                t = !0,
                                $(document).minTipsBox({
                                    tipsContent: data.Msg,
                                    tipsTime: 1
                                }),
                                $("#loadingToast").hide()
                            }
                        })
                    }
                }),
                e.stopPropagation(),
                "touchstart" == e.type && e.preventDefault()
            }).on("click", ".inputicon.commentcheck,li.takecheck",
            function(e) {
                $("#liveCommentAudt").show(),
                $(".menu-box").hide(),
                "touchstart" == e.type && e.preventDefault()
            }).on("click", "#liveCommentAudt .close-butt",
            function(e) {
                $("#liveCommentAudt").hide(),
                "touchstart" == e.type && e.preventDefault()
            }).on("click", "#liveCommentAudt #ckAudtComment",
            function(e) {
                if ("1" == $(this).attr("isFromRelaySet")) return $(document).minTipsBox({
                    tipsContent: "转播话题不能修改设置",
                    tipsTime: 2
                }),
                !1;
                $.post("/liveajax/audtCommentMan", {
                    topicId: zbvd.topicid
                },
                function(e) {
                    $(document).minTipsBox({
                        tipsContent: e.Msg,
                        tipsTime: 2
                    })
                })
            }).on("click", "#liveCommentAudt #ckOpenAnonymity",
            function(e) {
                $.post("/liveajax/AudtAnonymity", {
                    topicId: zbvd.topicid
                },
                function(e) {
                    $(document).minTipsBox({
                        tipsContent: e.Msg,
                        tipsTime: 2
                    })
                })
            }).on("click", ".inputicon.coupon",
            function() {
                u.Reset(),
                window.location.href = "/live/PushCoupons-" + zbvd.zbid + "?tpid=" + zbvd.topicid
            }).on("click", "#coupon-select-close",
            function() {
                $("#coupon-select-win").hide()
            }).on("click", "#lookdanmuOpt",
            function() {
                var e = i.getCookieHost();
                1 == $.cookie("closelookdm_" + zbvd.topicid) ? (zbvd.lookdm = !0, $("#lookdanmuOpt").addClass("on"), $.cookie("closelookdm_" + zbvd.topicid, 0, {
                    expires: 1,
                    path: "/",
                    domain: e
                }), $("#lookdanmuOpt").next().html("关闭弹幕")) : (zbvd.lookdm = !1, $("#lookdanmuOpt").removeClass("on"), $.cookie("closelookdm_" + zbvd.topicid, 1, {
                    expires: 360,
                    path: "/",
                    domain: e
                }), $("#lookdanmuOpt").next().html("观看弹幕"))
            }).on("click", ".live-wish-layout .wish-btn",
            function(e) {
                var t = $(".live-wish-layout"),
                i = parseInt((100 * t.find(".price").data("price")).toFixed(0)),
                o = parseInt(t.find(".toUserId").val());
                if (isNaN(i) || isNaN(o) || o <= 0) return void layer.msg("抱歉,打赏用户信息异常！");
                if (i < 10) return void layer.msg("抱歉,金额不能低于0.1元！");
                var n = t.find(".show-img img").attr("src") + "|" + i + "|" + t.find(".wish-txt").text();
                l("reward", i, o, zbvd.zbid, zbvd.topicid, n),
                e.stopPropagation(),
                "touchstart" == e.type && e.preventDefault(),
                t.fadeOut()
            }).on("click", ".btnShowMiniAppIcon",
            function(e) {
                var t = $(this).data("xcqQRImg");
                if (void 0 == t) {
                    $("#loadingToast").show();
                    var o = {
                        apppage: "pages/auction/index",
                        liveid: zbvd.zbid,
                        query: zbvd.topicid + ",0",
                        pages: 1,
                        ver: (new Date).getDate()
                    };
                    $.post("/live/GetMiniQRSrc", o,
                    function(e) {
                        if ($("#loadingToast").hide(), e && e.isok) if ("" != e.dataObj.logoimg) {
                            var t = [{
                                src: e.dataObj.baseimg
                            },
                            {
                                src: e.dataObj.logoimg,
                                x: 95,
                                y: 95,
                                w: 153,
                                h: 153,
                                shape: "circle"
                            }];
                            i.drawImageByCanvas(344, 344, t,
                            function(e) {
                                $(".btnShowMiniAppIcon").data("xcqQRImg", e),
                                r.popupMiniCode(e)
                            })
                        } else $(".btnShowMiniAppIcon").data("xcqQRImg", e.dataObj.baseimg),
                        r.popupMiniCode(e.dataObj.baseimg);
                        else layer.msg("获取失败，请重试")
                    },
                    "json")
                } else r.popupMiniCode(t)
            }).on("click", ".showAuctionQrcode",
            function(e) {
                r.popupAuctionQrcode()
            }).on("click", ".vzui-button.cart,li.cart, .ver-pick-car",
            function(e) {
                $(".menu-box").hide(),
                $(".vzui-raise-modal").removeClass("active"),
                $("#partial-cart-box").parent().addClass("active"),
                partialCartApp && partialCartApp.loadMore()
            }).on("click", "#liveCommentAudt #noSendImg",
            function(e) {
                $.post("/liveajax/TpSendImgChange", {
                    tpId: zbvd.topicid
                },
                function(e) {
                    $(document).minTipsBox({
                        tipsContent: e.Msg,
                        tipsTime: 2
                    })
                })
            }).on("click", "#icon-wface",
            function() {
                if (1 == zbvd.LogoPopType) {
                    if (void 0 != data) $(".popup-container .popup-body img").attr("src", data.imgurl),
                    $(".popup-container .popup-body p").html(data.msg),
                    $(".popup-container .popup-head .balanced").html(data.name);
                    else {
                        var e = $(this).data("focusinfo");
                        e && e.imgurl ? ($(".popup-container .balanced").html(e.name), $(".popup-container .popup-body img").attr("src", e.imgurl), $(".popup-container .popup-body p").html(e.describe)) : ($(".popup-container .popup-body img").attr("src", $(".popup-container").attr("attr-url")), $(".popup-container .popup-body p").html($(".popup-container").attr("attr-msg")), $(".popup-container .popup-head .balanced").html($(".popup-container").attr("attr-name")))
                    }
                    setTimeout(function() {
                        $(".popup-container").addClass("popup-show")
                    },
                    200)
                } else 2 == zbvd.LogoPopType && $(".qrcode_service-div").show()
            })
        }
    };
    return u
}),
define("livecommon/module/live", ["livecommon/module/utils", "livecommon/module/controls", "livecommon/module/wxvideoplayer"],
function(utils, liveControl, wxvideoplayer) {
    var _interval_checkvideo = null,
    isloading = !1;
    isSign = !1;
    var live = {
        Init: function() {
            $(window).resize(function() {
                console.log("resize, live.js");
                try {
                    "INPUT" != document.activeElement.tagName && "TEXTAREA" != document.activeElement.tagName || window.setTimeout(function() {
                        document.activeElement.scrollIntoViewIfNeeded()
                    },
                    200)
                } catch(e) {
                    console.log(e)
                }
                null != pptSwiper && "onResize" in pptSwiper && setTimeout(function() {
                    pptSwiper.onResize()
                },
                1500)
            }),
            69 < $("#detail-intro").height() && ($("#tab-to-detail").show(), $(document).on("click", "#tab-to-detail",
            function() {
                $("#detail-intro").toggleClass("detail"),
                tabSwiper && tabSwiper.onResize()
            })),
            setTimeout(function() {
                live.GetOnlineNumber()
            },
            3e3),
            live.popupqrcode(),
            "0" == $("#hidUserIsFocus").val() && live.getwxuinfo(),
            live.BindEvent()
        },
        GetOnlineNumber: function() {
            $.post("/liveajax/GetOnlineNumber", {
                zbid: zbvd.zbid,
                tpid: zbvd.topicid
            },
            function(e) {
                if (e && e.isok && zbvd && zbvd.tongjifangshi) switch (zbvd.tongjifangshi) {
                case "pv":
                    4 == zbvd.modeltype ? $(".qlOLPeople").text(utils.FormatNum(e.dataObj.viewCount)).show() : $(".p-views").text(utils.FormatNum(e.dataObj.viewCount)).show();
                    break;
                case "uv":
                    4 == zbvd.modeltype ? $(".qlOLPeople").text(utils.FormatNum(e.dataObj.UV)).show() : $(".p-views").text(utils.FormatNum(e.dataObj.UV)).show()
                }
            }),
            setTimeout(function() {
                live.GetOnlineNumber()
            },
            6e4)
        },
        updateUrl: function(e, t) {
            t = (t || "t") + "=";
            var i = new RegExp(t + "\\d"),
            o = +new Date;
            if (e.indexOf(t) > -1) return e.replace(i, t + o);
            if (e.indexOf("?") > -1) {
                var n = e.split("?");
                return n[1] ? n[0] + "?" + t + o + "&" + n[1] : n[0] + "?" + t + o
            }
            return e.indexOf("#") > -1 ? e.split("#")[0] + "?" + t + o + window.location.hash: e + "?" + t + o
        },
        getwxuinfo: function() {
            $.cookie("focusQRshow_" + zbvd.zbid),
            zbvd.zbid
        },
        popupqrcode: function() {
            zbvd.QrPopType > 0 && (1 == zbvd.IsScreen || 1 == zbvd.LogoPopType) && (1 == zbvd.QrPopType ? $.cookie("focusQRshow_" + zbvd.topicid) || setTimeout(function() {
                $.post("/liveajax/isPopupQrCode", {
                    tpid: zbvd.topicid
                },
                function(e) {
                    e.isok && e.dataObj && ($(".popupDiv").addClass("popup-show"), $.cookie("focusQRshow_" + zbvd.topicid, "1", {
                        expires: 1,
                        path: "/",
                        domain: window.location.host,
                        secure: !1
                    }))
                })
            },
            1500) : setTimeout(function() {
                $.post("/liveajax/isPopupQrCode", {
                    tpid: zbvd.topicid
                },
                function(e) {
                    e.isok && e.dataObj && $(".popupDiv").addClass("popup-show")
                })
            },
            1500))
        },
        SetToolmenu: function() {},
        saveFocus: function() {
            setTimeout(function() {
                $.post("/liveajax/savefocus", {
                    cancleFlag: 1,
                    liveid: zbvd.zbid,
                    types: "focus",
                    focustype: "auto"
                },
                function() {})
            },
            3500)
        },
        saveLiveFocus: function(_cancleFlag, _focustype, callback_success) {
            setTimeout(function() {
                $.post("/liveajax/savefocus", {
                    cancleFlag: _cancleFlag,
                    liveid: zbvd.zbid,
                    types: "focus",
                    focustype: _focustype
                },
                function(data) {
                    callback_success && "function" == typeof eval(callback_success) && callback_success()
                })
            },
            3500)
        },
        GatherDataLog: function() {
            zbvd.shareuid > 0 && setTimeout(function() {
                $.post("/live/GatherDataLog", {
                    tpid: zbvd.topicid,
                    evttype: "EnterTopicShare",
                    shareuid: zbvd.shareuid
                },
                function(e) {})
            },
            3500)
        },
        getAuctionProducts: function() {
            isloading || (isloading = !0, $.ajax({
                type: "post",
                url: "/liveajax/GetAuctionProducts",
                data: {
                    liveid: zbvd.zbid,
                    topicid: zbvd.topicid
                },
                success: function(e) {
                    isloading = !1,
                    e.isok && laytpl($("#auctionProductTpl").html()).render(e.dataObj || [],
                    function(e) {
                        $("#auctionproductlist").append(e)
                    })
                },
                error: function() {
                    isloading = !1
                }
            }))
        },
        BindEvent: function() {
            live.SetToolmenu();
            if ($(document).on("click", ".wonderMoment dl",
            function(e) {
                $(this).addClass("on").siblings().removeClass("on");
                var t = $(this).attr("attr-time");
                if (/^[\d]{2}:[\d]{2}:[\d]{2}$/gi.test(t)) {
                    var i = t.split(":"),
                    o = parseInt(60 * i[0] * 60) + parseInt(60 * i[1]) + parseInt(i[2]);
                    if (window.dplayerpc && window.dplayerpc.videoPlayer) window.dplayerpc.videoPlayer.seek(o);
                    else if (1 == $("#hlsMedia1").length && window.objectPlayer) objectPlayer.setcurrentTime(o, !0),
                    objectPlayer.startPlay("");
                    else {
                        var n = $("#liveVideo");
                        n.length > 0 && (0 == window.vduration ? ($("#playbtn").click(), window.nextSeekTime = o) : ($(".btn-pause").show(), $("#playbtn, .btn-play").hide(), wxvideoplayer.SetCurrentTime(o)))
                    }
                }
            }).on("click", "#ent_focus,[focuswin],.fsl-focus-bt",
            function(e, t) {
                if (1 == zbvd.IsScreen) {
                    if (void 0 != t) $(".popup-container .popup-body img").attr("src", t.imgurl),
                    $(".popup-container .popup-body p").html(t.msg),
                    $(".popup-container .popup-head .balanced").html(t.name);
                    else {
                        var i = $(this).data("focusinfo");
                        i && i.imgurl ? ($(".popup-container .balanced").html(i.name), $(".popup-container .popup-body img").attr("src", i.imgurl), $(".popup-container .popup-body p").html(i.describe)) : ($(".popup-container .popup-body img").attr("src", $(".popup-container").attr("attr-url")), $(".popup-container .popup-body p").html($(".popup-container").attr("attr-msg")), $(".popup-container .popup-head .balanced").html($(".popup-container").attr("attr-name")))
                    }
                    setTimeout(function() {
                        $(".popup-container").addClass("popup-show")
                    },
                    200)
                }
                live.saveLiveFocus(1, "click",
                function() {
                    0 == zbvd.IsScreen && ($("#focusBtn").attr("hidefrom") && "Subscribe" == $("#focusBtn").attr("hidefrom") || $(document).minTipsBox({
                        tipsContent: "关注成功",
                        tipsTime: 1
                    }), $("#focusBtn").hide("fast"))
                })
            }).on("click", ".popup-mask,.focus-on-click",
            function() {
                $(".popup-container").removeClass("popup-show")
            }).on("click", ".dialog-close",
            function() {
                $(this).closest(".dialog-win").hide()
            }).on("click", ".popup-container",
            function() {
                $(this).removeClass("popup-show")
            }).on("click", ".icon-refresh,.refresh-page",
            function(e) {
                e.stopPropagation(),
                window.location.href = live.updateUrl(window.location.href, "ver")
            }).on("click", ".icon-back-index a",
            function(e) {
                e.stopPropagation()
            }).on("click", ".auction .btn",
            function(e) {
                var t = $(this),
                i = t.data("status");
                if (2 == i) liveControl.popupAuctionQrcode();
                else if (0 == i) {
                    var o = t.data("remind");
                    if (0 == o) {
                        var n = t.data("pid"),
                        s = t.data("aucid"),
                        a = t.attr("codeurl");
                        a && "" != a ? liveControl.popupCode("扫码二维码设置提醒", a) : $.post("/liveajax/GetAuctionProductRemindQrCode", {
                            productid: n,
                            auctionId: s
                        },
                        function(e) {
                            e.isok ? (liveControl.popupCode("扫码二维码设置提醒", e.dataObj.src), t.attr("codeurl", e.dataObj.src)) : $(document).minTipsBox({
                                tipsContent: e.Msg,
                                tipsTime: 1
                            })
                        })
                    }
                }
            }).on("click", ".live-qiye-nav li:not([nobind])",
            function(e) {
                var t = $(this).index(".live-qiye-nav li:not([nobind])"),
                i = $(this).attr("menustate");
                8 == i ? $(".liveppt-btn-wrap").show() : $(".liveppt-btn-wrap").hide(),
                22 == i ? $(".inputbar").show() : $(".inputbar,#c-gift").hide(),
                $(".live-tab-content>li").eq(t).show().siblings().hide(),
                $(this).addClass("on").siblings().removeClass("on"),
                21 != i && ($(this).data("showcar") ? zbvd.isadmin ? $("div.look-buy-bottom-nav-fix").show() : $("#shopCar").show() : ($("#shopCar").hide(), $("div.look-buy-bottom-nav-fix").hide()), $(this).hasClass("house_intro") ? $("#house_intro").show() : $("#house_intro").hide(), $(this).hasClass("house_type") ? $("#house_typeInfo").show() : $("#house_typeInfo").hide(), $(this).hasClass("house_coupon") ? zbvd.isadmin ? $("#house_couponInfo").show() : $("#house_coupon_appoint").show() : zbvd.isadmin ? $("#house_couponInfo").hide() : $("#house_coupon_appoint").hide())
            }).on(ClickOrTap, ".marry-live-nav li:not([nobind])",
            function() {
                var e = $(this).index(".marry-live-nav li:not([nobind])");
                22 == $(this).attr("menustate") ? $(".inputbar").show() : $(".inputbar,#c-gift").hide(),
                $(".live-tab-content>li").eq(e).show().siblings().hide(),
                $(this).addClass("active").siblings().removeClass("active"),
                $(".live-tab-content .marry-live-04").show()
            }).on("click", ".fixedPopBox-bg",
            function() {
                $(".fixedPopBox").hide()
            }).on("click", ".liveStart,.startlive",
            function() {
                if (window.zbvd && 3 == zbvd.customertype) return void $(".fixedPopBox").show();
                if ("2,3,4".indexOf(zbvd.modeltype) > -1) {
                    var e = $(this).data("pushurl");
                    $(".rtmpBox .rtmp_url").html(e).attr("href", e),
                    $(".rtmpBox").show();
                    var t = new Clipboard(".rtmp_url");
                    t.on("success",
                    function(e) {
                        $(document).minTipsBox({
                            tipsContent: "复制成功",
                            tipsTime: 1
                        }),
                        e.clearSelection()
                    }),
                    t.on("error",
                    function(e) {
                        $(document).minTipsBox({
                            tipsContent: "复制失败,请长按进行复制",
                            tipsTime: 1
                        })
                    })
                } else $(document).popBox({
                    boxContent: "确定要开始直播吗？",
                    btnType: "both",
                    confirmFunction: function() {
                        if (!livestartbol) return ! 1;
                        livestartbol = !1,
                        $(".loadingBox").show(),
                        $.ajax({
                            type: "POST",
                            url: baseURL + "/liveajax/liveStart",
                            data: {
                                type: "beginTopic",
                                topicId: liveconfig.TopicId
                            },
                            beforeSend: function(e) {
                                e.setRequestHeader("__RequestVerificationToken", token)
                            },
                            dataType: "json",
                            success: function(e) {
                                $(".loadingBox").hide(),
                                e && e.isok ? window.location.reload(!0) : $(document).minTipsBox({
                                    tipsContent: e.Msg,
                                    tipsTime: 1
                                }),
                                livestartbol = !0
                            },
                            error: function() {
                                livestartbol = !0
                            }
                        })
                    }
                })
            }).on("click", "#setremind",
            function() {
                $(".popup-container .popup-body img").attr("src", $(".popup-container").attr("attr-url")),
                $(".popup-container .popup-body p").html($(".popup-container").attr("attr-msg")),
                $(".popup-container .popup-head .balanced").html($(".popup-container").attr("attr-name")),
                setTimeout(function() {
                    $(".popup-container").addClass("popup-show")
                },
                200)
            }).on("change", "#ckdanmu .dm_switch",
            function() {
                $(this).prop("checked") ? $(".speakInput").attr("placeholder", "请输入弹幕").data("msgtype", 23) : $(".speakInput").attr("placeholder", "来说点什么吧...").data("msgtype", 1)
            }).on("change", ".ios-input-box .danmu #iosinputdanmu",
            function() {
                $(this).prop("checked") ? $(".ios-input-box .ios-comment-area").attr("placeholder", "请输入弹幕").data("msgtype", 23) : $(".ios-input-box .ios-comment-area").attr("placeholder", "请输入评论内容").data("msgtype", 1)
            }).on("click", "#btn-open-lottery",
            function() {
                "0" != $("#hidAwardCount").val() ? window.location.href = "/live/lottery-" + zbvd.topicid: $(document).minTipsBox({
                    tipsContent: "你还没设置奖项哦",
                    tipsTime: 2
                })
            }).on("click", "#li_live_lottery",
            function() {
                "0" != $("#hidAwardCount").val() ? window.location.href = "/live/lottery-" + zbvd.topicid: $(document).minTipsBox({
                    tipsContent: "该直播暂无抽奖活动",
                    tipsTime: 2
                })
            }).on("click", "#lottery_process_box .content",
            function(e) {
                $.cookie("is_show_lottery_" + zbvd.topicid, "0", {
                    path: "/",
                    domain: "." + location.hostname,
                    expires: 30
                }),
                "close" != e.toElement.className && (window.location.href = "/live/lottery-" + zbvd.topicid + "?shareuid=" + utils.getQueryString("shareuid", 0) + "&vprid=" + utils.getQueryString("vprid", 0))
            }).on("click", "#lottery_process_box .click",
            function(e) {
                $.cookie("is_show_lottery_" + zbvd.topicid, "0", {
                    path: "/",
                    domain: "." + location.hostname,
                    expires: 30
                }),
                "close" != e.toElement.className && (window.location.href = "/live/lottery-" + zbvd.topicid + "?shareuid=" + utils.getQueryString("shareuid", 0) + "&vprid=" + utils.getQueryString("vprid", 0))
            }).on("click", "#sign",
            function(e) {
                if (isSign) return void layer.msg("您已签到,感谢支持！");
                $.ajax({
                    type: "POST",
                    url: "/live/Sign?id=" + zbvd.zbid,
                    data: {
                        id: zbvd.zbid,
                        signType: 1,
                        tpId: zbvd.topicid
                    },
                    dataType: "json",
                    success: function(e) {
                        e.isok && (isSign = !0),
                        $(document).minTipsBox({
                            tipsContent: e.Msg,
                            tipsTime: 2
                        })
                    }
                })
            }), $(document).on("click", ".erweimaBox .gene_cancel",
            function() {
                $(".erweimaBox").hide(),
                $.cookie("is_show_zbguanzhu_" + zbvd.topicid, "2", {
                    path: "/",
                    domain: "." + location.hostname,
                    expires: 1
                })
            }), "1" == $("#hdIsPopConcern").val()) {
                if ("2" == $.cookie("is_show_zbguanzhu_" + zbvd.topicid)) $(".erweimaBox").hide();
                else if (0 == $("#hidUserIsFocus").val() && zbvd.isthirdbind) {
                    if ($.cookie("focusQRshow_" + zbvd.topicid)) return;
                    $.cookie("focusQRshow_" + zbvd.topicid, "1", {
                        expires: 1,
                        path: "/",
                        domain: window.location.host,
                        secure: !1
                    }),
                    4 == zbvd.modeltype ? $(".yuyin-top-focus").click() : $("#ent_focus").trigger("click", {
                        imgurl: $(".popup-container").attr("attr-url"),
                        msg: $(".popup-container").attr("attr-msg"),
                        name: $(".popup-container").attr("attr-name")
                    })
                }
            }
            this.saveLiveFocus(0, ""),
            this.GatherDataLog()
        }
    };
    return live
}),
define("livecommon/module/vertical", [],
function() {
    return {
        Init: function() {
            this.BindEvent(),
            $(function() {
                $("#liveMainBox,.scrollContentBox").css({
                    height: "100%",
                    "padding-bottom": "",
                    "padding-top": ""
                }),
                $(".liveBoxContent").css({
                    "padding-bottom": "",
                    "padding-top": ""
                })
            })
        },
        BindEvent: function() {
            $(document).on("click",
            function(e) {
                $("#fs-gift-panel").slideUp("fast"),
                $(".talk-input02").val(""),
                $(".new_bottom_js ul").children().show(),
                $(".new_bottom_input_ul_js").animate({
                    bottom: "-4.9rem"
                }),
                e.stopPropagation()
            }).on("click", ".icon-fsl-pl",
            function(e) {
                $("#fs-inputbtns").hide(),
                $("#fs-inputs").show(),
                $("#fs-shuru").focus(),
                e.stopPropagation()
            }).on("click", "#fs-shuru",
            function(e) {
                e.stopPropagation()
            }).on("click", ".icon-fsl-close",
            function() {
                $("body").toggleClass("fs-clear")
            }).on("click", "#fs-gift-panel",
            function(e) {
                e.stopPropagation()
            }).on("click", ".icon-fsl-present,#icon_gift",
            function(e) {
                $("#fs-gift-panel").show(),
                setTimeout(function() {
                    new Swiper(".gift-swiper", {
                        pagination: ".swiper-pagination"
                    })
                },
                500),
                e.stopPropagation()
            })
        }
    }
}),
define("livecommon/module/house", [],
function(e) {
    var t = {
        Init: function() {
            this.BindEvent()
        },
        BindEvent: function() {
            var e = this;
            $(document).ajaxSuccess(function(e, i, o) {
                for (var n = !0,
                s = ["getSpeak", "GetOnlineNumber", "savefocus"], a = 0; a < s.length; a++) if ( - 1 != o.url.indexOf(s[a])) {
                    n = !1;
                    break
                }
                n && t.log(JSON.parse(i.responseText))
            }),
            $(document).ajaxError(function(e, i, o) {
                t.log([e, i, o]),
                $("#loadingToast").hide()
            }),
            e.loadHouseList(),
            e.setHouseIntro($("#hidHouseIntro").val() ? JSON.parse($("#hidHouseIntro").val()) : {}),
            new imgUpload($(".house_intro_upImg"), {
                onComplete: function(e) {
                    if ($("#loadingToast").hide(), (e = JSON.parse(e)) && e.isok) {
                        $(".house_intro_imgList").prepend('<span class="kfzb-pic-plus house_intro_img">                                     <img src="' + e.thumbimg + '">                                     <a class="kfzb-close-a">                                     <i class="kfzb-close house_intro_opt_remove"></i></a></span>');
                        var t = $("#hide_house_intro_imgs").val();
                        $("#hide_house_intro_imgs").val(t + e.thumbimg + ",")
                    } else alert(e.msg)
                },
                onChange: function() {
                    $("#loadingToast").show()
                },
                onError: function() {
                    $("#loadingToast").hide()
                }
            }),
            $(document).on("click", "#house_intro",
            function() {
                $("#house_intro_address").val($("#house_show_address").html()),
                $("#house_intro_tel").val($("#house_show_tel").text()),
                $("#house_intro_info").val($("#house_show_info").html().replace(/<br>/g, "\n"));
                for (var e = $("#hide_house_intro_imgs").val().split(","), t = "", i = 0; i < e.length && e[i]; i++) t += '<span class="kfzb-pic-plus house_intro_img">                                <img src="' + e[i] + '">                                <a class="kfzb-close-a">                                <i class="kfzb-close house_intro_opt_remove"></i></a></span>';
                $(".house_intro_imgList").find(".house_intro_img").remove().end().prepend(t),
                $("#house_intro_opt").show()
            }).on("click", ".house_intro_opt_remove",
            function() {
                $(this).closest(".house_intro_img").remove();
                var e = "";
                $(".house_intro_imgList .house_intro_img img").each(function(t, i) {
                    e += $(i).attr("src") + ","
                }),
                $("#hide_house_intro_imgs").val(e)
            }).on("click", "#house_intro_cancle",
            function() {
                $("#house_intro_opt").hide()
            }).on("click", "#house_intro_ok",
            function() {
                var t = $("#house_intro_address").val(),
                i = $("#house_intro_tel").val(),
                o = $("#house_intro_info").val(),
                n = $("#hide_house_intro_imgs").val(),
                s = {
                    type: 1,
                    topicId: zbvd.topicid,
                    Address: t,
                    Phone: i,
                    HousesInfo: o,
                    ImgUrls: n
                };
                $.ajax({
                    type: "POST",
                    url: "/live/HouseInfoOpt",
                    data: s,
                    success: function(t) {
                        $(document).minTipsBox({
                            tipsContent: t.Msg,
                            tipsTime: 1
                        }),
                        t && t.isok && (e.setHouseIntro(s), $("#house_intro_cancle").click(), tabSwiper && tabSwiper.onResize())
                    },
                    error: function() {
                        $(document).minTipsBox({
                            tipsContent: "网络异常",
                            tipsTime: 1
                        })
                    }
                })
            }),
            e.setHouseCoupon($("#hidHouseCoupon").val() ? JSON.parse($("#hidHouseCoupon").val()) : {}),
            $(document).on("click", "#house_coupon_opt",
            function() {
                $("#house_coupon_contact").val($("#house_coupon_show_contact").text()),
                $("#house_coupon_tel").val($("#house_coupon_show_tel").text()),
                $("#house_coupon_content").val($("#house_coupon_show_content").html().replace(/<br>/g, "\n")),
                $("#house_Coupon_info").show()
            }).on("click", "#house_coupon_ok",
            function() {
                var t = $("#house_coupon_contact").val(),
                i = $("#house_coupon_tel").val(),
                o = $("#house_coupon_content").val(),
                n = {
                    type: 2,
                    topicId: zbvd.topicid,
                    Contacts: t,
                    Phone: i,
                    CouponContent: o
                };
                $.ajax({
                    type: "POST",
                    url: "/live/HouseInfoOpt",
                    data: n,
                    success: function(t) {
                        $(document).minTipsBox({
                            tipsContent: t.Msg,
                            tipsTime: 1
                        }),
                        t && t.isok && (e.setHouseCoupon(n), $("#house_coupon_cancle").click(), tabSwiper && tabSwiper.onResize())
                    },
                    error: function() {
                        $(document).minTipsBox({
                            tipsContent: "网络异常",
                            tipsTime: 1
                        })
                    }
                })
            }).on("click", "#house_coupon_cancle",
            function() {
                $("#house_Coupon_info").hide()
            }),
            $(document).on("click", "#a_look_appoint",
            function() {
                $("#look_appoint").show(),
                e.appoint_pagedata = {
                    pi: 1,
                    ps: 20,
                    loadFlag: !1
                },
                e.loadAppointList()
            }),
            t.nodeScroll($("#appoint_list"),
            function() {
                e.loadAppointList()
            }),
            new imgUpload($("#house_type_imgBox"), {
                onComplete: function(e) {
                    $("#loadingToast").hide(),
                    e = JSON.parse(e),
                    e && e.isok ? ($("#house_type_imgBox #house_type_img").attr("src", e.thumbimg), $("#house_type_imgBox #house_type_img").data("isUpload", !0), $("#house_type_upText").hide()) : alert(e.msg)
                },
                onChange: function() {
                    $("#loadingToast").show()
                },
                onError: function() {
                    $("#loadingToast").hide()
                }
            }),
            $(document).on("click", "#add_house_typeInfo",
            function() {
                $("#house_type_content,#house_type_area,#house_type_price").val(""),
                $("#house_type_img").attr("src", "/livecontent/livecommon/images/img-upload.png"),
                $("#house_type_upText").show(),
                $("#house_type_add").show()
            }).on("click", "#house_type_ok",
            function() {
                var t = $("#house_type_content").val(),
                i = $("#house_type_area").val(),
                o = $("#house_type_price").val(),
                n = $("#house_type_img");
                if (!e.isNum(i)) return $(document).minTipsBox({
                    tipsContent: "建筑面积请输入数字",
                    tipsTime: 1
                });
                if (!e.isNum(o)) return $(document).minTipsBox({
                    tipsContent: "售价请输入数字",
                    tipsTime: 1
                });
                if (!n.data("isUpload")) return $(document).minTipsBox({
                    tipsContent: "请上传户型图",
                    tipsTime: 1
                });
                var s = {
                    HouseType: t,
                    FloorArea: i,
                    Price: o,
                    ImgUrl: n.attr("src")
                },
                a = {
                    type: 0,
                    topicId: zbvd.topicid,
                    GoodsInfo: JSON.stringify(s)
                };
                $.ajax({
                    type: "POST",
                    url: "/live/HouseTypeOpt",
                    data: a,
                    success: function(t) {
                        $(document).minTipsBox({
                            tipsContent: t.Msg,
                            tipsTime: 1
                        }),
                        t && t.isok && ($("#house_type_imgBox #house_type_img").data("isUpload", !1), e.loadHouseList(), $("#house_type_add").hide(), tabSwiper && tabSwiper.onResize())
                    },
                    error: function() {
                        $(document).minTipsBox({
                            tipsContent: "网络异常",
                            tipsTime: 1
                        })
                    }
                })
            }).on("click", ".house_appoint,.go_appoint",
            function() {
                $("#house_appoint_name,#house_appoint_phone").val(""),
                $(this).hasClass("house_appoint") ? e.appoint_id = $(this).data("id") : e.appoint_id = 0,
                $("#house_appointment").show()
            }).on("click", "#appoint_ok",
            function() {
                var t = $("#house_appoint_name").val(),
                i = $("#house_appoint_phone").val();
                if (!t) return $(document).minTipsBox({
                    tipsContent: "请输入姓名",
                    tipsTime: 1
                });
                if (!e.isPhone(i)) return $(document).minTipsBox({
                    tipsContent: "请输入正确格式的手机号码",
                    tipsTime: 1
                });
                var o = {
                    sId: e.appoint_id,
                    Phone: i,
                    linkMan: t,
                    topicId: zbvd.topicid
                };
                $.ajax({
                    type: "POST",
                    url: "/live/AddHouseAppoint",
                    data: o,
                    success: function(t) {
                        $(document).minTipsBox({
                            tipsContent: t.Msg,
                            tipsTime: 1
                        }),
                        t && t.isok && (e.loadHouseList(), $("#house_appointment").hide())
                    },
                    error: function() {
                        $(document).minTipsBox({
                            tipsContent: "网络异常",
                            tipsTime: 1
                        })
                    }
                })
            }).on("click", ".icon-house-remove",
            function() {
                var t = $(this).data("id");
                $(document).popBox({
                    boxContent: "确定要删除?",
                    btnType: "both",
                    confirmFunction: function() {
                        $.post("/live/HouseTypeOpt", {
                            type: 1,
                            Id: t,
                            topicId: zbvd.topicid
                        },
                        function(t) {
                            $(document).minTipsBox({
                                tipsContent: t.Msg,
                                tipsTime: 1
                            }),
                            t.isok && e.loadHouseList()
                        },
                        "json")
                    }
                })
            })
        },
        appoint_id: 0,
        loadHouseList: function() {
            $.post("/live/GetHouseList", {
                topicId: zbvd.topicid
            }).done(function(e) {
                if (e.isok) {
                    for (var t = [], i = 0; i < e.dataObj.length; i++) {
                        var o = JSON.parse(e.dataObj[i].GoodsInfo);
                        o.Id = e.dataObj[i].Id,
                        o.IsAppoint = e.dataObj[i].IsAppoint,
                        t.push(o)
                    }
                    laytpl($("#houseListTpl").html()).render(t,
                    function(e) {
                        $("div#houseList").empty().append(e)
                    })
                }
            })
        },
        appoint_pagedata: {
            pi: 1,
            ps: 20,
            loadFlag: !1
        },
        loadAppointList: function() {
            t.appoint_pagedata.loadFlag || ($("#loadingToast").show(), t.appoint_pagedata.loadFlag = !0, $.post("/live/getAppointList", {
                topicId: zbvd.topicid,
                pi: t.appoint_pagedata.pi,
                ps: t.appoint_pagedata.ps
            }).done(function(e) {
                if (t.appoint_pagedata.pi++, $("#loadingToast").hide(), !e.isok) return $(document).minTipsBox({
                    tipsContent: e.Msg,
                    tipsTime: 1
                });
                if (e.dataObj.length <= 0) t.appoint_pagedata.loadFlag = !0;
                else {
                    for (var i = 0; i < e.dataObj.length; i++) e.dataObj[i].GoodsInfo = JSON.parse(e.dataObj[i].GoodsInfo);
                    laytpl($("#appointListTpl").html()).render(e.dataObj,
                    function(e) {
                        t.appoint_pagedata.pi > 2 ? $("div#appoint_list").append(e) : $("div#appoint_list").empty().append(e)
                    }),
                    t.appoint_pagedata.loadFlag = !1
                }
            }))
        },
        setHouseIntro: function(e) {
            if (e) {
                e.Address ? $("#house_show_address").html(e.Address).closest(".kfzb-cell").show() : $("#house_show_address").html(e.Address).closest(".kfzb-cell").hide(),
                e.Phone ? $("#house_show_tel").html(e.Phone).closest(".kfzb-cell").show() : $("#house_show_tel").html(e.Phone).closest(".kfzb-cell").hide(),
                e.HousesInfo ? $("#house_show_info").html(e.HousesInfo.replace(/\n/g, "<br />")).show() : $("#house_show_info").html(e.HousesInfo).hide();
                for (var t = "",
                i = e.ImgUrls ? e.ImgUrls.split(",") : [], o = 0; o < i.length && i[o]; o++) t += '<div class="kazb-lpjs-pic">                            <img src="' + i[o] + '" style="width: 100%;">                            </div>';
                $("#hide_house_intro_imgs").val(e.ImgUrls),
                $("#div_house_show_imgs").empty().append(t)
            }
        },
        setHouseCoupon: function(e) {
            if (e) {
                var t = 0;
                e.CouponContent ? $("#house_coupon_show_content").html(e.CouponContent.replace(/\n/g, "<br />")).closest("p").show() : ($("#house_coupon_show_content").html(e.CouponContent).closest("p").hide(), t += 1),
                e.Phone ? $("#house_coupon_show_tel").html(e.Phone).closest("p").show() : (t += 1, $("#house_coupon_show_tel").html(e.Phone).closest("p").hide()),
                e.Contacts ? $("#house_coupon_show_contact").html(e.Contacts).closest("p").show() : (t += 1, $("#house_coupon_show_contact").html(e.Contacts).closest("p").hide()),
                3 == t ? $(".kfzb-youhui-f").hide() : $(".kfzb-youhui-f").show()
            }
        },
        isTelOrPhone: function(e) {
            return /^\d{2,3}-?\d{7,8}$/.test(e) || /^1[3|4|5|7|8]\d{9}$/.test(e)
        },
        isPhone: function(e) {
            return /^1[3|4|5|7|8]\d{9}$/.test(e)
        },
        isNum: function(e) {
            return !! /^[(-?\d+\.\d+)|(-?\d+)|(-?\.\d+)]+$/.test(e)
        },
        log: function(e) {
            t.isDebug && console.log(e)
        },
        isDebug: !1,
        nodeScroll: function(e, t) {
            e.scroll(function() {
                nodeScrollTotalHeigth = e[0].scrollHeight,
                nodeScrollTop = e[0].scrollTop,
                nodeHight = e.height(),
                nodeScrollTotalHeigth - nodeScrollTop - nodeHight < 10 && t()
            })
        }
    };
    return t
}),
define("livecommon/module/imageGallery", ["../module/utils"],
function(e) {
    var t = {
        Init: function() {
            e.IsWeiXinChat() ? $(document).on("click", ".tab-content-msgchat img[fullsrc]",
            function() {
                t.viewImg($(this))
            }) : $(document).on("click", ".tab-content-msgchat img[fullsrc]",
            function() {
                var e = $(this);
                $.magnificPopup.open({
                    items: {
                        src: e.attr("fullsrc")
                    },
                    type: "image"
                },
                0)
            })
        },
        viewImg: function(e, t) {
            var i = e.attr("fullsrc"),
            o = [];
            $(".tab-content-msgchat img[fullsrc]").each(function(e, t) {
                o.push(t.attributes.fullsrc.nodeValue)
            }),
            wx.previewImage({
                current: i,
                urls: o
            })
        },
        BindEvent: function() {}
    };
    return t
}),
window.ClickOrTap = -1 == navigator.userAgent.indexOf("Mobile") ? "click": "touchstart";
var recordReaded = {};
localStorage.getItem("recordReaded") && (recordReaded = JSON.parse(localStorage.recordReaded)),
$(function() {
    $.fn.autoHeight = function() {
        function e(e) {
            e.scrollTop = 0,
            $(e).height() > 20 && (e.style.height = "auto"),
            $(e).height(e.scrollHeight || 35)
        }
        this.each(function() {
            e(this),
            $(this).on("keydown",
            function(e) {
                13 == e.keyCode && e.stopPropagation()
            }),
            $(this).on("keyup",
            function(t) {
                t.preventDefault(),
                e(this),
                13 == t.keyCode && t.stopPropagation()
            })
        })
    }
}),
$.fn.extend({
    animateCss: function(e, t) {
        return this.addClass("animated " + e).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
            $(this).removeClass("animated " + e),
            "function" == typeof t && t()
        }),
        this
    }
}),
requirejs.config({
    baseUrl: "/livecontent",
    paths: {
        "jquery.popBox": "plugin/alert/black-tip-dialog",
        "jquery.imgUpload": "plugin/imgUpload/img-upload"
    },
    shim: {},
    urlArgs: "v=" + (new Date).getTime()
}),
require(["jquery.imgUpload", "jquery.popBox", "livecommon/module/inputbox", "livecommon/module/live", "livecommon/module/im", "livecommon/module/shop", "livecommon/module/redbag", "livecommon/module/coupon", "livecommon/module/vertical", "livecommon/module/house", "livecommon/module/imageGallery", "livecommon/module/wxvideoplayer"],
function(e, t, i, o, n, s, a, d, r, c, l, p) {
    $(document).ready(function() { !
        function() {
            o.Init(),
            i.Init(),
            n.Init(),
            "2" == zbvd.modeltype && (timingredbag && timingredbag.Init(), p.Init()),
            "Shop" == zbvd.tplname && s.Init(),
            "Vertical" == zbvd.tplname && r.Init(),
            "House" == zbvd.tplname && c.Init(),
            a.GetNewRedBag(),
            d.GetNewCoupon(),
            l.Init()
        } ()
    })
},
function() {
    console.log(arguments)
}),
define("livecommon/app/main",
function() {});