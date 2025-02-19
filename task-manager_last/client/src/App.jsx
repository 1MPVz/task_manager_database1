import './App.css'
import Header from './components/header/Header'
import Signin from './components/registration/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/home/Home';
import DashBoard from './pages/dashboard/dashboard';
import TaskManager from './pages/taskmanager/TaskManager';
import Signup from './components/registration/Signup';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path = '/' element = {<Home />} />

          <Route path = '/signin' element = {<Signin />} />
          <Route path = '/signup' element = {<Signup />} />
          <Route path = '/dashboard' element = {<DashBoard />} />
          <Route path = '/taskmanager' element = {<TaskManager />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
