(function($){

$(document).ready(function() {
    $('a[data-colorbox="true"]').live('click', function(e) {
        e.preventDefault();

        $.colorbox(
            { 
                height: $(this).data("colorbox-height") || false,
                width: $(this).data("colorbox-width") || false,
                iframe: $(this).data("colorbox-iframe") || false,
                photo: $(this).data("colorbox-photo") || false,
                innerHeight: $(this).data("colorbox-innerheight") || false,
                innerWidth: $(this).data("colorbox-innerwidth") || false,
                href: $(this).attr('href'),
                opacity: 0.5
            });
    });
});

}) (jQuery);