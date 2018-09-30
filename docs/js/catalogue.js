

function handleFlip(element){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

		element.classList.toggle('hover');
		element.classList.toggle('unflip');

		var elementsHover = document.getElementsByClassName("hover");

		for (var i = 0; i < elementsHover.length; i++) {
			var myElement = elementsHover[i];
			if(myElement !== element){
				myElement.classList.toggle('hover');
				myElement.classList.toggle('unflip');
			}
		}
	}
}

window.onload = function(){

	var main = document.getElementById("main");

	$.getJSON( "./conf/games.json", function( data ) {

		data.map(function(item){
			main.innerHTML += ''
			+'<div class="col-12 col-xs-12 my-md col-md-3 col-lg-3 no-padding">'
				+'<div class="image-flip unflip" onclick="handleFlip(this);">'
					+'<div class="mainflip no-padding">'

						+'<div class="frontside">'
							+'<div class="card">'
								+'<div class="card-body text-center no-padding">'
									//+'<p class="card-header"><img class="" src="'+item.logo+'" alt="card image"></p>'
									+'<p class="card-title h4">'+item.title+'</p>'
									+'<p class="card-text">'+item.short_desc+'</p>'
									+'<div class="button-play hidden-md hidden-lg" onclick="window.location.href=`'+item.url+'`"><div class="button-image"></div></div>'
						        +'</div>'
							+'</div>'
						+'</div>'

						+'<div class="backside">'
							+'<div class="card">'
								+'<div class="card-body text-center no-padding">'
									+'<img class="" src="'+item.info_img+'" alt="'+item.title+'">'
									//+'<p class="card-text">'+item.long_desc+'</p>'
									+'<div class="button-play" onclick="window.location.href=`'+item.url+'`"><div class="button-image"></div></div>'
								+'</div>'
							+'</div>'
						+'</div>'

					+'</div>'
				+'</div>'
			+'</div>';
		});
	});
}