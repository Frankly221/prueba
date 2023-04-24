function pu (){
    let pu = document.getElementById("ingresar").value;
    let pu2 = document.getElementById("edad").value;
    let pu3 = document.getElementById("sexo").value;
    let pu4 = document.getElementById("calculo").value;
    pu4 = pu4*3;
    document.getElementById("cambio1").innerHTML="Su Nombre es : " +pu;
    document.getElementById("cambio2").innerHTML="Su edad es : " +pu2;
    document.getElementById("cambio3").innerHTML="Sexo : " +pu3;
    document.getElementById("cambio4").innerHTML="El Valor es : " +pu4;
    
    let mm=  document.getElementById("eje");
    let boton = mm.getElementsByTagName("button")[0];
    mm.removeChild(boton);
}