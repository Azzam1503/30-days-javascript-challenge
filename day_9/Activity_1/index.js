//Task 1 - Select an HTML element by its ID and change its text content

const doc  = document.getElementById("heading");
doc.innerHTML = "Hey! there"



//Task 2 - Selecnt an HTML element by its class and change its background color.

const para = document.querySelector(".para");
para.style = "background-color: red; font-size: 3rem;";