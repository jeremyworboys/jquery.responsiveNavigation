# Responsive Navigation

Easy to use, semantic approach to responsive navigation.


## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/complexcompulsions/jquery.ResponsiveNavigation/master/dist/jquery.ResponsiveNavigation.min.js
[max]: https://raw.github.com/complexcompulsions/jquery.ResponsiveNavigation/master/dist/jquery.ResponsiveNavigation.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.ResponsiveNavigation.min.js"></script>
<script>
    jQuery(function($) {
        $("header").responsiveNavigation();
    });
</script>
```


## Documentation
You may pass settings object when calling the plugin as so.


### Available Options

__search__
: A selector used to find individual navigation elements. (Default: `"nav"`)

__nested__
: Place nested navs into their own group. (Default: `true`)

__wrap__
: Whether to wrap the select element or not. (Default: `true`)

__wrapper__
: The type of element to wrap the select element in. (Default: `"nav"`)

__wrapperClass__
: The class applied the to the wrapper element. (Default: `"responsive-nav-wrapper"`)

__wrapperId__
: The id given the to the wrapper element. (Default: `""`)

__selectClass__
: The class applied the to the select element. (Default: `"responsive-nav"`)

__selectId__
: The id given the to the select element. (Default: `""`)

__defaultText__
: The label given to the default option in the select element. (Default: `"Navigation"`)

__group__
: Whether to group the options based on their navigation. (Default: `true` if more than 1 nav, `false` otherwise)

__groupLabel__
: The data attribute specified on the navigation used to label the group. (Default: `"label"`)

__groupOrder__
: The data attribute specified on the navigation used to sort the group. (Default: `"order"`)


## Examples
- [Basic Usage](https://github.com/complexcompulsions/jquery.ResponsiveNavigation/blob/master/examples/1.basic-usage.md)
- [Multiple Navs](https://github.com/complexcompulsions/jquery.ResponsiveNavigation/blob/master/examples/2.multiple-navs.md)


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_


## Release History

### v1.0.0
- Initial release


## License
Copyright (c) 2012 Jeremy Worboys
Licensed under the [☺ Licence](http://licence.visualidiot.com/).
