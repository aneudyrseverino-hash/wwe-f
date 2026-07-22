// Añadir un botón flotante para cambiar preferencias después de aceptar
const floatingBtn = document.createElement('button');
floatingBtn.innerHTML = '<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB24vfToN01tLSoP8hb7XS8-Ptw_EmHosI3DDWwDPOmeqg9KldVXad7HINGu3ubOcByFe34kM7uvAjY35IQpuRj0ZvUrp2eHWsfvQIvOZ9o-iVm78f9gCXLzeWaju1496TsJmuHvn4SECfGjyz5FNDIx_tHRptX1WyekipfpvSpidCvxLLmcZOc0pjTzmv9Cw7iwIJA9aCmSx2xT6IQZEVykWugiq6q-70OCtFWOadUgEWgOJFmZ9wCjOI-8e9Y_b47PKq6hbLGs-J" style=" border-radius: 50%; width:95% height:95% object-fit:contain">';
floatingBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ffffff;
    color: white;
    border: 3px solid #dc3545;
    cursor: pointer;
    z-index: 1000;
    display: none;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: transform 0.2s ease;
`;

floatingBtn.onmouseenter = () => {
    floatingBtn.style.transform = 'scale(1.1)';
};
floatingBtn.onmouseleave = () => {
    floatingBtn.style.transform = 'scale(1)';
};

floatingBtn.onclick = () => {
    if (window.cookieManager) {
        window.cookieManager.showModal();
    }
};
document.body.appendChild(floatingBtn);

// Mostrar el botón flotante después de aceptar cookies
function showFloatingButton() {
    floatingBtn.style.display = 'flex';
}

// Observar cuando se aceptan cookies
document.addEventListener('DOMContentLoaded', () => {
    // Comprobar si ya hay consentimiento
    const consent = document.cookie.split('; ').find(row => row.startsWith('cookie_consent='));
    if (consent) {
        showFloatingButton();
    }
});

