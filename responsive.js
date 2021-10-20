var visible = false;
function iniciar() {
    var elemento = document.getElementById("menu-img");
    elemento.addEventListener("click", mostrarMenu);
}
function mostrarMenu() {
    var elemento = document.getElementById("menuprincipal");
    if (!visible) {
        elemento.style.height = "100%";
        visible = true;
    } else {
        elemento.style.height ="0" ;
        visible = false;
    }
}
window.addEventListener("load", iniciar);