const btnSubmit = document.querySelector('#btn-submit')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const inputMsj = document.querySelector('#msj')

btnSubmit.addEventListener('click', submitForm)

function submitForm() {
  // Se agrupan todos los campos que deben ser validados
  const inputs = [
    { value: inputName.value.trim(), field: 'Nombre' },
    { value: inputEmail.value.trim(), field: 'Email' },
    { value: inputMsj.value.trim(), field: 'Mensaje' }
  ]

  // Verifica si todos los campos están vacíos
  const allFieldsEmpty = inputs.every(input => input.value === '')

  if (allFieldsEmpty) {
    const alertData = {
      title: 'Oopss..',
      text: 'Todos los campos son obligatorios!',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    }
    customAlert(alertData)
    return
  }

  // Busca el primer campo vacío
  const emptyField = inputs.find(input => input.value === '')

  // Si se encuentra un campo vacío
  if (emptyField) {
    const alertData = {
      title: 'Oopss..',
      text: `El campo ${emptyField.field} es obligatorio`,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    }
    customAlert(alertData)
    return
  }

  // Si pasa todas las validaciones, envía el form
  const alertData = {
    title: 'Gracias por contactarnos',
    text: 'Formulario enviado correctamente',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  }
  inputName.value = ''
  inputEmail.value = ''
  inputMsj.value = ''
  customAlert(alertData)
}

/**
 * Funcion que renderiza una alerta segun el caso
 * @param {Obj} alertData Objeto con la información de la alerta
 */
function customAlert(alertData) {
  const { title, text, icon, confirmButtonText } = alertData
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText
  })
}