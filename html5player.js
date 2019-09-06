var HTML5_ID_BASE = 0,
	isdebug = !1;

function html5playerRun(e) {
	isdebug && console.log(e);
	var i = /^\d{0,6}(\%)?$/;
	i.test(e.width) && e.width, i.test(e.height) && e.height;
	HTML5_ID_BASE++, this.uuid = "html5Media" + HTML5_ID_BASE, this.hlsUrl = e.hlsUrl, this.container = e.mediaid, this.autostart = e.autostart, this.volume = e.volume ? e.volume : 80, this.adveDeAddr = e.adveDeAddr ? e.adveDeAddr : "";
	var t = "",
		l = "",
		a = "";
	e.isUseX5 && (l = "x5-video-player-type='" + e.x5TypeStr + "' x5-video-player-fullscreen='true'", a = "playsinline webkit-inline  webkit-playsinline"), t += "<video " + l + "  class='video'   preload='auto' id='liveVideo' type='application/x-mpegURL' poster='" + this.adveDeAddr + "'  src='" + this.hlsUrl + "' controlslist='nodownload' style='display:none;width:100%;'", t += " " + a + "   x-webkit-airplay='allow'></video><span id='videoopeator'></span>", t += "<div class='videoPoster' style='position:relative'>", t += "<img id='playbtn' style='top: 50%;left: 50%;-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);position: absolute;cursor:pointer;' src='https://vzan.com/livecontent/miniVideo/images/new-play.png' width='60px'>", t += "<img src='" + this.adveDeAddr + "' style='cursor:pointer;border:0;width:100%;' id='livePoster' />", t += "</div>", document.getElementById(e.container).innerHTML = t, "function" == typeof e.playerloadCallback && e.playerloadCallback()
}