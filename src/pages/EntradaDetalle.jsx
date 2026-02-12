import { Link, useParams, Navigate } from 'react-router-dom'
import { getEntradaById } from '../data/entradas'
import './EntradaDetalle.css'

export default function EntradaDetalle() {
  const { id } = useParams()
  const entrada = getEntradaById(id)

  if (!entrada) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="entrada-detalle-wrap">
      <article className="entrada-detalle contenedor">
        <Link to="/#entradas" className="entrada-detalle-volver">
          ← Volver al vlog
        </Link>
        <header className="entrada-detalle-header">
          <span className="entrada-detalle-etiqueta">{entrada.etiqueta}</span>
          <time className="entrada-detalle-fecha">{entrada.fecha}</time>
          <h1 className="entrada-detalle-titulo">{entrada.titulo}</h1>
          <p className="entrada-detalle-extracto">{entrada.extracto}</p>
        </header>
        <div className="entrada-detalle-imagen-wrap">
          <img
            src={entrada.imagen}
            alt=""
            className="entrada-detalle-imagen"
          />
        </div>
        <div className="entrada-detalle-cuerpo">
          {entrada.contenido?.map((parrafo, i) => (
            <p key={i} className="entrada-detalle-parrafo">
              {parrafo}
            </p>
          ))}
        </div>
        <footer className="entrada-detalle-footer">
          <Link to="/#entradas" className="boton">
            Ver más entradas
          </Link>
        </footer>
      </article>
    </main>
  )
}
