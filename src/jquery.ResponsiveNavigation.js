/*
 * jquery.ResponsiveNavigation
 *
 *
 * Copyright (c) 2012 Jeremy Worboys
 * Licensed under the ☺ Licence.
 * http://licence.visualidiot.com
 */

;(function($, undefined) {

    $.fn.responsiveNavigation = function(options) {

        // Default parameter values
        if (options === undefined) { options = {}; }

        // Default options
        var opts = $.extend({
                search:       "nav",
                nested:       true,

                wrap:         true,
                wrapper:      "nav",
                wrapperClass: "responsive-nav-wrapper",
                wrapperId:    "",

                selectClass:  "responsive-nav",
                selectId:     "",

                defaultText:  "Navigation...",

                group:        true,
                groupLabel:   "label",
                groupOrder:   "order"
            }, options),

        // Sorting algorithm for ordering option groups
            optgroupSort = function($a, $b) {
                var a = parseInt($a.data("order"), 10),
                    b = parseInt($b.data("order"), 10);
                if ((isNaN(a) && isNaN(b)) || a === b) {
                    return 0;
                }
                else if (isNaN(b) || a < b) {
                    return -1;
                }
                return 1;
            };

        // Process each $header
        return this.each(function() {
            var $header =   $(this),
                $navs =     $header.find(opts.search),
                optgroups = [],
                $select;

            // Make sure we can find a $nav element
            if ($navs.length < 1) { return; }

            // If there is only one $nav default grouping to off
            if ($navs.length === 1) {
                opts.group = options.group || false;
            }

            // If nesting is on, remove nested navs
            if (opts.nested) {
                $navs.each(function() {
                    // Remove from object but put back into the DOM
                    $(this).find(opts.search).detach().appendTo($header);
                });
            }

            // Process all of the $navs
            $navs.each(function() {
                var $nav =      $(this),
                    options =   [];

                // Find all links in this nav
                $nav
                    .find("a")
                        .each(function() {
                            var $link = $(this);

                            // Pull them out as options
                            options.push(
                                $("<option>")
                                    .val($link.attr("href"))
                                    .text($link.text())
                            );
                        });

                // Group options if required
                if (opts.group) {
                    // Create group
                    var $optgroup = $("<optgroup>")
                        .attr("label", $nav.data(opts.groupLabel))
                        .data("order", $nav.data(opts.groupOrder));

                    // Add options to group
                    $.each(options, function(i, opt) {
                        $optgroup.append(opt);
                    });

                    // Swap out options for optgroup to be added to select
                    options = $optgroup;
                }

                // Add group (or options if ungrouped) to optgroup
                $.each(options, function(i, grp) {
                    optgroups.push($(grp));
                });
            });

            // Sort option groups (only if grouped)
            if (opts.group) {
                optgroups = optgroups.sort(optgroupSort);
            }

            // Create the select element
            $select = $("<select>")
                .addClass(opts.selectClass)
                .attr("id", opts.selectId);

            // Add default option to select
            $select.append(
                $("<option>")
                    .text(opts.defaultText)
                    .attr("disabled", "disabled")
            );

            // Add options to the select element
            $(optgroups).each(function() {
                $select.append($(this));
            });

            // Add event to change URLs when an option is selected
            $select.on("change", function() {
                window.location = $(this).find(":selected").val();
            });

            // Wrap the select element if required
            if (opts.wrap) {
                $select = $("<" + opts.wrapper + ">")
                    .addClass(opts.wrapperClass)
                    .attr("id", opts.wrapperId)
                    .append($select);
            }

            // Add select element to outer wrapper (usually a header)
            $header.append($select);
        });

    };

}(jQuery));
