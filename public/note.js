import {
  fetchData,
  getCurrentUser,
} from "./main.js";

let user = getCurrentUser();

class Note {
  constructor(noteContent, userID) {
    this.noteContent = noteContent;
    this.userID = userID;
  }
  getNoteId() {
    return this.noteID;
  }
  getNoteContent() {
    return this.noteContent;
  }
  getUserId() {
    return this.userID;
  }
  setNoteId(noteID) {
    this.noteId = noteID;
  }
  setNoteContent(noteContent) {
    this.noteContent = noteContent;
  }
}

//grab the note form
const noteForm = document.getElementById("noteForm");
// //use to print out the note to test it worked
const noteInfo = document.getElementById("noteInfo");

//if the submit button is clicked on the note form run the addNote function
if (noteForm) noteForm.addEventListener("submit", addNote);

function addNote(e) {
  e.preventDefault();

  let noteContent = document.getElementById("noteContent").value;

  let note = new Note(`${noteContent}`);
  note.userID = user.userID;

  fetchData("/note/create", note, "POST")
    .then((data) => {
      data.forEach((n) => {
        // console.log(n.note_content);
        noteInfo.innerHTML += `
        <ul>
            <li> note ${n.noteID}: ${n.note_content}</li>
        </ul>
        `;
      });
    })
    .catch((err) => {
      let p = document.querySelector(".error");
      p.innerHTML = err.message;
    });
  
}


// if (noteForm) noteForm.addEventListener("submit", displayNote);

// function displayNote(){
//     let note = new Note(`${noteContent}`);
//     note.userID = user.userID;
//     fetchData("/note/read", note, "POST")
//     .then((data) => {
//       data.forEach((n) => {
//         console.log(n.note_content);
//         noteInfo.innerHTML += `
//   <ul>
//       <li> note ${n.noteID}: ${n.note_content}</li>
//   </ul>
//   `;
//       });
//     })
//     .catch((err) => {
//       let p = document.querySelector(".error");
//       p.innerHTML = err.message;
//     });

// }