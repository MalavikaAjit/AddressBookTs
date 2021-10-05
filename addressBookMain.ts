import {addData,displayData,deleteData,editData,searchData} from './addressBook'
const path = require('./addressBook');
let input = require('readline-sync')

function manageData() {
    // var loop:Boolean = true;
    // while (loop) {
    console.log('1 : Add contact ');
    console.log('2 : Display contact ');
    console.log('3 : Delete contact ');   
    console.log('4 : Edit contact '); 
    console.log('5 : Search contact by city name '); 
    console.log('6 : Exit AddressBook')
    let ch = input.questionInt(' Enter your choice ')
    switch (ch) {
        case 1:
            addData();
            break;
        case 2:
            displayData();
            break;
        case 3:
            let deleteID:number = input.questionInt('Enter the id to delete the contact ')
            deleteData(deleteID);
            break; 
        case 4:
            let editId:number = input.questionInt('Enter the id to edit the contact ')
            editData(editId);
            break;   
        case 5:
            let searchCity:string = input.question('Enter the city to search ')
            searchData(searchCity);
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
