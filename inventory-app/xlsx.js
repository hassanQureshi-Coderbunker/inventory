const XLSX = require('xlsx');
const fs = require('fs');


var workbook = XLSX.readFile('./Spreadsheet.xlsx');

var first_sheet_name = workbook.SheetNames[0];
var address_of_cell = 'A1';

/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];

const toJson = XLSX.utils.sheet_to_json(worksheet);

fs.writeFile("public/inventory.json", JSON.stringify(toJson, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
