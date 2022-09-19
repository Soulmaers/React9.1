import './App.css'
import HomePage from './components/HomePage'
import DriftPage from './components/DriftPage'
import ForzaPage from './components/ForzaPage'
import TimeAttackPage from './components/TimeAttackPage'
import Menu from './components/Menu'
import { Routes, Route } from 'react-router-dom'




export default function App() {
  return (

    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>

  );
}