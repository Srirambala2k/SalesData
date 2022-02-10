fileName = ".\\Files\\sales.xlsx";
const excelReader = require('./ExcelReader');
const mongoDataAccess= require('./MongoDBAccess')


// Read Excel File
var salesData = excelReader.ReadExcelFile(fileName);

console.log(salesData);

// Save sales data into Mongo DB
mongoDataAccess.SaveSalesData(salesData)

// Save sales data rows into Mongo DB
mongoDataAccess.SaveSalesDataRow(salesData)


