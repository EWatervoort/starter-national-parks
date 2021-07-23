
console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");

// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);


// Function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkAName = parkA.querySelector(".stats .rating-display .value").innerText;
  const parkBName = parkB.querySelector(".stats .rating-display .value").innerText;
  if (parkAName < parkBName) {
    return 1;
  } else if (parkAName > parkBName) {
    return -1;
  } else {
    return 0;
  }
};

// Function for handling the `ratingSorter` click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector('main');

  // 2. Get the list of parks
  const parks = main.querySelectorAll('.park-display');

  // 3. Empty the main
  main.innerHTML= '';

  // 4. Create an array
  const parksArray = Array.from(parks);

  // 5. Sort the array
  parksArray.sort(sortByRating)

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park)
  })
};

// Select the `RatingSorter` link
const ratingSorter = document.querySelector("#rating-sorter");

// Add an event listener
ratingSorter.addEventListener("click", ratingSorterClickHandler);