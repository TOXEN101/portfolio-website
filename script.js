let samplesThumbId = document.querySelectorAll('[data-topic-id]')
let transparent = document.getElementById('transparent')

samplesThumbId.forEach((sampleThumb => {
    sampleThumb.addEventListener('click', () => {
        let topicId = sampleThumb.dataset.topicId;
        window.open(`${topicId}.html`, 'blank')
    })
    sampleThumb.addEventListener('hover', () => {
        let topicId = sampleThumb.dataset.topicId;
        console.log(topicId)
    })
}))

let scrollBtn = document.getElementById('scrollBtn');
document.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        scrollBtn.classList.add("active")
    }
    else if (window.scrollY >= -50) {
        scrollBtn.classList.remove("active")
    }
})
scrollBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
    document.body.style.scrollBehavior = 'smooth';
})

let hamburgerMenu = document.querySelector('#hamburgerMenu');
let hamburgerMenuIcon = document.querySelector('#hamburgerMenuIcon')
hamburgerMenuIcon.addEventListener('click', () => {
    hamburgerMenu.classList.add('active')
    transparent.classList.add('active')
})

transparent.addEventListener('click', () => {
    transparent.classList.remove('active')
    hamburgerMenu.classList.remove('active')
})