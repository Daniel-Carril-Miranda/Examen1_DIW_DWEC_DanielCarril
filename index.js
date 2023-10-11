document.addEventListener("DOMContentLoaded", () => {
    
    console.log("JS bien enlazado"); 
    

    const btn = document.getElementById("btn");
    const areaShow = document.getElementById("area");
    const perimeterShow = document.getElementById("perimeter");
    const diagonalShow = document.getElementById("diagonal");

    btn.addEventListener("click", () =>{ 
        
        console.log("Boton bien enlazado"); 
        

        const lenght = parseFloat(document.getElementById("lenght").value);
        const width = parseFloat(document.getElementById("width").value);
        

        if (isNaN(lenght) || isNaN(width)) {
            areaShow.innerHTML = "";
            perimeterShow.innerHTML = "Por favor, ingrese valores válidos"; 
            diagonalShow.innerHTML = "";
        } else {
            

            const area = lenght * width;
            const perimeter = 2 * (lenght + width);
            const diagonal = Math.sqrt(Math.pow(lenght, 2) + Math.pow(width, 2));


            areaShow.innerHTML = `Área del rectángulo: ${area.toFixed(2)}`;
            perimeterShow.innerHTML = `Perímetro del rectángulo: ${perimeter.toFixed(2)}`;
            diagonalShow.innerHTML = `Diagonal del rectángulo: ${diagonal.toFixed(2)}`;
        };
    });
});