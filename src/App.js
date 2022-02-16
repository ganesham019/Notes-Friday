import React, { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import NoteList from "./Component/NoteList";
import Search from "./Component/Search";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hurry! Begins",
      date: "05/02/22",
    },
    // {
    //   id: nanoid(),
    //   text: "Hurry! This is first Note",
    //   date: "11/02/22",
    // },
    // {
    //   id: nanoid(),
    //   text: "Hurry! This is second Note",
    //   date: "22/02/22",
    // },
    // {
    //   id: nanoid(),
    //   text: "Hurry! This is New Note",
    //   date: "15/02/22",
    // },
  ]);
  const [searchText, setSearchtext] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    console.log(setNotes);
  };

  useEffect(() => {
    const SavedNotes = JSON.parse(localStorage.getItem("notes"));
    if (SavedNotes) {
      setNotes(SavedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <div className="container-fluid p-0 m-0">
        <Header />
     
      <br />
      <div className="container">
        <Search handleSearchNoteText={setSearchtext} />
      </div>
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      <br />
      
    </div>
    <Footer />
    </div>
  );
}

export default App;
