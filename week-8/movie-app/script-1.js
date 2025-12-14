/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Kaitlyn Kelly
  Date: 12/14/25
  Filename: script-1.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  { title: 'Donnie Darko', director: 'Richard Kelly', releaseYear: '2001', synopsis: 'After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.' },
  { title: 'Titanic', director: 'James Cameron', releaseYear: '1997', synopsis: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.' },
  { title: 'The Devil Wears Prada', director: 'David Frankel', releaseYear: '2006', synopsis: "With an aspiration to become a journalist, Andy, a smart but sensible young graduate, travels to New York. She starts working as an assistant to one of the city's biggest high fashion magazine editors, the cynical Miranda Priestly." },
];

function fetchMovie(title) {
  // Implement this function
  // return a promise that either resolves by finding a match between the user's input and the movies array,
  // or rejects when a match is not found
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // loop through movies array to find a match
      // convert the input and array titles to lowercase to prevent errors in matching
      for (let i = 0; i < movies.length; i++) {
        if (title.toLowerCase() === movies[i].title.toLowerCase()) {
          resolve(movies[i]);
          return;
        }
      }
    reject(`The movie you've entered cannot be found.`);
    }, 5000);
  });

}

async function displayMovie(event) {
  // Implement this function
  // prevent page from reloading when input submitted
  event.preventDefault();

  // save user's input
  const title = document.getElementById("title-input").value;

  try {
    // wait for fetchMovie function to finish running
    const result = await fetchMovie(title);

    // update DOM with movie information if found
    document.getElementById("movie-title").textContent = result.title;
    document.getElementById("movie-director").textContent = result.director;
    document.getElementById("movie-year").textContent = result.releaseYear;
    document.getElementById("movie-synopsis").textContent = result.synopsis;
    document.getElementById("error-message").textContent= "";
  } catch(error) {
    // if no match is found, make sure all movie information is blank and display only the reject message
    document.getElementById("movie-title").textContent = "";
    document.getElementById("movie-director").textContent = "";
    document.getElementById("movie-year").textContent = "";
    document.getElementById("movie-synopsis").textContent = "";
    document.getElementById("error-message").textContent= error;
  }
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);