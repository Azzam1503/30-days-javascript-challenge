//Task 7 Add a submit event listener to a form that prevents the default submission and logs the form data to the console
const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form)
    const formData = new FormData(form);
    formData.forEach((key, value) =>{
        console.log(key, value)
    })
});

const elem = document.getElementById('btn');
elem.addEventListener('click', function(){
    const elem2 = document.getElementById('name');
    console.log(elem2.value)
})


//Task 8 Add a change event listener to a select dropdown that displays the sleceted value in a paragragh.
const selectDropdown = document.getElementById('mySelect');
console.log(selectDropdown)
const para = document.getElementById('para');

selectDropdown.addEventListener('change', function(){
    para.textContent = 'Selected value: ' + selectDropdown.value;
})
