<!DOCTYPE html>
<html lang="en">
<head>
        <!-- Permet de configurer le site en responsive -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Import du fichier style.css -->
        <link rel="stylesheet" href="../css/style.css?v=<?= time(); ?>" />

        <!-- Nomme l'onglet du navigateur -->
        <title>Monster Hunter Wilds</title>
</head>
<body>
<header>
    <section>
        <div id="logo"><img src="../img/Monster_Hunter_Wilds_Logo.png" alt="Logo"></div>
        <nav class="translateNav">
            <ul>
                <li><div><a href="#chasse">La Chasse</a></div></li>
                <li><div><a href="#menaces">Menaces</a></div></li>
                <li><div><a href="#end-game">End-Game</a></div></li>
                <li><div><a href="#biomes">Biomes</a></div></li>
            </ul>
        </nav>
        </div>
        <button id="Menu">
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <video src="../video/Presentation.mp4" autoplay muted></video>
    </section>
</header>