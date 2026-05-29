const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector)
    const tab = document.querySelectorAll(tabSelector)
    const content = document.querySelectorAll(contentSelector)
    const active = document.querySelector(activeClass)

    function hideTabContent() {
        content.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show')
        })
        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
        document.querySelectorAll('.glazing_link').forEach(item => {
            item.classList.remove(activeClass)
        })
    }
    function showTabContent(i = 0) {
        content[i].classList.add('show')
        content[i].classList.remove('hide')

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

                    // if (target.classList.contains('glazing_link')) {
                    //     document.querySelectorAll('.glazing_link').forEach(item => {
                    //         item.classList.add(activeClass)
                    //     })
                    // }
                }
            })
        }
        // if (target.classList.contains('glazing_link')) {
        //     document.querySelectorAll('.glazing_link').forEach(item => {
        //         item.classList.add(a)
        //     })
        // }
    })

}
export default tabs;