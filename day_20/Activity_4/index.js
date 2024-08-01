// Task 3 - Create simple form that saves user input(e.g. name and email) to sessionStorage when submitted. Retreive and display the saved data on page load.
function displayUser() {
    const userDiv = document.getElementById("user");
    const user = JSON.parse(sessionStorage.getItem("user"));

    if(user){
        const name = document.createElement("h2");
        name.textContent = user.name;
        const email = document.createElement("h3");
        email.textContent = user.email;
        userDiv.append(name);
        userDiv.append(email);
    }
    // else{
    //     userDiv.firstElementChild.remove();
    //     userDiv.lastElementChild.remove();
    // }
}

displayUser();

function saveUser(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    const userObj = {
        name, email
    }
    
    sessionStorage.setItem("user", JSON.stringify(userObj));
    
}

document.getElementById('userForm').addEventListener('submit', function(e){
    e.preventDefault();
    saveUser();
    displayUser();
});


//Task 4 - Write a script to remove an item from sessionStorage. Log the sessionStorage content befre and after removal.
document.getElementById("btn").addEventListener("click", function(){
    console.log(user);
    sessionStorage.removeItem("user");
    displayUser();
})
