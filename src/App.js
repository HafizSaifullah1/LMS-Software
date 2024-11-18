import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Fix import
import Login  from './pages/login';
import StudentForm from './pages/student/studentform';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/studentform" element={<StudentForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
