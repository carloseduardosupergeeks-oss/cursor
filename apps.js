const body = document.querySelector("body")

body.onmousemove = function(e) {
    body.style.background = `radial-gradient(circle 150px at ${e.offsetX}px ${e.offsetY}px,     
    blue, black)`;
};



