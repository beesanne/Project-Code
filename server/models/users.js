const { con } = require("./dbconn");

// *****************
// * CREATE TABLE  *
// *****************
async function createTable() {
  let sql = ` CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
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
  console.log(users);
}

// *****************
// *   REGISTER    *
// *****************
async function register(user) {
  let cUser = await getUser(user.userName);
  if (cUser.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO users (userName, password) VALUES ("${user.userName}", "${user.password}");`;

  await con.query(sql);
  return await login(user);
}

// *****************
// *     LOGIN     *
// *****************
async function login(user) {
  let cUser = await getUser(user);

  if (!cUser[0]) throw Error("username not found");
  if (cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

// *****************
// *   EDIT USER   *
// *****************
async function editUser(user){
  let sql = `UPDATE users SET userName ="${user.userName}" WHERE userID =${user.userID}`;
  await con.query(sql);

  let updatedUser = await editUser(user);
  return updatedUser[0];
}

// *****************
// *  DELETE USER  *
// *****************
async function deleteUser(user){
  let sql = `DELETE FROM users WHERE userID=${user.userID}`
  await con.query(sql);
}


// *****************
// *    GET USER   *
// *****************
async function getUser(user){
  let sql;
  if(user.userID){
    sql = ` SELECT * FROM users WHERE userID = ${user.userID}`;
  }else{
    sql = `SELECT * FROM users WHERE userName = "${user.userName}"`;
  }
  return await con.query(sql);
}





module.exports = { getAllUsers, login, register, editUser, deleteUser };
