import { Link } from 'react-router-dom'

export default function EntradaVlog({ entrada }) {
  return (
    <article className="entrada">
      <Link to={`/entrada/${entrada.id}`} className="entrada-link">
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
      </Link>
    </article>
  )
}
