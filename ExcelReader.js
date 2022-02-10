// Ref: https://www.geeksforgeeks.org/how-to-read-and-write-excel-file-in-node-js/

const reader = require('xlsx')

//Read Excel file content and return into Json data
function ReadExcelFile(fileName){
    const file = reader.readFile(fileName);
    let data = [];
    const jsonData = reader.utils.sheet_to_json(file.Sheets['Sheet1']);
    jsonData.forEach((res) => {
        data.push(res);
    });

    return {"SalesData": data};
}

module.exports.ReadExcelFile = ReadExcelFile;