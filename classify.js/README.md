# Classify

Classify is an extensible DOM utility for class helper functions. It's designed to simply the use of instance methods such as `.addClass()`, `.removeClass()`, `.hasClass()`, and `.toggleClass()`.

## Usage

1. `classify.has(elem, "my-class")` for boolean conditions
2. `classify.add(elem, "my-new-class")`
3. `classify.remove(elem, "my-unwanted-class")`
4. `classify.toggle(elem, "my-class")`

## Configure

1. Reference `classify.js` in any framework or boilerplate. You can also bundle it with other JS if you use a build process.

    ~~~html
    <script src="classify.js"></script>
    ~~~

2. Use it to replace class instance methods.

    ~~~js
    toggleElement.onclick = function() {
        classify.toggle(body, "push");
        classify.toggle(navElement, "pull");
        classify.toggle(iconElement, "hidden");
        classify.toggle(toggleElement, "fixed");
        classify.toggle(subnavElement, "hidden");
    };
    ~~~

## License

Our code and documentation is licensed under the MIT license. By contributing your code, you agree to license your contribution under the terms of this license.
