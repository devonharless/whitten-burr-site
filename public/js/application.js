$(document).ready(function() {

  //Global vars
  var _currentImage;
  var _currentCircle;
  var _currentElement;

  var _lastImage;
  var _elements           = $('.detail-slide.active .media-container li');
  var _indicator_elements = $('.detail-slide.active .place_indicator li');

  
  //Process Slide Controller
  processSlide();

  function processSlide() {
    $('.media-container li').live('click', showNextImage);
    $('.place_indicator li').live('click', triggerNextImage);
  } 

  function triggerNextImage(event) {
    event.preventDefault();

    console.log('test >> ', event.target)

    $(event.target).siblings().removeClass('active');

    _currentElement = '.' + $(event.target).attr('class').split(' ')[0];

    //_selectedElements = _currentPage + _currentElement;
    
    $(_currentElement).siblings().removeClass('active');
    $(_currentElement).addClass('active');
  }

  function showNextImage(event) {
    event.preventDefault();

    _currentImage  = event.target;
    _lastImage     = $(_currentImage).parent().children().eq(-1);
   
    //_currentPage   = $(event.target).parent().parent()[0];

    console.log('the _lastImage >> ', _lastImage[0], ' currentImage >> ', _currentImage);
   
    if($(_currentImage).hasClass('active')) {
    
      if(_currentImage != _lastImage[0]) {
        console.log('blub >> ', _lastImage[0])
        _currentElement = '.' + $(event.target).next().attr('class').split(' ')[0];
        //_selectedElements = _currentPage + _currentElement;

        //console.log('>> ', _selectedElements, ' ', _currentPage, ' ', _currentElement)

        $(_currentElement).siblings().removeClass('active');
        $(_currentElement).addClass('active');
      
      }
      else {

        console.log('THE END >> ')
        _currentElement = $(_currentImage).parent().children().eq(0)[0];

        console.log('_currentElement >> ', $(_currentElement).parent().siblings().find('.first'))

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
    if (  locationPath == thisPath
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