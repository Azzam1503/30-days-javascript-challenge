//Task 5 Add a keydown to an input field that logs the key pressed to the console
const input = document.querySelectorAll('input');
input[0].addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key)
})

//Task 6 Add a keyup event listener to an input filed that displays the current value in a paragraph
const displayPara = document.getElementById('displayPara');
input[1].addEventListener('keyup', function(e){
    displayPara.textContent = input[1].value;
})