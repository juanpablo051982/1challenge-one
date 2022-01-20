var botonCopiar = document.querySelector(".boton-copiar");
    botonCopiar.addEventListener("click",function(){   
    var input= document.querySelector("#texto-encriptado"); 
    
    input.select();
    document.execCommand("copy");
    alert("se ha copiado exitosamente");
    document.getElementById("texto-encriptado").value= "";
     });