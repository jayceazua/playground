console.log('Starting notes.js');

let addNote = () => {
  console.log('addNote');
  return 'New note';
};

let add = (a, b) => {
  return a + b
}


module.exports = {
  addNote,
  add
}
