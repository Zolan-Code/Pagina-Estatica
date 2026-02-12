import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import EntradaDetalle from './pages/EntradaDetalle'
import ModalContacto from './components/ModalContacto'

function Header({ onAbrirContacto }) {
  const location = useLocation()
  const enInicio = location.pathname === '/'

  const irAlTop = (e) => {
    if (enInicio) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const irASeccion = (e, id) => {
    if (enInicio) {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={irAlTop}>
          <span className="logo-text">Dulce Horneo</span>
          <span className="logo-sub">Vlog Pastelería</span>
        </Link>
        <nav className="nav">
          <Link to="/" onClick={irAlTop}>Inicio</Link>
          <Link to="/#entradas" onClick={(e) => irASeccion(e, 'entradas')}>Entradas</Link>
          <Link to="/#nosotros" onClick={(e) => irASeccion(e, 'nosotros')}>Nosotros</Link>
          <Link to="/#contacto" onClick={(e) => irASeccion(e, 'contacto')}>Contacto</Link>
          <button
            type="button"
            className="nav-pedido"
            onClick={onAbrirContacto}
          >
            ¿Pedido? Escríbenos
          </button>
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
  const [modalContactoAbierto, setModalContactoAbierto] = useState(false)

  return (
    <>
      <Header onAbrirContacto={() => setModalContactoAbierto(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAbrirContacto={() => setModalContactoAbierto(true)} />} />
          <Route path="/entrada/:id" element={<EntradaDetalle />} />
        </Routes>
      </main>
      <ModalContacto
        open={modalContactoAbierto}
        onClose={() => setModalContactoAbierto(false)}
      />
      <Footer />
    </>
  )
}

export default App
