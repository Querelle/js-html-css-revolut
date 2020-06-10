$(document).ready(
  function() {

    // mostrare dropdown
    $('.hover').mouseenter(
      function() {
        $(this).children('.dropdown-container').show();
      });

    // nascondere dropdown
    $('.hover').mouseleave(
      function() {
        $(this).children('.dropdown-container').hide();
      });

    // toggle dropdown al click
    $('.hover').click(
      function() {
        $('.dropdown-container').toggle();
      }
    )

    // rendere il testo bold al passaggio del mouse
    $('li').mouseenter(
      function() {
          $(this).addClass('bold');
      }
    )

    $('li').mouseleave(
      function() {
        $(this).removeClass('bold');
      }
    )


  });
