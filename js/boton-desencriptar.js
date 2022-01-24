var desencriptar= document.querySelector(".boton-desencriptar");
desencriptar.addEventListener("click",function(){


var input = document.getElementById("texto-encriptar").value;
input= input.toLowerCase();
var mensaje = Array.from(input);
for (var i= 0;i <mensaje.length;i++){
    var letras = mensaje[i];
    
    if (letras =="a"  ){
        var indice= i+1 ;
        mensaje.splice(indice,1);
    }
    if (letras == "e"){
        var indice = i+1;
        mensaje.splice(indice,4);
    }
    if (letras == "i"){
        var indice= i+1;
        mensaje.splice(indice,3);
    }
    if (letras == "o"){
        var indice= i+1;
        mensaje.splice(indice,3);
    }
    if (letras == "u"){
        var indice=i+1;
        mensaje.splice(indice,3);
    }
}
var resultado= mensaje.join("")
 
document.getElementById("texto-encriptado").value= resultado;
document.getElementById("texto-encriptar").value= "";

 
});
