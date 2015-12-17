"use strict";

  var body = $('body'); 

 (function () {
   var game_slate = [

   [null, null, null],
   [null, null, null],
   [null, null, null]

   ]

 

   var box1 = $("#box1");
   var box2 = $("#box2"); 
   var box3 = $("#box3"); 
   var box4 = $("#box4"); 
   var box5 = $("#box5"); 
   var box6 = $("#box6"); 
   var box7 = $("#box7"); 
   var box8 = $("#box8"); 
   var box9 = $("#box9"); 

   var typeA = $(".typeA");

   var whosTurn = 1;


   var move;


   $('.abox').click(function(){
   	if (this.classList.contains('hasBeenPicked') == false){
	   	if (whosTurn === 1){
	   		var playerSun = $("<div class='Sun'></div>");
	   		$(this).addClass('hasBeenPicked')
	     	$(this).append(playerSun);
   			whosTurn = 2
	   	}else{
			var playerMoon = $("<div class='Moon'></div>");
			$(this).addClass('hasBeenPicked')
	     	$(this).append(playerMoon); 
	     	whosTurn = 1
	   	}
  

   	}

 

   





   })


     // $(box1).on('click' , function(){
 
     // 	$(this).toggleClass('box1');
     // 	var playerSun = $("<div class='Sun'></div>");
     // 	$(box1).append(playerSun);

     // });


     // $(box2).on('click' , function(square){
     // 	square.preventDefault();
     // 	$(this).toggleClass('box2');
     // 	var playerMoon = $("<div class='Moon'></div>");
     // 	$(box2).append(playerMoon);
     // });



})();