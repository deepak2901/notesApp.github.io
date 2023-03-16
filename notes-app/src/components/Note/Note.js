import React from 'react';
import './Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Note = ({ note, onDelete }) => {
  const formattedDate = new Date(note.date).toLocaleDateString('en-GB');

  return (
    <div class='notes'>
      <p class="note-content">{note.content}</p>
      <div class="note-footer">
      <p>{formattedDate}</p>
      <button class="btn" onClick={() => onDelete(note)}><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>
    </div>
  );
};

export default Note;