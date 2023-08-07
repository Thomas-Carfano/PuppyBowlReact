import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Roster from './pages/RosterPage'
import Submit from './pages/SubmitPage'
import Search from './components/Search'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/Roster" element={<Roster />} />
      <Route path="/Submit" element={<Submit />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
    </>
  );
}

export default App
