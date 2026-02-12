import { useEffect } from 'react'
import { contacto } from '../data/contacto'
import './ModalContacto.css'

export default function ModalContacto({ open, onClose }) {
  const telefonoLimpio = contacto.telefono.replace(/\s/g, '')
  const numeroWhatsApp = contacto.telefono.replace(/\D/g, '')

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="modal-contacto-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-contacto-titulo"
    >
      <div
        className="modal-contacto-caja"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-contacto-cerrar"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <h2 id="modal-contacto-titulo" className="modal-contacto-titulo">
          Ubicación y contacto
        </h2>
        <div className="modal-contacto-mapa-wrap">
          <iframe
            src={contacto.mapEmbedUrl}
            title="Mapa de ubicación de Dulce Horneo"
            className="modal-contacto-mapa"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="modal-contacto-info">
          <p className="modal-contacto-dir">{contacto.direccion}</p>
          <p className="modal-contacto-horario">
            Horario: Lunes a Sábado 8:00 – 20:00
          </p>
          <div className="modal-contacto-tel">
            <span className="modal-contacto-tel-label">Teléfono</span>
            <a href={`tel:${telefonoLimpio}`} className="modal-contacto-link">
              {contacto.telefonoDisplay}
            </a>
          </div>
          <a
            href={`https://wa.me/${numeroWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="boton modal-contacto-whatsapp"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
