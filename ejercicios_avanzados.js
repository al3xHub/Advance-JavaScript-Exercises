/*sustituirVocales();
let timeout;
let nombre = document.getElementById("nombre").onkeyup=function()
{
if(timeout!=undefined)clearTimeout(timeout);
timeout=setTimeout(sustituirVocales,50);
}

function sustituirVocales()
{
    let nombreOriginal=document.getElementById("nombre").Value;
    let nombreMin=nombreOriginal.toLowerCase();
    let nombreSinVocalesa = nombreMin.replaceAll("a","*");
    let nombreSinVocalese = nombreSinVocalesa.replaceAll("e","*");
    let nombreSinVocalesi = nombreSinVocalese.replaceAll("i","*");
    let nombreSinVocaleso = nombreSinVocalesi.replaceAll("o","*");
    let nombreSinVocalesu = nombreSinVocaleso.replaceAll("u","*");

    let nombresinvocales = nombreSinVocalesu;
    nombre.Value=nombresinvocales;
}
*/
function sustituir()
{
    let nombre = document.getElementById("nombre").value;
    let ocurrencias = /[a|e|i|o|u]+/gi;
    document.getElementById("nombre").value=nombre.replace(ocurrencias,"*");
}
