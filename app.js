const cursos = [
  {
    id: 1,
    nombre: "Preparación para Examen de Admisión Superior",
    institucion: "Centro Académico Central",
    categoria: "Preparación académica",
    modalidad: "Presencial",
    precio: "$2,400 MXN",
    duracion: "12 semanas",
    ubicacion: "Cuauhtémoc, Ciudad de México",
    lat: 19.4326,
    lng: -99.1332,
    verificado: "2026-11-15",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 2,
    nombre: "Inglés Comunicativo Nivel Básico a Intermedio",
    institucion: "Instituto de Idiomas del Norte",
    categoria: "Idiomas",
    modalidad: "En línea",
    precio: "No disponible en sitio oficial",
    duracion: "16 semanas",
    ubicacion: "Monterrey, Nuevo León",
    lat: 25.6866,
    lng: -100.3161,
    verificado: "2026-11-12",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 3,
    nombre: "Fundamentos de Desarrollo Web y Bases de Datos",
    institucion: "Academia Digital de Occidente",
    categoria: "Programación",
    modalidad: "Mixta",
    precio: "Gratuito",
    duracion: "10 semanas",
    ubicacion: "Guadalajara, Jalisco",
    lat: 20.6597,
    lng: -103.3496,
    verificado: "2026-11-18",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 4,
    nombre: "Iniciación Musical y Solfeo",
    institucion: "Casa de Cultura del Sureste",
    categoria: "Música y artes",
    modalidad: "Presencial",
    precio: "$850 MXN",
    duracion: "8 semanas",
    ubicacion: "Mérida, Yucatán",
    lat: 20.9674,
    lng: -89.5926,
    verificado: "2026-11-10",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 5,
    nombre: "Curso Propedéutico de Matemáticas y Razonamiento Lógico",
    institucion: "Instituto Educativo Angelopolitano",
    categoria: "Preparación académica",
    modalidad: "Presencial",
    precio: "$1,350 MXN",
    duracion: "10 semanas",
    ubicacion: "Puebla, Puebla",
    lat: 19.0414,
    lng: -98.2063,
    verificado: "2026-11-16",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 6,
    nombre: "Programación en Python para Ciencia de Datos",
    institucion: "Centro de Innovación Tecnológica del Bajío",
    categoria: "Programación",
    modalidad: "En línea",
    precio: "Gratuito",
    duracion: "8 semanas",
    ubicacion: "Querétaro, Querétaro",
    lat: 20.5888,
    lng: -100.3899,
    verificado: "2026-11-17",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 7,
    nombre: "Francés Conversacional Nivel A1–A2",
    institucion: "Centro de Lenguas Modernas",
    categoria: "Idiomas",
    modalidad: "Mixta",
    precio: "$1,600 MXN",
    duracion: "14 semanas",
    ubicacion: "Coyoacán, Ciudad de México",
    lat: 19.3467,
    lng: -99.1617,
    verificado: "2026-11-14",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 8,
    nombre: "Taller de Guitarra Acústica y Armonía Básica",
    institucion: "Escuela Municipal de Artes",
    categoria: "Música y artes",
    modalidad: "Presencial",
    precio: "$600 MXN",
    duracion: "6 semanas",
    ubicacion: "Toluca, Estado de México",
    lat: 19.2826,
    lng: -99.6557,
    verificado: "2026-11-11",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 9,
    nombre: "Preparación Integral para Ingreso a Nivel Medio Superior",
    institucion: "Academia de Estudios Técnicos del Valle",
    categoria: "Preparación académica",
    modalidad: "Presencial",
    precio: "$1,900 MXN",
    duracion: "12 semanas",
    ubicacion: "Ecatepec de Morelos, Estado de México",
    lat: 19.6018,
    lng: -99.0507,
    verificado: "2026-11-19",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 10,
    nombre: "Desarrollo de Aplicaciones Móviles con JavaScript",
    institucion: "Núcleo Tecnológico Fronterizo",
    categoria: "Programación",
    modalidad: "En línea",
    precio: "No disponible en sitio oficial",
    duracion: "12 semanas",
    ubicacion: "Tijuana, Baja California",
    lat: 32.5149,
    lng: -117.0382,
    verificado: "2026-11-13",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 11,
    nombre: "Alemán Técnico para Estudiantes de Ingeniería",
    institucion: "Instituto de Idiomas del Centro",
    categoria: "Idiomas",
    modalidad: "Mixta",
    precio: "$2,100 MXN",
    duracion: "16 semanas",
    ubicacion: "León, Guanajuato",
    lat: 21.1221,
    lng: -101.6826,
    verificado: "2026-11-15",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 12,
    nombre: "Dibujo Digital e Ilustración Vectorial",
    institucion: "Taller Creativo del Pacífico",
    categoria: "Música y artes",
    modalidad: "En línea",
    precio: "Gratuito",
    duracion: "6 semanas",
    ubicacion: "Mazatlán, Sinaloa",
    lat: 23.2494,
    lng: -106.4111,
    verificado: "2026-11-18",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 13,
    nombre: "Redacción Académica y Comprensión Lectora",
    institucion: "Centro de Apoyo Universitario",
    categoria: "Preparación académica",
    modalidad: "Mixta",
    precio: "$750 MXN",
    duracion: "8 semanas",
    ubicacion: "Xalapa, Veracruz",
    lat: 19.5438,
    lng: -96.9102,
    verificado: "2026-11-17",
    urlOficial: "https://www.gob.mx/sep"
  },
  {
    id: 14,
    nombre: "Lógica de Programación y Estructuras de Datos",
    institucion: "Instituto Tecnológico Comunitario",
    categoria: "Programación",
    modalidad: "Presencial",
    precio: "Gratuito",
    duracion: "10 semanas",
    ubicacion: "San Luis Potosí, San Luis Potosí",
    lat: 22.1565,
    lng: -100.9855,
    verificado: "2026-11-19",
    urlOficial: "https://www.gob.mx/sep"
  }
];

