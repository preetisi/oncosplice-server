function removeNewlinesAndUnderscores(inputString){
	inputString = inputString.replaceAll("_", "");
	inputString = inputString.replaceAll("/\r|\n/", "");
	return inputString;
}

function changeSpecialCharsToBlank(inputString){
	inputString = inputString.replaceAll(".", "_");
	inputString = inputString.replaceAll("-", "_");
	inputString = inputString.replaceAll("_", " ");
	inputString = inputString.toLowerCase();
	inputString = inputString.replaceAll("\n", "");
	inputString = inputString.replaceAll("\r", "");
	return inputString;
}

function cleanUpTranslator(inputString){

	inputString = inputString.replaceAll(".", "_");
	inputString = inputString.replaceAll("-", "_");
	inputString = inputString.replaceAll("(", "_");
	inputString = inputString.replaceAll(")", "_");
	inputString = inputString.replaceAll("\r", "");
	inputString = inputString.replaceAll("\n", "");
	inputString = inputString.replaceAll("_txt", "");
	return inputString;
}

function convertToUnderscores(inputString){
	inputString = inputString.replaceAll(".", "_");
	inputString = inputString.replaceAll("-", "_");
	inputString = inputString.replaceAll("(", "_");
	inputString = inputString.replaceAll(") ", "__");
	inputString = inputString.replaceAll(")", "_");
	return inputString;
}

module.exports.removeNewlinesAndUnderscores = removeNewlinesAndUnderscores;
module.exports.changeSpecialCharsToBlank = changeSpecialCharsToBlank;
module.exports.cleanUpTranslator = cleanUpTranslator;
module.exports.convertToUnderscores = convertToUnderscores;