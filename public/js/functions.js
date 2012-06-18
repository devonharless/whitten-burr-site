$(document).ready(function() {

  //Global vars
  var _currentImage;
  var _currentCircle;
  var _lastImage;
  var _elements           = $('.detail-slide.active .media-container li');
  var _indicator_elements = $('.detail-slide.active .place_indicator li');

  
  //Process Slide Controller
  processSlide();
  processPage();

  function processSlide() {
    $('.media-container li').live('click', showNextImage);
    //$('#first_showcase .place_indicator li').bind('click', triggerNextImage);
  }

  function processPage() {
    $('#first-process').live('click', showNextProcess);
    $('#second-process').live('click', showPreviousProcess);
  }   

  function showNextProcess(e) {
    
    event.preventDefault();
    _currentProcess = $('#first_showcase').parent();
    _nextProcess    = $('#second_showcase').parent();
    $(_currentProcess[0]).fadeOut('slow', function() {
      // Animation complete.
      $(_nextProcess[0]).fadeIn();
      $(_nextProcess[0]).addClass('active');
      $(_currentProcess[0]).removeClass('active');
    });
    _elements = $('#second_showcase .media-container li');
    _indicator_elements = $('#second_showcase .place_indicator li');
  }

  function showPreviousProcess(e) {
    
    event.preventDefault();
    _currentProcess = $('#second_showcase').parent();
    _nextProcess    = $('#first_showcase').parent();
    $(_currentProcess[0]).fadeOut('slow', function() {
      // Animation complete.
      $(_nextProcess[0]).fadeIn();
      $(_nextProcess[0]).addClass('active');
      $(_currentProcess[0]).removeClass('active');
    });

    _elements = $('#first_showcase .media-container li');
    _indicator_elements = $('#first_showcase .place_indicator li');
  }

  function triggerNextImage(e) {
    event.preventDefault();
    
    var bleh = $(e.target).attr('class')
    //var test = $('#first_showcase .media-container', bleh);
    console.log(bleh)
    
    var blahzors = $('#first_showcase .media-container,' + '.' + bleh)
    $('#first_showcase .media-container li').removeClass('active')
    $(blahzors).addClass('active')
    //$(blahzors).removeClass('active')
    console.log('crazy>>', $('#first_showcase .media-container .second'))
    
    //$(blahzors).trigger('click');
  }

  function showNextImage(e) {
    e.preventDefault();

    _lastImage     = $(_elements[2]);
    _currentImage = e.target;
    _currentCircle = $(_currentImage).parent().siblings().find('.active')
   
    if($(_currentImage).hasClass('active')) {
    
      if(_currentImage != _lastImage[0]) {
        $(this).removeClass('active');
        $(this).next().addClass('active');

        $(_currentCircle[0]).removeClass('active');
        $(_currentCircle[0]).next().addClass('active');
      
      }
      else {
        $(_currentImage).removeClass('active');
        $(_currentCircle[0]).removeClass('active');

        _currentImage = $(_elements[0]);
        _currentCircle = $(_indicator_elements[0])
        $(_currentImage).addClass('active');
        $(_currentCircle).addClass('active');
      }
    }
  }
});