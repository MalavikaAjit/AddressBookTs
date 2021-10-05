"use strict";
exports.__esModule = true;
exports.searchData = exports.editData = exports.deleteData = exports.displayData = exports.addData = exports.Person = exports.address = exports.input = void 0;
var input = require('readline-sync');
exports.input = input;
var address = require('./contact.json');
exports.address = address;
var fs = require('fs');
var json;
var dataObj;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.personContact = function () {
        return "First Name: " + this.firstName + ", Last Name: " + this.lastName
            + "\nAddress: " + this.address
            + ", City: " + this.city + ", State: "
            + this.state + "\n Zip: " + this.zip
            + ", Phone Number: " + this.mob + ", Email: " + this.email;
    };
    return Person;
}());
exports.Person = Person;
function addData() {
    var personObj = new Person();
    personObj.id = input.questionInt(' enter the id no ');
    personObj.firstName = input.question(' enter the first name ');
    personObj.lastName = input.question(' enter the last name ');
    personObj.address = input.question(' enter the address ');
    personObj.city = input.question(' enter the city');
    personObj.state = input.question(' enter the state ');
    personObj.zip = input.questionInt(' enter the zip code ');
    personObj.mob = input.questionInt(' enter the phone no ');
    personObj.email = input.question(' enter the email id ');
    dataObj = {
        "id": personObj.id,
        "first name": personObj.firstName,
        "last name": personObj.lastName,
        "address": personObj.address,
        "city": personObj.city,
        "state": personObj.state,
        "zip code": personObj.zip,
        "phone no": personObj.mob,
        "email": personObj.email
    };
    var person = [];
    person.push(dataObj);
    json = JSON.stringify(person);
    // fs.writeFileSync('./contact.json', json, 'utf8', (err) => {
    //     if (err) {
    //         console.log(`Error writing file: ${err}`);
    //     } else {
    //         console.log(`File is written successfully!`);
    //     }
    // });
    fs.readFile('./contact.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            person = JSON.parse(data);
            person.push(dataObj);
            json = JSON.stringify(person, null, 2);
            fs.writeFileSync('./contact.json', json, 'utf8', function (err) {
                if (err) {
                    console.log("Error writing file: " + err);
                }
                else {
                    console.log("File is written successfully!");
                }
            });
        }
    });
    console.log("Contact added!");
}
exports.addData = addData;
function displayData() {
    fs.readFile('./contact.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
}
exports.displayData = displayData;
function deleteData(deleteID) {
    // console.log("id", id);
    // var addressObj =address;
    // let isAvailable = false;
    // for (let i = 0; i < addressObj.person.length; i++) { //loop to find the id and remove
    //     if (addressObj.person[i].id === 4) {
    //         console.log("hhaha",addressObj.person[i].id)
    //         isAvailable = true;
    //         addressObj.person.splice(i, 1);
    //     }
    //     else {
    //         isAvailable = false;
    //     }
    // }
    var data = address;
    var details = data;
    console.log("details", details);
    var removeIndex = details.findIndex(function (item) { return item.id === deleteID; });
    // // remove object
    details.splice(removeIndex, 1);
    console.log("detailsremoved", details);
    fs.writeFileSync('contact.json', JSON.stringify(details, null, 2));
    console.log("Contact deleted!");
    // console.log("address",addressObj)
    // var output =  addressObj.person.filter(element => element.id == id);
    // console.log("out",output);
    // var keys = "id";
    // delete addressObj.person[keys]
    // const removeIndex = addressObj.person.findIndex( item => item.id === 4 );
    // console.log(removeIndex)
    // var fs = require('fs');
    // addressObj.person.splice( removeIndex, 1 );
    // for (var key in obj) {
    //   if (obj.hasOwnProperty(key)) {
    //     var val = obj[key];
    //     console.log(val);
    //   }
    // }      
    // fs.readFile('./contact.json', 'utf8', function readFileCallback(err, dataObj) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("yes");
    //         obj1 = JSON.parse(dataObj);
    //         console.log(obj1)
    //          const search1 = item => item.id === id;
    //          console.log("selected",search1)
    //          console.log(obj1.findIndex(search1));
    //         // var index = obj.findIndex(item => item.id=="3");
    //         // console.log("index",index)
    //         // var val = id
    //         // var index = obj.findIndex(function(item, i){
    //         //   return item.name === val
    //         // });
    //         // console.log(index);
    //         //      for (const key in obj){
    //         // if(obj.hasOwnProperty(key)){
    //         //   console.log(`${key} : ${obj[key]}`)
    //         // }
    //         // let isAvailable = false;
    //         // console.log("json",obj)
    //         // for (let i = 0; i < JSON.parse(obj).length; i++) { 
    //         //     console.log("particular id",JSON.parse(obj))
    //         //     if (datas.id === id) {
    //         //         isAvailable = true;
    //         //         json.personObj.id.splice(i, 1);
    //         //     }
    //         //     else {
    //         //         isAvailable = false;
    //         //     }
    //         // }
    //     }
    // })
}
exports.deleteData = deleteData;
function editData(editId) {
    console.log("editid", editId);
    var data = address;
    var details = data;
    var isAvailable = false;
    for (var i = 0; i < details.length; i++) {
        if (details[i].id === editId) {
            console.log('Update contact for id = ' + editId);
            var editAddress = input.question(' Enter the new address ');
            var editCity = input.question(' Enter the new city ');
            var editZip = input.questionInt(' Enter the new zip ');
            var editMob = input.questionInt('Enter the new mobile number');
            details[i].address = editAddress;
            details[i].city = editCity;
            details[i].zip = editZip;
            details[i].mob = editMob;
            isAvailable = true;
        }
    }
    if (isAvailable == true) {
        fs.writeFileSync('contact.json', JSON.stringify(details, null, 2));
        console.log("Contact updated!");
    }
    else {
        console.log("Entry not found.");
    }
}
exports.editData = editData;
function searchData(city) {
    console.log("City searched: ", city);
    var data = address;
    var details = data;
    for (var i = 0; i < details.length; i++) {
        if (details[i].city.toLowerCase() == city.toLowerCase()) {
            console.log(details[i]);
        }
    }
}
exports.searchData = searchData;
