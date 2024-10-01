import { NotesAction, NotesState } from "@/types/note.type";
import { Dispatch } from "react";

export interface NotesContextType {
  state: NotesState;
  dispatch: Dispatch<NotesAction>;
}