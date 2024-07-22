//Task 3 - Add a mouseover event listener to an elemen that changes its backgroudn color.
const div1 = document.getElementById('div-1');
div1.addEventListener('mouseover', () =>{
  div1.style.backgroundColor = 'green';  
})


//Task 4 Add a mouseout event listener to an element that resets its background color.
div1.addEventListener('mouseout', () =>{
    div1.style.backgroundColor = '';
})