
// const submitHandler = (event) => {
//   event.preventDefault();
//   // #name-input is an id for the label for the form -> extracting the value inputed using .value
//   const parkName = document.querySelector("#name-input").value;
//   console.log(parkName);

//   console.log("The form was submitted");
// };

// multiple ways to get the data 
// FormData populated with forms data in key-value pairs 

const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  // using the .get method with formData to extract the name value
  const name = formData.get("name")
  console.log(name)
};



const main = () => {
  // Get the form element
  const form = document.querySelector("#park-form");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);




