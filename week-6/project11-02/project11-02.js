"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Kaitlyn Kelly
      Date:   11/29/25

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
 let codeValue = postalCode.value; // variable to store postal code entry from input
 let countryValue = country.value; // variable to country entry from input
 place.value = ""; // set place value to an empty string
 region.value = ""; // set region value to an empty string

 fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`) // fetch the country and postal code
 // parse to json
 .then(response => response.json())
 .then( (json) => {
    place.value = json.places[0]["place name"];
    region.value = json.places[0]["state abbreviation"];
 })
 .catch((error) => console.log(error)); // write error to console log if response is rejected
}




