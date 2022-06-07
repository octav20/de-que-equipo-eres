window.onload = iniciar;
let txtEquipo= document.getElementById("txtEquipo");
txtEquipo.id= "txt";

function iniciar(){
    
    const btnListo = document.getElementById("btnListo");
    btnListo.addEventListener("click", clickBtnListo);
}

function clickBtnListo(){
    
    let seleccion = document.getElementById("meses");
    let foto = document.getElementById("fotoEquipo");
    foto.src=seleccion.options[seleccion.selectedIndex].value;
    let equipos = ["Real Madrid", "Inter de Milan","Chelsea","Barcelona","Liverpool","AC Milan",
    "Arsenal","Manschester United","Bayern Munich","Paris Saint Germain","Manchester City","Juventus"];

    txtEquipo.textContent= equipos[seleccion.selectedIndex];
    
}