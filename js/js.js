$(function() {
  $('.menu').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      let scrollTo = $(this).attr('href');
      let whitespace = scrollTo == '#s1' ? 70:30;
      $('html.body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000);
    });
  });
});
