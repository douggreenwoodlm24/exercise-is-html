/* NAVIGATION */
function openNav() {
  $("#nav-main").css('width', '100%');
}

function closeNav() {
  $("#nav-main").css('width', '0%');
}

/* NAVIGATION SECOND-LEVEL */
$("#nav-main .nav-secondlevel-hdr").click(function () {
  // Close any other second level navigation
  $("#nav-main ul ul").slideUp();
  $('.plus',this).html('+');
  // Open this element's second level navigation
  if (!$(this).next().is(":visible")) {
      $(this).next().slideDown();
      $('.plus').html('+');
      $('.plus',this).html('-');
  }
})

/* STICKY HEADER */
$(window).scroll(function() {
  if ($(window).scrollTop() > 100){
    $('#header-main').addClass('sticky-opaque');
  } else {
    $('#header-main').removeClass('sticky-opaque');
  }
});

/* SCROLL PERCENTAGE ICON  */
(function(){
  const docHeight = $(document).height() - $(window).innerHeight();
  $(window).on('scroll', calculateScroll);
  
  function calculateScroll() {
    let top = $(window).scrollTop() || $(document).scrollTop();
    let perc = Math.ceil(top*100/docHeight);
    $('.scrollProgress-inner').attr('data-scroll', perc);
    $('.scrollProgress-stroke').css('stroke-dashoffset', 88 - (perc/100*88));
  }
})()