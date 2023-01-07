import { useContext, createContext , useState} from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [searchString, setSearchString] = useState("");

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, searchString, setSearchString }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useStateContext = () => useContext(NoteContext);
