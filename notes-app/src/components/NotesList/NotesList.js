import React from 'react';
import Note from '../Note/Note';
import './NotesList.css'

const NotesList = ({ notes, onDelete }) => {
  return (
    <div class = "noteList">
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NotesList;
