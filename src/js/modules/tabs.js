const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector)
    const tab = document.querySelectorAll(tabSelector)
    const content = document.querySelectorAll(contentSelector)
    const active = document.querySelector(activeClass)

    function hideTabContent() {
        content.forEach(item => {
            // item.classList.add('hide')
            // item.classList.remove('show')
            item.style.display = 'none'
        })
        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
        document.querySelectorAll('.glazing_link').forEach(item => {
            item.classList.remove(activeClass)
        })
    }
    function showTabContent(i = 0) {
        // content[i].classList.add('show')
        // content[i].classList.remove('hide')
        content[i].style.display = display

        tab[i].classList.add(activeClass)
        document.querySelectorAll('.glazing_link')[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()

    header.addEventListener('click', (e) => {
        const target = e.target
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            tab.forEach((item, i) => {
                if (target === item || target.parentNode === item) {
                    hideTabContent()
                    showTabContent(i)
                    document.querySelectorAll('.glazing_link').forEach((item, i) => {
                        if (item === i) {
                            item.classList.add(activeClass)
                        }
                    })
                }
            })
        }
    })

}
export default tabs;