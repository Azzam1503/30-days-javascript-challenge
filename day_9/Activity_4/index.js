//Task 7 Select an HTML element and chage one its attributes.
const elem = document.querySelectorAll('img');
elem[0].setAttribute('src', './images/download.jpeg')


//Task 8 Add and remove a CSS class to/from an HTML element.
const para = document.querySelectorAll('p');
console.log(para);
const css = para[0].getAttribute('style');
para[0].removeAttribute('style');
para[1].setAttribute('style', css);

