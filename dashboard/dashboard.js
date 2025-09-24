document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // quitar active de todas las tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    // activar la tab seleccionada y su contenido
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});


//contenido de inicio
// Toggle submenús
document.querySelectorAll(".nivel-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const sub = btn.nextElementSibling;
    if (sub) sub.classList.toggle("mostrar");
  });
});

// Expandir/Contraer todo
document.getElementById("expandir").addEventListener("click", () => {
  document.querySelectorAll(".menu-niveles ul").forEach(ul => ul.classList.add("mostrar"));
});
document.getElementById("contraer").addEventListener("click", () => {
  document.querySelectorAll(".menu-niveles ul").forEach(ul => ul.classList.remove("mostrar"));
});

// Toggle menú en móvil
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("menuLateral").classList.toggle("activo");
});

const cerrarMenu = document.getElementById('cerrarMenu');
cerrarMenu.addEventListener('click', () => {
  menuLateral.classList.remove('activo');
});

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 18; i++) {
    Highcharts.chart("grafica" + i, {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Gráfica ' + i
      },
      xAxis: {
        categories: ['A', 'B', 'C', 'D']
      },
      yAxis: {
        title: {
          text: 'Valores'
        }
      },
      series: [{
        name: 'Serie 1',
        data: [1, 3, 2, 4]
      }]
    });
  }
});


$(document).ready(function () {
  $('#menuLateral .menu-buscador input').on('input', function () {
    let filtro = $(this).val().toLowerCase();

    $('#menuLateral .menu-niveles li').each(function () {
      let texto = $(this).text().toLowerCase();
      // Mostrar o esconder según el texto contenga el filtro
      if (texto.indexOf(filtro) > -1) {
        $(this).show();
        // expandir padres para que se vea el resultado
        $(this).parents('ul').addClass('mostrar');
      } else {
        $(this).hide();
      }
    });
  });
});


document.getElementById("btnBuscar").addEventListener("click", () => {
  const query = document.getElementById("inputBusqueda").value.trim();
  const resultados = document.getElementById("resultadosBusqueda");

  // Limpiar resultados previos
  resultados.innerHTML = "";

  if(query === ""){
	resultados.innerHTML = "Sin resultados";
	return;
  }

  // Ejemplo de datos simulados
  const datos = [
    { titulo: "Resultado 1", contenido: "Detalle del resultado 1 relacionado con '" + query + "'." },
    { titulo: "Resultado 2", contenido: "Detalle del resultado 2 relacionado con '" + query + "'." },
    { titulo: "Resultado 3", contenido: "Detalle del resultado 3 relacionado con '" + query + "'." }
  ];

  datos.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("acordeon-item");

    const header = document.createElement("div");
    header.classList.add("acordeon-header");
    header.textContent = item.titulo;

    const content = document.createElement("div");
    content.classList.add("acordeon-content");
    content.textContent = item.contenido;

    header.addEventListener("click", () => {
      const isVisible = content.style.display === "block";
      content.style.display = isVisible ? "none" : "block";
    });

    itemDiv.appendChild(header);
    itemDiv.appendChild(content);
    resultados.appendChild(itemDiv);
  });
});
