const { dbCredentials } = require("../config/oncodb.config.js");
const { dataBaseQueryHelper } = require("databasequeryhelper.js");
const { removeNewlinesAndUnderscores, changeSpecialCharsToBlank, cleanUpTranslator, convertToUnderscores } = require("../utilities/parsingFunctions.js");

const events = require('events');
const readline = require('readline');
var qs = require('querystring');
const fs = require('fs');

async function testQuery(req, res){
  try {
    const resultOfQuery = await dbCredentials.query("SELECT * FROM GBM_TCGA_SPLICE LIMIT 3;");
    res.send(resultOfQuery);
    /*res.json({
    	data: resultOfQuery
    })*/
  } catch (error) {
    res.send([4, 5, 6]);
  }
}

async function getUiFields(req, res){
	if (req.method == 'POST') {
	    var body = '';

	    req.on('data', function (data) {
	        body += data;

	        if (body.length > 1e7)
	                request.connection.destroy();
	    });

	    const outputObject = {};
	    var currentFileContents = "";
	    var content = "";
	    var refname = "";

		req.on('end', function () {
	            var post = qs.parse(body);

	            const queryHelperMap = dataBaseQueryHelper(post["cancerName"]);
	            const clinicalMetadataResult = await dbCredentials.query(queryHelperMap["META"]["QUERY"]);
	            clinicalMetadataResult.fields.forEach((element) => {
	            	const fieldname = removeNewlinesAndUnderscores(element.name);
	            	outputObject["meta"][fieldname] = "";
	            });
	            
				fs.readdir(queryHelperMap["META"]["COLUMNS"], (err, files) => {
  					files.forEach(file => {
  						if(file == ".DS_Store"){break;}
    					var currentFile = queryHelperMap["META"]["COLUMNS"].concat("/").concat(file);
    					currentFileContents = fs.readFileSync(currentFile, 'utf-8');
    					currentFileContents.split(/\r?\n/).forEach(line =>  {
						  content = line.split("#");
						  refname = currentFile.substring(0, currentFile.length-4);
						  refname = changeSpecialCharsToBlank(refname);
						  outputObject["meta"][refname] = content;
						  break;
						});
  					});
				});

				fs.readdir(queryHelperMap["META"]["RANGE"], (err, files) => {
					files.forEach(file => {
						if(file == ".DS_Store"){break;}
						var currentFile = queryHelperMap["META"]["RANGE"].concat("/").concat(file);
						currentFileContents = fs.readFileSync(currentFile, 'utf-8');
						content = currentFileContents.split("#");
						refname = currentFile.substring(0, currentFile.length-4);
						refname = changeSpecialCharsToBlank(refname);
						outputObject["range"][refname] = content;
					});
				});

				const sigTranslater = {};
				const strNum = {};
				var sigTranslateFile = queryHelperMap["SIG"]["TRANSLATE"];
				var sigTCount = 0;
				currentFileContents = fs.readFileSync(sigTranslateFile, 'utf-8');
				currentFileContents.split(/\r?\n/).forEach(line =>  {
					if(sigTCount > 0){
						line = line.replaceAll("\n", "");
						line = line.replaceAll("\r", "");
						line = line.split("\t");
						var psiGet = line[1];
						var toSimple = line[2];
						inputString = cleanUpTranslator(inputString);
						sigTranslater[psiGet] = toSimple;
						sigTranslater[toSimple] = psiGet;
						strNum[(sigTCount-1)] = psiGet;
					}
					sigTCount += 1;
				})

				var sigFile = queryHelperMap["SIG"]["COLUMNS"];
				const currentFileContents = fs.readFileSync(sigFile, 'utf-8');
				currentFileContents = convertToUnderscores(currentFileContents);
				currentFileContents = currentFileContents.split("#");
				currentFileContents.shift();
				var sigFields = currentFileContents;
				currentFileContents = "";

				var startCount = sigTCount-1;
				var nonMatchers = [];

				for(let i = 0; i < sigFields.length; i++)
				{
					var found = false;
					for(let j = 0; j < strNum; j++)
					{
						if(sigFields[i] == strNum[j])
						{
							found = true;
							break;
						}
					}
					if(found){continue;}
					else{
						var nonMatcherAmount = nonMatchers.length;
						nonMatchers[nonMatcherAmount] = sigFields[i];
					}
				}

				for(let i = 0; i < nonMatchers.length; i++)
				{
					var strStrCount = strNum.length;
					strNum[strStrCount] = nonMatchers[i];
				}

				/*
				$output_arr["sig"] = $strnum;

				$numrows = $TABLE_DICT[$selected_cancer_type]["SPLC"]["ROWNUM"];
				$numsamples = $TABLE_DICT[$selected_cancer_type]["SPLC"]["COLNUM"];

				$output_arr["sigtranslate"] = $sigtranslater;
				$output_arr["qbox"]["columns"] = $numsamples;
				$output_arr["qbox"]["rows"] = $numrows;*/


	    });

	}

}

async function getSignatureList(req, res){
	console.log("not implemented");
}

async function getSelectedMetaDataUiFields(req, res){
	console.log("not implemented");
}

async function matchCoordinatesPreSubmission(req, res){
	console.log("not implemented");
}

async function matchGenesPreSubmission(req, res){
	console.log("not implemented");
}

async function fetchHeatmapData(req, res){
	console.log("not implemented");
}

async function fetchSingleUID(req, res){
	console.log("not implemented");
}

async function fetchGTEX(req, res){
	console.log("not implemented");
}

async function cbioportalCurlCommand(req, res){
	console.log("not implemented");
}

module.exports.testQuery = testQuery;
module.exports.getUiFields = getUiFields;
module.exports.getSignatureList = getSignatureList;
module.exports.getSelectedMetaDataUiFields = getSelectedMetaDataUiFields;
module.exports.matchCoordinatesPreSubmission = matchCoordinatesPreSubmission;
module.exports.matchGenesPreSubmission = matchGenesPreSubmission;
module.exports.fetchHeatmapData = fetchHeatmapData;
module.exports.fetchSingleUID = fetchSingleUID;
module.exports.fetchGTEX = fetchGTEX;
module.exports.cbioportalCurlCommand = cbioportalCurlCommand;

