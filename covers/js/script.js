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

// Filtro de Obras --------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.filter-item[data-submenu]');
    const cardContainers = document.querySelectorAll('.card-obras-total');

    // Verificar se a URL contém hashes (#)
    if (window.location.hash) {
        const hashes = window.location.hash.substring(1).split('-'); // Separar os valores por '-'

        hashes.forEach(hash => {
            // Abrir os submenus correspondentes
            const submenu = document.getElementById(`submenu-${hash}`);
            const arrow = document.querySelector(`.filter-item[data-submenu="submenu-${hash}"] .filter-arrow`);

            if (submenu) {
                submenu.classList.add('open');
            }
            if (arrow) {
                arrow.classList.add('open');
            }

            // Aplicar filtro automaticamente nos cards
            cardContainers.forEach(container => {
                const cardCategories = container.getAttribute('categoria');
                if (cardCategories) {
                    const categoriesArray = cardCategories.split(' ');
                    if (categoriesArray.includes(hash)) {
                        container.style.display = 'block';
                    } else {
                        container.style.display = 'none';
                    }
                }
            });
        });
    }

    // Evento de clique nos filtros
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            const submenuId = this.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);
            const arrow = this.querySelector('.filter-arrow');

            // Verificar se o submenu clicado é um submenu-neto
            const isSubmenuNeto = submenu.classList.contains('submenu-neto');

            // Fechar todos os submenus e resetar os ícones
            filterItems.forEach(otherItem => {
                const otherSubmenuId = otherItem.getAttribute('data-submenu');
                const otherSubmenu = document.getElementById(otherSubmenuId);
                const otherArrow = otherItem.querySelector('.filter-arrow');

                if (otherSubmenu && otherSubmenu !== submenu) {
                    if (isSubmenuNeto) {
                        // Se o submenu clicado é um submenu-neto, fechar apenas outros submenu-neto
                        if (otherSubmenu.classList.contains('submenu-neto')) {
                            otherSubmenu.classList.remove('open');
                            otherArrow.classList.remove('open');
                        }
                    } else {
                        // Se não for um submenu-neto, fechar todos os outros submenus
                        otherSubmenu.classList.remove('open');
                        otherArrow.classList.remove('open');
                    }
                }
            });

            // Abrir o submenu clicado e rotacionar o ícone
            if (submenu) {
                submenu.classList.toggle('open');
                arrow.classList.toggle('open');
            }
        });
    });

    // Evento de clique para filtrar os cards
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            if (!category) return; // Ignora se não tiver data-category

            cardContainers.forEach(container => {
                const cardCategories = container.getAttribute('categoria');
                if (cardCategories) {
                    const categoriesArray = cardCategories.split(' ');
                    if (categoriesArray.includes(category)) {
                        container.style.display = 'block';
                    } else {
                        container.style.display = 'none';
                    }
                }
            });
        });
    });
});








//selecionar conteudo central e indice da navbar - ----------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a, .filter-item, .card-obras');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            const pageid = this.getAttribute('data-id');
            // Redireciona para a página correspondente
            if (page) {
                window.location.href = `${page}.html`;
            }
            if (pageid) {
                window.location.href = `#${pageid}`;
            }
        });
    });
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


//navbar
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove "active" de todos os links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Adiciona "active" no link clicado
            link.classList.add('active');
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

// Mudar cor dos cards de acordo com a card-obras-color
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-obras');

    cards.forEach(card => {
        const color = card.getAttribute('card-obras-color');
        if (color) {
            card.style.setProperty('--main-purple', color);
        }
    });
});



// sistema de paginas

// document.addEventListener("DOMContentLoaded", function () {
//     const itemsPerPage = 6;
//     const container = document.querySelector(".container-obras");
//     const items = Array.from(container.children);
//     const totalPages = Math.ceil(items.length / itemsPerPage);
//     let currentPage = 1;

//     function showPage(page) {
//         container.innerHTML = "";
//         const start = (page - 1) * itemsPerPage;
//         const end = start + itemsPerPage;
//         const pageItems = items.slice(start, end);

