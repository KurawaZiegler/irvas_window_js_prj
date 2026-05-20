
function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector)

    modal.classList.add('show')
    // modal.classList.remove('hide')

    document.body.style.overflow = 'hidden'
}
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)

    // modal.classList.add('hide')
    modal.classList.remove('show')

    document.body.style.overflow = ''
}


function modal(modalSelector) {
    const modal = document.querySelector('.popup'),
        modalTrigger = document.querySelectorAll('[data-modal]'),
        modalCloseBtn = document.querySelectorAll('[data-modal_close]'),
        dialog = document.querySelectorAll('.popup_dialog')


    modalTrigger.forEach(btn => {
        if (btn.classList.contains('popup_engineer_btn')) {
            btn.addEventListener('click', () => openModal('.popup_engineer'))
        } else if (btn.classList.contains('glazing_price_btn')) {
            btn.addEventListener('click', () => openModal('.popup_calc'))
        } else {
            btn.addEventListener('click', (e) => {
                openModal('.popup')
                e.preventDefault()
            })
        }
    });
    // modal.addEventListener('click', (e) => {
    //     if (e.target === modal || e.target.getAttribute('data-modal_close')) {
    //         closeModal(modalSelector)
    //     }
    // })
    modalCloseBtn.forEach(btn => {
        btn.addEventListener('click', () => closeModal('.is-open.show'))
    })



}


export default modal