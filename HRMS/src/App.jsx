import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import LoginForm from './pages/login';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Employee from './pages/Employee';
import Dashboard from './pages/dashboard';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>~
      <Routes>
        <Route path ="/" element={<LoginForm />}/>
      <Route path ="home" element={<Home />}>
      <Route path ="dashboard" element={<Dashboard />}/>
      <Route path ="employee" element={<Employee />}/>
      <Route/>

      </Route>
      </Routes>
      path ="home"
      elements ={
        <protectedRoute>
          <Home/>
        </protectedRoute>
      }
    </>
  );
}

export default App