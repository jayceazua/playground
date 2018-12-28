console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  };
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note
  };

};

const getAll = () => {
  console.log('Getting all notes');
};

const getNote = (title) => {
  console.log('Reading note', title);
};

const removeNote = (title) => {
  //fetch notes - stores an array of all the notes
  let notes = fetchNotes();
  // filter notes, removing the one with title of argument
  let filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);
  // this returns a true or false statement if there was an item removed
  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
