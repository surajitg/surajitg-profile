$(document).ready(function()
{

    $(".filter-b").click(function () {
        var value = $(this).attr('data-filter');
        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });

if ($(".filter-b").removeClass("active")) {
    $(this).removeClass("active");
}
$(this).addClass("active");
});

// SKILLS
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});

