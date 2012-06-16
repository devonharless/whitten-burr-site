$(document).ready(function() {

  //Interactions
  $('#first_showcase .media-container li').live('click', showNextImage);
  $('#first_showcase .place_indicator li').bind('click', triggerNextImage);
  var elements           = $('#first_showcase .media-container li');
  var indicator_elements = $('#first_showcase .place_indicator li');
  
  var currentImage = $(elements[0]);
  var lastImage    = $(elements[2]);

  //Indicator
  var currentCircle = $(indicator_elements[0]);

  function triggerNextImage(e) {
    event.preventDefault();
    //console.log(e.target)
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

    currentImage = e.target;
    currentCircle = $(currentImage).parent().siblings().find('.active')
    console.log('yeah >>', currentImage)

    if($(currentImage).hasClass('active')) {
    
      if(currentImage != lastImage[0]) {
        $(this).removeClass('active');
        $(this).next().addClass('active');

        $(currentCircle[0]).removeClass('active');
        $(currentCircle[0]).next().addClass('active');
      
      }
      else {
        $(currentImage).removeClass();
        $(currentCircle[0]).removeClass();

        var currentImage = $(elements[0]);
        var currentCircle = $(indicator_elements[0])
        $(currentImage).addClass('active');
        $(currentCircle).addClass('active');
      }
    }
  }
});