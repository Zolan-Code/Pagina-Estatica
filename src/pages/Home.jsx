import { entradas } from '../data/entradas'
import Hero from '../components/Hero'
import EntradaVlog from '../components/EntradaVlog'

export default function Home() {
  return (
    <>
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
      <section className="seccion-nosotros" id="nosotros">
        <div className="contenedor nosotros-inner">
          <div className="nosotros-imagen-wrap">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=85"
              alt="Equipo de pastelería trabajando en cocina"
              className="nosotros-imagen"
            />
          </div>
          <div className="nosotros-contenido">
            <h2 className="seccion-titulo nosotros-titulo">Sobre nosotros</h2>
            <p className="nosotros-texto">
              Dulce Horneo nació del amor por el pan recién horneado y los dulces hechos a mano.
              Somos un equipo pequeño que cada mañana amasa, fermenta y hornea con ingredientes
              locales y sin prisas.
            </p>
            <p className="nosotros-texto">
              En este vlog compartimos ese proceso: desde la selección de la harina hasta el
              último detalle de una tarta. Queremos que veas cómo se hace de verdad la pastelería
              artesanal y que te animes a probarla — o a hacerla en casa.
            </p>
            <ul className="nosotros-lista">
              <li>Ingredientes de calidad y proveedores locales</li>
              <li>Recetas tradicionales y técnicas actuales</li>
              <li>Todo elaborado en nuestra pastelería del centro</li>
            </ul>
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
    </>
  )
}
