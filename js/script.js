function trocaLingua() {
    const language = document.getElementById('language-switcher').value;
    document.documentElement.lang = language;
    location.reload();
    alert('A função de troca de idiomas ainda está em desenvolvimento!');
}