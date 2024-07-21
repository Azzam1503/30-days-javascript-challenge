//Task 5 - Select and HTML element and reomve it from the DOM.
const elem = document.getElementById("remove");
elem.remove();

//Task 6 - Remove the last child of a specific HTML element.
const parent = document.querySelector('div');
parent.removeChild(parent.lastElementChild);
