
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login/login';
import Signup from './component/signup/signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
