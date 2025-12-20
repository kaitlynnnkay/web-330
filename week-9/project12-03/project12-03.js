"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Kaitlyn Kelly
      Date:   12/19/25

      Filename: project12-03.js
*/

$("article > h2").click( e => {
  let heading = $(e.target); // store the target of the click event
  let list = $(heading.next()); // store the next sibling element of the heading variable
  let headingImage = $(heading).children("img"); // store the children of heading with the tag name "img"

  $(list).slideToggle(500); // slide the list up or down as it opens/closes

  // change the image from a + to a - depending on the current src of headingImage
  // if it is already a +, change it to - and vice versa
  if ($(headingImage).attr("src").includes("plus.png")) {
    $(headingImage.attr("src", "minus.png"));
  } else {
    $(headingImage.attr("src", "plus.png"))
  }

});




