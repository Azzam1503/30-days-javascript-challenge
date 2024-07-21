//Task 3 -Create a new div element with some text content and append it to the body
const doc = document.querySelector('body');
const node = document.createElement('div');
const newNode = doc.appendChild(node);
newNode.innerHTML = "This is the new text for the new node";

//Task 4 - Create a new li elment and aa it an existing ul list

const ul = document.createElement('ul');
ul.innerHTML = "Days in a week";
doc.append(ul);
const listItem1 = document.createElement("li");
listItem1.innerHTML = "Sundy";
const listItem2 = document.createElement("li");
listItem2.innerHTML = "Monday";
const listItem3 = document.createElement("li");
listItem3.innerHTML = "Tuesday";
const listItem4 = document.createElement("li");
listItem4.innerHTML = "Wednesday";
const listItem5 = document.createElement("li");
listItem5.innerHTML = "Thursday";
const listItem6 = document.createElement("li");
listItem6.innerHTML = "Firday";
const listItem7 = document.createElement("li");
listItem7.innerHTML = "Saturday";
ul.appendChild(listItem1);
ul.appendChild(listItem2);
ul.appendChild(listItem3);
ul.appendChild(listItem4);
ul.appendChild(listItem5);
ul.appendChild(listItem6);
ul.appendChild(listItem7);
