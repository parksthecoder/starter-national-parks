// entire HTML document logged to console
console.log(document);
// —> querySelector will traverse the DOM, starting from the root, and find the first <h1> element
const heading = document.querySelector("h1");
console.log(heading);

const classValue = document.querySelector(".value");
console.log(classValue);

const classArea = document.querySelector(".area-display h3");
console.log(classArea);

const divDescendentOfClassStat = document.querySelector(".stat div");
console.log(divDescendentOfClassStat);

const classHello = document.querySelector(".hello");
console.log(classHello);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);


//////
// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}
// Or you can use a simple for loop to iterate over the NodeList, like this:
for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
//   console.log(element);
}


////// create a list of all the ratings for the parks
const ratings = document.querySelectorAll(".rating-display .value");
console.log(ratings)
// iterate over ratings Nodelist using .values() method
for(let element of ratings.values()) {
    console.log(element)
}

////// create a list of all the areas(size) for the parks
const areas = document.querySelectorAll(".area-display .value");
console.log(areas);
// iterate over areas Nodelist using for loop
for(let i = 0; i < areas.length; i++) {
    const element = areas[i];
    console.log(element)
}


////// MODIFY / UPDATING WITH THE DOM
// may need to reload page 
// create a node list of the descriptions of each park
const descriptions = document.querySelectorAll(".description-display")

// console.log(descriptions);

for(let element of descriptions.values()) {
    console.log(element)
}

// use innerText HTMLElement to log the innerText of each description element
for(let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content)
}

// use innerText HTMLElement to log the innerText of each description
// and truncate(...) over 250 characters using slice() method
for(let desc of descriptions.values()) {
    let content = desc.innerText;

    if(content.length > 250) {
        // using the slice() method to truncate at 250 characters of length
        content = content.slice(0, 250);
        // content = content + "...";      --> Not click able
        // using innterHTML is clickable
        content = content + `<a href="#">...</a>`
    }
    // simple log to console will show the truncated(...) descriptions in console
    console.log(content)
    // this will change/update the ACTUAL page to include the truncated(...) descriptions
    // desc.innerText = content;
    //
    desc.innerHTML = content;
}



////// Changing the CSS style using the style property WITH THE DOM
// style property -> object that represents elements CSS styling 

const ratingz = document.querySelectorAll(".rating-display .value")
// innterText returns a string so we need to use parseFloat to get a number
for(let rating of ratingz) {
    let ratingValue = parseFloat(rating.innerText);

    // bold and light green any ratingValue over 4.7 (Grand Canyon will be bolded/green)
    if(ratingValue > 4.7) {
        rating.style.fontWeight = "bold";
        rating.style.color = "#3ba17c";
    }
}


/// Using classList property to add/remove a CSS class from an element instead of .style
/// created .high-rating class in style.css 
// then if rating > 4.7 give it this class instead of value class
for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  // adding .high-rating class from style.css and removing initial .value class
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
}  


////// Creating HTMLElements on the DOM
const parks = document.querySelectorAll(".park-display");

const numberOfParks = parks.length;
//create a new element and add innterText and .classList for styling
const newElement = document.createElement("div");

newElement.innerText = `${numberOfParks} exciting parks to visit!`;

// created a CSS class for this newElement
newElement.classList.add("header-statement");

// add newly created newElement to the DOM by appendChild() to the header element
const header = document.querySelector("header");
header.appendChild(newElement)







////// Button with addEventListener() method
const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });
// event object holds info you can use while handling the event
  // target property -> check console to see which element was targeted by event
  button.addEventListener("click", (event) => {
    console.log(event.target);
  });
///////
//
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
// addEventListener for all buttons
// this works but we don't know which button is targeted - they all return same info
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});
// targeting the parentNode we can see which button in which section was clicked
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target.parentNode);
    });
  });
// changing the section color when button clicked
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });


  ////// adding a name-sorter and a rating-sorter
// added <div> with name-sorter and rating-sorter to HTML

// Add an event listener
// using preventDefault() stops link clicking from default reloading page
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


////// rating-sorter
const ratingSorter = document.querySelector("#rating-sorter")

ratingSorter.addEventListener("click", (event) => {
    event.preventDefault();

    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the Nodelist of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main element
    main.innerHTML = "";

    // 4. Create an array -> Array.from takes an array like structure and constructs Array
    const parksArray = Array.from(parksList);

    // 5. Sort the array
parksArray.sort((parkA, parkB) => {
    const ratings = document.querySelectorAll(".rating-display .value")

    for (let rating of ratings) {
        let ratingValue = parseFloat(rating.innerText)

            // the park names are located in the innerText of <h2> element
    const parkARating = parkA.querySelector(".rating-display .value").innerText;
    const parkBRating = parkB.querySelector(".rating-display .value").innerText;
    if (parkARating < parkBRating) {
      return -1;
    } else if (parkARating > parkBRating) {
      return 1;
    } else {
      return 0;
    }
    }

  });
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
})



console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");







