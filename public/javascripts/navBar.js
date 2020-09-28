window.addEventListener("load", function(){
    var navbar = document.querySelector("nav.mobile.cerrado")
    var iconoBars = document.querySelector("i.fas.fa-bars")
    var iconoC = document.querySelector("i.fab.fa-mixer")
        iconoBars.addEventListener("click", function(){
        iconoBars.classList.toggle("celeste")
        navbar.classList.toggle("abierto")
    })
})