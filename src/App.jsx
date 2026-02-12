import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import EntradaDetalle from './pages/EntradaDetalle'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-text">Dulce Horneo</span>
          <span className="logo-sub">Vlog Pastelería</span>
        </Link>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/#entradas">Entradas</Link>
          <Link to="/#nosotros">Nosotros</Link>
          <Link to="/#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor">
        <p className="footer-texto">© 2025 Dulce Horneo. Hecho con cariño.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entrada/:id" element={<EntradaDetalle />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
