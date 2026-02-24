console.log ("Hola");

//Control teclas
let up = 200
let left = 200

document.addEventListener("keydown", controlTeclas)

function controlTeclas(e){
    let tecla = e.key;
    if (tecla == "ArrowUp"){
        console.log("Arriba")
        up = up - 5
        console.log(up)
        document.querySelector("#cubo").style.top = up + "px"
    }
    if (tecla == "ArrowDown"){
        console.log("Abajo")
        up = up + 5
        console.log(up)
        document.querySelector("#cubo").style.top = up + "px"
    }
    if (tecla == "ArrowRight"){
        console.log("Derecha")
        left = left + 5
        console.log(left)
        document.querySelector("#cubo").style.left = left + "px"
    }
    if (tecla == "ArrowLeft"){
        console.log("Izquierda")
        left = left - 5
        console.log(left)
        document.querySelector("#cubo").style.left = left + "px"
    }
}