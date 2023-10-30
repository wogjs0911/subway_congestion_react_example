import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import { Search } from './pages/Search'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Layout>
  )
}

export default App
