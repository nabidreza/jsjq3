//js
function  textChange(){
	document.getElementById('h2').innerHTML = "hey!! It was a joke man"
}




//jquery
$(document).ready(function(){

	//alert
	$('.button').click(function(){
		alert("Your device is blasting")
	});
	//hide
	$('.hide').click(function(){
		$('h4').hide();
	});
	//show
	$('.show').click(function(){
		$('h4').show();
	});
	//toggle
	$('.toggle').click(function(){
		$('h4').toggle();
	});
	//fadein
	$('.fadein').click(function(){
		$('h4').fadeIn("fast");
	});
	//fadeout
	$('.fadeout').click(function(){
		$('h4').fadeOut("slow");
	});
	//fadetoggle
	$('.fadetoggle').click(function(){
		$('h4').fadeToggle(100);
	});
	//fadeto
	$('.fadeto').click(function(){
		$('h4').fadeTo(1000,.5);
	});

	//slide
	$('.ques').mouseenter(function(){
		$('.ans').slideDown("fast");
	});
	$('.ques').mouseout(function(){
		$('.ans').slideUp(1000);
	});





	//practice from api documantation
	//add ( + clone() + apend to() )
	$('li').add('p').css("background-color","skyblue");
	$('.add').css("background-color","black").add('.p1').css("color","blue");
	$('.p1').clone().add("<span>veryy good</span>").appendTo(document.body).css("background-color","skyblue");

	//addback ( +nextall() )
	$('li.item2').nextAll().addBack().css("border","1px solid blue");
	//addclass ( +last() )
	$('.p2').last().addClass("selected highlited");
	//after
	$('.p2').after("<b>greeaaaattt!!!</b>");
	$('.p2').after(document.createTextNode("hey"));
	//stop
	$('.slide').click(function(){
		$('.slide-').slideDown(5000);
	});
	$('.stop').click(function(){
		$('.slide-').stop();
	});
	//chaining
	$('.chaining').click(function(){
		$('.slide-chain').slideUp(1000).slideDown(1000).hide(1000);
	});
	//append
	$('.append').click(function(){
		$('.pappend').append("<h4>append</h4>");
	});
	//prepend
	$('.prepend').click(function(){
		$('.pprepend').prepend("<li>prepend</li>");
	});
	//before after 
	$('.before').click(function(){
		$('.img').before("<h4>before</h4>");
	});
	$('.after').click(function(){
		$('.img').after("<h4>after</h4>");
	});
});
