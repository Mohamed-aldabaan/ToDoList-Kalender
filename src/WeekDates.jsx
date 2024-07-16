import { useContext, useState } from "react";
import {NavLink, Outlet} from "react-router-dom";
import { format, addDays, addWeeks } from "date-fns";
import { MyContext } from "./context/MyContext";
import Zitat from "./components/Zitat";

const WeekDates = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const getWeekDates = (currentWeek) => {
    const today = new Date();
    console.log(today);
    const startOfWeek = addWeeks(today, currentWeek);
    console.log(startOfWeek);
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      weekDates.push(format(addDays(startOfWeek, i), "dd-MM-yyyy"));
    }
    console.log(weekDates);
    return weekDates;
  };

  const weekDates = getWeekDates(currentWeek);
  const {setNeu, aufgaben}= useContext(MyContext);
const handleLink = (date) => {
  if (aufgaben[date]){setNeu(true)}
  else{setNeu(false)}
  // setNeu(false);
}
  return (
    <>
      <div className="header">
        <button onClick={() => setCurrentWeek(currentWeek - 1)}>
          Vorherige Woche
        </button>
        <ul>
          {weekDates.map((date, index) => (
           <li key={index}> <NavLink to={`/todolist/${date}`} onClick={(date)=>handleLink(date)}>{date}</NavLink></li>
          ))}
        </ul>
        <button onClick={() => setCurrentWeek(currentWeek + 1)}>
          Nächste Woche
        </button>
      </div>
      <Zitat />
      <Outlet />
    </>
  );
};

export default WeekDates;
