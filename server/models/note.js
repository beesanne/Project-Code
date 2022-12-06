
const con  = require("./dbconn");

// *****************
// * CREATE TABLE  *
// *****************
async function createTable() {
    let sql = ` CREATE TABLE IF NOT EXISTS note (
      noteID INT NOT NULL AUTO_INCREMENT,
      note_content VARCHAR(255) NOT NULL,
      userID VARCHAR(255) NOT NULL,
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
    const sql = `INSERT INTO note (note_content, userID) VALUES ("${note.note_content}","${note.userID}" );`;
    await con.query(sql);
  }


// *****************
// *   GET NOTE    *
// *****************
async function getNote() {
    const sql = `SELECT * FROM note WHERE noteID="${note.noteID}";`;
    let note = await con.query(sql);
    console.log(note);
  }

// *****************
// *   EDIT NOTE   *
// *****************
async function editNote(note){
    let sql = `UPDATE note SET note_content ="${note.note_content}" WHERE noteID =${note.noteID}`;
    await con.query(sql);
  
    let updatedNote = await editNote(note);
    return updatedNote[0];
  }

// *****************
// *  DELETE NOTE  *
// *****************
async function deleteNote(note){
    let sql = `DELETE FROM note WHERE noteID=${note.noteID}`
    await con.query(sql);
  }
  

  module.exports = { deleteNote, createNote, editNote, getNote };
