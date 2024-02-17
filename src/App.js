import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className='bg-gray-300 h-screen'>
      <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
