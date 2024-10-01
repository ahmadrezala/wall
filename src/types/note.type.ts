
import moment from 'jalali-moment';


export interface Note {
  id: number;
  text: string;
  deadline: string;
  date: Date;
}


export interface NotesState {
  notes: Note[];
}


export type NotesAction =
  | { type: 'ADD_NOTE'; payload: { text: string; deadline: moment.Moment } }
  | { type: 'DELETE_NOTE'; payload: { id: number } };


export interface NoteCardProps {
  note: Note;
  onDelete: (id: number) => void;
}

export interface CartList extends NotesState {
  handleDeleteNote: (id: number) => void
}
