import { NotesAction, NotesState } from "@/types/note.type";

export const notesReducer = (state: NotesState, action: NotesAction): NotesState => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        id: Date.now(),
                        text: action.payload.text,
                        deadline: action.payload.deadline.format('YYYY-MM-DD'),
                        date: new Date(),
                    },
                ],
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload.id),
            };
        default:
            return state;
    }
};

