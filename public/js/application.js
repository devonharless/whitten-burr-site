$(document).ready(function() {

  //Global vars
 

  //Process Slide Controller
  offeringSlide();

  function offeringSlide() {
    $('#slide1 li a').live('click', showNextOffering);
  } 

  function toggleOffering(event) {
    event.preventDefault();
    console.log('hi')
  }

  function showNextOffering(event) {
    event.preventDefault();
    
    $('#slide1 li a').die('click', showNextOffering);

    var $newHeadline = $(event.target).text().toLowerCase();
    var $identifier = '.' + $newHeadline;
    var $shownCopy = $('#slide1 blockquote').find($identifier);
    
    $('#slide1 h2').text($newHeadline);
    $('#slide1 blockquote p').removeClass('active');
    $($shownCopy[0]).addClass('active');

    $('#slide1 li a').removeClass('active');
    $(event.target).addClass('active');

    
    if($(event.target).parent().position().top < -20) {
      $(event.target).parent().transition({ y: '0px' });
      returnToMain(); 
    }
    else {
      $(event.target).parent().siblings().transition({ y: '0px' }, 300, 'snap');
      $(event.target).parent().transition({ y: '-20px' }, 300, 'out');

      $('#slide1 blockquote').css({ y: '30px', opacity: '0' }).transition({ y: '0px', opacity: 1 }, 300, function() {
        $('#slide1 li a').live('click', showNextOffering);
       });
      $('#slide1 h2').css({ y: '30px', opacity: '0' }).transition({ y: '0px', opacity: 1 }, 300);
    }
    
  }

  function returnToMain() {
    $('#slide1 h2').text('offering');
    $('#slide1 blockquote p').removeClass('active');
    $('#slide1 .offering').addClass('active');

    $('#slide1 blockquote').css({ y: '-30px', opacity: '0' }).transition({ y: '0px', opacity: 1 }, 300, function() {
      $('#slide1 li a').live('click', showNextOffering);
     });
    $('#slide1 h2').css({ y: '-30px', opacity: '0' }).transition({ y: '0px', opacity: 1 }, 300);
  }
});