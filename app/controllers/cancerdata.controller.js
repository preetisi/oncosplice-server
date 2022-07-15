const { dbCredentials } = require("../config/oncodb.config.js");

async function testQuery(req, res){
  try {
    const resultOfQuery = await dbCredentials.query("SELECT * FROM GBM_TCGA_SPLICE LIMIT 3;");
    console.log(resultOfQuery.rows);
  } catch (error) {
    console.error(error);
  }
}

module.exports.testQuery = testQuery;