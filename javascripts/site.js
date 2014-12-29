$(document).ready(function() {
  $('.carousel').carousel({ interval: false });
  $('.btn-click').click(function (e) {
    var _this = this.hash.slice(1);
    var this_position = $('#'+_this).offset().top - 24;
    $('html, body').animate({  scrollTop: this_position }, { complete: function() { $(this).stop(true, true);  } });
    return false;
  })

  $('#tab-contents a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
});


  
