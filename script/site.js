$.fn.randomize=function(a){(a?this.find(a):this).parent().each(function(){$(this).children(a).sort(function(){return Math.random()-0.5}).detach().appendTo(this)});return this};

var scrollspeed = 500;

function selectItem( event ) {
	event.preventDefault( );
	
	var curritem = parseInt( $( this ).attr( 'href' ).substr( 1 ) );
	
	$( '.column' ).each( function( index, item ) {
		var scrolldestination = $( item ).find( '.project-' + curritem );
		if ( scrolldestination.size( ) > 0 ) 
			$( item ).scrollTo( scrolldestination, scrollspeed, { offset: -201 } )
	} );
	
	$('#content').removeClass("active");
	

}

function sizeColumns( ) {
	$( '.column' ).height( $( window ).height( ));
	$( '.column.text > div' ).height( $( window ).height( ));

//	$( '.column' ).height( $( window ).height( ) - $( '#logo' ).height( ) );
}

function initPage( ) {

	$( '.column > div' ).randomize( );

	sizeColumns( );
	
	$( window ).resize( sizeColumns );
	
		
	$( '#navigatie ul li a' ).click( selectItem );
	
	$( '.more-info').on("click", function(){
		if($('#content').hasClass("active")){
			//$('#content').removeClass("active");
		}else{
			$('#content').addClass("active").load( $( this ).attr("data-url") );
			
		}
		
	});
}



$( document ).ready( initPage );