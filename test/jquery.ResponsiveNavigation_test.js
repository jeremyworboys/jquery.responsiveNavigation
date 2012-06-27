/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

    test("is chainable", function() {
        ok($("#test-header").responsiveNavigation().addClass("chained"), "can be chained");
        equal($("#test-header").hasClass("chained"), true, "class was added correctly from chaining");
    });

    test("nothing is changed if no nav is found", function() {
        var html = $("#test-header").html();

        ok($("#test-header").responsiveNavigation("b"), "runs when `search` is not found");
        equal($("#test-header").html(), html, "nothing was changed if no nav was found");
    });

    test("creates responsive nav using default options", function() {
        ok($("#test-header").responsiveNavigation(), "runs with no options passed");
        equal($("#test-header").find("nav.responsive-navigation").length, 1, "wrapper is created");
        equal($("#test-header").find(".responsive-navigation select").length, 1, "wrapper contains select element");
        equal($("#test-header").find(".responsive-navigation select option").length, 6, "select element contains all links + the default option");
        equal($("#test-header").find(".responsive-navigation select optgroup").length, 2, "links are grouped");
        equal($("#test-header").find(".responsive-navigation select option:eq(0)").text(), "Navigation...", "default option is created");
        equal($("#test-header").find(".responsive-navigation select optgroup:eq(0)").attr("label"), "second", "groups are ordered correctly");
    });

}(jQuery));
