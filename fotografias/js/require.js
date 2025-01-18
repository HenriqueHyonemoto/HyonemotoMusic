
     // Seleciona todas as divs com a classe 'js-require'
     const requireElements = document.querySelectorAll('.js-require');

     requireElements.forEach(element => {
         const pageUrl = element.getAttribute('page'); // Obtém o valor do atributo 'page'
 
         if (pageUrl) {
             fetch(pageUrl)
                 .then(response => response.text())
                 .then(html => {
                     // Insere o conteúdo HTML dentro do elemento correspondente
                     element.innerHTML = html;
 
                     // Agora você pode acessar os elementos inseridos dentro desse elemento
                     console.log(element.querySelector('#element-from-other-page'));
                 })
                 .catch(error => console.error(`Erro ao carregar o arquivo ${pageUrl}:`, error));
         } else {
             console.error('Atributo "page" não encontrado no elemento:', element);
         }
     });
    