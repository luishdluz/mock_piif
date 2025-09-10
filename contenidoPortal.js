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

  
  
  
});