
const modal = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]')

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }

                windows.forEach(item => {
                    item.classList.remove('show')
                })

                modal.classList.add('show')
                document.body.classList.add('modal-open')
            })
        })
        close.addEventListener('click', () => {
            modal.classList.remove('show')
            document.body.classList.remove('modal-open')

            windows.forEach(item => {
                item.classList.remove('show')
            })
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                modal.classList.remove('show')
                document.body.classList.remove('modal-open')
            }
        })
    }
    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).classList.add('show')
            document.body.classList.add('modal-open')
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc .popup_calc_close')
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile .popup_calc_profile_close', false)
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end .popup_calc_end_close', false)
    showModalByTime('.popup', 60000)

};

export default modal;










// function openModal(modalSelector) {
//     const modal = document.querySelector(modalSelector)

//     modal.classList.add('show')
//     // modal.classList.remove('hide')

//     document.body.style.overflow = 'hidden'
// }
// function closeModal(modalSelector) {
//     const modal = document.querySelector(modalSelector)

//     // modal.classList.add('hide')
//     modal.classList.remove('show')

//     document.body.style.overflow = ''
// }


// function modal(modalSelector) {
//     const modal = document.querySelector('.popup'),
//         modalTrigger = document.querySelectorAll('[data-modal]'),
//         modalCloseBtn = document.querySelectorAll('[data-modal_close]'),
//         dialog = document.querySelectorAll('.popup_dialog')


//     modalTrigger.forEach(btn => {
//         if (btn.classList.contains('popup_engineer_btn')) {
//             btn.addEventListener('click', () => openModal('.popup_engineer'))
//         } else if (btn.classList.contains('glazing_price_btn')) {
//             btn.addEventListener('click', () => openModal('.popup_calc'))
//         } else {
//             btn.addEventListener('click', (e) => {
//                 openModal('.popup')
//                 e.preventDefault()
//             })
//         }
//     });
//     modalCloseBtn.forEach(btn => {
//         btn.addEventListener('click', () => closeModal('.is-open.show'))
//     })



// }

