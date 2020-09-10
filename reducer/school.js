import React, { useReducer } from "react";
import {
  RESET_ABSCENCE,
  INCREMENT,
  DECREMENT,
  ORDER_NOTES,
} from "../constants/actions";

const initialState = {
  students: [
    {
      id: 1,
      name: "Alice",
      lessons: [1, 2],
      attendance: 0,
      notes: [11, 12, 18],
    },
    { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] },
    {
      id: 3,
      name: "Phil",
      lessons: [1, 2, 3],
      attendance: 0,
      notes: [11, 9, 9],
    },
    {
      id: 4,
      name: "Naoudi",
      lessons: [1],
      attendance: 0,
      notes: [14.5, 19, 18],
    },
    { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
  ],
  lessons: [
    { id: 1, title: "React" },
    { id: 2, title: "React Native" },
    { id: 3, title: "MongoDB" },
  ],
  behaviours: [],
  order: false,
};

let students, student;

// Copie l'objet initialState dans copyInitialState
const copyInitialState = JSON.parse(JSON.stringify(initialState));

export const SchoolContext = React.createContext({});

export const schoolReducer = (state, action) => {
  switch (action.type) {
    case RESET_ABSCENCE:
      // Crée un nouveau tableau modifié
      students = state.students.map((s) => {
        s.attendance = 0;
        return s;
      });

      return { ...state, students };
      break;

    case ORDER_NOTES:
      return { ...state, attendance: 0 };
      break;

    case INCREMENT:
      // On crée un nouvel objet que l'on modifie
      student = { ...state.students.find((s) => s.id === action.payload) };
      student.attendance++;

      // Crée un nouveau tableau
      students = state.students.map((s) => {
        if (s.id != action.payload) return s;

        return student;
      });

      return { ...state, students };
      break;

    case DECREMENT:
      // On crée un nouvel objet que l'on modifie
      student = { ...state.students.find((s) => s.id === action.payload) };
      student.attendance--;

      // Crée un nouveau tableau
      students = state.students.map((s) => {
        if (s.id != action.payload) return s;

        return student;
      });

      return { ...state, students };
      break;

    default:
      break;
  }
};

export const SchoolProvider = ({ children }) => {
  const [state, dispatch] = useReducer(schoolReducer, copyInitialState);

  // composition
  return (
    <SchoolContext.Provider value={[state, dispatch]}>
      {children}
    </SchoolContext.Provider>
  );
};
