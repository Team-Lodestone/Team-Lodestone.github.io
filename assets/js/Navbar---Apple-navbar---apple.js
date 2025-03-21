$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
        // Use Bootstrap's collapse methods to toggle the menu with animation
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').collapse('hide'); // Close with animation
            $('body').removeClass('navbar--opened');
        } else {
            $('.navbar-collapse').collapse('show'); // Open with animation
            $('body').addClass('navbar--opened');
        }
    });

    // Close menu when clicking outside
    $(document).on('click', function(event) {
        var $navbar = $('.navbar-collapse');
        if (!$(event.target).closest('.navbar').length && $navbar.hasClass('show')) {
            $navbar.collapse('hide'); // Close with animation
            $('body').removeClass('navbar--opened');
        }
    });

    // Close menu when clicking a nav-link
    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide'); // Close with animation
        $('body').removeClass('navbar--opened');
    });
});
