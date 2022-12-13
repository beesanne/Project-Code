import { fetchData, setCurrentUser, getCurrentUser, removeCurrentUser } from './main.js'

//user class
class User {

    constructor(userName, passWord,firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.passWord = passWord;
    }
    getuserName() {
        return this.userName;
      }

}


// login functionality

//grabbing the login form
const loginForm = document.getElementById("login");
//if the login button is clicked do the login in function
if (loginForm) loginForm.addEventListener("submit", login);

function login(e){
    e.preventDefault();

    //create variables for what was inputted 
    let userName = document.getElementById("userName").value;
    let passWord = document.getElementById("passWord").value;

    //creating a user object with the userName and passWord
    let user = new User(userName, passWord);
    // let user = new User(`${userName}`, `${passWord}`);

    fetchData("/users/login", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) => {
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    }) 
   
}




//code to grab the register form 
const registerForm = document.getElementById("register");

//code for when the register button is clicked
if (registerForm) registerForm.addEventListener("submit", register);

function register(e) {
  e.preventDefault();

  //get all the variables that were inputed by user
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let userName = document.getElementById("userName").value;
  let passWord = document.getElementById("passWord").value;
  
  //create a new object with those inputs
let user = new User(userName, passWord,firstName, lastName);

  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
  
}
