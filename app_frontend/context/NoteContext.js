import { useContext, createContext , useState} from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
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

export default NoteProvider;
export const useStateContext = () => useContext(NoteContext);