const map = L.map("map").setView([23.6345, -102.5528], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const marcadoresLayer = L.layerGroup().addTo(map);
const usuarioLayer = L.layerGroup().addTo(map);

let ubicacionUsuario = null;

const inputBuscador = document.getElementById("buscador");
const selectCategoria = document.getElementById("filtro-categoria");
const selectModalidad = document.getElementById("filtro-modalidad");
const btnLimpiar = document.getElementById("btn-limpiar");
const btnUbicacion = document.getElementById("btn-ubicacion");
const listaCursos = document.getElementById("lista-cursos");
const totalCursos = document.getElementById("total-cursos");
const estadoMapa = document.getElementById("estado-mapa");

// Cálculo de distancia en kilómetros (fórmula de Haversine)
function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function formatearDistancia(km) {
  if (km < 1) {
    return `${Math.round(km * 1000)} m de ti`;
  }
  return `${km.toFixed(1)} km de ti`;
}

function dibujarUbicacionUsuario(centrar = true) {
  usuarioLayer.clearLayers();
  if (!ubicacionUsuario) return;

  const { lat, lng } = ubicacionUsuario;

  // Marcador destacado de tu ubicación
  L.circleMarker([lat, lng], {
    radius: 9,
    color: "#047857",
    fillColor: "#10b981",
    fillOpacity: 0.9,
    weight: 3
  })
    .addTo(usuarioLayer)
    .bindPopup("<strong>Tu ubicación actual</strong><br />Referencia para calcular distancias")
    .openPopup();

  // Círculo visual de referencia de 15 km alrededor de ti
  L.circle([lat, lng], {
    radius: 15000,
    color: "#10b981",
    fillColor: "#10b981",
    fillOpacity: 0.08,
    weight: 1
  }).addTo(usuarioLayer);

  if (centrar) {
    map.setView([lat, lng], 10);
  }
}

function filtrarCursos() {
  const texto = inputBuscador.value.trim().toLowerCase();
  const categoria = selectCategoria.value;
  const modalidad = selectModalidad.value;

  const resultado = cursos.filter((curso) => {
    const coincideTexto =
      !texto ||
      curso.nombre.toLowerCase().includes(texto) ||
      curso.institucion.toLowerCase().includes(texto) ||
      curso.ubicacion.toLowerCase().includes(texto);

    const coincideCategoria = !categoria || curso.categoria === categoria;
    const coincideModalidad = !modalidad || curso.modalidad === modalidad;

    return coincideTexto && coincideCategoria && coincideModalidad;
  });

  // Si ya tenemos tu ubicación, ordena del más cercano al más lejano sin ocultar ninguno
  if (ubicacionUsuario) {
    resultado.sort((a, b) => {
      const distA = calcularDistanciaKm(ubicacionUsuario.lat, ubicacionUsuario.lng, a.lat, a.lng);
      const distB = calcularDistanciaKm(ubicacionUsuario.lat, ubicacionUsuario.lng, b.lat, b.lng);
      return distA - distB;
    });
  }

  return resultado;
}

function renderizar(filtrados, ajustarVista = true) {
  marcadoresLayer.clearLayers();
  listaCursos.innerHTML = "";
  totalCursos.textContent = filtrados.length;

  if (filtrados.length === 0) {
    listaCursos.innerHTML = `<p class="helper-text">No se encontraron cursos con esos filtros.</p>`;
    return;
  }

  const bounds = [];

  filtrados.forEach((curso) => {
    let textoDistancia = "Activa tu ubicación para ver la distancia";
    if (ubicacionUsuario) {
      const km = calcularDistanciaKm(
        ubicacionUsuario.lat,
        ubicacionUsuario.lng,
        curso.lat,
        curso.lng
      );
      textoDistancia = `📍 A ${formatearDistancia(km)}`;
    }

    const marker = L.marker([curso.lat, curso.lng]).addTo(marcadoresLayer);
    marker.bindPopup(`
      <strong>${curso.nombre}</strong><br />
      ${curso.institucion}<br />
      ${curso.ubicacion} · ${curso.modalidad}<br />
      Precio: ${curso.precio}<br />
      <em>${textoDistancia}</em>
    `);
    bounds.push([curso.lat, curso.lng]);

    const card = document.createElement("article");
    card.className = "curso-card";
    card.innerHTML = `
      <h3>${curso.nombre}</h3>
      <p class="curso-meta">
        <strong>${curso.institucion}</strong> · ${curso.categoria} · ${curso.modalidad}<br />
        ${curso.ubicacion} · Duración: ${curso.duracion} · <strong>Precio:</strong> ${curso.precio}
      </p>
      <p class="curso-verif">
        <strong>Distancia:</strong> ${textoDistancia} · Última revisión: ${curso.verificado}
      </p>
      <div class="curso-actions">
        <button type="button" class="btn-centrar" data-id="${curso.id}">Ver en mapa</button>
        <a class="link-oficial" href="${curso.urlOficial}" target="_blank" rel="noopener noreferrer">
          Sitio oficial →
        </a>
      </div>
    `;

    card.querySelector(".btn-centrar").addEventListener("click", () => {
      map.setView([curso.lat, curso.lng], 12);
      marker.openPopup();
      estadoMapa.textContent = `Ubicación centrada en: ${curso.ubicacion} (${textoDistancia})`;
    });

    listaCursos.appendChild(card);
  });

  if (ajustarVista && bounds.length > 0) {
    if (ubicacionUsuario) {
      bounds.push([ubicacionUsuario.lat, ubicacionUsuario.lng]);
    }
    map.fitBounds(bounds, { padding: [35, 35], maxZoom: 12 });
  }
}

function activarUbicacion(silencioso = false) {
  if (!navigator.geolocation) {
    if (!silencioso) {
      estadoMapa.textContent = "Tu navegador no soporta geolocalización; puedes buscar manualmente.";
    }
    return;
  }

  if (!silencioso) {
    estadoMapa.textContent = "Solicitando permiso de ubicación...";
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      ubicacionUsuario = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      };
      dibujarUbicacionUsuario(true);
      renderizar(filtrarCursos(), false);
      estadoMapa.textContent = "Tu ubicación está activa en el mapa y los cursos muestran la distancia hacia ti.";
    },
    () => {
      if (!silencioso) {
        estadoMapa.textContent = "No se compartió la ubicación; puedes seguir explorando todo México manualmente.";
      }
    }
  );
}

inputBuscador.addEventListener("input", () => renderizar(filtrarCursos()));
selectCategoria.addEventListener("change", () => renderizar(filtrarCursos()));
selectModalidad.addEventListener("change", () => renderizar(filtrarCursos()));

btnLimpiar.addEventListener("click", () => {
  inputBuscador.value = "";
  selectCategoria.value = "";
  selectModalidad.value = "";
  renderizar(filtrarCursos(), false);
  if (ubicacionUsuario) {
    dibujarUbicacionUsuario(true);
  } else {
    map.setView([23.6345, -102.5528], 5);
  }
  estadoMapa.textContent = "Filtros limpios.";
});

btnUbicacion.addEventListener("click", () => activarUbicacion(false));

// Carga inicial
renderizar(cursos);
// Intenta detectar tu ubicación automáticamente al abrir (si das permiso en el navegador)
activarUbicacion(true);