var encriptar= document.querySelector(".boton-encriptar");
encriptar.addEventListener("click",function(){

var input = document.getElementById("texto-encriptar").value;
input =input.toLowerCase();
var mensaje = Array.from(input);
    
for (var i= 0;i <mensaje.length;i++){
    var letras = mensaje[i];
   
    
    if (letras =="a" || letras =="á" ){
        mensaje[i] = "ai";
    }
    if (letras == "e"|| letras =="é"){
        mensaje[i] = "enter";
    }
    if (letras == "i"|| letras =="í"){
        mensaje[i] = "imes";
    }
    if (letras == "o"|| letras =="ó"){
        mensaje[i] = "ober";
    }
    if (letras == "u"|| letras =="ú"){
        mensaje[i] = "ufat";
    }
}
var resultado= mensaje.join("")
 console.log(resultado);
document.getElementById("texto-encriptado").value= resultado;
document.getElementById("texto-encriptar").value= "";

 
});
