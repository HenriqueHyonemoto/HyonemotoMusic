// https://lucide.dev/icons/
lucide.createIcons();

//require-js <div class="js-require" data-info="navbar.html"></div>

//Calcula minha idade
function calcularIdade() {
    // Data de nascimento
    const dataNasc = new Date('2003-08-25');
    // Data atual
    const dataAtual = new Date();
    // Calcula a diferença entre as duas datas
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    // Verifica se o aniversário já ocorreu este ano
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();
    if (mesAtual < dataNasc.getMonth() + 1 || (mesAtual === dataNasc.getMonth() + 1 && diaAtual < dataNasc.getDate())) {
        idade--;
    }
    // Exibe a idade no HTML
    document.getElementById('idade').innerText = idade;
}
// Chama a função para calcular e exibir a idade



//Trocar Lingua
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('language-button');
    const menu = document.getElementById('language-menu');
    const arrow = document.getElementById('arrow');
    const languageItems = document.querySelectorAll('.language-menu li');
    const langDisplay = document.getElementById('language-display');
    const languageFlag = document.getElementById('language-flag');
    let selectedLanguage = 'pt-BR';
    langDisplay.innerHTML = selectedLanguage;
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
        alert(`A funcionalidade de alterar idiomas ainda está em desenvolvimento. \nPorém, o idioma selecionado foi: ${language}`);
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
            updateSiteLanguage(language);
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

//carrossel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;
    let interval;
    let isTransitioning = false;

    function showSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = index;
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        updateInfo();
        setTimeout(() => {
            isTransitioning = false;
        }, 500); // Tempo da transição
    }

    function updateInfo() {
        const currentSlide = slides[currentIndex];
        const info = currentSlide.querySelector('.carousel-info');
        const textElement = info.querySelector('.carousel-info-text');
        textElement.textContent = info.getAttribute('data-info');
    }

    function startAutoPlay() {
        interval = setInterval(() => {
            showSlide((currentIndex + 1) % slides.length);
        }, 3000); // 3 segundos
    }

    function stopAutoPlay() {
        clearInterval(interval);
    }

    function handleMouseOver() {
        stopAutoPlay();
        const currentSlide = slides[currentIndex];
        const info = currentSlide.querySelector('.carousel-info');
        info.classList.add('visible');
        prevButton.classList.add('visible');
        nextButton.classList.add('visible');
    }

    function handleMouseOut() {
        startAutoPlay();
        const currentSlide = slides[currentIndex];
        const info = currentSlide.querySelector('.carousel-info');
        info.classList.remove('visible');
        prevButton.classList.remove('visible');
        nextButton.classList.remove('visible');
    }

    prevButton.addEventListener('click', function () {
        showSlide((currentIndex - 1 + slides.length) % slides.length);
    });

    nextButton.addEventListener('click', function () {
        showSlide((currentIndex + 1) % slides.length);
    });

    carousel.addEventListener('mouseover', handleMouseOver);
    carousel.addEventListener('mouseout', handleMouseOut);

    // Inicializa o carrossel e o autoplay
    showSlide(currentIndex);
    startAutoPlay();
});

//adicionar texto apra area de transferencia do usuario
document.addEventListener('DOMContentLoaded', function () {
    const emailLinks = document.querySelectorAll('.copy-email');

    emailLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            const email = link.getAttribute('data-email');

            // Cria um elemento temporário para copiar o texto
            const tempInput = document.createElement('input');
            tempInput.value = email;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Exibe uma mensagem de confirmação
            alert('Email copiado para a área de transferência: ' + email);
        });
    });
});