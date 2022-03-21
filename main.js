// let admins = ["Ahmed", "Osama", "Sayed"];
// let employees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// document.write(`<div>We Have ${admins.length} Admins</div>`)
// document.write(`<hr>`)


// let WN = 0; // this is the worker number
// for (let LR = 0 ; LR < admins.length; LR++ ) {

//     document.write(`<div> ${admins[LR]} </b> </div>`)
//    let  letter = admins[LR][0];
//     document.write (`<h3>Team Member: </h3>`)


//     for (let worker=0;worker<admins.length; worker++) {
// document.write(`-${++WN} ${employees[worker]} <br>`);
//     }
//     WN = 0;
//     document.write(`<hr>`);
// }

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// let admins_count = 0;
// myAdmins.length = myAdmins.indexOf("Stop");
// document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

// document.write(`<hr/>`);
// let teamN = 0;
// let workerN = 0;
// for (let x = 0; x <myAdmins.length; x++){
//   teamN++
//   document.write(`<div>The admin For Team ${teamN} is ${myAdmins[x]}</div>`);
//   letter = myAdmins[x][0];
//   document.write(`<h3>Team Members:</h3>`);
//   for (let y = 0; y <myEmployees.length; y++){
//       //ternary operator                 ///////////////   true      ////////////////////        //false//
//     myEmployees[y].startsWith(letter) ? document.write(`<p>- ${++workerN} ${myEmployees[y]}</p>`) : y = y
//      //ternary operator
//   }
//   workerN = 0
//   document.write(`<hr/>`);
// }

// function showDeatails (userName) {
// // typeof userName ==="String" ? alert(`hello my name is ${userName}`): alert(errorr)
// typeof userName==="string" ? alert(`hello ${userName}`):alert(false);
// }
// showDeatails("osama")
