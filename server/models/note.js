
const con  = require("./dbconn");

// *****************
// * CREATE TABLE  *
// *****************
async function createTable() {
    let sql = ` CREATE TABLE IF NOT EXISTS note (
      noteID INT NOT NULL AUTO_INCREMENT,
      note_content VARCHAR(255) NOT NULL,
      userID INT NOT NULL,
      CONSTRAINT notePK PRIMARY KEY(noteID),
      CONSTRAINT userFK FOREIGN KEY(userID) REFERENCES users(userID)
    );`;
  
    await con.query(sql);
  }
  
  //create the table in the DB
  createTable();

// *****************
// *   NEW NOTE    *
// *****************
async function createNote(note) {  
  // console.log(note)
    const sql = `INSERT INTO note (note_content, userID) VALUES ("${note.noteContent}",${note.userID} );`;
    await con.query(sql);

    return await getNote(note);
  }


// *****************
// *   GET NOTE    *
// *****************
async function getNote(note) {
    const sql = `SELECT * FROM note WHERE userID=${note.userID};`;
    return await con.query(sql);
  }

// *****************
// *   EDIT NOTE   *
// *****************
async function editNote(note){
    let sql = `UPDATE note SET note_content ="${note.note_content}" WHERE noteID =${note.noteID}`;
    await con.query(sql);
  
    let updatedNote = await getNote(note);
    return updatedNote;
  }

// *****************
// *  DELETE NOTE  *
// *****************
async function deleteNote(note){
    let sql = `DELETE FROM note WHERE noteID=${note.noteID}`
    await con.query(sql);
  }
  

  module.exports = { deleteNote, createNote, editNote, getNote };
