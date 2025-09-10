$(document).ready(function() {

  // Cerrar menú al hacer clic fuera
  $(document).click(function(e) {
    const $menu = $('#menuUsuario');
    const $foto = $('.user-img');
    if(!$menu.is(e.target) && $menu.has(e.target).length === 0 &&
       !$foto.is(e.target) && $foto.has(e.target).length === 0) {
      $menu.hide();
    }
  });

  // Filtrar libros
  $('#buscarLibro').on('input', function() {
    const filtro = $(this).val().toLowerCase();
    $('#gridLibros .libro').each(function() {
      const titulo = $(this).find('h5').text().toLowerCase();
      $(this).toggle(titulo.includes(filtro));
    });
  });

	// Modal libro
	$(".icono-info").on("click", function () {
	  const libro = $(this).closest(".libro");
	  $("#modalTitulo").text(libro.data("titulo"));
	  $("#modalDescripcion").text(libro.data("descripcion"));
	  $("#modalImagen").attr("src", libro.data("imagen"));

	  $("#modalLibro").css("display", "flex"); // lo mostramos centrado
	});

	// Cerrar modal
	$(".cerrar").on("click", function () {
	  $("#modalLibro").hide();
	});
	
	$("#modalLibro").on("click", function (e) {
	  if ($(e.target).is("#modalLibro")) {
		$(this).hide();
	  }
	});
  
  //Menu de hamburguesa

  $('.menu-hamburguesa').click(function() {
    $('.menu-hamburguesa-contenido').slideToggle(200);
  });

  // Cerrar menú al hacer clic fuera
  $(document).click(function(e) {
    if (!$(e.target).closest('.menu-hamburguesa, .menu-hamburguesa-contenido').length) {
      $('.menu-hamburguesa-contenido').slideUp(200);
    }
  });
  
  $('.btn-explorar').click(function() {
	  
	const libro = $(this).closest('.libro');

    // Obtener data
    const titulo = libro.data('titulo');
    const imagen = libro.data('imagen');  
	
    // Ocultar todas las tarjetas de libros
    $('#gridLibros').hide();

    // Ocultar buscador de libros y mostrar buscador de índices
     $('#buscarLibro').hide();
     $('#buscarIndices').show();
     $('.libBoton').show();
	 
	
    // Mostrar texto en lugar de libros
    $('#texto-indices').show();
	
	// Mostrar detalle del libro
    $('#detalle-titulo').text(titulo);
    $('#detalle-imagen').attr('src', imagen);
    $('#detalle-libro').fadeIn();
  });
  
  $('.btn-atras').click(function() {
    // Ocultar todas las tarjetas de libros
    $('#gridLibros').show();

    // Ocultar buscador de libros y mostrar buscador de índices
     $('#buscarLibro').show();
     $('#buscarIndices').hide();
     $('.libBoton').hide();
	 
	
    // Mostrar texto en lugar de libros
    $('#texto-indices').hide();
  });
  
  
  /* Buscar indices */
  $('#buscarIndices').on('input', function() {
    const termino = $(this).val().toLowerCase();

    // Mostrar u ocultar cards según el término
    $('.textIndice').each(function() {
      const nombreCard = $(this).text().toLowerCase();
      if (nombreCard.includes(termino)) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
    });
  });
  
  /* Clic en indice */
  $('.changelog-entry').click(function() {
    $('.changelog-entry').find(".change-type").removeClass("added"); 
	$('.changelog-entry').find(".textIndice").css("color","#ffffff");

    
    $(this).find(".change-type").addClass("added"); 
	$(this).find(".textIndice").css("color","#FFD700");

    // Obtiene nombre del indice seleccionado
	const nombre = $(this).find(".textIndice").text();
	
	// Obtener la descripción del card seleccionado
    const descripcion = $(this).data('descripcion');

    // Mostrar la descripción en la columna derecha
	$('.card-title').text(nombre);
    $('#descripcion-card').text(descripcion);
  });
  
  
  
  function actualizarAlturas() {
	const headerAltura = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'));
	const buscador = document.querySelector('.busqueda-libros');
	const buscadorAltura = buscador && buscador.offsetHeight ? buscador.offsetHeight : 0;
	const detalleL = document.querySelector('#detalle-libro');
	const detalleLibroAltura = detalleL && detalleL.offsetHeight ? detalleL.offsetHeight : 0;
console.log(detalleLibroAltura);
  // Altura disponible exacta
  const alturaDisponible = window.innerHeight - headerAltura - buscadorAltura - detalleLibroAltura;
   console.log(alturaDisponible);

  // Pasamos esta altura al grid
  document.documentElement.style.setProperty('--altura-grid', alturaDisponible + 'px');
}

// Ejecutar al inicio y en resize
actualizarAlturas();
window.addEventListener('resize', actualizarAlturas);

$('.textIndice').first().css('color', '#fd850c');
$('.textIndice').first().click();


$('.tab').click(function(){
    var tabId = $(this).data('tab');

    // Cambiar clase activa en botones
    $('.tab').removeClass('active');
    $(this).addClass('active');

    // Mostrar contenido correspondiente
    $('.tab-content').removeClass('active');
    $('#' + tabId).addClass('active');
  });


});
