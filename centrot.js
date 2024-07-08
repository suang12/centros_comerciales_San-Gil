const centrosComerciales = document.querySelectorAll(".centro-comercial");
const enlacesMenu = document.querySelectorAll("nav ul li a");

enlacesMenu.forEach((enlace, index) => {
    enlace.addEventListener("click", (event) => {
        event.preventDefault();

        centrosComerciales.forEach((centroComercial, i) => {
            centroComercial.style.display = "none";
        });

        centrosComerciales[index].style.display = "block";
    });
});
