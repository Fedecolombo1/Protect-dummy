window.addEventListener("load", function(){
    var verMas = document.querySelector("button.col-5.col-lg-2.boton.srvbtn.verMas")
    var verMenos = document.querySelector("button.col-5.col-lg-2.boton.srvbtn.verMenos")
    var div = document.querySelector("div.col-12.cerrado")

    verMas.addEventListener("click", function(){
        div.classList.remove("cerrado")
        div.classList.add("abierto");
        verMas.style.display = "none"
    })
    
    verMenos.addEventListener("click", function(){
        div.classList.remove("abierto")
        div.classList.add("cerrado");
        verMas.style.display = "inline"
    })
})

