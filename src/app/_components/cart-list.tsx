import React from "react";
import NoteCard from "./note-cart";
import type { CartList } from "@/types/note.type";

const CartList: React.FC<CartList> = ({ notes, handleDeleteNote }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
      ))}
    </div>
  );
};

export default CartList;
