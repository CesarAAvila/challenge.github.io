function encriptar(){
    var texto = document.getElementById("texto-usuario").value.toLowerCase();
    // i afecta tanto mayusculas y minusculas
    //g es para toda la linea o oracion
    //m para multiples lienas o parrafos
    var txtCifrado = texto.replace (/e/igm,"enter");
    var txtCifrado = txtCifrado.replace (/o/igm,"ober");
    var txtCifrado = txtCifrado.replace (/i/igm,"imes");
    var txtCifrado = txtCifrado.replace (/a/igm,"ai");
    var txtCifrado = txtCifrado.replace (/u/igm,"ufat");

    document.getElementById("imagenderecha").style.display="none"
    document.getElementById("texto-derecha").style.display="none"
    document.getElementById("resultado-texto").innerHTML = txtCifrado
    document.getElementById("btncopiar").style.dispay= "show"
    document.getElementById("btncopiar").style.display= "inherit"

    var contenido=document.getElementById("texto-usuario");
        contenido.value='';
}

function desencriptar(){
    var texto = document.getElementById("texto-usuario").value.toLowerCase();
    // i afecta tanto mayusculas y minusculas
    //g es para toda la linea o oracion
    //m para multiples lienas o parrafos
    var txtCifrado = texto.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
   
    document.getElementById("imagenderecha").style.display="none"
    document.getElementById("texto-derecha").style.display="none"
    document.getElementById("resultado-texto").innerHTML=txtCifrado
    document.getElementById("btncopiar").style.dispay= "show"
    document.getElementById("btncopiar").style.display= "inherit"

    var contenido=document.getElementById("texto-usuario");
        contenido.value='';
}

function copiar(){
    var contenido = document.getElementById("resultado-texto").textContent;navigator.clipboard.writeText(contenido);
    
    alert("El texto se copio")
    
}

