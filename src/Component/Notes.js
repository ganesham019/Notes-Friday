import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
const Notes = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note shadow">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <RiDeleteBin5Fill
          style={{ fontSize: "24px" }}
          className="delete-icon"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Notes;
