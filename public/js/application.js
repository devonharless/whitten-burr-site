$(document).ready(function() {

  //Global vars
 

  //Process Slide Controller
  offeringSlide();

  function offeringSlide() {
    console.log('this is happening')
    $('#slide1 li a').live('click', showNextOffering);
  } 

  function showNextOffering(event) {
    event.preventDefault();
    
    var $newHeadline = $(event.target).text().toLowerCase();
    var $identifier = '.' + $newHeadline;
    var $shownCopy = $('#slide1 blockquote').find($identifier);
    
    $('#slide1 h2').text($newHeadline);
    $('#slide1 blockquote p').removeClass('active');
    $($shownCopy[0]).addClass('active');

    $('#slide1 li a').removeClass('active');
    $(event.target).addClass('active');

    $(event.target).parent().siblings().transition({ y: '0px' }, 300, 'snap');
    $(event.target).parent().transition({ y: '-20px' }, 300, 'out');

    //$('#slide1 blockquote').fadeOut();

    $('#slide1 blockquote').css({ y: '30px', opacity: '0' }).transition({ y: '0px', opacity: 1 });
    $('#slide1 h2').css({ y: '30px', opacity: '0' }).transition({ y: '0px', opacity: 1 });
    
  }
});