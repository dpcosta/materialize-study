(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".dropdown-trigger").dropdown({
      hover: true,
      constrainWidth: false,
      coverTrigger: false
    });
    $(".tabs").tabs();
  }); // end of document ready
})(jQuery); // end of jQuery name space
