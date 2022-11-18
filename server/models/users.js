//create json db
const users = [
  {
    userID: 12345,
    username: "beesanne",
    password: "testpword",
  },
  {
    userID: 55455,
    username: "jenn123",
    password: "pass123",
  },
  {
    userID: 99901,
    username: "jeo55",
    password: "pass9999",
  },
];

// const usersButton = document.getElementById("users-btn");
// usersButton.addEventListener('click', getAllUsers)
function getAllUsers(){
    if(usersButton.innerText === "") {
     fetch()
     .then((res) => res.json()) //JSON.parse(res)
     .then((data) => {
       data.forEach(item => {
         let section = `
           <div class="food">
             <h2>${item.username}</h2>
             <p>${item.password}</p>
             <p>${item.userId}</p>
           </div>
         `
         usersButton.innerHTML+=section;
       })
     })
     .catch(err => {
       console.log(err);
     })
 }
 }

function login(users) {
  // {username: "sda", password: "gsdhjsga"}
  let cUser = users.filter((u) => u.username === users.username);

  if (!cUser[0]) throw Error("username not found");
  if (cUser[0].password !== users.password) throw Error("Password incorrect");

  return cUser[0];
}

module.exports = { getAllUsers, login };

//getallusers function
// function getallusers(){
//     fetch("http://localhost:3000/users")
//     .then((res) => res.json())
//     .then(data) => {

//     }

// }

// //login function {username:"afEA", password : "aeaea"}
// function login(user){
//     let cUser = user.filter(u => u.username === user.username); //checks to see if the user in the DB matches what the user entered
//     if(!cUser[0]) throw Error("username not found"); // if the username is not in the db
//     if(cUser[0].password !== user.password) throw Error("Password incorrect") // if the password doesnt match

//     return cUser[0];

// }

// //exports
// module.export = {login}
