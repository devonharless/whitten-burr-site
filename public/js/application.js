$(document).ready(function() {

  //Global vars
  var _currentImage;
  var _currentCircle;
  var _currentElement;

  var _lastImage;

  //Process Slide Controller
  processSlide();
  processPage();

  function processSlide() {
    $('.media-container li').live('click', showNextImage);
    $('.place_indicator li').live('click', triggerNextImage);
  } 

  function processPage() {
    $('#first-process').live('click', showNextProcess);
    $('#second-process').live('click', showPreviousProcess);
  }

  function showNextProcess(event) {
    
    event.preventDefault();
    
    _currentProcess = $('.first_showcase').parent();
    _nextProcess    = $('.second_showcase').parent();
    $(_currentProcess[0]).fadeOut('slow', function() {
      // Animation complete.
      $(_nextProcess[0]).fadeIn();
      $(_nextProcess[0]).addClass('active');
      $(_currentProcess[0]).removeClass('active');
    });
  }

  function showPreviousProcess(event) {
    
    event.preventDefault();
    _currentProcess = $('.second_showcase').parent();
    _nextProcess    = $('.first_showcase').parent();
    $(_currentProcess[0]).fadeOut('slow', function() {
      // Animation complete.
      $(_nextProcess[0]).fadeIn();
      $(_nextProcess[0]).addClass('active');
      $(_currentProcess[0]).removeClass('active');
    });
  }   

  function triggerNextImage(event) {
    event.preventDefault();

    _currentClass   = '.' + $(event.target).attr('class').split(' ')[0];
    _currentElement = $(event.target);

    $(_currentElement).parent().siblings().find('li').removeClass('active');
    $(_currentElement).siblings().removeClass('active');
    $(_currentElement).addClass('active');
    $(_currentElement).parent().siblings().find(_currentClass).addClass('active');

  }

  function showNextImage(event) {
    event.preventDefault();

    _currentImage  = event.target;
    _lastImage     = $(_currentImage).parent().children().eq(-1);
   
    if($(_currentImage).hasClass('active')) {
    
      if(_currentImage != _lastImage[0]) {
        
        _currentElement = $(event.target).next();
        _currentClass   = '.' + $(event.target).next().attr('class').split(' ')[0];
        
        $(_currentElement).siblings().removeClass('active');
        $(_currentElement).parent().siblings().find('li').removeClass('active');
        $(_currentElement).addClass('active');
        $(_currentElement).parent().siblings().find(_currentClass).addClass('active');
      
      }
      else {
        //It's the last image, go back to the beginning!
        _currentElement = $(_currentImage).parent().children().eq(0)[0];

        $(_currentElement).siblings().removeClass('active');
        $(_currentElement).parent().siblings().find('li').removeClass('active');
        $(_currentElement).addClass('active');
        $(_currentElement).parent().siblings().find('.first').addClass('active');
      }
    }
  }

  //  Anchor Scrolling, a la the fancy CSS Tricks
  //  http://css-tricks.com/snippets/jquery/smooth-scrolling/
  function filterPath(string) {
    return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
});