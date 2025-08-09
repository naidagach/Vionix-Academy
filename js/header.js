function togglePanel(elem) {

    const panel = elem.nextElementSibling
    const icon = elem.querySelector('i')

    
    document.querySelectorAll('.panel').forEach(p => {
        if (p !== panel) {
            p.classList.remove('h-[400px]')
            p.classList.add('h-0')
        }
    })
    
    document.querySelectorAll('.navmenu i').forEach(i => {
        i.classList.remove('fa-caret-up')
        i.classList.add('fa-caret-down')
    })

    if (panel.classList.contains('h-0')) {
        panel.classList.remove('h-0')
        panel.classList.add('h-[400px]')
        icon.classList.remove('fa-caret-down')
        icon.classList.add('fa-caret-up')
      } else {
        panel.classList.remove('h-[400px]')
        panel.classList.add('h-0')
        icon.classList.remove('fa-caret-up')
        icon.classList.add('fa-caret-down')
      }

      
}
