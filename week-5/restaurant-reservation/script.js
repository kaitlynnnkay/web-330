/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Kaitlyn Kelly
  Date: 11/21/25
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 4, isReserved: false},
  { tableNumber: 2, capacity: 4, isReserved: true},
  { tableNumber: 3, capacity: 2, isReserved: false},
  { tableNumber: 4, capacity: 2, isReserved: false},
  { tableNumber: 5, capacity: 8, isReserved: false},
  { tableNumber: 6, capacity: 8, isReserved: false},
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here

  // declare variable to be used for confirming table number and reservation status
  let requestedTable;

  for (let i = 0; i < tables.length; i++)
    if (tables[i].tableNumber === tableNumber) {
      requestedTable = tables[i]; // store object from array that matches tableNumber
    }

  if (requestedTable.isReserved === false) {
    // reserve requested table if table available
    requestedTable.isReserved = true;
    // wait designated time then supply success message
    setTimeout(() => {
      callback(`Success! Table number ${tableNumber} has been reserved.`);
    }, time);
  } else {
    // if requested table not available, immediately supply an error message
    callback(`We're sorry. Table number ${tableNumber} is not available.`);
  }
}

// callback function to update page with either success or error message
function reservationConfirmation(message) {
  document.getElementById("message").textContent = message;
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault();
    let tableNumber = Number(document.getElementById("tableNumber").value); // store the table number entered into the form
    reserveTable(tableNumber, reservationConfirmation, 5000);
  });
