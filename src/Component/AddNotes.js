import React, { useState } from "react";

const AddNotes = ({ handleAddNote }) => {
  const [notetext, SetNewNoteText] = useState("");

  const characterLimit = 100;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      SetNewNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (notetext.trim().length > 0) {
      handleAddNote(notetext);
      SetNewNoteText("");
    }
  };

  
  return (
    <div>
      <div className="note new">
        <textarea
          rows="6"
          cols="10"
          placeholder="Add a Note.."
          value={notetext}
          onChange={handleChange}
        ></textarea>
        <div className="note-footer">
          <small>{characterLimit - notetext.length} Remaining</small>
          <button className="save" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;
