$(document).ready(function() {

  //Global vars
  var insideOffering;

  //Process Slide Controller
  offeringSlide();

  function offeringSlide() {
    insideOffering = false;
    $('#slide1 li a').bind('click', initialOffering);
  } 

  function initialOffering(event) {
    event.preventDefault();

    var $newHeadline = $(event.target).text().toLowerCase();
    var $identifier = '.' + $newHeadline;
    var $shownCopy = $('#slide1 blockquote').find($identifier);
    
    $('#slide1 h2').text($newHeadline);
    $('#slide1 blockquote p').removeClass('active');
    $($shownCopy[0]).addClass('active');

    $('#slide1 li a').removeClass('active');
    $(event.target).addClass('active');

    $('#slide1 h2').css({ y: '80px', opacity: '0' }).transition({ y: '40px', opacity: 1 }, 400);
    $('#slide1 blockquote').css({ y: '80px', opacity: '0' }).transition({ y: '40px', opacity: 1 }, 400);

    if(insideOffering)
      insideTransition(event.target, $newHeadline);
    else
      sideTransition($newHeadline);
    /*if($(event.target).parent().position().top < -20) {
      $(event.target).parent().transition({ y: '0px' });
      returnToMain(); 
    }
    else {
      $(event.target).parent().siblings().transition({ y: '0px' }, 400, 'snap');
      $(event.target).parent().transition({ y: '-20px' }, 400, 'ease');

      $('#slide1 blockquote').css({ y: '30px', opacity: '0' }).transition({ y: '0px', opacity: 1 }, 400, function() {
        $('#slide1 li a').live('click', showNextOffering);
       });
      $('#slide1 h2').css({ y: '30px', opacity: '0' }).transition({ y: '0px', opacity: 1 }, 400);
      sideTransition(event.target);
    }*/
    
  }

  function sideTransition(elementName) {

    insideOffering = true;

    //$(element).transition({ border: 'none', duration: 800 });
    $('#slide1 li').css({ y: '0px' }).transition({
      duration: 800, 
      easing: 'snap',
      y: -310,
      width: '50px',
      height: '50px'
    });

    $('#media').transition({
      width: '80%',
      height: '350px',
      borderColor: '#ffffff',
      borderRadius: '1em',
      opacity: 1,
      y: $('#slide1 h2').position().top - 565,
      duration: 800,
      delay: 200
    }, function() {
      $(this).transition({background: 'url(../public/images/client/'+elementName+'.jpg)', duration: 500});
    });


  }

  function insideTransition(element, elementName) {
    $('#slide1 li a').removeClass('active');
    $(element).addClass('active');

    $('#media').transition({background: 'url(../public/images/client/'+elementName+'.jpg)', duration: 500});
  }

  function returnToMain() {
    $('#slide1 h2').text('offering');
    $('#slide1 blockquote p').removeClass('active');
    $('#slide1 .offering').addClass('active');

    $('#slide1 blockquote').css({ y: '-30px', opacity: '0' }).transition({ y: '0px', opacity: 1 }, 400, function() {
      $('#slide1 li a').live('click', showNextOffering);
     });
    $('#slide1 h2').css({ y: '-30px', opacity: '0' }).transition({ y: '0px', opacity: 1 }, 400);
  }
});