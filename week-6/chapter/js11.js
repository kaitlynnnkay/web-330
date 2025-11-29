"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   Kaitlyn Kelly
   Date:     11/25/25

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let stories = document.getElementById("stories");
   let news = document.getElementById("news");
   let sInput = document.getElementById("sInput");
   let sButton = document.getElementById("sButton");
   let suggestBox = document.getElementById("suggestBox");

   // Create a request object
   const xhr = new XMLHttpRequest(); // create object for sending requests to the server

   // Handle the changing request state
   xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // test is response from the server is complete
      if (xhr.status >= 200 && xhr.status < 300) { // test if the connection is successful
        // manage the response
        stories.innerHTML = xhr.responseText;
      } else {
        console.log("Request failed: " + xhr.statusTest); // if not successful connection, log the error message
      }
    }
   }

   // Open the request and send it
   xhr.open("get", "commentary.html"); // access the commentary.html file on the server with the GET method
   xhr.send(null); // do not send anything to the server

   // Retrieve archived articles from the web server
   sButton.onclick = () => {
    fetch("archives.pl?skey=" + encodeURIComponent(sInput.value)) // location of the fetch resource and the encoded keyword text as a query string
    .then( response => {
      if (response.ok) { // if reponse is ok, parse and return the response text
        return response.text();
      } else { // otherwise, return an error message
        return "Unable to retrieve commentary";
      }
    })
    .then ( comtext => stories.innerHTML = comtext ) // then display the parsed text in the stories element
    .then (() => {
      let topic = sInput.value.toLowerCase();
      getGIF(topic);
    })
    .catch (stores.innerHTML = "Network Failure"); // catch any rejected responses
   };

   // Fetch current headlines from the web server
   fetch("headlines.xml") // fetch the xml doc from server
   .then (response => response.text()) // parse the text from the server response
   .then (str => new DOMParser() .parseFromString(str, "text/xml")) // convert the parsed text into a dom object

   // write the XML content to HTML
   .then (dom => {
    let items = dom.querySelectorAll("item");

    // loop through each story item
    for (let story of items) {
      // write the story content and append it to the page
      let headline = story.children[0].textContent;
      let link = story.children[1].textContent;
      let summary = story.children[2].textContent;
      let htmlCode = `<article><h2><a href="${link}">${headline}</a></h2>
                      <p>${summary}</p></article>`;

      news.insertAdjacentHTML("beforeend", htmlCode);
    }
   });

   // suggest keywords as text is entered in the search box
   sInput.onkeyup = () => {
    if (sInput.value === "") {
      suggestBox.style.display = "none";
    } else {
      // retrieve a list of matching keywords
      fetch("keywords.pl?suggest=" + encodeURIComponent(sInput.value))
      .then (response => response.json())
      // build the suggestion box
      .then(keywords => {
        suggestBox.innerHTML = "";
      if (keywords.matches.length === 0) {
        // no suggestions to display
        suggestBox.style.display = "none";
      } else {
        // display suggestions
        suggestBox.style.display = "block";
        // create a list of suggestions
        for (let word of keywords.matches) {
          let suggestion = document.createElement("div");
          suggestion.textContent = word;
          suggestBox.appendChild(suggestion);

          // add suggestion to search box when clicked
          suggestion.onclick = () => {
            sInput.value = word;
            suggestBox.style.display = "none";
            sButton.click();
          }
        }
      }
    })
   }
  }
}

// fetch a GIF for a given topic from giphy.com
function getGIF(topic) {
  const url = "https://api.giphy.com/v1/gifs/random";
  const key ="iweUIfLgnS4bgycGc5qRhozQp3oHfibW";
  fetch(`${url}?api_key=${key}&tag=${topic}&limit=1&rating=pg`)
  .then(response => response.json())
  .then(obj => {
    let newImg = document.createElement("img");
    newImg.src = obj.data.images.fixed_height.url;
    stories.appendChild(newImg)
  })
}