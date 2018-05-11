function myFunction(size) {
    if (size.matches) { // If media query matches
        document.body.style.backgroundColor = ""/*add a style here*/;
    } else {
        document.body.style.backgroundColor = ""/*add a style here*/;
    }
}

var size = window.matchMedia("(max-width: 700px)")
myFunction(size) // Call listener function at run time
size.addListener(myFunction) // Attach listener function on state changes
