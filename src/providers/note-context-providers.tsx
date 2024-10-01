"use client";
import React, { createContext, useReducer, ReactNode } from "react";
import { NotesState } from "../types/note.type";
import { NotesContextType } from "./_types/noteContext.interface";
import { notesReducer } from "@/reducers/note-reducer";

const initialState: NotesState = {
  notes: [],
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
