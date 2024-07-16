import WeekDates from "./WeekDates.jsx";
import "./App.css";
import ToDoList from "./components/ToDoList.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WeekDates />}>
          <Route path="todolist/:date" element={<ToDoList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
