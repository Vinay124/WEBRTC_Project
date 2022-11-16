import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './Pages/Home/Home'
import Navigaction from './Components/shared/Navigaction/Navigaction';

function App() {
  return (
   <Router>
    <Navigaction/>
    <Routes>
      <Route path="/" element={Home}/>
    </Routes>
   </Router>
  );
}

export default App;
