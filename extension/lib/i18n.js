function _i18n(e, f) {
	var str = chrome.i18n.getMessage(e);

	if (str == undefined || str == '') {
		console.log('"' + e + '": { "message": "' + e + '" },');
		return;
	}
	//console.log('i18n[' + e + ']:' + str);
	return str;
}

function __i18n(e, f) {
	var str = chrome.i18n.getMessage(e, f);

	if (str == undefined || str == '') {
		console.log('_i18n[' + e + ']:' + str);
	}

	document.write(str);
}