var encriptar= document.querySelector(".boton-encriptar");
encriptar.addEventListener("click",function(){

var input = document.getElementById("texto-encriptar").value;
input =input.toLowerCase();
var mensaje = Array.from(input);
    
for (var i= 0;i <mensaje.length;i++){
    var letras = mensaje[i];
     
    if (letras =="á"){
        mensaje[i]="ai"
    }
    if (letras =="é"){
        mensaje[i]="enter"
    }
    if (letras == "í"){
        mensaje[i]="imes"
    }
    if (letras =="ó"){
        mensaje[i]="ober"
    }
    if (letras =="ú"){
        mensaje[i]="ufat"
    }
    if (letras =="a" ){
        mensaje[i] = "ai";
    }
    if (letras == "e"){
        mensaje[i] = "enter";
    }
    if (letras == "i"){
        mensaje[i] = "imes";
    }
    if (letras == "o"){
        mensaje[i] = "ober";
    }
    if (letras == "u"){
        mensaje[i] = "ufat";
    }
}
var resultado= mensaje.join("")
 console.log(resultado);
document.getElementById("texto-encriptado").value= resultado;
document.getElementById("texto-encriptar").value= "";

 
});
