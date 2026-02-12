import './App.css'

const entradas = [
  {
    id: 1,
    fecha: '8 Feb 2025',
    titulo: 'Cómo preparamos nuestro croissant de mantequilla',
    extracto: 'Un detrás de cámaras del proceso de laminado y los tres días de fermentación que hacen única nuestra masa.',
    imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    etiqueta: 'Detrás de cámaras',
  },
  {
    id: 2,
    fecha: '1 Feb 2025',
    titulo: 'Nueva temporada: tartas de frutos rojos',
    extracto: 'Fresas, frambuesas y arándanos de temporada. Te mostramos el proceso desde la selección hasta el glaseado.',
    imagen: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
    etiqueta: 'Novedades',
  },
  {
    id: 3,
    fecha: '25 Ene 2025',
    titulo: 'Un día en la pastelería — abriendo a las 6am',
    extracto: 'Así es nuestra rutina matutina: amasado, horneado y el olor a pan recién hecho que nos despierta.',
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    etiqueta: 'Un día con nosotros',
  },
  {
    id: 4,
    fecha: '18 Ene 2025',
    titulo: 'Receta en vlog: brownie de chocolate 70%',
    extracto: 'Compartimos el paso a paso de nuestro brownie más pedido. Crujiente por fuera, fundente por dentro.',
    imagen: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=80',
    etiqueta: 'Receta',
  },
  {
    id: 5,
    fecha: '10 Ene 2025',
    titulo: 'Decorando tortas de cumpleaños a mano',
    extracto: 'Crema de mantequilla, boquillas y mucha paciencia. Así personalizamos cada pedido especial.',
    imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    etiqueta: 'Técnicas',
  },
  {
    id: 6,
    fecha: '3 Ene 2025',
    titulo: 'Nuestros ingredientes: de dónde viene la harina',
    extracto: 'Visitamos al molinero que nos abastece. Harina de trigo local y sin aditivos para un sabor auténtico.',
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    etiqueta: 'Origen',
  },
]

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-text">Dulce Horneo</span>
          <span className="logo-sub">Vlog Pastelería</span>
        </a>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#entradas">Entradas</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="hero-etiqueta">Bienvenido al vlog</p>
        <h1 className="hero-titulo">
          Dulce Horneo
        </h1>
        <p className="hero-subtitulo">
          Cada semana te mostramos cómo hacemos pan, pasteles y dulces con las manos.
          Recetas, detrás de cámaras y un poco de nuestra pastelería.
        </p>
      </div>
      <div className="hero-imagen" />
    </section>
  )
}

function EntradaVlog({ entrada }) {
  return (
    <article className="entrada">
      <a href="#" className="entrada-link">
        <div className="entrada-imagen-wrap">
          <img src={entrada.imagen} alt="" className="entrada-imagen" />
          <span className="entrada-etiqueta">{entrada.etiqueta}</span>
        </div>
        <div className="entrada-cuerpo">
          <time className="entrada-fecha">{entrada.fecha}</time>
          <h2 className="entrada-titulo">{entrada.titulo}</h2>
          <p className="entrada-extracto">{entrada.extracto}</p>
          <span className="entrada-leer">Ver entrada →</span>
        </div>
      </a>
    </article>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="seccion-entradas" id="entradas">
          <div className="contenedor">
            <h2 className="seccion-titulo">Últimas entradas del vlog</h2>
            <div className="entradas-grid">
              {entradas.map((e) => (
                <EntradaVlog key={e.id} entrada={e} />
              ))}
            </div>
          </div>
        </section>
        <section className="seccion-cta" id="contacto">
          <div className="contenedor cta-inner">
            <h2 className="cta-titulo">¿Quieres visitarnos?</h2>
            <p className="cta-texto">
              Estamos en el centro. Horario: Lunes a Sábado 8:00 – 20:00.
              También tomamos pedidos por WhatsApp.
            </p>
            <a href="#" className="boton">Ver ubicación y contacto</a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="contenedor">
          <p className="footer-texto">© 2025 Dulce Horneo. Hecho con cariño.</p>
        </div>
      </footer>
    </>
  )
}

export default App
