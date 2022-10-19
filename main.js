window.addEventListener("scroll", (event) => {
    let line = document.querySelector("#line");
    let scroll = this.scrollY;
    let header = document.querySelector("header");
    // scroll > 100 ? (header.style.background = "tranparent") : (header.style.opacity = "1");
    scroll > 100 ? (header.className = "header_smaller") : (header.className = "");
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

//  create open menu 