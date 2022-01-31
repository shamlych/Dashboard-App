import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import Calendar from "./pages/Calendar/Calendar";
import Payments from "./pages/Payments/Payments";
import Messages from "./pages/Messages/Messages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/payments" element={<Payments/>}/>
          <Route path="/messages" element={<Messages/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
