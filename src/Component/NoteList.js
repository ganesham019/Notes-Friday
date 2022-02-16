import React from "react";
import AddNotes from "./AddNotes";
import Notes from "./Notes";

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="container-fluid NoteListContainer mt-5">
      <div className="container mt-5">
        <div className="note-list">
          {notes.map((note) => (
            <>
              <Notes
                id={note.id}
                text={note.text}
                date={note.date}
                handleDeleteNote={handleDeleteNote}
              />
            </>
          ))}
          <AddNotes handleAddNote={handleAddNote} />
        </div>
      </div>
    </div>
  );
};

export default NoteList;
