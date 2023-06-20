let nombre = prompt("Escribe tu nombre");
let saludo = document.createElement("p");
saludo.className = "saludo";
let hora = new Date().getHours();
let mensaje = "";
    if (hora >= 7 && hora < 12) 
    {
        mensaje = "Buenos días";
    } 
    else if (hora >= 12 && hora < 21) 
    {
        mensaje = "Buenas tardes";
    } 
    else
    {
        mensaje = "Buenas noches";
    }
saludo.textContent = "¡"+ mensaje +" "+ nombre + "! :)";
document.body.appendChild(saludo);
 
  