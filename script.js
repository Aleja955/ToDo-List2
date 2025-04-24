
const input = document.getElementById('tareaInput');
const btn = document.getElementById('añadirBtn');
const ul = document.getElementById('listaTareas');
const borrarTodoBtn = document.getElementById('borrarTodo');


window.addEventListener('load', function () {
    let cosas = localStorage.getItem('cosasGuardadas');
    if (cosas) {
        ul.innerHTML = cosas;
        ponerEventosOtraVez();
    }
});


btn.addEventListener('click', function () {
    let texto = input.value;

    if (texto !== '') {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = texto;

      
        span.addEventListener('click', function () {
            span.classList.toggle('tachado');
            guardar();
        });

     
        let editar = document.createElement('button');
        editar.textContent = 'Editar';
        editar.addEventListener('click', function () {
            let nuevo = prompt('Cambiar texto:', span.textContent);
            if (nuevo !== '' && nuevo !== null) {
                span.textContent = nuevo;
                guardar();
            }
        });

        let eliminar = document.createElement('button');
        eliminar.textContent = 'Eliminar';
        eliminar.addEventListener('click', function () {
            ul.removeChild(li);
            guardar();
        });

    
        li.appendChild(span);
        li.appendChild(editar);
        li.appendChild(eliminar);
        ul.appendChild(li);

        input.value = '';
        guardar();
    } else {
        console.log('No escribiste nada');
    }
});

// borrar todo//
borrarTodoBtn.addEventListener('click', function () {
    ul.innerHTML = '';
    localStorage.removeItem('cosasGuardadas'); 
});


function guardar() {
    localStorage.setItem('cosasGuardadas', ul.innerHTML);
}


function ponerEventosOtraVez() {
    let lis = ul.querySelectorAll('li');

    lis.forEach(function (li) {
        let texto = li.querySelector('span');
        let editar = li.querySelector('button:nth-of-type(1)');
        let eliminar = li.querySelector('button:nth-of-type(2)');

        texto.addEventListener('click', function () {
            texto.classList.toggle('tachado');
            guardar();
        });

        editar.addEventListener('click', function () {
            let nuevo = prompt('Cambiar texto:', texto.textContent);
            if (nuevo !== '' && nuevo !== null) {
                texto.textContent = nuevo;
                guardar();
            }
        });

        eliminar.addEventListener('click', function () {
            li.remove();
            guardar();
        });
    });
}