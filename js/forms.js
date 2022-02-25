
// ===== Otorgamos el valor INDETERMINADO a un checkbox =====
document.getElementById("threeCB").indeterminate = true;
// ==========================================================

// ===== Creamos un NODELIST con los checkbox que queremos validar.=====
const requiredCheckboxes = document.querySelectorAll('.requiredCheckbox');

// ===== Transformamos la NODELIST en un ARRAY para poder aplicar los métodos SOME y FOREACH.=====
const arrCheckboxes = [].slice.call(requiredCheckboxes);

// ===== Asignamos el boton a una variable.=====
const submitButton = document.querySelector('button[type="submit"]')


// ===== Creamos una función que verifique si UNO de los checkbox está seleccionado.=====
function oneIsChecked() {
    return arrCheckboxes.some(function (cb) {
        return cb.checked;
    });
}

// ===== Creamos una función que REMUEVE el atributo required a TODOS los elementos si uno de los checkbox está seleccionado.=====
function validateCheckboxes() {
    if (oneIsChecked()) {
        arrCheckboxes.forEach(element => {
            element.removeAttribute('required');
        });
    }
}

// ===== Llamamos la función con el botón cuando le hacemos click.=====
submitButton.addEventListener("click", validateCheckboxes);