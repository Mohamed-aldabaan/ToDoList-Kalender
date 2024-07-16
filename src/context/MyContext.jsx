import { createContext, useState } from "react";

export const MyContext = createContext();

function MyProvider({ children }) {
  const [aufgaben, setAufgaben] = useState({});
  const [neueAufgabe, setNeueAufgabe] = useState("");
  const addAufgabe = (e) => {
    setNeueAufgabe(e.target.value);
  }

  const [neu, setNeu] = useState(false);

  function handleNeuAufgabe() {
    setNeu(true);
  }
  const[speichern, setSpeichern] = useState(false);

  function handleSpeichern(date) {
    if (neueAufgabe.trim() !== "") {
      setAufgaben(prevAufgaben => ({
        ...prevAufgaben,
        [date]: [...(prevAufgaben[date] || []), { text: neueAufgabe, erledigt: false}]
      }));
      setNeueAufgabe(""); // Textarea leeren
      setSpeichern(true);
    }
  }

  function löschenButton(date, index) {
    const aufgabenCopy = { ...aufgaben };
    // aufgabenCopy[date].splice(index, 1);
    console.log(aufgabenCopy);
    aufgabenCopy[date] = aufgabenCopy[date].filter((task, i) => i !== index);
    setAufgaben(aufgabenCopy);
  }

  function handleErledigt(date, index) {
    setAufgaben((prevAufgaben) => {
    // Erstellen einer neuen Kopie des Objekts
      const updatedAufgaben = { ...prevAufgaben };
      console.log("aaa", updatedAufgaben);
    // Erstellen einer neuen Kopie des Arrays für das spezifische Datum
    const tasksForDate = [...updatedAufgaben[date]];
    console.log("www:", tasksForDate);
    // Umschalten des erledigt Status für die spezifische Aufgabe
    tasksForDate[index] = { ...tasksForDate[index], erledigt: !tasksForDate[index].erledigt };
    // Aktualisieren des updatedAufgaben Objekts mit dem neuen Array
    updatedAufgaben[date] = tasksForDate;
    return updatedAufgaben;
    });
  }

  const valueContext = {
    neu,
    setNeu,
    speichern,
    setSpeichern,
    aufgaben,
    neueAufgabe,
    addAufgabe,
    handleNeuAufgabe,
    handleSpeichern,
    löschenButton,
    handleErledigt

  };
  return (
    <MyContext.Provider value={valueContext}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
