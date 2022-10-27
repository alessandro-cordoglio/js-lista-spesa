"use strict";

const listaSpesa= ["plutonio", "uranio", "neutrini", "poltrona del napoli", "coperte del napoli"]

let i=0
while(i<listaSpesa.length){
    const element= document.createElement("li")
    element.innerHTML= listaSpesa[i]
    document.getElementById("list").append(element)
    i++
}

