const menubtn = document.getElementById('menubtn')

const menu = document.getElementById('dropdownmenu')

menubtn.addEventListener('click', () => {
    if(menu.classList.contains('invisible')){
        menu.classList.remove('invisible')
    } else {
        menu.classList.add('invisible')
    }
})