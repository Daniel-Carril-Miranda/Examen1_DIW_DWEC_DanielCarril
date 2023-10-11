// Author: Daniel Carril Miranda
// GitHub: https://github.com/Daniel-Carril-Miranda/Examen1_DIW_DWEC_DanielCarril.git
document.addEventListener("DOMContentLoaded", () => {
    
    console.log("JS bien enlazado"); /* Mensaje para coprobar que el js está funcionando */
    
    //declaración de boton y salidas
    const btn = document.getElementById("btn");
    const areaShow = document.getElementById("area");
    const perimeterShow = document.getElementById("perimeter");
    const diagonalShow = document.getElementById("diagonal");

    btn.addEventListener("click", () =>{ /* Función cuando se clica el botón */
        
        console.log("Boton bien enlazado"); /* Mensaje para coprobar que el botón se active */
        
        //declaración de alto y ancho
        const lenght = parseFloat(document.getElementById("lenght").value);
        const width = parseFloat(document.getElementById("width").value);
        
        //If para que si no es un número salga el mensaje
        if (isNaN(lenght) || isNaN(width)) {
            areaShow.innerHTML = "";
            perimeterShow.innerHTML = "Por favor, ingrese valores válidos"; /* Aprovecho la etiqueta de perímetro para sacar el mensaje porque es la más centrada */
            diagonalShow.innerHTML = "";
        } else {
            
            //Hacemos los cálculos pertinentes
            const area = lenght * width;
            const perimeter = 2 * (lenght + width);
            const diagonal = Math.sqrt(Math.pow(lenght, 2) + Math.pow(width, 2));

            //Mostramos por pantalla les resultados
            areaShow.innerHTML = `Área del rectángulo: ${area.toFixed(2)}`;
            perimeterShow.innerHTML = `Perímetro del rectángulo: ${perimeter.toFixed(2)}`;
            diagonalShow.innerHTML = `Diagonal del rectángulo: ${diagonal.toFixed(2)}`;
        };
    });
});