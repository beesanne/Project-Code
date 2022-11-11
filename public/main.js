class User {
    constructor(userId, fName, lName, uName, pWord) {
        this.userId = userId;
        this.firstName = fName;
        this.lastName = lName;
        this.username = uName;
        this.password = pWord;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getUserId() {
        return this.userId;
    }
    setFirstName(fName) {
        this.firstName = fName;
    }
    setLastName(lName) {
        this.lastName = lName;
    }
    setUsername(uName) {
        this.username = uName;
    }
    setPassword(pWord) {
        this.password = pWord;
    }
    setUserId(userId) {
        this.userId = userId;
    }
}

//code to grab the register form 
const registerForm = document.getElementById("register");
//code to grab the section of where to print out the users info 
const registerInfo = document.getElementById("registerInfo")

//code for when the register button is clicked
if (registerForm) registerForm.addEventListener("submit", register);

function register(e) {
  e.preventDefault();

  //get all the variables that were inputed by user
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  //create a new object with those inputs
  let user = new User('1', `${firstName}`, `${lastName}`, `${username}`, `${password}`);
  console.log(user)


  //print out the input to make sure it works
  registerInfo.innerHTML += `
  <ul>
    <li> full name: ${firstName} ${lastName} </li>
    <li> username: ${username} </li>
    <li> password: ${password}</li>
  </ul>

  `
}


//grabbing the login form
const loginForm = document.getElementById("login");
//use to print and append the info
const loginInfo = document.getElementById("loginInfo");

//if the login button is clicked do the login in function
if (loginForm) loginForm.addEventListener("submit", login);

function login(e){
    e.preventDefault();

    //create variables for what was inputted 
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    //creating a user object with the username and password
    let user = new User(``, ``, ``, `${username}`, `${password}`);
    console.log(user)

    //print out the input to make sure it works 
    loginInfo.innerHTML += `
    <ul>
        <li> username: ${username} </li>
        <li> password: ${password}</li>
    </ul>

    `


    
}


class Note {
    constructor(noteId, noteContent, userId) {
        this.noteId = noteId;
        this.noteContent = noteContent;
        this.userId = userId;
    }
    getNoteId() {
        return this.noteId;
    }
    getNoteContent() {
        return this.noteContent;
    }
    getUserId() {
        return this.userId;
    }
    setNoteId(noteid) {
        this.noteId = noteId;
    }
    setNoteContent(noteContent) {
        this.noteContent = noteContent;
    }
}

//grab the note form
const noteForm = document.getElementById("noteForm");
//use to print out the note to test it worked
const noteInfo = document.getElementById("noteInfo");

//if the submit button is clicked on the note form run the addNote function
if(noteForm) noteForm.addEventListener("submit", addNote);

function addNote(e){
    e.preventDefault();

    
    let noteContent = document.getElementById("noteContent").value;

    let note = new Note(`1`, `${noteContent}`, ``);
    console.log(note);

    noteInfo.innerHTML += `
    <ul>
        <li> note content: ${noteContent} </li>
    </ul>
    `
}


