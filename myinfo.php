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
<?php 
$dataNasc = new DateTime('2003-08-25');

// Data atual
$dataAtual = new DateTime();

// Calcula a diferença entre as duas datas
$dif = $dataAtual->diff($dataNasc);

// Obtém a idade em anos
$idade = $dif->y;
?>
<body class = "content-body">
<?php require "navbar.php"?>
<div class="content-container">
<section class="content-section">
    <h1>Quem sou eu?</h1>
    <hr>
    <div class = "image-line">
        <img src="images/logo-h-bk.png" alt="Foto do código do projeto" width="450px" class="scale-transform11">
</div>
<p>Me chamo <strong>Henrique Hyonemoto</strong>, tenho atualmente <?= $idade ?> anos. Iniciei meus estudos em programação em 2021, aos 17 anos, no <strong>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus Votuporanga</strong>, onde atualmente estou no 8º semestre.</p> <p>Ao longo da minha trajetória, realizei projetos de estudo para aprimorar meus conhecimentos em desenvolvimento web, utilizando <strong>HTML, CSS, JavaScript e Bootstrap</strong> no front-end, e <strong>PHP, Laravel e MySQL</strong> no back-end. Também explorei a integração de sistemas embarcados com <strong>Arduino</strong> e C++, abordando tanto interfaces quanto o controle de hardware.</p> 
<p>Sou também um entusiasta da música, tendo <strong>iniciado meus estudos no piano em 2020</strong>, após ser apresentado às obras clássicas de Chopin e Beethoven. Desenvolvi-me rapidamente e, em pouco tempo, comecei a compor peças autorais. <strong> Em Setembro de 2024, comecei a aprender Violão</strong>, influenciado pela banda Nirvana.</p>
</section>
    

   
</div>
<?php require "footer.php"?>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="js/script.js"></script>
</body>

</html>