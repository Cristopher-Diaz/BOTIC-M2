const btnSubmit = document.getElementById('btn-submit')

btnSubmit.addEventListener('click', submitForm)

function submitForm() {

  Swal.fire({
    title: '¡Éxito!',
    text: 'Tu mensaje ha sido enviado correctamente.',
    icon: 'success',
    confirmButtonText: 'Ok'
  })

}