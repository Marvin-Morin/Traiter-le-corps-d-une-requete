const express = require('express'); // Importation du module Express
const bodyParser = require('body-parser'); // Importation du module body-parser pour analyser les corps de requêtes

const app = express(); // Création d'une application Express

app.use(bodyParser.json()); // Utilisation du middleware body-parser pour analyser les corps de requêtes au format JSON

app.post('/api/data', (req, res) => { // Définition d'une route POST pour '/api/data'
    console.log(req.body); // Affichage du corps de la requête dans la console
    res.status(200).json({ message: 'Données reçues' }); // Envoi d'une réponse JSON avec un statut 200
});

const PORT = 3000; // Configuration du port coté navigateur
const server = app.listen(PORT, () => { // Mise en écoute de l'application sur le port 3000, avec une fonction de rappel pour afficher un message
    console.log(`Serveur Express en écoute sur le port ${PORT}`);
});

// Gestionnaire d'erreur pour le serveur
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Le port ${PORT} est déjà utilisé. Choisissez un autre port.`);
    } else {
        console.error('Erreur lors du démarrage du serveur :', err.message);
    }
});