//         pageItems.forEach(item => container.appendChild(item));
//         updatePagination();
//     }

//     function updatePagination() {
//         const paginationContainer = document.querySelector(".pagination");
//         paginationContainer.innerHTML = "";

//         const prevButton = document.createElement("button");
//         prevButton.textContent = "←";
//         prevButton.id = "prevButton";
//         prevButton.classList.add("btn", "mx-1");
//         prevButton.style.backgroundColor = "#912727";
//         prevButton.style.color = "white";
//         prevButton.addEventListener("click", function () {
//             if (currentPage > 1) {
//                 currentPage--;
//                 showPage(currentPage);
//             }
//         });
//         paginationContainer.appendChild(prevButton);

//         const startPage = Math.max(1, currentPage - 5);
//         const endPage = Math.min(totalPages, currentPage + 5);

//         for (let i = startPage; i <= endPage; i++) {
//             const pageButton = document.createElement("button");
//             pageButton.textContent = i;
//             pageButton.classList.add("btn", "mx-1");
//             pageButton.style.border = "1px solid #912727";
//             pageButton.style.color = "#912727";
//             if (i === currentPage) {
//                 pageButton.classList.add("active");
//                 pageButton.style.backgroundColor = "#912727";
//                 pageButton.style.color = "white";
//             }
//             pageButton.addEventListener("click", function () {
//                 currentPage = i;
//                 showPage(currentPage);
//             });
//             paginationContainer.appendChild(pageButton);
//         }

//         const nextButton = document.createElement("button");
//         nextButton.textContent = "→";
//         nextButton.id = "nextButton";
//         nextButton.classList.add("btn", "mx-1");
//         nextButton.style.backgroundColor = "#912727";
//         nextButton.style.color = "white";
//         nextButton.addEventListener("click", function () {
//             if (currentPage < totalPages) {
//                 currentPage++;
//                 showPage(currentPage);
//             }
//         });
//         paginationContainer.appendChild(nextButton);
//     }

//     showPage(currentPage);
// });


//Filtro de pesquisa
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const cardsContainer = document.querySelector(".container-obras");
    const cards = document.querySelectorAll(".card-obras-total");

    // Função para normalizar texto (remover acentos e converter ç -> c)
    function normalizeText(text) {
        return text
            .normalize("NFD") // Decompõe caracteres acentuados
            .replace(/[\u0300-\u036f]/g, "") // Remove marcas diacríticas
            .replace(/ç/g, "c") // Substitui 'ç' por 'c'
            .toLowerCase();
    }

    // Adiciona efeito de transição aos cards
    cards.forEach(card => {
        card.style.transition = "opacity 0.3s ease-in-out";
        card.style.opacity = "1";
    });

    searchInput.addEventListener("input", function () {
        const searchText = normalizeText(searchInput.value);
        let hasResults = false;

        cards.forEach(card => {
            const title = normalizeText(card.querySelector(".title").innerText);
            const keywords = normalizeText(card.querySelector(".keywords")?.innerText || "");

            if (title.includes(searchText) || keywords.includes(searchText)) {
                card.style.display = "flex"; // Ajuste caso use flexbox
                setTimeout(() => {
                    card.style.opacity = "1";
                }, 50);
                hasResults = true;
            } else {
                card.style.opacity = "0";
                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });

        // Remove mensagem antiga, se houver
        const existingMessage = document.getElementById("no-results-message");
        if (existingMessage) {
            existingMessage.remove();
        }

        // Se não houver resultados, adiciona a mensagem
        if (!hasResults) {
            const noResultsMessage = document.createElement("div");
            noResultsMessage.id = "no-results-message";
            noResultsMessage.innerHTML = `
                <div class="container pt-0">
                    <div class="container-obras row mt-40 mb-40 text-center">
                        <h1 style="margin-top:100px;margin-bottom:100px;">Sem Resultados <br>=(</h1>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(noResultsMessage);
        }
    });
});



