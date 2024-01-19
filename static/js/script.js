const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const btnEnter = document.querySelector('#btnEnter');


function agregarTarea (tarea) {
    const elemento = `<li id="elemento">
                        <button id="0">realizado</button>
                        <p class="text">${tarea}</p>
                        <button id="0">eliminado</button>
                    </li>`
    lista.insertAdjacentHTML("beforeend",elemento);
}

btnEnter.addEventListener('click', ()=>{
    const tarea = input.value;
    if(tarea){
        agregarTarea(tarea)
    }
    input.value=''
})

document.addEventListener('keyup',function(event){
    if(event.key=='enter'){
        const tarea = input.value;
        if(tarea){
            agregarTarea(tarea)
        }
    input.value=''
    }
})