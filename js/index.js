// ----------------------------- Mobile -----------------------------

let menuClick = document.getElementById("menu");
let ulDesplegable = document.querySelector(".desplegable");
ulDesplegable.style.height = "0px";

menuClick.addEventListener("click", function(e) {
  ulDesplegable.style.transition = "2s";
  if(ulDesplegable.style.height == "0px") {
    ulDesplegable.style.height = "60px";
  }
  else {
    ulDesplegable.style.height = "0px";
  }
});

// ----------------------------- Desktop -----------------------------