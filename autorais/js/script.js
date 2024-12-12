// https://lucide.dev/icons/
//lucide.createIcons();

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

// Filtro de Obras
document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.filter-item[data-submenu]');

    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            const submenuId = this.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);
            const arrow = this.querySelector('.filter-arrow');

            // Fechar todos os submenus e resetar os ícones
            filterItems.forEach(otherItem => {
                const otherSubmenuId = otherItem.getAttribute('data-submenu');
                const otherSubmenu = document.getElementById(otherSubmenuId);
                const otherArrow = otherItem.querySelector('.filter-arrow');

                if (otherSubmenu && otherSubmenu !== submenu) {
                    otherSubmenu.classList.remove('open');
                    otherArrow.classList.remove('open');
                }
            });

            // Abrir o submenu clicado e rotacionar o ícone
            if (submenu) {
                submenu.classList.toggle('open');
                arrow.classList.toggle('open');
            }
        });
    });
});

//selecionar conteudo central e indice da navbar
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a, .filter-item');
    const mainContent = document.querySelector('.main-content .js-require');
    const tableOfContents = document.querySelector('.table-of-contents .js-require');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');

            // Atualiza o conteúdo principal
            mainContent.setAttribute('page', `${page}.html`);

            // Atualiza o índice de conteúdo
            tableOfContents.setAttribute('page', `${page}_indice.html`);

            // Carrega o novo conteúdo
            loadContent(mainContent);
            loadContent(tableOfContents);
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

//modal obras
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');

    window.openModal = function(card) {
        const obraId = card.getAttribute('data-obra');
        const file = `${obraId}.html`;

        fetch(file)
            .then(response => response.text())
            .then(data => {
                modalContent.innerHTML = data;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Desativa a rolagem da página de fundo
            })
            .catch(error => console.error(`Erro ao carregar o ${file}:`, error));
    };

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Reativa a rolagem da página de fundo
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Reativa a rolagem da página de fundo
        }
    });
});

//submenunavbar
document.addEventListener('DOMContentLoaded', function() {
    const togglerButton = document.querySelector('.navbar-toggler');
    const navbarSubmenu = document.getElementById('navbarSubmenu');

    togglerButton.addEventListener('click', function() {
        if (navbarSubmenu.style.display === 'block') {
            navbarSubmenu.style.display = 'none';
        } else {
            navbarSubmenu.style.display = 'block';
        }
    });

    const navbarItems = document.querySelectorAll('.navbar-item');

    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            // Atualiza o conteúdo principal
            const mainContent = document.querySelector('.main-content .js-require');
            mainContent.setAttribute('page', `${page}.html`);

            // Atualiza o índice de conteúdo
            const tableOfContents = document.querySelector('.table-of-contents .js-require');
            tableOfContents.setAttribute('page', `${page}_indice.html`);

            // Carrega o novo conteúdo
            loadContent(mainContent);
            loadContent(tableOfContents);

            // Fecha o submenu
            navbarSubmenu.style.display = 'none';
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
