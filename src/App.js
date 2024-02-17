import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";

function App() {
  return (
    <div className='bg-gray-300 h-screen'>
      <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
