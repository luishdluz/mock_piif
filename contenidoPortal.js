$(document).ready(function() {

	
  
  
  /*Botones y menu de hamburguesa*/
   $('#menu-hamburguesa-btn').click(function(){
    $('#menu-hamburguesa').slideToggle(200);
  });

  // Cerrar menú hamburguesa al seleccionar una imagen
  $('#menu-hamburguesa .menu-item').click(function(){
    $('#menu-hamburguesa').slideUp(200);
  });
  
  // Cambiar texto seleccionado al hacer clic en una opción
$(document).on("click", ".dropdown-item.opcion", function(e) {
  e.preventDefault();
  $("#texto-seleccionado").text($(this).text());
});

// Filtro en buscador
$("#buscador-dropdown").on("input", function() {
  const filtro = $(this).val().toLowerCase();
  $(".dropdown-item.opcion").each(function() {
    $(this).toggle($(this).text().toLowerCase().includes(filtro));
  });
});


// Cerrar menú lateral en móviles
document.getElementById("cerrarMenuLateral").addEventListener("click", () => {
  document.getElementById("menuLateral").classList.remove("show");
});


// Mostrar/ocultar subopciones y actualizar la flecha
document.querySelectorAll("a.menu-link.flecha").forEach(opcion => {
  opcion.addEventListener("click", (e) => {

    e.preventDefault();

    const liPadre = opcion.parentElement;
    const sublista = liPadre.querySelector("ul");

    if (!sublista) return;

    // Mostrar u ocultar sublista
    const estaAbierta = sublista.style.display === "block"; 
	
	sublista.style.display = estaAbierta ? "block" : "none";
	

    // Rotar flecha
    if (estaAbierta) {
      opcion.classList.remove("expandida");
    } else {
      opcion.classList.add("expandida");
    }
  });
});


document.getElementById("expandirTodo").addEventListener("click", () => {
    document.querySelectorAll("#menuPrincipal ul").forEach(sub => {
        sub.style.display = "block";
        const link = sub.previousElementSibling;
        if (link) link.classList.add("expandida");
    });
});

// Botón Contraer todo
document.getElementById("contraerTodo").addEventListener("click", () => {
    document.querySelectorAll("#menuPrincipal ul").forEach(sub => {
        sub.style.display = "none";
        const link = sub.previousElementSibling;
        if (link) link.classList.remove("expandida");
    });
});



mostrarGrafica();

window.addEventListener('resize', function() {
  if (Highcharts.charts[0]) {
    Highcharts.charts[0].reflow();
  }
});

$('#example').DataTable({
    responsive: true
  });
  
  
});