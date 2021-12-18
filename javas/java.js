let botao = document.getElementById("botao");

botao.addEventListener("click", function() {

    let adiv = document.getElementById("adiv");

    if(adiv.style.display === "none") {
    adiv.style.display = "none";
    }
    else {
    adiv.style.display = "block";
    }

});