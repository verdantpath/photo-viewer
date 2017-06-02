var request;
var $current;
var cache = {};
var $frame = $('#photo-viewer');
var $thumbs = $('.thumb');

function crossfade($img) {

  if ($current){
    $current.stop().fadeOut('slow');
  }

  $img.css({
      marginLeft: -$img.width() / 2,
      marginTop: -$img.height() / 2
  });

  $img.stop().fadeTo('slow', 1);

  $current = $img;
}

$(document).on('click', '.thumb', function(e) {
  var $img;
  var src = this.href;
  request = src;

  e.preventDefault();

  $thumbs.removeClass('active');
  $(this).addClass('active');

  
}
