export const entradas = [
  {
    id: 1,
    fecha: '8 Feb 2025',
    titulo: 'Cómo preparamos nuestro croissant de mantequilla',
    extracto: 'Un detrás de cámaras del proceso de laminado y los tres días de fermentación que hacen única nuestra masa.',
    imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    etiqueta: 'Detrás de cámaras',
    contenido: [
      'El croissant de mantequilla que servimos cada mañana lleva tres días de trabajo. El primer día preparamos la masa madre y la mezcla base; el segundo hacemos el laminado con la mantequilla de AOP que importamos de Francia.',
      'Cada capa se dobla y se refrigera para que la mantequilla no se integre en la masa. El resultado es esa textura en capas que se deshace al morder. El tercer día formamos las piezas, fermentación final y al horno antes del amanecer.',
    ],
  },
  {
    id: 2,
    fecha: '1 Feb 2025',
    titulo: 'Nueva temporada: tartas de frutos rojos',
    extracto: 'Fresas, frambuesas y arándanos de temporada. Te mostramos el proceso desde la selección hasta el glaseado.',
    imagen: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80',
    etiqueta: 'Novedades',
    contenido: [
      'Esta temporada incorporamos tartas de frutos rojos con fruta que llega dos veces por semana desde huertas locales. Trabajamos fresas, frambuesas y arándanos en una base de crema pastelera ligera y masa quebrada de vainilla.',
      'El glaseado final es gelatina neutra con un toque de limón para que brille sin tapar el sabor de la fruta. Las tartas salen a la vitrina los miércoles y sábados; recomendamos reservar si quieres una entera.',
    ],
  },
  {
    id: 3,
    fecha: '25 Ene 2025',
    titulo: 'Un día en la pastelería — abriendo a las 6am',
    extracto: 'Así es nuestra rutina matutina: amasado, horneado y el olor a pan recién hecho que nos despierta.',
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    etiqueta: 'Un día con nosotros',
    contenido: [
      'A las 5:30 ya está encendido el horno y la masa del día anterior sale del frío. Primero va el pan: hogazas, baguettes y bollos. Para las 6:30 el local huele a pan recién horneado y abrimos puertas.',
      'Entre las 7 y las 10 hacemos las tartas y los bollos dulces. A media mañana llegan los pedidos especiales y las tortas de cumpleaños. Es un ritmo fuerte pero ver la vitrina llena y la gente en la puerta lo compensa.',
    ],
  },
  {
    id: 4,
    fecha: '18 Ene 2025',
    titulo: 'Receta en vlog: brownie de chocolate 70%',
    extracto: 'Compartimos el paso a paso de nuestro brownie más pedido. Crujiente por fuera, fundente por dentro.',
    imagen: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=80',
    etiqueta: 'Receta',
    contenido: [
      'Usamos chocolate 70% de cacao en tableta, no cacao en polvo. Se funde al baño María con mantequilla y se mezcla con huevos, azúcar moreno y harina. La clave es no hornear de más: unos 25 minutos y el centro debe quedar tierno.',
      'Dejamos enfriar por completo antes de cortar. Así la corteza queda crujiente y el interior fundente. En el vlog está el paso a paso con cantidades; si lo probáis en casa, etiquetadnos.',
    ],
  },
  {
    id: 5,
    fecha: '10 Ene 2025',
    titulo: 'Decorando tortas de cumpleaños a mano',
    extracto: 'Crema de mantequilla, boquillas y mucha paciencia. Así personalizamos cada pedido especial.',
    imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    etiqueta: 'Técnicas',
    contenido: [
      'Cada torta de cumpleaños se diseña a mano con crema de mantequilla y distintas boquillas. No usamos plantillas ni impresión: todo es dibujo y texto con manga. Por eso pedimos al menos 48 horas de anticipación.',
      'Trabajamos con los clientes en el color, el mensaje y el estilo (más clásico o más moderno). La base suele ser bizcocho de vainilla o chocolate con relleno a elegir. En el vlog mostramos cómo hacemos las rosas y el lettering.',
    ],
  },
  {
    id: 6,
    fecha: '3 Ene 2025',
    titulo: 'Nuestros ingredientes: de dónde viene la harina',
    extracto: 'Visitamos al molinero que nos abastece. Harina de trigo local y sin aditivos para un sabor auténtico.',
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    etiqueta: 'Origen',
    contenido: [
      'La harina que usamos viene de un molino a menos de 50 km. Es trigo de la zona, molido en piedra y sin aditivos. Notamos la diferencia sobre todo en el pan: miga más sabrosa y mejor conservación.',
      'En el vlog fuimos a visitar el molino y grabamos todo el proceso. El molinero nos explicó cómo eligen el trigo y cómo el molido en frío mantiene las propiedades. Para nosotros es la base de todo lo que hacemos.',
    ],
  },
]

export function getEntradaById(id) {
  const numId = Number(id)
  return entradas.find((e) => e.id === numId) ?? null
}
