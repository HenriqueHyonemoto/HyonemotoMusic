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

<body>
    
<?php require "navbar.php"?>

    <section class="hero" id="home">
        <div>
            <div class="hero-content fade-up fade-down">
                <h1>Bem-vindo à <br><a style="color:rgb(0, 0, 0)">Hyonemoto Music</a></h1>
                <p>Meu Acervo de Obras Músicais.</p>
                <a href="#about" class="btn">Saiba Mais</a>
            </div>
        </div>
    </section>

    <section class="cards-section" id="about">
        <div class="card fade-up fade-down">
            <img src="images/card-cover.png" alt="Covers">
            <div class="card-content">
                <h2 style="color:brown">Covers</h2>
                <h3>Videos, Tutoriais e Partituras</h3>
                <hr>
                <p>
                    Interpretações, Arranjos e Transcrições que valorizam a essência de cada composição, trazendo novas
                    perspectivas e nuances únicas para cada obra. Estão disponíveis vídeos e partituras para explorar
                    essas versões.</p>
                <a href="pages/covers.html" class="btn" style="background-color:brown">Ver Mais</a>
            </div>
        </div>
        <div class="card fade-up fade-down">
            <img src="images/card-autoral.jpg" alt="Autorais">
            <div class="card-content">
                <h2 style="color:blueviolet">Obras Autorais</h2>
                <h3>Partituras, Manuscritos e Histórias</h3>
                <hr>
                <p>Composições originais, abrangendo peças para piano solo e músicas multi-instrumentais no estilo de
                    trilhas sonoras. Estão disponíveis partituras, gravações histórias e fotografias dos manuscritos originais.</p>
                <a href="pages/autorais.html" class="btn" style="background-color: blueviolet;">Ver Mais</a>
            </div>
        </div>
        <div class="card fade-up fade-down">
            <img src="images/card-fotos.jpg" alt="Fotos">
            <div class="card-content">
                <h2 style="color:rgb(194, 160, 25)">Fotografias</h2>
                <h3>Imagens e Contextos</h3>
                <hr>
                <p>Fotografias escolhidas como capa para os álbuns das obras autorais. Estão incluídas algumas versões
                    originais sem edição, as histórias por trás das imagem e detalhes sobre o processo criativo e edição
                    das capas.</p>
                <a href="pages/fotografias.html" class="btn" style="background-color: rgb(194, 160, 25);">Ver Mais</a>
            </div>
        </div>
    </section>

    <?php require "footer.php"?>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="js/script.js"></script>
</body>

</html>