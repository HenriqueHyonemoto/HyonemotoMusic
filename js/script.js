function trocaLingua() {
    const language = document.getElementById('language-switcher').value;
    document.documentElement.lang = language;
    location.reload();
    alert('A função de troca de idiomas ainda está em desenvolvimento!');
}


document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-up, .fade-down');
    const thresholdUp = 300; // Ajuste este valor para fade-up do card
    const thresholdDown = 400; // Ajuste este valor para fade-down do card
    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

            // Verifica se o elemento está dentro da viewport
            if (rect.top <= windowHeight - thresholdUp && rect.bottom >= thresholdDown) {
                element.classList.add('visible');
                element.classList.remove('hidden');
            } else {
                    element.classList.remove('visible');
                    element.classList.add('hidden');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Verifica a visibilidade inicial
});
