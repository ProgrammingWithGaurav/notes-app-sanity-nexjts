import { useContext, createContext , useState} from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, searchString, setSearchString, loading, setLoading }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useStateContext = () => useContext(NoteContext);
