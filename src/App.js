import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./Pages/Todo";
import On from "./Pages/On";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<On />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
