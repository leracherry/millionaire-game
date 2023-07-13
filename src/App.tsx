import "./App.css";
import { Game } from "./pages/Game/Game";
import { GameOver } from "./pages/GameOver/GameOver";
import { GameStart } from "./pages/GameStart/GameStart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GameStart />} />
          <Route path="/play" element={<Game />} />
          <Route path="/gameover" element={<GameOver />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
