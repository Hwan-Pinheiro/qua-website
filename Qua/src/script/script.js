const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("btn").addEventListener("click", function() {
    let video = document.getElementById("promo-video");
    video.play();
    video.scrollIntoView({ behavior: "smooth" }); // Rola a tela até o vídeo
});