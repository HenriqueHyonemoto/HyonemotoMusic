<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hyonemoto Music ♪</title>
    <link rel="shortcut icon" href="images/favicon.jpg" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <!-- https://fontawesome.com/search -->
    <script src="https://kit.fontawesome.com/50812450f6.js" crossorigin="anonymous"></script>
    <?php require "font.php" ?>
</head>
<?php
$dataNasc = new DateTime('2003-08-25');

// Data atual
$dataAtual = new DateTime();

// Calcula a diferença entre as duas datas
$dif = $dataAtual->diff($dataNasc);

// Obtém a idade em anos
$idade = $dif->y;
?>

<body class="content-body">
    <?php require "navbar.php" ?>
    <div class="content-container">
        <section class="content-section">
            <h1>Quem sou eu?</h1>
            <hr>
            <div class="image-line">
                <img src="images/logo-h-bk.png" alt="Foto do código do projeto" width="450px" class="scale-transform11">
            </div>
            <p>Me chamo <strong>Henrique Hyonemoto</strong>, tenho atualmente <?= $idade ?> anos. Iniciei meus estudos em programação em 2021, aos 17 anos, no <strong>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus Votuporanga</strong>, onde atualmente estou no 8º semestre.</p>

            <p>Ao longo da minha trajetória, realizei projetos de estudo para aprimorar meus conhecimentos em desenvolvimento web, utilizando <strong>HTML, CSS, JavaScript e Bootstrap</strong> no front-end, e <strong>PHP, Laravel e MySQL</strong> no back-end. </p>

            <p>Também explorei a integração de sistemas embarcados com <strong>Arduino</strong> e <strong>C++</strong>, abordando tanto interfaces quanto o controle de hardware, para o <strong>projeto do Piano com Leds</strong>. </p>

            <p>Além disso, desenvolvi habilidades em <strong>engenharia reversa</strong> ao modificar o jogo <strong>A Lenda do Herói</strong>, cuja linguagem principal é <strong>C#</strong>. Nesse projeto, adaptei o jogo para <strong>renderizar em proporção de tela 21:9</strong>, proporcionando uma experiência mais imersiva para usuários com monitores ultrawide. O processo também envolveu <strong>design gráfico</strong> para alterar certos elementos visuais, garantindo uma integração harmônica com o novo formato. </p>

            <p>Sou também um entusiasta da música, tendo <strong>iniciado meus estudos no piano em 2020</strong>, após ser apresentado às obras clássicas de Chopin e Beethoven. Desenvolvi-me rapidamente e, em pouco tempo, comecei a compor peças autorais. <strong>Em setembro de 2024, comecei a aprender violão</strong>, influenciado pela banda Nirvana.</p>

            <p>Em todas essas áreas, <strong>iniciei sem nenhum conhecimento prévio</strong>, evidenciando meu grande <strong>interesse e facilidade em aprender</strong> coisas novas. Essa disposição me permitiu explorar diferentes disciplinas e superar desafios com muita <strong>dedicação</strong>.</p>
        </section>
        <section class="content-section">
            <h1>Meus Outros Projetos</h1>

            <h1>Piano com Leds</h1>
            <hr>
            <div class="image-line">
            <iframe width="920" height="560" src="https://www.youtube.com/embed/C_wII0wmy3I?si=YnltQxnkP34VAhUD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p><strong>Descrição:</strong> Este projeto tem como propósito criar uma experiência imersiva e visual ao tocar piano, onde cada tecla pressionada acende LEDs correspondentes em uma fita RGB, sincronizando luz e som em uma performance única. Além disso, possibilita a produção de vídeos artísticos que combinam música e efeitos de iluminação, resultando em uma obra visual e sonora cativante!</p>
            <p><strong>Tecnologias:</strong> Arduino, C++, Edição de Video e Imagens</p>
            <p><strong>Acesse o Projeto:</strong><a href="https://github.com/HenriqueHyonemoto/PianoLeds" target="_blank" class="project-link"> https://github.com/HenriqueHyonemoto/PianoLeds</a></p>
        </section>

        <section class="content-section">
            <h1>Aplicação WEB para criar uma ficha de personagens de RPG</h1>
            <hr>
            <div class="image-line">
            <iframe width="920" height="560" src="https://www.youtube.com/embed/XLg7ZcxgnEM?si=IXqZnNjnca0Zy_zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p><strong>Descrição:</strong> Plataforma web para criação e gerenciamento de personagens de RPG, projetada especialmente para jogadores de Ordem Paranormal. O sistema oferece funcionalidades robustas de autenticação de usuário e controle de acesso, garantindo segurança e privacidade. Com operações completas de CRUD (criação, leitura, atualização e exclusão), os jogadores podem criar personagens personalizados com todos os atributos e regras específicas do RPG Ordem Paranormal. Durante as partidas, é possível ajustar os atributos do personagem dinamicamente, proporcionando flexibilidade e uma experiência imersiva. Além disso, a plataforma conta com um sistema integrado de rolagem de dados, permitindo realizar rolagens variadas de forma prática e ágil, adaptadas às necessidades do jogo.</p>
            <p><strong>Tecnologias:</strong> Laravel, HTML, Bootstrap,  MySQL.</p>
            <p><strong>Acesse o Projeto:</strong><a href="https://github.com/HenriqueHyonemoto/gerenciador-de-fichas-op" target="_blank" class="project-link"> https://github.com/HenriqueHyonemoto/gerenciador-de-fichas-op</a></p>
        </section>

        <section class="content-section">
            <h1>Mod para Renderizar o jogo "A lenda Do Herói" em 21:9</h1>
            <hr>
            <div class="image-line">
            <iframe width="920" height="520" src="https://www.youtube.com/embed/kmnrQAylejI?si=WahzYr2TG5Vnf2ke" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <p><strong>Descrição:</strong> A Lenda do Herói é um jogo que não oferece suporte nativo para monitores ultrawide, resultando em bordas pretas verticais caso você use um monitor com essas proporções.
Esse projeto é uma modificação criada para permitir que o jogo seja renderizado em Ultrawide (21:9). Testado em resolução 2560x1080.</p>
            <p><strong>Tecnologias:</strong> Engenharia Reversa, Design Grafico,  C#.</p>
            <p><strong>Acesse o Projeto:</strong><a href="https://github.com/HenriqueHyonemoto/ALendaDoHeroi-UltrawideFix" target="_blank" class="project-link"> https://github.com/HenriqueHyonemoto/ALendaDoHeroi-UltrawideFix</a></p>
        </section>

    </div>
    <?php require "footer.php" ?>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="js/script.js"></script>
</body>

</html>