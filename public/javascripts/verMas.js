window.addEventListener("load", function(){
    var verTodas = document.querySelector("button.col-5.col-lg-2.boton.srvbtn.verTodas")
    var verMenos = document.querySelector("button.col-5.col-lg-2.boton.srvbtn.verMenos")
    var div = document.querySelector("div.row.col-12.align.collapse")

    verTodas.addEventListener("click", function(){
        verTodas.style.display = "none"
        verMenos.style.display = "inline-block"
    })
    
    verMenos.addEventListener("click", function(){
        div.classList.remove("show")
        verTodas.style.display = "inline"
        verMenos.style.display = "none"
    })

    /*var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        }
    });
    }*/


})

