const { dbCredentials } = require("../config/oncodb.config.js");

async function testQuery(req, res){
  try {
    const resultOfQuery = await dbCredentials.query("SELECT * FROM GBM_TCGA_SPLICE LIMIT 3;");
    console.log(resultOfQuery.rows);
  } catch (error) {
    console.error(error);
  }
}

async function getUiFields(req, res){
	console.log("not implemented");
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

