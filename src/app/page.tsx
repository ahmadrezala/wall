"use client";
import React, { useState, useContext } from "react";
import moment from "jalali-moment";
import NotesContext from "@/providers/note-context-providers";
import { Button } from "./_components/ui/button";
import CartList from "./_components/cart-list";
import { DayValue } from "react-modern-calendar-datepicker";
import TextInput from "./_components/form-input/input/text-input/text-input";
import PersianCalendar from "./_components/form-input/calendar/calendar";


const Wall: React.FC = () => {
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    throw new Error("NotesContext must be used within a NotesProvider");
  }

  const { state, dispatch } = notesContext;
  const [newNoteText, setNewNoteText] = useState<string>("");
  const [newNoteDeadline, setNewNoteDeadline] = useState<DayValue>(null);

  const handleAddNote = () => {
    if (!newNoteText || !newNoteDeadline) {
      alert("Please enter both note text and a deadline.");
      return;
    }

    const jalaliDate = moment(
      `${newNoteDeadline?.year}/${newNoteDeadline?.month}/${newNoteDeadline?.day}`,
      "jYYYY/jM/jD"
    );

    dispatch({
      type: "ADD_NOTE",
      payload: { text: newNoteText, deadline: jalaliDate },
    });
    setNewNoteText("");
    setNewNoteDeadline(null);
  };

  const handleDeleteNote = (id: number) => {
    dispatch({ type: "DELETE_NOTE", payload: { id } });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wall</h1>

      <div className="mb-6 flex space-x-2">
        <TextInput
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)}
          placeholder="متن نوت را وارد کنید"
        />

        <PersianCalendar
          value={newNoteDeadline}
          onChange={setNewNoteDeadline}
        />

        <Button variant="primary" onClick={handleAddNote}>
          افزودن نوت
        </Button>
      </div>

      <CartList notes={state.notes} handleDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default Wall;
