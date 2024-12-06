/*----------------Carrusel----------------*/
new Swiper('.card-wrapper', 
{
    loop: true,
    spaceBetween: 32,

    pagination: 
    {
      el: '.swiper-pagination',
      clickable: true,
      dinamicBullets: true
    },

    navigation:
    {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:
    {
        0:
        {
            slidesPerView: 1
        },
        768:
        {
            slidesPerView: 2
        },
        1024:
        {
            slidesPerView: 3
        },
    }
});
/*----------------Reservar----------------*/
function mostrar() 
{
    let parms = new URLSearchParams(new FormData(registro)).toString();
    console.log(parms);
}
document.addEventListener("DOMContentLoaded", e => 
{
    let parms = new URLSearchParams(window.location.search);
    console.log("Nombre: " + parms.get("nombre"));
    console.log("Apellido paterno: " + parms.get("ap_paterno"));
    console.log("Apellido materno: " + parms.get("ap_materno"));
    console.log("Fecha: " + parms.get("fecha"));
    console.log("Teléfono: " + parms.get("phone"));
    console.log("Gnénero: " + parms.get("género"));
    console.log("Correo: " + parms.get("email"));
    console.log("Nombre usuario: " + parms.get("usuario"));
});