import React, { useState } from 'react';
import './AddNote.css';

const AddNote = ({ onAdd }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date().toISOString();
    const newNote = { id: Date.now(), content, date };
    onAdd(newNote);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        placeholder="Enter note content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button class="save-button" type="submit">Save</button>
    </form>
  );
};

export default AddNote;
