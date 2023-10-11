function dentro(){
    console.log("El cuadro de texto tiene foco");
}
function vocal(){
    let texto = document.getElementById("texto").value;
    document.getElementById("texto").value=texto.replace(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g,'*'); 
}