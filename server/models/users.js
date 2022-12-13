const con  = require("./dbconn");

// *****************
// * CREATE TABLE  *
// *****************
async function createTable() {
  let sql = ` CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(255) NOT NULL,
    userName VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  );`;

  await con.query(sql);
}

//create the table in the DB
createTable();

// *****************
// * GET ALL USERS *
// *****************
async function getAllUsers() {
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  // console.log(users);
}

// *****************
// *    GET USER   *
// *****************
async function getUser(user){
  let sql;
  if(user.userID){
    sql = `SELECT * FROM users WHERE userID = ${user.userID}`;
  }else{
    sql = `SELECT * FROM users WHERE userName = "${user.userName}"`;
  }
  // let sql = `SELECT * FROM users WHERE userName ="${user.userName}"`
  console.log("user from getUser" + user);
  return await con.query(sql);
  
}

// async function getUser(userName){
//   const sql = `SELECT * FROM users WHERE userName="${userName}"`;
//   let u = await con.query(sql);
//   console.log(u)
//   return u;

// }

// *****************
// *   REGISTER    *
// *****************
async function register(user) {
  let cUser = await getUser(user);
  if (cUser.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO users (fullName, userName, password) 
  VALUES ("${user.firstName} ${user.lastName}", "${user.userName}", "${user.passWord}");`;

  await con.query(sql);
  return await login(user);
}

// *****************
// *     LOGIN     *
// *****************
// async function login(username, password) {
//   let cUser = await getUser(username);
//   console.log("username"+cUser);

//   if (!cUser[0]) throw Error("username not found");
//   if (cUser[0].password !== password) throw Error("Password incorrect");

//   return cUser[0];
// }
async function login(user) { // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(user); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.passWord) throw Error("Password incorrect");

  return cUser[0];
}
// *****************
// *   EDIT USER   *
// *****************
async function editUser(user){
  let sql = `UPDATE users SET userName ="${user.userName}" WHERE userID=${user.userID}`;
  await con.query(sql);

  let updatedUser = await getUser(user);
  return updatedUser[0];
}

// *****************
// *  DELETE USER  *
// *****************
async function deleteUser(user){
  let sql = `DELETE FROM users WHERE userID=${user.userID}`
  await con.query(sql);
}





module.exports = { getAllUsers, getUser, login, register, editUser, deleteUser };
