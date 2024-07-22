//Task 9 - Add a click event listener to a list that logs the text content of the clicked list item using event delegation
const list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if(event.target.nodeName == 'LI'){
    console.log(event.target.textContent)
  }
})

//Task 10 - Add a click event listener to a parent element that listens for events from a dynamically added child elements

const btn = document.getElementById('btn');
const parent = document.getElementById('parent');


function addItem() {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
}


btn.addEventListener('click', addItem);

parent.addEventListener('click', function(event) {
  console.log(event.target.parentNode)
    if (event.target && event.target.nodeName === 'LI') {
     
        console.log('Clicked list item text:', event.target.textContent);
    }
});