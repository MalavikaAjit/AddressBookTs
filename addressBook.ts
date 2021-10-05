const input = require('readline-sync')
const address: any = require('./contact.json')
const fs = require('fs')
var json: any;
var dataObj: any;

class Person {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    mob: number;
    email: string

    personContact() {
        return "First Name: " + this.firstName + ", Last Name: " + this.lastName
            + "\nAddress: " + this.address
            + ", City: " + this.city + ", State: "
            + this.state + "\n Zip: " + this.zip
            + ", Phone Number: " + this.mob + ", Email: " + this.email;

    }
}
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

    }
    // fs.writeFileSync('./contact.json', json, 'utf8', (err) => {
    //     if (err) {
    //         console.log(`Error writing file: ${err}`);
    //     } else {
    //         console.log(`File is written successfully!`);
    //     }
    // });
    var person = []
    person.push(dataObj);
    json = JSON.stringify(person);
    fs.readFile('./contact.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            person = JSON.parse(data);
            person.push(dataObj);
            json = JSON.stringify(person, null, 2);
            fs.writeFileSync('./contact.json', json, 'utf8', (err) => {
                if (err) {
                    console.log(`Error writing file: ${err}`);
                } else {
                    console.log(`File is written successfully!`);
                }
            });
        }
    });
    console.log("Contact added!")
}

/****for displaying****/
function displayData() { //function to print the address
    fs.readFile('./contact.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }

    })

}

/****for deleting****/
function deleteData(deleteID) {
    var data = address
    const details = data
    console.log("details", details)
    const removeIndex = details.findIndex(item => item.id === deleteID);
    details.splice(removeIndex, 1);
    console.log("detailsremoved", details)
    fs.writeFileSync('contact.json', JSON.stringify(details, null, 2));
    console.log("Contact deleted!")
}

/*****for updating***/
function editData(editId) {
    console.log("editid", editId);
    var data = address
    const details = data
    let isAvailable = false;
    for (let i = 0; i < details.length; i++) {
        if (details[i].id === editId) {
            console.log('Update contact for id = ' + editId)
            let editAddress: string = input.question(' Enter the new address ')
            let editCity: string = input.question(' Enter the new city ')
            let editZip: number = input.questionInt(' Enter the new zip ')
            let editMob: number = input.questionInt('Enter the new mobile number')
            details[i].address = editAddress;
            details[i].city = editCity;
            details[i].zip = editZip;
            details[i].mob = editMob;
            isAvailable = true;
        }
    }
    if (isAvailable == true) {
        fs.writeFileSync('contact.json', JSON.stringify(details, null, 2));
        console.log("Contact updated!")
    }
    else {
        console.log("Entry not found.")
    }
}

/*****for searching***/
function searchData(city) {
    console.log("City searched: ", city);
    var data = address
    const details = data
    for (let i = 0; i < details.length; i++) {
        if (details[i].city.toLowerCase() == city.toLowerCase()) {
            console.log(details[i]);
        }
    }
}


export { input, address, Person, addData, displayData, deleteData, editData, searchData }