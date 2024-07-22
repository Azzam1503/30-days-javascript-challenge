//Task 1 - Add a click event listener to a button that changes the text content of a paragraph
const doc  = document.getElementById("p1");
document.getElementById('btn').addEventListener('click', function(){
    doc.innerHTML = "Text changed"
})



//Task 2 - Add double click event listener to an image that toggle its visibility

const image = document.getElementById('image');

image.addEventListener('dblclick', function() {
    image.classList.toggle('hidden');
});