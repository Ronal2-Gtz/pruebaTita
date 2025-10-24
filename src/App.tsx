
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import PokemonDetail from './pages/PokemonDetail'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  )
}

export default App
