import './App.css';
import RegisterForm from './components/Register/RegisterForm.component';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/login/LoginForm.component';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<RegisterForm />} />
        <Route exact path='/login' element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
