// Générer un nombre mystère entre 1 et 10
const n = Math.floor(Math.random() * 10) + 1;

// Récupération des éléments du DOM
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const messageDiv = document.getElementById('message');

// Fonction qui simule une boucle while
guessButton.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);

    // Vérifier que l'utilisateur entre un nombre valide
    if (isNaN(guess) || guess < 1 || guess > 10) {
        messageDiv.textContent = "Veuillez entrer un nombre entre 1 et 10.";
        return;
    }

    // Simuler une boucle while pour tester les suppositions de l'utilisateur
    while (guess !== n) {
        messageDiv.textContent = "Réessayez encore...";
        break;  // L'usage de 'break' ici permet de sortir de la boucle sans bloquer le programme
    }

    // Si l'utilisateur devine correctement
    if (guess === n) {
        messageDiv.textContent = "Bravo! Vous avez deviné le nombre.";
    }

    // Effacer le champ d'entrée pour une nouvelle tentative
    guessInput.value = '';
    guessInput.focus();
});