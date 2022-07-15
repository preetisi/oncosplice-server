module.exports = app => {
    const datasets = require("../controllers/cancerdata.controller.js");

    var router = require("express").Router();

    // Retrieve all Datasets
    router.post("/", datasets.testQuery);
    app.use('/api/datasets', router);

};