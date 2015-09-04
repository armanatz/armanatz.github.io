$(document).ready(function() {
  $('#windShield').click(function(){
    $('#windShieldPanel').toggleClass('panel-additional-selected');
  });
  $('#riots').click(function(){
    $('#riotsPanel').toggleClass('panel-additional-selected');
  });
  $('#actsOfGod').click(function(){
    $('#actsOfGodPanel').toggleClass('panel-additional-selected');
  });
  
  var lastClicked = 0;  
  
  $('#addDriver1').click(function(){
    if(lastClicked < 3){
      lastClicked++;
    }
    $.fn.fullpage.moveTo(2, lastClicked);
  });
  $('#addDriver2').click(function(){
    if(lastClicked < 3){
      lastClicked++;
    }
    $.fn.fullpage.moveTo(2, lastClicked);
  });
  $('#addDriver3').click(function(){
    if(lastClicked < 3){
      lastClicked++;
    }
    $('#addDriver3, #addDriver2, #addDriver1').addClass('disabled');
    $.fn.fullpage.moveTo(2, lastClicked);
  });
  
  $('#delDriver3').click(function(){
    if(lastClicked > 0){
      lastClicked--;
    }
    $('#addDriver3, #addDriver2, #addDriver1').removeClass('disabled');
    $.fn.fullpage.moveTo(2, 2);
  });
  $('#delDriver2').click(function(){
    if(lastClicked > 0){
      lastClicked--;
    }
    $.fn.fullpage.moveTo(2, 1);
  });
  $('#delDriver1').click(function(){
    if(lastClicked > 0){
      lastClicked--;
    }
    $.fn.fullpage.moveTo(2, 0);
  });
  
  $('#primaryDriver .next-driver, #additionalDriver1 .next-driver,' + 
      '#additionalDriver2 .next-driver').click(function(){
        $.fn.fullpage.moveSlideRight();
  })
  $('#additionalDriver1 .prev-driver, #additionalDriver2 .prev-driver,' + 
      '#additionalDriver3 .prev-driver').click(function(){
        $.fn.fullpage.moveSlideLeft();
  })
  
  if($(window).width() < 601){
    $('#addDelBtns1, #addDelBtns2, #addDelBtns3, #addDelBtns4').removeClass('pull-left');
    $('#nextPrevBtns1, #nextPrevBtns2, #nextPrevBtns3, #nextPrevBtns4').removeClass('pull-right');
    $('#addDelBtns1, #addDelBtns2, #addDelBtns3, #addDelBtns4').addClass('text-center');
    $('#nextPrevBtns1, #nextPrevBtns2, #nextPrevBtns3, #nextPrevBtns4').addClass('text-center');
    $('#nextPrevBtns1, #nextPrevBtns2, #nextPrevBtns3, #nextPrevBtns4').addClass('btn-margin-top');
  }
  
  $('#fullPage').fullpage({
    paddingTop: '80px',
    paddingBottom: '28px',
    scrollBar: true,
    loopHorizontal: false,
    fixedElements: '.quote-box',
//    responsiveWidth: 601,
    scrollOverflow: true,
    keyboardScrolling: false,
    controlArrows: false,
    onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){

      if(index == 2 && slideIndex == 0 && direction == 'right' && lastClicked == 1){
        $('#primaryDriver .next-driver').removeClass('disabled');
      }

      if(index == 2 && slideIndex == 1 && direction == 'right' && lastClicked == 2){
        $('#additionalDriver1 .next-driver').removeClass('disabled');
      }
      
      if(index == 2 && slideIndex == 2 && direction == 'right' && lastClicked == 3){
        $('#additionalDriver2 .next-driver').removeClass('disabled');
      }
      
      if(index == 2 && slideIndex == 3 && direction == 'left' && lastClicked == 2){
        $('#additionalDriver2 .next-driver').addClass('disabled');
      }

      if(index == 2 && slideIndex == 2 && direction == 'left' && lastClicked == 1){
        $('#additionalDriver1 .next-driver').addClass('disabled');
      }

      if(index == 2 && slideIndex == 1 && direction == 'left' && lastClicked == 0){
        $('#primaryDriver .next-driver').addClass('disabled');
      }
      
    }
  });
});

