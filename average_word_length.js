function avgWordLengthCalc(str) {
	var strWithoutPunct = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	var words = strWithoutPunct.split(" ");
	var len = 0;
	for (var i = 0; i < words.length; i++) {
		len += words[i].length;
	}
	return (len / i).toFixed(2);
}
