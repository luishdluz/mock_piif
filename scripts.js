// Cerrar menú al hacer clic fuera
document.addEventListener('click', function(e) {
  const menu = document.getElementById('menuUsuario');
  const foto = document.querySelector('.user-img');
  if (!menu.contains(e.target) && !foto.contains(e.target)) {
    menu.style.display = 'none';
  }
});


const inputBuscar = document.getElementById('buscarLibro');
const gridLibros = document.getElementById('gridLibros');

inputBuscar.addEventListener('input', () => {
  const filtro = inputBuscar.value.toLowerCase();
  const libros = gridLibros.getElementsByClassName('libro');

  Array.from(libros).forEach(libro => {
    const titulo = libro.querySelector('h5').textContent.toLowerCase();
    if(titulo.includes(filtro)) {
      libro.style.display = 'flex';
    } else {
      libro.style.display = 'none';
    }
  });
});

const modal = document.getElementById('modalLibro');
const modalImg = document.getElementById('modalImagen');
const modalTitulo = document.getElementById('modalTitulo');
const modalDescripcion = document.getElementById('modalDescripcion');
const cerrarBtn = document.querySelector('.cerrar');

document.querySelectorAll('.icono-info').forEach(icono => {
  icono.addEventListener('click', () => {
    const libro = icono.closest('.libro');
    modalTitulo.textContent = libro.getAttribute('data-titulo');
    modalDescripcion.textContent = libro.getAttribute('data-descripcion');
    modalImg.src = libro.getAttribute('data-imagen');
    modal.style.display = 'flex'; // mostrar modal
  });
});

// Cerrar modal con la X
cerrarBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar al hacer clic fuera
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


const vistaLibro = document.getElementById('vistaLibro');
const btnRegresar = document.getElementById('btnRegresar');
const buscador = document.querySelector('.busqueda-libros'); // div completo

document.querySelectorAll('.btn-explorar').forEach(boton => {
  boton.addEventListener('click', () => {
    const libro = boton.closest('.libro');

    // Ocultar grid y buscador
    gridLibros.style.display = 'none';
    buscador.style.display = 'none';

    // Mostrar vista libro
    vistaLibro.style.display = 'flex';
    // Opcional: scroll al top del main para que se vea desde arriba
    vistaLibro.scrollIntoView({ behavior: 'smooth' });
  });
});

btnRegresar.addEventListener('click', () => {
  // Ocultar vista libro
  vistaLibro.style.display = 'none';

  // Mostrar grid y buscador
  gridLibros.style.display = 'grid';
  buscador.style.display = 'flex';
});

function actualizarPaddingMain() {
  const main = document.querySelector('main');
  const headerAltura = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'));
  const buscadorVisible = buscador.style.display !== 'none';
  const paddingTop = headerAltura + (buscadorVisible ? buscador.offsetHeight : 0) + 20; // +20 margen extra
  main.style.paddingTop = paddingTop + 'px';
}

// Llamar al inicio
actualizarPaddingMain();

// Al mostrar u ocultar buscador
document.querySelectorAll('.btn-explorar').forEach(boton => {
  boton.addEventListener('click', () => {
    gridLibros.style.display = 'none';
    buscador.style.display = 'none';
    vistaLibro.style.display = 'flex';
    actualizarPaddingMain();
    vistaLibro.scrollIntoView({ behavior: 'smooth' });
  });
});

btnRegresar.addEventListener('click', () => {
  vistaLibro.style.display = 'none';
  gridLibros.style.display = 'grid';
  buscador.style.display = 'flex';
  actualizarPaddingMain();
});



