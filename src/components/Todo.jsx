/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { MyContext } from "../context/MyContext";

// eslint-disable-next-line react/prop-types
function Todo({ aufgabe, index, date }) {

  const [selectedOption, setSelectedOption] = useState("");
  const { löschenButton, handleErledigt } = useContext(MyContext);
  const handleLöschen = () => {
    löschenButton(date, index);
  };
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  const handleButtonErledigt = () => {
    handleErledigt(date, index);
  }
  return (
    <div className="to-do-div">
      <button onClick={handleLöschen} style={{background:"#FF4500"}}>Löschen</button>
      <button>Ändern</button>
      {aufgabe.erledigt ? (
        <button onClick={handleButtonErledigt} style={{background:"green"}}>Erledigt ✅</button>
      ) : (
        <button onClick={handleButtonErledigt} style={{background:"#8B6508"}}>Im Prozess ⌛</button>
      )}
      <div>
        {aufgabe.text === "Online Einkaufen" ? (
          <select value={selectedOption} onChange={handleSelectChange}>
            <option>Online Einkaufen</option>
            <option value="amazon">Amazon</option>
            <option value="saturn">Saturn</option>
          </select>
        ) : (
          aufgabe.text
        )}
      </div>

      {selectedOption === "amazon" && (
        <a href="https://www.amazon.de/" target="_blank">
          Zu Amazon
        </a>
      )}
      {selectedOption === "saturn" && (
        <a href="https://www.saturn.de/" target="_blank">
          Zu Saturn
        </a>
      )}
    </div>
  );
}

export default Todo;
