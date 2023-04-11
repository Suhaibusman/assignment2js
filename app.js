//q#1
/* function createAdder(num) {
    return function(x) {
      return x + num;
    }
  }
const add5 = createAdder(5);
const result = add5(10);
document.writes(result); */


//q#2
/* //Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested. */
/* function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)); */


  //q#3
  /* function addNewParagraph(text) {
    const newParagraph = document.createElement('p');
  
    newParagraph.textContent = text;
  
    const body = document.querySelector('body');
  
    body.appendChild(newParagraph);
  } */
//q#4
  /* function addNewListItem(text) {
    // Create a new list item element
    const newListItem = document.createElement('li');
  
    // Set the text content of the list item element
    newListItem.textContent = text;
  
    // Get the unordered list element of the document
    const list = document.querySelector('ul');
  
    // Add the list item element to the unordered list
    list.appendChild(newListItem);
  }


 */
//q#5
/* function changeBackgroundColor(element, color) {
    // Set the background color of the element
    element.style.backgroundColor = color;
  } */

  //q#6
  /* function saveObjectToLocalStorage(key, object) {
    // Convert the object to a JSON string
    const objectString = JSON.stringify(object);
  
    // Save the JSON string to localStorage
    localStorage.setItem(key, objectString);
  } */

  //q#7
/*   function getObjectFromLocalStorage(key) {
    // Get the JSON string from localStorage
    const objectString = localStorage.getItem(key);
  
    // If the JSON string is null, return null
    if (objectString === null) {
      return null;
    }
  
    // Parse the JSON string and return the object
    const object = JSON.parse(objectString);
    return object;
  } */
  //q#8
/*   function saveObjectPropertiesToLocalStorage(object) {
    // Save each property of the object to localStorage
    Object.keys(object).forEach((key) => {
      const value = object[key];
      localStorage.setItem(key, JSON.stringify(value));
    });
  
    // Retrieve the saved properties and return them as a new object
    const retrievedObject = {};
    Object.keys(object).forEach((key) => {
      const valueString = localStorage.getItem(key);
      if (valueString !== null) {
        retrievedObject[key] = JSON.parse(valueString);
      }
    });
    return retrievedObject;
  } */
  