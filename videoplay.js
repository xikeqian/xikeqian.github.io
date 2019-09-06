
/**
 * 初始化播放器相关配置
 * conf 配置信息
 */
function liveVideoInit(conf, liveinfo) {
    var _this = this;
    _this.isloading = false;
    _this.isPlayAd = false;
    _this.playAdType = "";
    _this.isPcPlayer = false;
    _this.videoPlayer = null;
    _this.isSmallPage = false;
    _this.liveinfo = liveinfo;
    _this.videoconf = conf;
    _this.outsetAd = liveinfo.outsetAd;
    _this.pauseAd = liveinfo.pauseAd;
    _this.isMp4 = false;
    _this.mp4VideoObj = null;
    _this.swfobj = null;
    _this.swfPlayerObj = null;
    _this.AdCountDownTimer = null;
    _this.vidocontainerheight = 210;
    _this.videototaltime = 0;
    _this.counttime = 0;
    _this.isBindEvent = false;
    _this.posterhtml = "<img src=\"" + liveinfo.cover + "\" style=\"width:100%;\" class=\"video-poster\" />";
    _this.vidocontainerhtml = "<div id=\"videoPlayer\" style=\"font-size:0;width:100%;height:100%;min-height:" + _this.vidocontainerheight + "px;\"></div>";
    sessionStorage.setItem("liveinfo_" + _this.liveinfo.tpid, JSON.stringify(_this.liveinfo));
    //限时免费观看时间
    _this.LimitFreeViewTimes = $(".countdown-tip").data("time") || 0;
    _this.viewtimes = 0;
    _this.hostname = window.location.host;


    /**
     * 广告
     */
    _this.pcLoadOutsetAd = function () {
        if (_this.liveinfo.livestatus == 'smallvideo' || _this.liveinfo.livestatus == 'netvideo' || _this.LimitFreeViewTimes > 0) return false;
        if (_this.liveinfo.topicTplName == 'Vertical' || _this.liveinfo.isScreen == 0) return false;
        if (_this.liveinfo.livestatus != "notsignal" && sessionStorage.getItem("IsPlayAd_" + _this.liveinfo.tpid) == '1') {
            sessionStorage.removeItem("IsPlayAd_" + _this.liveinfo.tpid);
            return false;
        }
        if (_this.liveinfo.livestatus != "notsignal" && (_this.outsetAd.videolink == '' || !_this.outsetAd.isOpen)) {
            sessionStorage.removeItem("outsetAd_" + _this.liveinfo.tpid);
            return false;
        }
        if (_this.liveinfo.livestatus == "notsignal" && (_this.pauseAd.videolink == '' || !_this.pauseAd.isOpen)) {
            sessionStorage.removeItem("outsetAd_" + _this.liveinfo.tpid);
            return false;
        }
        if (_this.liveinfo.livestatus != "notsignal" && (_this.outsetAd.payingtimetype == 1 || $.cookie('TopicOutsetADView_' + _this.liveinfo.tpid) != 1)) {
            if (_this.outsetAd.isOpen && _this.outsetAd.videolink != '') {
                _this.videoconf.hlsUrl = _this.outsetAd.videolink;
                _this.videoconf.rtmpUrl = "";
                _this.isPlayAd = true;
                _this.playAdType = "outsetad";
                sessionStorage.removeItem("outsetAd_" + _this.liveinfo.tpid);
                sessionStorage.setItem("outsetAd_" + _this.liveinfo.tpid, JSON.stringify(_this.outsetAd));
            }
        } else if (_this.liveinfo.livestatus == "notsignal") {
            if (_this.pauseAd.isOpen && _this.pauseAd.videolink != '') {
                _this.videoconf.hlsUrl = _this.pauseAd.videolink;
                _this.videoconf.rtmpUrl = "";
                _this.isPlayAd = true;
                _this.playAdType = "pausead";
                sessionStorage.removeItem("pauseAd_" + _this.liveinfo.tpid);
                sessionStorage.setItem("pauseAd_" + _this.liveinfo.tpid, JSON.stringify(_this.pauseAd));
            }
        } else {
            sessionStorage.removeItem("outsetAd_" + _this.liveinfo.tpid);
            sessionStorage.removeItem("pauseAd_" + _this.liveinfo.tpid);
            return false;
        }
        /* pc端播放广告 */
        if (_this.isPcPlayer) {
            //插播片头广告
            if (_this.videoconf.hlsUrl.indexOf('.mp4') > 0) {
                _this.isMp4 = true;
                var html = "";
                var attr = "";
                if (!_this.isSmallPage) {

                }
                if ((_this.outsetAd.nopaytimetype == 1 && _this.liveinfo.livestatus == 'notbegin') || _this.pauseAd.payingtimetype == 1) {
                    attr = "loop";
                }
                if ($('#liveVideo').length <= 0) {
                    html += "<video x5-video-player-type='h5' controlslist='nodownload'" + attr + "   x5-video-player-fullscreen='true' muted  class='video'  autoplay='autoplay'  controls preload='auto' id='liveVideo' type='application/x-mpegURL' poster='" + _this.liveinfo.cover + "'  src='" + _this.videoconf.hlsUrl + "' style='width:100%;height:100%;'";
                    html += "playsinline  webkit-inline='true'  webkit-playsinline x-webkit-airplay='allow'></video><span id='videoopeator'></span>";
                    //html += "<div class='videoPoster'>";
                    //html += "<img id='playbtn' style='top: 50%;left: 50%;-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);position: absolute;cursor:pointer;' src='//j.vzan.cc/zhibo/img/play.png' width='80px'>";
                    //html += "<img src='" + _this.liveinfo.cover + "' style='cursor:pointer;border:0;width:100%;' id='livePoster' />";
                    //html += "</div>";
                    document.getElementById(conf.container).innerHTML = html;
                } else {
                    if (attr != "") $('#liveVideo').attr('loop', 'loop');
                    $('#liveVideo').attr('src', _this.videoconf.hlsUrl);
                    $('#liveVideo').show();
                }
                $("#videomsgtip,#div_live_status,.video-poster").hide();
                $('#videoPlayer').show();
                _this.mp4VideoObj = document.getElementById("liveVideo");
                _this.mp4VideoObj.addEventListener("playing", function () {
                    var ckduration = setInterval(function () {
                        if (_this.mp4VideoObj && parseInt(_this.mp4VideoObj.duration) > 0) {
                            $("#playerloading,#div_live_status").hide();
                            clearInterval(ckduration);
                            _this.ShowMP4CountDownStr();
                            _this.Mp4AdCountDown();
                        }
                    }, 500);
                });
            } else {
                $("#videomsgtip,#div_live_status,.video-poster,.new-count-down").hide();
                $("#playerloading").show();
                var ckduration = setInterval(function () {
                    if (_this.swfPlayerObj) {
                        $("#playerloading").hide();
                        var time = _this.swfPlayerObj.totalfiletime();
                        if (time > 0) {
                            _this.swfPlayerObj.startPlay("");
                            clearInterval(ckduration);
                            _this.ShowM3U8CountDownStr();
                            _this.M3U8AdCountDown();
                        }
                    }
                }, 500);
            }
        }
    }

    /* 绑定事件 */
    _this.pcLoadOutsetAdEvent = function () {
        if (_this.isBindEvent) return false;
        _this.isBindEvent = true;
        $(document).on('click', '.skipad', function () {
            console.log('跳过广告')
            if (_this.isPlayAd) {
                _this.playOfficialVideo();
                $('.video-poster').show();
            } else if (_this.liveinfo.livestatus == "notsignal" || _this.liveinfo.livestatus == "notbegin") {
                _this.GetLiveStatus();//获取直播状态
            }
        });
    }

    /**
     * 显示M3U8广告倒计时文案
     */
    _this.ShowM3U8CountDownStr = function () {
        var cutdownhtml = "<span id=\"t\" style=\"color:red;\">" + parseInt(_this.swfPlayerObj.totalfiletime()) + "</span> 秒";
        if (_this.outsetAd.isskip || _this.pauseAd.isskip) {
            cutdownhtml += "<span class=\"skipad\">跳过</span>";
            _this.pcLoadOutsetAdEvent();
        }
        $(".plan-name").empty().append(cutdownhtml);
    }

    /**
     * 显示MP4广告倒计时文案
     */
    _this.ShowMP4CountDownStr = function () {
        var cutdownhtml = "<span id=\"t\" style=\"color:red;\">" + parseInt(_this.mp4VideoObj.duration) + "</span> 秒";
        if (_this.outsetAd.isskip || _this.pauseAd.isskip) {
            cutdownhtml += "<span class=\"skipad\">跳过</span>";
            _this.pcLoadOutsetAdEvent();
        }
        $(".plan-name").empty().append(cutdownhtml);
    }

    /**
     * 设置已观看片头广告cookie
     */
    _this.SetAdViewedCookie = function () {
        var host = window.location.host;
        var domain = host.substr(host.indexOf('.'), host.length - host.indexOf('.'));
        if (domain.length <= 4) {
            domain = '.' + host;
        }
        $.cookie('TopicOutsetADView_' + _this.liveinfo.tpid, 1, { expires: 1, path: '/', domain: domain });
    }

    /**
     * 设置已观看暂停插播广告cookie
     */
    _this.SetPauseAdViewedCookie = function () {
        var host = window.location.host;
        var domain = host.substr(host.indexOf('.'), host.length - host.indexOf('.'));
        if (domain.length <= 4) {
            domain = '.' + host;
        }
        $.cookie('TopicPauseADView_' + _this.liveinfo.tpid, 1, { expires: 7, path: '/', domain: domain });
    }

    /**
     * 播放正式视频
     */
    _this.playOfficialVideo = function () {
        $('#liveVideo').remove();
        clearTimeout(_this.AdCountDownTimer);
        _this.isMp4 = false;
        $("#videoPlayer").empty();
        $(".plan-name").empty();
        if (_this.isSmallPage) {
            $('.video-poster').show();
            $('.videowrap').css('height', 'auto');
            $(".plan-name").empty().html($(".plan-name").data('qrname'));
        }
        if (_this.isPlayAd && _this.playAdType == "outsetad") {
            _this.SetAdViewedCookie();
        }
        _this.isPlayAd = false;
        sessionStorage.setItem("IsPlayAd_" + _this.liveinfo.tpid, 1);
        _this.videoconf.hlsUrl = _this.liveinfo.playurl;
        //_this.videoconf.rtmpUrl = _this.liveinfo.rtmpurl;
        _this.initAodianPlayer(_this.videoconf);
        if (_this.videoconf.hlsUrl.indexOf('.mp4') <= -1) {
            _this.isUseFlash();
            $('.video-poster,#playerloading,div[id^=aodianplayer_]').hide();
            $('#videoPlayer').css('height','200');
        }
    }

    /**
     * 播放mp4文件广告倒计时
     * @param {any} livevideoObj
     */
    _this.Mp4AdCountDown = function () {
        if (_this.mp4VideoObj == null) return false;
        var $t = parseInt(_this.mp4VideoObj.duration - _this.mp4VideoObj.currentTime);
        if ($t != 0) {
            $('#t').html($t);
            _this.AdCountDownTimer = setTimeout(_this.Mp4AdCountDown, 1000);
        } else {
            $(".plan-name").empty();
            if (_this.isSmallPage) {
                $(".plan-name").empty().html($(".plan-name").data('qrname'));
            }
            clearTimeout(_this.AdCountDownTimer);
            if (_this.playAdType == "outsetad") {
                _this.SetAdViewedCookie();
                if (_this.outsetAd.nopaytimetype == 1 && _this.liveinfo.livestatus == 'notbegin') {
                    _this.ShowMP4CountDownStr();
                    _this.Mp4AdCountDown();
                    $('.video-poster').hide();
                } else if ((_this.liveinfo.status == 0 && _this.liveinfo.livestatus == "playback") || _this.liveinfo.livestatus == "videosrc") {
                    _this.isPlayAd = false;
                    _this.playOfficialVideo();
                } else if (_this.liveinfo.livestatus == "beginning") {
                    _this.playOfficialVideo();
                    $("#live-status").text('直播中').show();
                } else {
                    _this.isPlayAd = false;
                    _this.initAodianPlayer(_this.videoconf);
                }
            } else {
                if (_this.pauseAd.payingtimetype == 1) {
                    setTimeout(function () {
                        console.log(livevideoObj.duration);
                        _this.ShowMP4CountDownStr();
                        _this.Mp4AdCountDown();
                    }, 500)
                } else {
                    _this.isPlayAd = false;
                    _this.isMp4 = false;
                    setTimeout(function () {
                        _this.realtimePlaybackSet();
                        _this.initAodianPlayer(_this.videoconf);
                    }, 1000);
                }
            }

        }
    }

    /**
     * 播放M3U8文件广告倒计时
     */
    _this.M3U8AdCountDown = function () {
        _this.counttime = _this.swfPlayerObj.currenttime() < 0 ? -_this.swfPlayerObj.currenttime() : _this.swfPlayerObj.currenttime();
        totaltime = parseInt(_this.swfPlayerObj.totalfiletime() - _this.counttime);
        console.log(totaltime, _this.counttime, _this.swfPlayerObj.currenttime());
        if (totaltime > 0) {
            $('#t').html(totaltime);
            _this.AdCountDownTimer = setTimeout(_this.M3U8AdCountDown, 1000);
        } else {
            $(".plan-name").empty();
            if (_this.isSmallPage) {
                $(".plan-name").empty().html($(".plan-name").data('qrname'));
            }
            clearTimeout(_this.AdCountDownTimer);
            if (_this.playAdType == "outsetad") {
                _this.SetAdViewedCookie();
                if (_this.outsetAd.nopaytimetype == 1 && _this.liveinfo.livestatus == 'notbegin') {
                    setTimeout(function () { _this.swfPlayerObj.startPlay(""); _this.ShowM3U8CountDownStr(); _this.hlsCallBackFunction(); }, 450);
                    setTimeout(function () { _this.M3U8AdCountDown(); }, 1000);
                }
                else if ((_this.liveinfo.status == 0 && _this.liveinfo.livestatus == "playback") || _this.liveinfo.livestatus == "videosrc") {
                    _this.isPlayAd = false;
                    _this.swfPlayerObj.changePlayer(_this.liveinfo.playurl);
                    setTimeout(function () { _this.hlsCallBackFunction(); }, 300);
                } else if (_this.liveinfo.livestatus == "beginning") {
                    _this.isPlayAd = false;
                    if (_this.liveinfo.rtmpurl != '') {
                        _this.playOfficialVideo();
                    } else {
                        _this.swfPlayerObj.changePlayer(_this.liveinfo.playurl);
                        setTimeout(function () { _this.hlsCallBackFunction(); }, 300);
                    }

                    $("#live-status").text('直播中').show();
                } else {
                    _this.isPlayAd = false;
                    _this.initAodianPlayer(_this.videoconf);
                }
            } else {
                //_this.GetLiveStatus();//获取直播状态
                if (_this.pauseAd.payingtimetype == 1 && _this.liveinfo.livestatus == "notsignal") {
                    setTimeout(function () {
                        if (_this.swfPlayerObj && _this.isPlayAd) {
                            _this.swfPlayerObj.startPlay("");
                            _this.ShowM3U8CountDownStr();
                        }
                    }, 450);
                    setTimeout(function () {
                        if (_this.swfPlayerObj && _this.isPlayAd) {
                            _this.M3U8AdCountDown();
                        }
                    }, 1000);
                } else {
                    _this.isPlayAd = false;
                    setTimeout(function () {
                        _this.realtimePlaybackSet();
                        _this.initAodianPlayer(_this.videoconf);
                    }, 1000);
                }
            }
        }
    }

    /**
     * 获取话题的直播状态
     */
    _this.GetLiveStatus = function () {
        if (_this.isloading || _this.liveinfo.livestatus == "smallvideo") return false;
        _this.isloading = true;
        $.post('/liveajax/GetTopicStatus', { tpid: _this.liveinfo.tpid }, function (res) {
            _this.isloading = false;
            if (res && res.isok) {
                var data = res.dataObj;
                if (data) {
                    if (data.status == 1) {//直播中
                        if (_this.swfPlayerObj) {
                            _this.initAodianPlayer(_this.videoconf);
                        }
                        _this.liveinfo.livestatus = "beginning";
                        _this.isPlayAd = false;
                        $("#div_live_status").hide();
                        var delaySec = 2000;
                        var playurl = data.playurl;
                        var rtmpurl = '';//data.rtmpurl;
                        if (rtmpurl != '' && rtmpurl.indexOf('rtmp:') > -1) {
                            _this.liveinfo.rtmpurl = rtmpurl;
                            setTimeout(function () { _this.playOfficialVideo(); }, delaySec);
                        } else {
                            delaySec = 3500;
                            setTimeout(function () {
                                if (_this.swfPlayerObj && _this.swfPlayerObj.changePlayer) {
                                    _this.liveinfo.playurl = playurl;
                                    _this.swfPlayerObj.changePlayer(_this.liveinfo.playurl);
                                    setTimeout(function () { _this.hlsCallBackFunction(); }, 300);
                                } else {
                                    location.reload();
                                }
                            }, delaySec);
                        }
                        setTimeout(function () {
                            $("#live-status").text('直播中').show();
                        }, delaySec);
                    } else {
                        _this.liveinfo.livestatus = "notsignal";
                        var times = 5000;
                        if (_this.liveinfo.playurl.indexOf('rtmp:') <= -1) {
                            times = 6000;
                        }
                        _this.liveinfo.playbackurl = data.playurl;//实时回放地址
                        if (_this.pauseAd.isOpen && _this.pauseAd.videolink != '') {
                            _this.isPlayAd = true;
                        } else if (data.playurl) { //有设实时回放
                            $('#videoPlayer').empty();
                            $('.video-poster').hide();
                            $("#playerloading").show();
                        } else { //没广告没实时回放
                            $(".vertical-new-btns").show();
                        }
                        setTimeout(function () {
                            if (_this.isPlayAd && _this.swfPlayerObj) {
                                $('#videoPlayer').empty();
                                $('.video-poster').show();
                                _this.swfPlayerObj = null;
                                _this.pcLoadOutsetAd();
                            }
                            if (data.playurl && !_this.isPlayAd) { //有实时回放
                                _this.liveinfo.playurl = data.playurl;
                                _this.videoconf.hlsUrl = data.playurl;
                            }
                            _this.initAodianPlayer(_this.videoconf);
                        }, times);
                    }
                }
            }
        });
    }

    // 计算互动区域高度
    _this.resizeContentHeight = function () {
        console.log('resizeContentHeight');
        if (parseInt(_this.liveinfo.isScreen) || _this.liveinfo.topicTplName !== 'Vertical') {
            // 转播入口高度
            var zbHeight = $('.zb-tips').height() || 0;
            // 视频容器高度
            var videoHeight = $('.videowrap').height() || 0;
            // 视频下方广告高度
            var adHeight = $('.topimg.undervideo').height() || 0;
            // tab菜单高度
            var tabHeight = $(".live-qiye-nav").height() || $(".marry-live-nav").height() || 0;
            // 滚动广告高度
            var marqueeHeight = $('.live-qiye-notice').height() || 0;
            // 互动区域高度
            var contentAreaHeight = $(document.body).height() - videoHeight - adHeight - tabHeight - zbHeight - marqueeHeight;
            // 实际高度和计算高度有一点差别，所以-2避免页面垂直滚动
            $('.scrollContentBox, #tab-content-msgwrapper, #tab-content-msgwrapper > .swiper-slide').height(contentAreaHeight - 2);
        }
    }


    /**
     * 初始化播放器
     * @param {any} conf
     */
    _this.initAodianPlayer = function (conf) {
        console.log('initAodianPlayer');
        if (_this.liveinfo.livestatus == 'netvideo') {
            $('.video-poster').hide();
            return false;
        }
        $(window).resize(function () {
            if (_this.isSmallPage && _this.isPcPlayer) {
                _this.resizeContentHeight();
            }
        })

        if (_this.isPcPlayer) {
            /* PC端话题状态 */
            if (_this.liveinfo.livestatus == "notbegin") $('#live-status').html('未开始').show();
            else if (_this.liveinfo.livestatus == "endlive" || _this.liveinfo.livestatus == "playback" || _this.liveinfo.livestatus == "videosrc") $('#live-status').html('回放中').show();
            else if (_this.liveinfo.livestatus == "beginning") $('#live-status').html('直播中').show();
            else if (_this.liveinfo.livestatus == "smallvideo") $('#live-status').html('小视频').show();
            else if (_this.liveinfo.livestatus == "notsignal") {
                $('#live-status').html('直播暂停中').show();
            }
        }
        if (_this.isMp4 && _this.isPcPlayer) {
            return false;
        }
        if (_this.isPcPlayer && !_this.isPlayAd) {
            if (_this.isSmallPage) {
                _this.vidocontainerheight = $('.videowrap').height();
            }
            if (_this.liveinfo.livestatus == "notbegin") {
                $('#videoPlayer').remove();
                $('.video-poster').length <= 0 ? $('.videowrap').prepend(_this.posterhtml) : $('.video-poster').show();
                // $('#div_live_status').show();
                if ($('#div_live_status').data('starttime')) {
                    _this.startLiveCountdown($('#div_live_status').data('starttime'));
                    $('#div_live_status').show()
                }
                $("#playerloading").hide();
                if (_this.isSmallPage) {
                    $('.videowrap').css('height', 'auto');
                    _this.resizeContentHeight();
                }
                //setTimeout(function () { _this.GetLiveStatus() }, 2100);
                return false;
            }
            else if (_this.liveinfo.livestatus == "notsignal") {
                if (!_this.liveinfo.playbackurl) {
                    $('#videoPlayer').hide();
                    $('#videoPlayer').empty();
                    if (_this.liveinfo.isScreen != "0" || !_this.isSmallPage) {
                        $('.video-poster').length <= 0 ? $('.videowrap').prepend(_this.posterhtml) : $('.video-poster').show();
                    }
                    $("#videomsgtip").show().find("#videomsgtip-content").text('直播暂停中，请稍候！');
                    if (_this.isSmallPage) {
                        $("#div_live_status").addClass("new-count-down").show();
                        $("#div_live_status").html("直播暂停中，请稍候");
                        $('.videowrap').css('height', 'auto');
                        _this.resizeContentHeight();
                    }
                    return false;
                } else {
                    $('#videoPlayer').empty();
                    $('.video-poster').hide();

                }
            } else if (_this.liveinfo.livestatus == "endlive") {
                $('#videoPlayer').remove();
                $('.video-poster').length <= 0 ? $('.videowrap').prepend(_this.posterhtml) : $('.video-poster').show();
                $("#videomsgtip").show().find("#videomsgtip-content").text('直播已结束，请稍候观看回放！');
                if (_this.isSmallPage) {
                    $("#div_live_status").addClass("new-count-down").show();
                    $("#div_live_status").html("直播已结束，请稍候观看回放");
                    $('.videowrap').css('height', 'auto');
                    _this.resizeContentHeight();
                }
                return false;
            } else if (_this.liveinfo.livestatus == "nocash") {
                $('#videoPlayer').remove();
                $('.video-poster').length <= 0 ? $('.videowrap').prepend(_this.posterhtml) : $('.video-poster').show();
                $("#videomsgtip").show().find("#videomsgtip-content").text("该直播账号已欠费，暂时无法提供观看服务，请联系直播内容发布者").css("font-size", "12px");
                if (_this.isSmallPage) {
                    $("#div_live_status").addClass("new-count-down").show();
                    $("#div_live_status").html("该直播账号已欠费，暂时无法提供观看服务，请联系直播内容发布者")
                    $('.videowrap').css('height', 'auto');
                    _this.resizeContentHeight();
                }
                return false;
            } else {
                console.log('live beginning');
                $("#videomsgtip").hide();
                if ($('#videoPlayer').length <= 0) {
                    if (_this.isPcPlayer && !_this.isSmallPage) {
                        $('.videowrap').append(_this.vidocontainerhtml);
                    } else if (_this.isPcPlayer && _this.isSmallPage) {
                        $(".vertical-new-countdown").hide();
                        _this.videoconf.height = _this.vidocontainerheight + "px";
                        $('.videowrap').append("<div id=\"videoPlayer\" style=\"font-size:0;width:100%;height:100%;min-height:" + _this.vidocontainerheight + "px;\"></div>");
                    }
                    $(".loading-box").show();
                }
                $('.video-poster').hide();
            }
            $("#playerloading").show();
        }

        _this.videoconf.listencallback = _this.videoListenCallback;
        _this.videoconf.lssCallBackFunction = _this.lssCallBackFunction;
        _this.videoconf.hlsCallBackFunction = _this.hlsCallBackFunction;
        _this.videoconf.playerloadCallback = _this.playerLoadCallback;

        _this.videoconf.isUseX5 = true;
        //是否使用最新的X5播放器(手机自带QQ浏览器不使用) (_this.hostname.indexOf('vzan.com') > -1 || _this.liveinfo.rightTopWatermark == '') &&
        if (!_this.isMobileQQBrowser() || _this.isWapBrowser()) {
            _this.videoconf.x5TypeStr = 'h5-page';
        } else {
            _this.videoconf.x5TypeStr = 'h5';
        }
        if (typeof aodianPlayer == "function") {
            $('#videoPlayer').show();
            _this.videoPlayer = aodianPlayer(_this.videoconf);
        } else {
            setTimeout(_this.initAodianPlayer, 300, _this.videoconf);
        }
    }

    /**
     * 直播开始时间倒计时
     * @param {any} startDate
     */
    _this.startLiveCountdown = function (startDate) {
        var _startTime = new Date(startDate).getTime();
        var _nowTime = new Date().getTime();
        if (_nowTime > _startTime) {
            $(".qlDays").text("00");
            $(".qlHours").text("00");
            $(".qlMinutes").text("00");
            $(".qlSeconds").text("00");
            // $("#div_live_status").html("直播即将开始，敬请期待").show();
            $(".isCountdown").css('display', 'none');
            $("#videomsgtip").css('display', 'block');
            $("#videomsgtip-content").html("直播即将开始，敬请期待");
            $(".timeover").css("background", "none");
        }
        else {
            var _timespan = _startTime - _nowTime;
            var _livetimehand = setInterval(function () {
                var a = _startTime - _nowTime,
                    b = parseInt(a / 864E5),
                    c = parseInt(a / 36E5 - 24 * b),
                    d = parseInt(a / 6E4 - 1440 * b - 60 * c),
                    e = parseInt(a / 1E3 - 86400 * b - 3600 * c - 60 * d);

                $(".qlDays").text(b < 10 ? "0" + b : b);
                $(".qlHours").text(c < 10 ? "0" + c : c);
                $(".qlMinutes").text(d < 10 ? "0" + d : d);
                $(".qlSeconds").text(e < 10 ? "0" + e : e);

                _nowTime += 1000;
                if (a <= 0) {
                    clearInterval(_livetimehand);
                }
            }, 1000)
        }
    }

    /**
     * Pc端观完成回调事件
     * @param {any} type
     */
    _this.playerLoadCallback = function (swfPlayerObj) {
        console.log('play callback');
        _this.swfPlayerObj = swfPlayerObj;
        window.objectPlayer = swfPlayerObj;
        $('.video-poster').hide();
        if (_this.isPcPlayer) {
            $('#' + conf.container).css({ 'width': '100%', 'height': '100%' });
        }

        if (_this.isPcPage) {
            $("#playerloading").hide();
        }
        if (_this.liveinfo.livestatus != "beginning" && _this.swfPlayerObj) {
            setTimeout(function () { _this.swfPlayerObj.startPlay(""); }, 350);
        }
        $(".loading-box").hide();
        if (_this.isMp4 && _this.isPcPlayer) {
            $("#playerloading").hide();
            $("#hlsMedia1,#vvMedia1").hide();
            return false;
        }
    }

    /**
     * lssplayer加载完成
     * @param {any} swfobj
     */
    _this.lssCallBackFunction = function (swfobj) {
        console.log('lssCallBackFunction');
        $('.videoPoster').hide();
        if (swfobj) {
            _this.swfobj = swfobj;
        }

        if (_this.isMp4 && _this.isPcPlayer) {
            $("#hlsMedia1,#vvMedia1").hide();
            return false;
        }
        if (_this.liveinfo.livestatus == 'notsignal' || _this.liveinfo.livestatus == 'notbegin') return false;
        if (!_this.swfobj) return false;
        var _default_video_size = {
            width: 0,
            height: 0,
        }
        var windowlssoffsetid = window.setInterval(function () {
            var _h = _this.swfobj.getVideoHeight(),
                _w = _this.swfobj.getVideoWidth();
            var _docwidth = document.querySelector("body").offsetWidth;
            if (_h != 0 && _h != _default_video_size.height && _this.liveinfo.modeltype != 4) {
                //console.log(_w, _h, _docwidth);
                _default_video_size.width = _w;
                _default_video_size.height = _h;
                var _cal_h = _h * (_docwidth / _w);
                if (_this.isSmallPage) {
                    for (var i = 0; i < $('[id^=vvMedia]').length; i++) {
                        //$($('[id^=vvMedia]')[i]).css('height', _cal_h + 'px');
                        if (_this.liveinfo.isScreen == 1) {
                            $($('[id^=vvMedia]')[i]).css('height', _cal_h + 'px');
                        } else {
                            $($('[id^=vvMedia]')[i]).css('height', '100%');
                        }
                    }
                    if (_this.liveinfo.isScreen == 1) {
                        document.querySelector(".videowrap").style.height = _cal_h + "px";
                    } else {
                        document.querySelector(".videowrap").style.height = "100%";
                    }
                    _this.resizeContentHeight();
                }
                else {
                    document.querySelector("#playerloading").style.display = "none";
                }
                //if (zbvd) {
                //    zbvd.isvideochange = true;
                //}
                clearInterval(windowlssoffsetid);
            }
        }, 100);
    }

    /**
     * hlsplayer加载完成
     * @param {any} swfobj
     */
    _this.hlsCallBackFunction = function (swfobj) {
        console.log('hlsCallBackFunction 11');
        $('.videoPoster').hide();
        if (swfobj) {
            _this.swfobj = swfobj;
        }

        if (_this.isMp4 && _this.isPcPlayer) {
            $("#hlsMedia1,#vvMedia1").hide();
            return false;
        }
        if (!_this.swfobj) return false;
        var _default_video_size = {
            width: 0,
            height: 0,
        }
        var windowhlsoffsetid = window.setInterval(function () {
            var _h = _this.swfobj.getVideoHeight(),
                _w = _this.swfobj.getVideoWidth();
            var _docwidth = document.querySelector("body").offsetWidth;

            if (_h != 0 && _h != _default_video_size.height && _this.liveinfo.topicTplName != '') {
                console.log(_w, _h, _docwidth);
                _default_video_size.width = _w;
                _default_video_size.height = _h;
                var _cal_h = _h * (_docwidth / _w);
                if (_this.isSmallPage) {
                    for (var i = 0; i < $('[id^=hlsMedia]').length; i++) {
                        //$($('[id^=vvMedia]')[i]).css('height', _cal_h + 'px');
                        if (_this.liveinfo.isScreen == 1) {
                            $($('[id^=hlsMedia]')[i]).css('height', _cal_h + 'px');
                        } else {
                            $($('[id^=hlsMedia]')[i]).css('height', '100%');
                        }
                    }
                    if (_this.liveinfo.isScreen == 1) {
                        document.querySelector(".videowrap").style.height = _cal_h + "px";
                    } else {
                        document.querySelector(".videowrap").style.height = "100%";
                    }
                    _this.resizeContentHeight();
                }
                else {
                    document.querySelector("#playerloading").style.display = "none";
                }

                //if (_this.isSmallPage) {
                //    zbvd.isvideochange = true;
                //}
                window.hlsok = true;
                clearInterval(windowhlsoffsetid);
            }

        }, 1000);
    }

    /**
     * Pc端观看监听播放状态回调事件
     * @param {any} type
     */
    _this.videoListenCallback = function (info) {
        switch (info) {
            case "NetStream.Pause.Notify":
                if (!_this.isPlayAd) {
                    timingredbag && timingredbag.StopViewTimeClock();
                }
                $(".vertical-new-btns").show();
                break;
            case "NetStream.Play.Start":
                if (!_this.isPlayAd) {
                    timingredbag && timingredbag.StartViewTimeClock();
                }
                $(".vertical-new-btns").hide();
                break;
            case "NetStream.Unpause.Notify":
                if (!_this.isPlayAd && timingredbag) {
                    timingredbag.StartViewTimeClock();
                }
                $(".vertical-new-btns").hide();
                break;
        }
    }

    /**
     * 是否是小屏界面
     */
    _this.isSmallPageFuc = function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "MicroMessenger"];
        var isSmallPage = false;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                isSmallPage = true;
                break;
            }
        }
        return isSmallPage;
    };

    /**
     * 是否是小屏界面
     */
    _this.isPcPlayerFuc = function () {
        //判断手机还是pc
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var isPc = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                isPc = false;
                break;
            }
        }
        return isPc;
    };

    /**
     * 是否是小屏界面
     */
    _this.isMobileQQBrowser = function () {
        //判断手机还是pc
        var userAgentInfo = navigator.userAgent;
        if (_this.IsNullOrEmpty(userAgentInfo)) return true;
        if (userAgentInfo.indexOf('MicroMessenger') > -1) return false;
        return (userAgentInfo.indexOf('QQBrowser') > -1 || userAgentInfo.indexOf('VivoBrowser') > -1) && userAgentInfo.indexOf('MicroMessenger') <= -1;
    };
    /*
     *判断是否wap端
     */
    _this.isWapBrowser = function () {
        var userAgentInfo = navigator.userAgent;
        if (_this.IsNullOrEmpty(userAgentInfo)) return false;
        var is_mobile = userAgentInfo.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
        if (is_mobile && userAgentInfo.indexOf('MicroMessenger') <= -1) {
            if (_this.liveinfo.topicTplName == 'Vertical' || _this.liveinfo.isScreen == 0) {
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    };

    _this.IsNullOrEmpty = function (obj) {
        if (obj == undefined || obj == null || obj == "")
            return true;
        else
            return false;
    };
    /**
     * 实时回放设置
     */
    _this.realtimePlaybackSet = function () {
        if (_this.liveinfo.playbackurl) { //有设置实时回放
            $('#videoPlayer').empty();
            $('.video-poster').length <= 0 ? $('.videowrap').prepend(_this.posterhtml) : $('.video-poster').show();
            $("#playerloading").show();
            _this.liveinfo.playurl = _this.liveinfo.playbackurl;
            _this.videoconf.hlsUrl = _this.liveinfo.playbackurl;
        }
    };
    /**
     * 检查是否使用了Flash播放器
     */
    _this.isUseFlash = function () {
        if (!$('#liveVideo').length || !$('object').length) {
            if ($('#liveVideo').length && $('#liveVideo').attr('src').indexOf('.mp4')) {
                return false;
            }
            var useFlash = false;
            try {
                userFlash = Boolean(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
            } catch (ex) {
                useFlash = ('undefined' !== typeof window.navigator.mimeTypes['application/x-shockwave-flash']);
            }
            console.log('允许使用flash：', useFlash);
            if (!useFlash) {
                var $useFlashTips = $('<div class="use-flash">flash插件未开启,点击<a href="http://get.adobe.com/flashplayer">此处</a>启用flash插件观看视频</div>');
                // 隐藏视频加载中语句和图标
                $('#playerloading, #aodianplayer_uid_base1 a').hide();
                $('#videoPlayer').append($useFlashTips);
                var usa = navigator.userAgent;
                if (usa.indexOf('QB') >= 0) {
                    $('#videoPlayer').height(200);
                    $('.video-poster').hide();
                }
            }
        }
    }

    _this.isSmallPage = _this.isSmallPageFuc();
    _this.isPcPlayer = _this.isPcPlayerFuc();
    _this.pcLoadOutsetAd();
    _this.initAodianPlayer(_this.videoconf);
    //var livevideoplayer = {
    //    FreshPlayer: function () {
    //        _this.GetLiveStatus();
    //    }
    //};
}
 window.liveVideoInit = liveVideoInit;