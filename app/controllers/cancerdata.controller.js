const { dbCredentials } = require("../config/oncodb.config.js");
const { dataBaseQueryHelper } = require("databasequeryhelper.js");
var qs = require('querystring');

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

		req.on('end', function () {
	            var post = qs.parse(body);
	            const queryHelperMap = dataBaseQueryHelper(post["cancerName"])
	            // use post['blah'], etc.
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

