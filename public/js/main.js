//Author: https://facebook.com/vanhnd272

const topMenu = document.getElementById('ct-top-menu');
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon');

document.addEventListener('click', (event) => {
    if(toggleTopMenuIcon.contains(event.target)) {
        //Click to Toggle top menu icon
        topMenu.classList.toggle('ct-top-menu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        //Click Outside from Toggle top menu icon
        if(topMenu.classList.contains('ct-top-menu-expanded')) {
            topMenu.classList.remove('ct-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
