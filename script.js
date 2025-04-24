const tareaInput = document.getElementById('tareaInput');
const añadirBtn = document.getElementById('añadirBtn');
const listaTareas = document.getElementById('listaTareas');

    añadirBtn.addEventListener('click', añadirTarea);


    function añadirTarea() {
    const tareaTexto = tareaInput.value; 

         if (tareaTexto !== "") { 
            const nuevaTarea = document.createElement('li'); 
            const spanTexto = document.createElement('span'); 
            spanTexto.textContent = tareaTexto;

            
            spanTexto.addEventListener('click', () => {
            spanTexto.classList.toggle('tachado')
            });

            const botonEditar = document.createElement('button');
            botonEditar.textContent = 'Editar';
            botonEditar.classList.add('editar');
            botonEditar.addEventListener('click', () => editarTarea(nuevaTarea, spanTexto));

             
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', eliminarTarea);

               
            const contenedorBotones = document.createElement('div');
            contenedorBotones.classList.add('botones');
            contenedorBotones.appendChild(botonEditar);
            contenedorBotones.appendChild(botonEliminar);

               
            nuevaTarea.appendChild(spanTexto);
            nuevaTarea.appendChild(contenedorBotones);

               
            listaTareas.appendChild(nuevaTarea);

               
            tareaInput.value = '';
        }
    }

       
    function eliminarTarea(event) {
        const tarea = event.target.parentElement.parentElement; 
        listaTareas.removeChild(tarea); 
        }

        
    function editarTarea(liElemento, spanTexto) {
        const nuevoInput = document.createElement('input'); 
        nuevoInput.type = 'text';
        nuevoInput.value = spanTexto.textContent; 

            
        const botonGuardar = document.createElement('button');
        botonGuardar.textContent = 'Guardar';
        botonGuardar.classList.add('editar');
        botonGuardar.addEventListener('click', () => {
            spanTexto.textContent = nuevoInput.value; 
            liElemento.replaceChild(spanTexto, nuevoInput); 
            liElemento.querySelector('.editar').textContent = 'Editar'; 
        });

            
        liElemento.replaceChild(nuevoInput, spanTexto);

            
        liElemento.querySelector('.editar').textContent = 'Guardar';
        liElemento.querySelector('.editar').replaceWith(botonGuardar);
    }