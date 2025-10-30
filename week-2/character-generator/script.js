/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Kaitlyn Kelly
  Date: 10/30/25
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function

  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getCharacterClass() {
      return characterClass;
    }
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values

  let name = document.getElementById("heroName").value; // name equals text entered into input box
  let genderIndex = document.getElementById("heroGender").selectedIndex; // retrieve gender selection
  let gender = document.getElementById("heroGender").options[genderIndex].value; // gender equals the selected gender
  let characterClassIndex = document.getElementById("heroClass").selectedIndex; // retrieve class selection
  let characterClass = document.getElementById("heroClass").options[characterClassIndex].value; // gender equals the select gender


  // TODO: Create character

  const character = createCharacter(name, gender, characterClass);


  // TODO: Display character information

  document.getElementById("characterOutput").innerHTML = "<p>Your character is a " + gender + " " + characterClass + " named " + name + "!</p>"; // output created character specs on page

  // Just for visuals - Change padding of characterOutput div once text is displayed
  document.getElementById("characterOutput").style.padding = "15px";
});