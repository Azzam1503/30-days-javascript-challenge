//Task 6 Install a thrid party module (e.g. lodash) using npm. Import and use a function fromt his moudle in a script
import _ from "lodash";
import axios from "axios";

const myString = "hello world";
const capitalizedString = _.capitalize(myString);
console.log(capitalizedString);

//Task 7 Install a thrid party module (e.g. lodash) using npm. Import and use this moudule to make a request in a script.
axios.get("https://jsonplaceholder.typicode.com/todos")
.then((res) => console.log(res.data))
.catch(e => console.log(e));