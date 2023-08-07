import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Roster from './pages/RosterPage'
import Submit from './pages/SubmitPage'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/Roster" element={<Roster />} />
      <Route path="/Submit" element={<Submit />} />
    </Routes>
    </>
  );
}

export default App
