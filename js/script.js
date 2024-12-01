// https://lucide.dev/icons/
lucide.createIcons();

//Trocar Lingua

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('language-button');
    const menu = document.getElementById('language-menu');
    const arrow = document.getElementById('arrow');
    const languageItems = document.querySelectorAll('.language-menu li');
    const langDisplay = document.getElementById('language-display');
    const languageFlag = document.getElementById('language-flag');
    let selectedLanguage = 'pt-BR'; // Idioma padrão
    langDisplay.innerHTML = selectedLanguage;
    // Atualiza o texto do botão com o idioma selecionado
    function updateButtonText(language) {
        const languageMap = {
            'pt-BR': 'Português',
            'en': 'English'
        };
        langDisplay.innerHTML = `${languageMap[language]}`;
        if (language === 'pt-BR') {
            languageFlag.innerHTML = `<img src="images/fg-br.png" width="32">`;
        } else if (language === 'en') {
            languageFlag.innerHTML = `<img src="images/fg-us.png" width="32">`;
        }
    }

    // Atualiza o idioma do site
    function updateSiteLanguage(language) {
        // Aqui você pode adicionar a lógica para atualizar o idioma do site
        console.log(`Idioma selecionado: ${language}`);
    }

    // Evento de clique no botão para abrir/fechar o menu
    button.addEventListener('click', function () {
        if (menu.style.display === 'block') {
            menu.style.animation = 'slideUp 0.3s forwards';
            arrow.classList.remove('up');
            arrow.classList.add('down');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        } else {
            menu.style.display = 'block';
            menu.style.animation = 'slideDown 0.3s forwards';
            arrow.classList.remove('down');
            arrow.classList.add('up');
        }
    });

    // Evento de clique nos itens do menu para selecionar o idioma
    languageItems.forEach(item => {
        item.addEventListener('click', function () {
            const language = item.getAttribute('data-lang');
            selectedLanguage = language;
            updateButtonText(language);
            //updateSiteLanguage(language);
            menu.style.animation = 'slideUp 0.3s forwards';
            arrow.classList.remove('up');
            arrow.classList.add('down');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        });
    });
});

// Fade Up e Fade Down de Elementos
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-up, .fade-down');
    const thresholdUp = 300; // Ajuste este valor para fade-up do elemento
    const thresholdDown = 500; // Ajuste este valor para fade-down do elemento
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
