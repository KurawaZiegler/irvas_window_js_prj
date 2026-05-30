import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
    const windowShape = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    function bindActionElem(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                            elem.forEach((box, j) => {
                                box.checked = false
                                if (j === i) {
                                    box.checked = true
                                }
                            })
                        } else {
                            state[prop] = item.value
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value
                        break;
                }
                console.log(state)

            })
        })
    }
    bindActionElem('click', windowShape, 'shape')
    bindActionElem('input', windowWidth, 'width')
    bindActionElem('input', windowHeight, 'height')
    bindActionElem('change', windowType, 'type')
    bindActionElem('change', windowProfile, 'profile')

    checkNumInputs('#width')
    checkNumInputs('#height')

}
export default changeModalState;