import React from "react";
import moment from "jalali-moment";
import { NoteCardProps } from "@/types/note.type";
import { Button } from "./ui/button";

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  const isPastDeadline = moment(note.deadline, "YYYY-MM-DD").isBefore(moment());

  return (
    <div
      className={`p-4 rounded shadow-md border transition-colors duration-500 ${
        isPastDeadline
          ? "bg-red-200 border-red-400"
          : "bg-yellow-100 border-gray-300"
      }`}
    >
      <p className="text-lg font-semibold mb-2">{note.text}</p>
      <small className="block text-gray-500">
        تاریخ ایجاد: {moment(note.date).format("jYYYY/jMM/jDD")}
      </small>
      <small className="block text-gray-500">
        ددلاین: {moment(note.deadline, "YYYY-MM-DD").format("jYYYY/jMM/jDD")}
      </small>

      <Button variant="danger" onClick={() => onDelete(note.id)}>حذف</Button>
    </div>
  );
};

export default NoteCard;
