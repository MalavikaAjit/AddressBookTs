"use strict";
exports.__esModule = true;
var addressBook_1 = require("./addressBook");
var path = require('./addressBook');
var input = require('readline-sync');
function manageData() {
    // var loop:Boolean = true;
    // while (loop) {
    console.log('1 : Add contact ');
    console.log('2 : Display contact ');
    console.log('3 : Delete contact ');
    console.log('4 : Edit contact ');
    console.log('5 : Search contact by city name ');
    console.log('6 : Exit AddressBook');
    var ch = input.questionInt(' Enter your choice ');
    switch (ch) {
        case 1:
            (0, addressBook_1.addData)();
            break;
        case 2:
            (0, addressBook_1.displayData)();
            break;
        case 3:
            var deleteID = input.questionInt('Enter the id to delete the contact ');
            (0, addressBook_1.deleteData)(deleteID);
            break;
        case 4:
            var editId = input.questionInt('Enter the id to edit the contact ');
            (0, addressBook_1.editData)(editId);
            break;
        case 5:
            var searchCity = input.question('Enter the city to search ');
            (0, addressBook_1.searchData)(searchCity);
            break;
        // case 6:
        //     loop = false;
        // //    break;
        default:
            console.log("invalid");
        // }
    }
}
manageData();
