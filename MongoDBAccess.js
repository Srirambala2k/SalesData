const MongoClient = require("mongodb").MongoClient;
mongodbUrl = 'mongodb://localhost:27017'
const client = new MongoClient(mongodbUrl);
client.connect();
const database = client.db('Inventory');
const sales = database.collection('sales');
const salesRows = database.collection('sales_rows');

async function SaveSalesData(salesData){
    await sales.insertOne(salesData);    
}

async function SaveSalesDataRow(salesData){
    var salesData = salesData['SalesData']
    for (const row of salesData) {
        await salesRows.insertOne(row);
    }        
}

module.exports.SaveSalesData=SaveSalesData;
module.exports.SaveSalesDataRow=SaveSalesDataRow;
