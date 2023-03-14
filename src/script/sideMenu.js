let sideNav

const getEl = async () => {
    return sideNav = await document.querySelectorAll('.jo-link')
}

let sideNavLinks = await getEl()

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY
    sideNavLinks.forEach(link => {
        let thisSection = document.querySelector(link.hash)
        if(thisSection.offsetTop <= fromTop && thisSection.offsetTop + thisSection.offsetHeight > fromTop) {
            link.classList.add('current')
        } else {
            link.classList.remove('current')
        }
    })
})