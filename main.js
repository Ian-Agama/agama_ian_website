function dropdown(e) {
    let navbar = document.querySelector("nav");
    console.log(navbar);
    if (navbar.classList.contains("responsive-navbar")) {
        navbar.classList.remove("responsive-navbar");
    } else {
        navbar.classList.add("responsive-navbar");
    }
}