$(document).ready(
  function() {
    $('.hover').mouseenter(
      function() {
        $(this).children('.dropdown-container').show();
      });

    $('.hover').mouseleave(
      function() {
        $(this).children('.dropdown-container').hide();
      });

    $('.hover').click(
      function() {
        $('.dropdown-container').toggle();
      }
    )


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
