// ===== Otorgamos el valor INDETERMINADO a un checkbox =====
document.getElementById("threeCB").indeterminate = true;
// ==========================================================

// ===== Creamos un NODELIST con los checkbox que queremos validar.=====
const requiredCheckboxes = document.querySelectorAll(".requiredCheckbox");

// ===== Transformamos la NODELIST en un ARRAY para poder aplicar los métodos SOME y FOREACH.=====
const arrCheckboxes = [].slice.call(requiredCheckboxes);

// ===== Asignamos el boton a una variable.=====
const submitButton = document.querySelector('button[type="submit"]');

/* ===== 
Creamos una función que verifique si UNO de los checkbox está seleccionado. 
Si el resultado es TRUE, remueve el atributo required de TODOS los checkbox y retorna true, caso contrario retorna false.===== */
function oneIsChecked() {
    if (arrCheckboxes.some(checkbox => checkbox.checked)) {
        arrCheckboxes.forEach(checkbox => checkbox.removeAttribute('required'));
        return true;
    }
    return false;
}

/* ===== 
    Creamos una función para validar los checkboxes y agregar mensajes personalizados.
    Si no hay ninguno checkeado, devuelve el atributo required a todos los elementos y le otorga un mensaje persoanlizado.
    Si hay al menos uno checkeado (los required ya no están gracias a la función oneIsChecked), remueve el mensaje personalizado y valida el formulario.
===== */
function validateCheckboxes() {
    if (!oneIsChecked()) {
        arrCheckboxes.forEach(el => {
            el.setAttribute('required', '');
            el.setCustomValidity('Elige al menos una opción.');
        })
        return false;
    }
    arrCheckboxes.forEach(el => {
        el.setCustomValidity('');
    })
    return true;
}


// ===== Llamamos la función con el botón cuando le hacemos click.=====
submitButton.addEventListener("click", validateCheckboxes);
