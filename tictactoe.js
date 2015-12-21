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
    [box4, box5, box6],
    [box7, box8, box9]

   ];


 

  

   var playerTurn = 1;

   var movesCount = 0;


  overlay.hide();


      $('.abox').click(function(){
   	   if (this.classList.contains('hasBeenPicked') == false){
	   	if (playerTurn === 1){
	   		var playerSun = $("<div class='Sun'></div>");
	   		$(this).addClass('hasBeenPicked')
	     	$(this).append(playerSun);
   			playerTurn = 2;
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
          for(var k = 0; k < game_slate.length; k++){

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
        for(var i = 0; i < game_slate.length; i++){
          var count = 0;
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
        if($('div' ,game_slate[0][0]).hasClass('Sun') &&
           $('div' ,game_slate[1][1]).hasClass('Sun') &&
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
             // console.log("checkrows: winner is "+winner+"");
             declareWinner(winner);
             return winner
            
          }else if(checkCols() !== undefined){
            var winner = checkCols();
             // console.log("checkcols: winner is "+winner+"");
             declareWinner(winner);
            return winner

          }else if(checkDiag() !== undefined){
              var winner = checkDiag();
              //console.log("checkDiag: winner is "+winner+"");
              declareWinner(winner);
               docOverlay();
            return winner
          }
          
        }
       
         
      };

   var declareWinner = function(winner){
        
       
      

     
       var finMsg = $('#overlay')
       finMsg.append($("<div class='message'>"))
       finMsg.text("**" +winner+ " wins!**")
       finMsg.css({
          'font-family' : 'Bevan',
          'color' : 'silver',
           'font-size' : '150px'
        });
         overlay.show();
      }
       
      


 
      })();






          // var docOverlay = function(){
          //   $(document).height();

          // $("body").append("<div id='overlay'></div>");

          //  $("#overlay").height(docOverlay);
         

          //   }



   // function checkForWinner(){
   //          var winner = 0;
   //        if(game_board).find('#box1').hasClass('row1 col1') && 
   //               (game_board).find('#box2').hasClass('row1 col2') &&
   //               (game_board).find('#box3').hasClass('row1 col3')){
   //            console.log("Winner is one!");
   //          }
   //       }


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



