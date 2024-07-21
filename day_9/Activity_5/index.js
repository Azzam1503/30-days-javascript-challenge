//Task 9 - Add a click event listener to a button that changes the text content of a paragraph
const para = document.querySelectorAll('p');
const btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
  para[0].innerText = "Text chnaged after clicking the button";
})

//Task 10 Add a mouseover event listener to an element that chagnes its border color.
const heading = document.querySelector('h1');
heading.addEventListener('mouseover', function(){
  heading.style = 'border-style: solid; border-color: red'
});

heading.addEventListener('mouseout', function(){
  heading.style = 'background-color: none'
})