/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Kaitlyn Kelly
  Date: 12/7/25
  Filename: chefs-complete.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  { name: 'Kaitlyn', specialty: 'Spaghetti', weakness: 'Chopping', restaurantLocation: 'Bellevue, NE' },
  { name: 'Nick', specialty: 'Fried Frice', weakness: 'Cleanliness', restaurantLocation: 'Bellevue, NE' },
  { name: 'DJ', specialty: 'Eating', weakness: "Cooking (He's a baby)", restaurantLocation: "None (Again, he's a baby)" },
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a 2 second delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chef1Info = chefs[0]; // store the first chef object
      if (Math.random() < 0.4) { // fail 40% of the time
        reject("Failed to retrieve information about this chef."); // rejection reason
      } else {
        resolve(chef1Info); // resolve by "retrieving" the stored info from the first chef object
      }
    }, 2000);
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a 3 second delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chef2Info = chefs[1]; // store the second chef object
      if (Math.random() < 0.4) { // fail 40% of the time
        reject("Failed to retrieve information about this chef."); // rejection reason
      } else {
        resolve(chef2Info); // resolve by "retrieving" the stored info from the second chef object
      }
    }, 3000);
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a 5 second delay
return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chef3Info = chefs[2]; // store the third chef object
      if (Math.random() < 0.4) { // fail 40% of the time
        reject("Failed to retrieve information about this chef."); // rejection reason
      } else {
        resolve(chef3Info); // resolve by "retrieving" the stored info from the third chef object
      }
    }, 5000);
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then((results) => {
  results.forEach((result, index) => {
    const element = document.getElementById(`chef${index + 1}`); // store the chef's div element for each iteration

    if (result.status === "fulfilled") {
      const chef = result.value;
      element.innerHTML = `
        <h2>Name:</h2>
        <p>${chef.name}</p>
        <h2>Specialty:</h2>
        <p>${chef.specialty}</p>
        <h2>Weakness:</h2>
        <p>${chef.weakness}<p>
        <h2>Restaurant Location:</h2>
        <p>${chef.restaurantLocation}</p>
        `; // show the chef information in the corresponding chef div
    } else if (result.status === "rejected") {
      element.innerHTML = `
        <h2>Error:</h2>
        <p>${result.reason}</p>
        `; // show rejection reason in the failed chef div
    }
  });
});