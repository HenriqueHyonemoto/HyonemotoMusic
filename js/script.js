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
    const carousel_no_bootstrap = document.querySelector('.carousel_no_bootstrap');
    const carousel_no_bootstrapInner = document.querySelector('.carousel_no_bootstrap-inner');
    const slides = document.querySelectorAll('.carousel_no_bootstrap-slide');
    const prevButton = document.querySelector('.carousel_no_bootstrap-button.prev');
    const nextButton = document.querySelector('.carousel_no_bootstrap-button.next');
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        currentIndex = index;
        const offset = -currentIndex * 100;
        carousel_no_bootstrapInner.style.transform = `translateX(${offset}%)`;
        updateInfo();
    }

    function updateInfo() {
        const currentSlide = slides[currentIndex];
        const info = currentSlide.querySelector('.carousel_no_bootstrap-info');
        const textElement = info.querySelector('.carousel_no_bootstrap-info-text');
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
        const info = currentSlide.querySelector('.carousel_no_bootstrap-info');
        info.classList.add('visible');
        prevButton.classList.add('visible');
        nextButton.classList.add('visible');
    }

    function handleMouseOut() {
        startAutoPlay();
        const currentSlide = slides[currentIndex];
        const info = currentSlide.querySelector('.carousel_no_bootstrap-info');
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

    carousel_no_bootstrap.addEventListener('mouseover', handleMouseOver);
    carousel_no_bootstrap.addEventListener('mouseout', handleMouseOut);

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



//submenunavbar
document.addEventListener('DOMContentLoaded', function () {
    const togglerButton = document.querySelector('.navbar-toggler-btn');
    const navbarSubmenu = document.getElementById('navbarSubmenu');

    togglerButton.addEventListener('click', function () {
        if (navbarSubmenu.classList.contains('show')) {
            navbarSubmenu.classList.remove('show');
            navbarSubmenu.classList.add('hide');
            
            // Após a animação de recolher, remove `hide` e oculta completamente
            setTimeout(() => {
                navbarSubmenu.classList.remove('hide');
                navbarSubmenu.style.display = 'none';
            }, 500); // Duração da animação (0.5s)
        } else {
            navbarSubmenu.style.display = 'block';
            navbarSubmenu.classList.remove('hide');
            navbarSubmenu.classList.add('show');
        }
    });

    const navbarItems = document.querySelectorAll('.navbar-item');

    navbarItems.forEach(item => {
        item.addEventListener('click', function () {
            const page = this.getAttribute('data-page');
            const mainContent = document.querySelector('.main-content .js-require');
            const tableOfContents = document.querySelector('.table-of-contents .js-require');

            // Atualiza os conteúdos
            mainContent.setAttribute('page', `${page}.html`);
            tableOfContents.setAttribute('page', `${page}_indice.html`);
            loadContent(mainContent);
            loadContent(tableOfContents);

            // Fecha o submenu
            navbarSubmenu.classList.remove('show');
            navbarSubmenu.classList.add('hide');
            setTimeout(() => {
                navbarSubmenu.classList.remove('hide');
                navbarSubmenu.style.display = 'none';
            }, 500);
        });
    });

    function loadContent(element) {
        const file = element.getAttribute('page');
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;
                })
                .catch(error => console.error(`Erro ao carregar o ${file}:`, error));
        } else {
            console.error('Atributo page não encontrado no elemento:', element);
        }
    }
});

//troca lingua
//Trocar Lingua
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.language-button');
    const menus = document.querySelectorAll('.language-menu');
    const arrows = document.querySelectorAll('.arrow');
    const languageItems = document.querySelectorAll('.language-menu li');
    const langDisplays = document.querySelectorAll('.language-display');
    const languageFlags = document.querySelectorAll('.language-flag');
    let selectedLanguage = 'pt-BR';

    function updateButtonText(language) {
        const languageMap = {
            'pt-BR': 'Português',
            'en': 'English'
        };
        langDisplays.forEach(display => {
            display.innerHTML = `${languageMap[language]}`;
        });
        if (language === 'pt-BR') {
            languageFlags.forEach(flag => {
                flag.innerHTML = `<img src="../images/fg-br.png" width="32">`;
            });
        } else if (language === 'en') {
            languageFlags.forEach(flag => {
                flag.innerHTML = `<img src="../images/fg-us.png" width="32">`;
            });
        }
    }

    // Atualiza o idioma do site
    function updateSiteLanguage(language) {
        // Aqui você pode adicionar a lógica para atualizar o idioma do site
        alert(`A funcionalidade de alterar idiomas ainda está em desenvolvimento. \nPorém, o idioma selecionado foi: ${language}`);
    }

    // Evento de clique no botão para abrir/fechar o menu
    buttons.forEach((button, index) => {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // Impede que o evento de clique se propague
            const menu = menus[index];
            const arrow = arrows[index];
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
    });

    // Evento de clique nos itens do menu para selecionar o idioma
    languageItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.stopPropagation(); // Impede que o evento de clique se propague
            const language = item.getAttribute('data-lang');
            selectedLanguage = language;
            updateButtonText(language);
            updateSiteLanguage(language);
            menus.forEach(menu => {
                menu.style.animation = 'slideUp 0.3s forwards';
                menu.style.display = 'none';
            });
            arrows.forEach(arrow => {
                arrow.classList.remove('up');
                arrow.classList.add('down');
            });
        });
    });

    // Inicializa o idioma padrão ao carregar a página
    updateButtonText(selectedLanguage);
});


