import React, { useState, useEffect} from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import AddNote from '../src/components/AddNote/AddNote';
import NotesList from '../src/components/NotesList/NotesList';
import Search from '../src/components/Search/Search';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const handleAddNote = (newNote) => {
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleDeleteNote = (noteToDelete) => {
    const updatedNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  // filter notes based on the search text
  const filteredNotes = notes.filter((note) =>
    note.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search searchText={searchText} onSearch={handleSearch} />
      <AddNote onAdd={handleAddNote} />
      <NotesList notes={filteredNotes} onDelete={handleDeleteNote}/>
    </div>
  );
};

export default App;