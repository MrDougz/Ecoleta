const buttonSearch = document.querySelector('#page-home main a')
const modal = document.querySelector('#modal')

const closeModal = document.querySelector('#modal .header a')

function searchClick(){
    modal.classList.remove('hide')
}
function searchClose(){
    modal.classList.add('hide')
}
buttonSearch.addEventListener('click', searchClick)
closeModal.addEventListener('click', searchClose)