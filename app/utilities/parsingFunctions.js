function removeNewlinesAndUnderscores(inputString){
	inputString = inputString.replaceAll("_", "");
	inputString = inputString.replaceAll("/\r|\n/", "");
	return inputString;
}

module.exports.removeNewlinesAndUnderscores = removeNewlinesAndUnderscores;