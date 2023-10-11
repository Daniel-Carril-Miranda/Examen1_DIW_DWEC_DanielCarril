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
        


    });
});