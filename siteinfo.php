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
    <?php require "font.php"?>
</head>

<body class = "content-body">
<?php require "navbar.php"?>
<div class="content-container">
<section class="content-section">
    <h1>Qual o conteúdo desse site?</h1>
    <hr>
    <div class="carousel">
        <div class="carousel-inner">
            <div class="carousel-slide">
                <img src="images/content-covers.jpg" alt="Imagem do Conteúdo 1" class="carousel-image">
                <div class="carousel-info" data-info="Página de Covers">
                    <img src="images/card-cover.png" alt="Ícone de Covers" class="carousel-info-icon">
                    <span class="carousel-info-text">Página de Covers</span>
                </div>
            </div>
            <div class="carousel-slide">
                <img src="images/content-autorais.jpg" alt="Imagem do Conteúdo 2" class="carousel-image">
                <div class="carousel-info" data-info="Página de Obras Autorais">
                    <img src="images/card-autoral.jpg" alt="Ícone de Obras Autorais" class="carousel-info-icon">
                    <span class="carousel-info-text">Página de Obras Autorais</span>
                </div>
            </div>
            <div class="carousel-slide">
                <img src="images/content-fotografias.jpg" alt="Imagem do Conteúdo 3" class="carousel-image">
                <div class="carousel-info" data-info="Página de Fotografias">
                    <img src="images/card-fotos.jpg" alt="Ícone de Fotografias" class="carousel-info-icon">
                    <span class="carousel-info-text">Página de Fotografias</span>
                </div>
            </div>
        </div>
        <button class="carousel-button prev">&#10094;</button>
        <button class="carousel-button next">&#10095;</button>
    </div>
    <p>Este site possui uma homepage principal, contendo os cards que levam para as páginas específicas de covers, obras autorais e fotografias. Cada página possui sua própria identidade visual separada por cores.</p>
</section>
    <section class="content-section">
        <h1>Por que esse site foi desenvolvido?</h1>
        <hr>
        <p>Este site foi desenvolvido para aprimorar meus conhecimentos no desenvolvimento de uma aplicação web front-end. Não possuo o objetivo de divulgar meu trabalho de alguma forma, só utilizei este tema, pois é um conteúdo que é original e não um conteúdo genérico.</p>
    </section>

    <section class="content-section">
        <h1>O que foi utilizado na construção desse site?</h1>
        <hr>
        <p>Para a construção desse site foi utilizado <strong>HTML, CSS, JavaScript, PHP</strong> e <strong>Photoshop</strong> para edição e personalização de imagens. Também foram utilizados ícones da <a href="https://fontawesome.com/search">FontAwesome</a> e <a href="https://lucide.dev/icons/">Lucide Icons</a>.</p>
    </section>
</div>
<?php require "footer.php"?>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="js/script.js"></script>
</body>

</html>