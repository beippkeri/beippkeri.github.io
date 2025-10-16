$(document).ready(function()
{
    // Register hover listener on anchor tags.

    $('a').hover(function()
    {
        $(this).css('color', 'green');
    }, function()
    {
        $(this).css('color', 'black');
    });
});