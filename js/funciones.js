
function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = function () {
        console.log('Hubo un error');
    }

    abrirConexion.onsuccess = function () {
        DB = abrirConexion.result;
    }
}



function imprimirAlerta(mensaje, tipo) {

    const alerta = document.querySelector('.alerta');

    if (!alerta) {
        // Crear la alerta
        const divAlerta = document.createElement('div');
        divAlerta.textContent = mensaje;
        divAlerta.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alerta');

        if (tipo === 'error') {
            divAlerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'border');
        } else {
            divAlerta.classList.add('bg-green-100', 'border-green-200', 'text-green-700', 'border');
        }

        formulario.appendChild(divAlerta);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }

}