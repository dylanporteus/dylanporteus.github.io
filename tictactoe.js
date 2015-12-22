"use strict";



 (function () {

   

   
   var overlay = $('#overlay')


 

   var box1 = $("#box1");
   var box2 = $("#box2"); 
   var box3 = $("#box3"); 
   var box4 = $("#box4"); 
   var box5 = $("#box5"); 
   var box6 = $("#box6"); 
   var box7 = $("#box7"); 
   var box8 = $("#box8"); 
   var box9 = $("#box9"); 
   
   var game_slate = [
    
    [box1, box2, box3],
    [box4, box5, box6],    //Contains the variables for each of the nine divs that 
    [box7, box8, box9]     //make up the board.

   ];


 

  

   var playerTurn = 1;

   var movesCount = 0;


  overlay.hide();   //The overlay is automatically hidden at the beginning of the game,
                    //or else it will be unplayable.


      $('.abox').click(function(){
   	   if (this.classList.contains('hasBeenPicked') == false){
	   	if (playerTurn === 1){
	   		var playerSun = $("<div class='Sun'></div>");      //This function ensures that each box will be clickable,
	   		$(this).addClass('hasBeenPicked')                  //that it will always alternate (thanks to playerTurn) between
	     	$(this).append(playerSun);                         //the Sun and Moon. They are appended as classes into the
   			playerTurn = 2;                                    //game_slate wrapper.
        movesCount++;
        getWinner();
	   	}else{
			var playerMoon = $("<div class='Moon'></div>");
			$(this).addClass('hasBeenPicked')
	     	$(this).append(playerMoon); 
	     	playerTurn = 1;
        movesCount++;
        getWinner();
	   	}
  

   	}


    });






      var checkRows = function(){
        console.log('checkrows called')
        for(var i = 0; i < game_slate.length; i++){
          var count = 0;
          for(var k = 0; k < game_slate.length; k++){             //This function will check the game_slate array
                                                                  //for three of the same symbol lined up in any row. 
            if($('div', game_slate[i][k]).hasClass('Sun')){
              count++;
            }else if($('div', game_slate[i][k]).hasClass('Moon')){
              count--;
            }
          }//end of k for loop
          console.log('row ' + i + ' has count ' + count);
           if(count === 3){
            return 'Day';
           }else if(count === -3){
            return 'Night';
           }else if(movesCount === 9 && count !== 3 && count !== -3){
            
            return 'Neither';
           }
        }//end of i for loop

      };

      var checkCols = function(){
        console.log('checklos called')
        for(var i = 0; i < game_slate.length; i++){             //This function will check the game_slate array
          var count = 0;                                        //for three of the same symbol lined up in any column.    
          for(var c = 0; c < game_slate.length; c++){
            if($('div', game_slate[c][i]).hasClass('Sun')){
              count++;
            }else if($('div', game_slate[c][i]).hasClass('Moon')){
              count--;
            }
          }//end of k for loop
           if(count === 3){
              return 'Day';
           }else if(count === -3){
            return 'Night';
           }else if(movesCount === 9 && count !== 3 && count !== -3){
            
            return 'Neither';
           }
        }//end of i for loop
        
      };

      var checkDiag = function(){
        console.log('checkdiag called')
        if($('div' ,game_slate[0][0]).hasClass('Sun') &&    //This function will check the game_slate array
           $('div' ,game_slate[1][1]).hasClass('Sun') &&    //for three of the same symbol lined up in either diagonal.
           $('div' ,game_slate[2][2]).hasClass('Sun') ||
           $('div' ,game_slate[0][2]).hasClass('Sun') &&
           $('div' ,game_slate[1][1]).hasClass('Sun') &&
           $('div' ,game_slate[2][0]).hasClass('Sun')){
             return 'Day';
        }else if($('div' ,game_slate[0][0]).hasClass('Moon') &&
           $('div' ,game_slate[1][1]).hasClass('Moon') &&
           $('div' ,game_slate[2][2]).hasClass('Moon') ||
           $('div' ,game_slate[0][2]).hasClass('Moon') &&
           $('div' ,game_slate[1][1]).hasClass('Moon') &&
           $('div' ,game_slate[2][0]).hasClass('Moon')){
             return 'Night';
        }else if(movesCount === 9 && count !== 3 && count !== -3){
           
          return 'Neither';
        }
       
      };


      
  

     var getWinner = function(){
      console.log('getwinner called')
        if(movesCount >= 5){
          if(checkRows() !== undefined){
             var winner = checkRows();
             
             declareWinner(winner);
             return winner                           //Winner will be either "Day" (for three suns), "Night" (for three moons),
          }else if(checkCols() !== undefined){        //or "Neither" in the case of a tie.
            
            var winner = checkCols();
             
             declareWinner(winner);
            return winner

          }else if(checkDiag() !== undefined){
              var winner = checkDiag();
              
              declareWinner(winner);
               docOverlay();
            return winner
          }
          
        }
       
         
      };

   var declareWinner = function(winner){
        
       
      // if(winner === "Day"){
      //   $('.sun-win').fadeIn("slow");
      // }

     
       var finMsg = $('#overlay')
       finMsg.append($("<div class='message'>"))
       finMsg.text("**" +winner+ " wins!**")          //This function is called once a win or a tie is identified,
       finMsg.css({                                   //appends the ending message to the overlay div, and finally
          'font-family' : 'Bevan',                    //reveals the overlay. Tiles become unclickable once the overlay
          'color' : 'silver',                         //appears.
           'font-size' : '150px'
        });
         overlay.show();
      }
       
      


 
      })();






     



