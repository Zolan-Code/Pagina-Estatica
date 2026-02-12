import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DURACION_ANIMACION = 500

export default function EntradaVlog({ entrada }) {
  const [saliendo, setSaliendo] = useState(false)
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    if (saliendo) return
    setSaliendo(true)
    setTimeout(() => {
      navigate(`/entrada/${entrada.id}`)
    }, DURACION_ANIMACION)
  }

  return (
    <article className={`entrada ${saliendo ? 'entrada--saliendo' : ''}`}>
      <a
        href={`/entrada/${entrada.id}`}
        className="entrada-link"
        onClick={handleClick}
      >
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
