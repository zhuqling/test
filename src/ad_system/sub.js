/*! b5mad 2014-06-25 */
function img(e, n, t, a, i, r, o, c, m, d, l, s, u, p) {
	var h = new Image,
	f = e + "?type=" + n + "&adcode=" + t + "&unionName=" + r + "&adId=" + o + "&siteCode=" + c;
	a && (f += "&originAdID=" + a),
	i && (f += "&originUnionName=" + i),
	m && (f += "&t=" + m),
	d && (f += "&cookie=" + d),
	l && (f += "&clientip=" + l),
	u && (f += "&ct=" + u),
	p && (f += "&cp=" + p),
	s && (f += "&fromWhere=" + s),
	h.src = f
}
function b5m_FillSlot(e) {
	var n = null,
	t = null,
	a = null,
	i = null,
	r = !1,
	o = "BACKFLOW_RV";
	b5m_ADS.length > e && void 0 != b5m_ADS[e][0] ? (1 == arguments.length ? e > 0 ? (n = b5m_ADS[e - 1][1], t = b5m_ADS[e - 1][2], a = b5m_ADS[e][2], i = b5m_ADS[e][1], r = !0) : 0 == e && b5man_params.isFrameBack && (n = firstAdId, t = firstUnionName, a = b5m_ADS[e][2], i = b5m_ADS[e][1], r = !0) : 3 == arguments.length && (n = arguments[1], t = arguments[2], a = b5m_ADS[e][2], i = b5m_ADS[e][1], r = !0), document.write(b5m_ADS[e][0])) : 1 == arguments.length ? (n = b5m_ADS[e - 1][1], t = b5m_ADS[e - 1][2], a = "0", i = 0, r = !0) : 3 == arguments.length && (n = arguments[1], t = arguments[2], a = "0", i = 0, r = !0),
	r && (img(backUrl, o, adcode, n, t, a, i, siteCode), img(stormUrl, o, adcode, n, t, a, i, siteCode, requestStartTime, cookieval, ip))
}
function b5m_init_param(e) {
	level = e.level,
	confirmUrl = e.confirmUrl,
	backUrl = e.backUrl,
	stormUrl = e.stormUrl,
	siteCode = e.siteCode,
	adcode = e.adcode,
	cookieval = e.cookieval,
	ip = e.ip,
	firstAdId = e.firstAdId,
	firstUnionName = e.firstUnionName,
	ct = e.ct,
	cp = e.cp
}
function b5m_first_show() {
	if (null != b5m_ADS[level]) {
		b5m_FillSlot(level);
		var e = encodeURIComponent(encodeURIComponent(function() {
			return window.parent != window ? document.referrer: location.href
		} ()));
		img(confirmUrl, "CV", adcode, null, null, firstUnionName, firstAdId, siteCode, null, null, null, e),
		img(stormUrl, "CV", adcode, null, null, firstUnionName, firstAdId, siteCode, requestStartTime, cookieval, ip, null, ct, cp)
	}
	img(stormUrl, "RV", adcode, null, null, firstUnionName, firstAdId, siteCode, requestStartTime, cookieval, ip, null, ct, cp)
}
function b5m_show() {
	b5m_init_param(b5man_params),
	b5man_params.isFrameBack ? ("y" == b5man_params.isTheEnd && b5m_FillSlot(level), "n" == b5man_params.isTheEnd && b5m_FillSlot(level, firstAdId, firstUnionName)) : b5m_first_show()
}
var level = 0,
confirmUrl = "",
backUrl = "",
adcode = "",
stormUrl = "",
siteCode = "",
requestStartTime = (new Date).getTime(),
cookieval = "",
ip = "",
firstAdId = 0,
firstUnionName = "",
ct = 0,
cp = 0;
b5m_show();