const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') {
        event.preventDefault
    }
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu') 
    }

}

btnMobile.addEventListener('click', toggleMenu);

btnMobile.addEventListener('touchstart', toggleMenu);


const btAbrirModal = $("#btAbrirModal");
const modal = $("#modal");
const modalClose = $("#modal .modal-close");
const modalBackground = $("#modal .modal-bg");

btAbrirModal.click(function () {
    modal.fadeIn(500);
});

modalClose.click(function () {
    modal.fadeOut(500);
});

modalBackground.click(function () {
    modal.fadeOut(500);
});