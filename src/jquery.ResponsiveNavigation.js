/*
 * jquery.ResponsiveNavigation
 *
 *
 * Copyright (c) 2012 Jeremy Worboys
 * Licensed under the ☺ Licence.
 */

(function($) {

    // Collection method.
    $.fn.awesome = function() {
        return this.each(function() {
            $(this).html('awesome');
        });
    };

    // Static method.
    $.awesome = function() {
        return 'awesome';
    };

    // Custom selector.
    $.expr[':'].awesome = function(elem) {
        return elem.textContent.indexOf('awesome') >= 0;
    };

}(jQuery));
