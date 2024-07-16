import Todo from "./Todo";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import { useParams } from "react-router-dom";

function ToDoList() {
  const {
    neu,
    setSpeichern,
    aufgaben,
    neueAufgabe,
    addAufgabe,
    handleNeuAufgabe,
    handleSpeichern,
  } = useContext(MyContext);

  const { date } = useParams();

  useEffect(() => {
    setSpeichern(false); // Reset speichern state when date changes
  }, [date, setSpeichern]);

  const dateAufgaben = aufgaben[date] || [];

  return (
    <div className="container">
      <div className="meine-aufgabe">
        <h2>Meine Aufgabe für {date}</h2>
        <button onClick={handleNeuAufgabe}>Neu Aufgabe</button>
        
          {neu && (
            <div className="aufgabe-eingabe">
              <textarea
                name="textarea"
                type="text"
                value={neueAufgabe}
                onChange={addAufgabe}
                placeholder="Aufgabe hinzufügen..... oder häufige Aufgabe auswählen"
              />

             <div>
             <select onChange={addAufgabe} className="auswahl-btn">
                <option value="">Auswählen</option>
                <option value="Stationäre Handel">Stationäre Handel</option>
                <option value="Online Einkaufen">Online Einkaufen</option>
                <option value="Hausaufgabe machen">Hausaufgabe machen</option>
                <option value="Katze füttern">Katze füttern</option>
              </select>
             </div>
              <button
                onClick={() => {
                  handleSpeichern(date);
                }}
              >
                Speichern
              </button>
            </div>
          )}
        
      </div>

      <div style={{marginLeft:"20px"}}>
        {dateAufgaben.length > 0 ? (
          dateAufgaben.map((aufgabe, index) => (
            <Todo key={index} aufgabe={aufgabe} index={index} date={date} />
          ))
        ) : (
          <p>Keine Aufgaben für diesen Tag</p>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
