var divs;

function transicion(){
	$('#contenido').css('display','none');
	$('#contenido').fadeIn(1000);
}
function index(){
	$('#cabecera h1 a').addClass('oculto');
	$('#cabecera h1 span').removeClass('oculto');
	$.each(divs,function(){
		$('#'+this).addClass('oculto');
		if(this!=='index'){
			$('#sideBar .'+this).addClass('enlaces');
			$('#sideBar .'+this).removeClass('spans')
		}
	});
	$('#index').removeClass('oculto');
	transicion();
}
function menu(){
	var x=$(this);
	ocultar(x.html().toLowerCase());
	$('#cabecera h1 a').removeClass('oculto');
	$('#cabecera h1 span').addClass('oculto');
}
function ocultar(id){
	var x=$('#'+id);
	$.each(divs,function(){
		if(id!=this){
			$('#'+this).addClass('oculto');
			$('.'+this).addClass('enlaces');
			$('.'+this).removeClass('spans')
		}
		else{
			$('#'+this).removeClass('oculto');
			$('.'+this).addClass('spans');
			$('.'+this).removeClass('enlaces');
			transicion(this);
		}
	}
	)
}
function cargarMapa(){
	$('#mapa').append('<iframe width="500" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.es/maps?hl=es&amp;ie=UTF8&amp;q=clinica+veterinaria+ciudad+naranco+google+maps&amp;fb=1&amp;gl=es&amp;hq=clinica+veterinaria+ciudad&amp;hnear=0xd368da569d20e79:0x2604f58381eadf91,Naranco,+Oviedo&amp;cid=0,0,12261644245123539917&amp;ll=43.37031,-5.854825&amp;spn=0.006295,0.006295&amp;t=h&amp;vpsrc=6&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="http://maps.google.es/maps?hl=es&amp;ie=UTF8&amp;q=clinica+veterinaria+ciudad+naranco+google+maps&amp;fb=1&amp;gl=es&amp;hq=clinica+veterinaria+ciudad&amp;hnear=0xd368da569d20e79:0x2604f58381eadf91,Naranco,+Oviedo&amp;cid=0,0,12261644245123539917&amp;ll=43.37031,-5.854825&amp;spn=0.006295,0.006295&amp;t=h&amp;vpsrc=6&amp;iwloc=A&amp;source=embed" style="color:#0000FF;text-align:left">Ver mapa más grande</a></small>');
}

/*Resizing menu*/
function resizeMenu(dim){
	var distancia =0;
	var navegador = 0;
	var multiplier = 6;
	var $lis = $('#sideBar').find('li');

	if(dim>1280){
		multiplier=9;
	}else{
		if(dim>980){
			multiplier= 10;
		}
	}
	$lis.each(function() {
		distancia += $(this).width();
	});

	navegador = $(window).width();
	
	var diferencia = ((navegador-distancia)/2)- ((multiplier*navegador/100));
	if(diferencia>=0){
		$('#sideBar').css('margin-left',diferencia);       
	}
};

$(window).resize(function(){
    var dim = $(window).width();
    if(dim>650){
		resizeMenu(dim);
	}else{
		$('#sideBar').css('margin-left',0);
	}
});

$(document).ready(function(){
	/*Shading sections*/
	divs=["index","galeria","servicios","contacto"];
	$('body').css('display','none');
	$('body').fadeIn(1000);
	index();
	$('#sideBar ul li a').click(menu);
	$('#cabecera h1 a').click(index);
	/*End of shading*/

	/*Resizing menu to the browser width*/
	var dim = $(window).width();
    if(dim>650){
		resizeMenu(dim);
	}else{
		$('#sideBar').css('margin-left',0);
	}
	/*End of resizing*/

});