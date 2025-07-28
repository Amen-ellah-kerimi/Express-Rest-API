# API REST Express Simple (Utilisateurs & Tâches)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Un projet d'apprentissage simple pour démontrer les concepts fondamentaux de la création d'une API RESTful en utilisant Node.js et Express.js. Cette API gère deux ressources principales : les `Utilisateurs` et les `Tâches` (Todos).

**Remarque :** Ce projet utilise un stockage de données en mémoire, ce qui signifie que toutes les données seront réinitialisées au redémarrage du serveur. Il est conçu pour l'apprentissage des concepts d'API, et non pour le stockage persistant des données.

## ✨ Fonctionnalités

* **Gestion des Utilisateurs :**
    * Créer de nouveaux utilisateurs (`POST /users`)
    * Récupérer tous les utilisateurs (`GET /users`)
    * Récupérer un seul utilisateur par ID (`GET /users/:id`)
    * Mettre à jour un utilisateur existant par ID (`PUT /users/:id`)
    * Supprimer un utilisateur par ID (`DELETE /users/:id`)
* **Gestion des Tâches (Todos) :**
    * Créer de nouvelles tâches (`POST /todos`)
    * Récupérer toutes les tâches (`GET /todos`)
    * Récupérer une seule tâche par ID (`GET /todos/:id`)
    * Mettre à jour une tâche existante par ID (`PUT /todos/:id`)
    * Supprimer une tâche par ID (`DELETE /todos/:id`)
* **Relation de Données Basique :** La suppression d'un utilisateur entraîne également la suppression de ses tâches associées.
* **Codes de Statut HTTP Appropriés :** Les réponses utilisent des codes de statut appropriés (200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error).
* **Validation des Entrées :** Vérifications de base pour les champs requis dans les requêtes `POST` et `PUT`.
* **Génération d'ID Uniques :** IDs incrémentiels simples pour les nouvelles ressources.
* **Gestion Centralisée des Erreurs :** Middleware de base pour intercepter les erreurs non gérées.
* **Journalisation des Requêtes :** Logs console pour les requêtes HTTP entrantes.

## 🚀 Démarrage

Suivez ces étapes pour démarrer le projet sur votre machine locale.

### Prérequis

* Node.js (version LTS recommandée)
* npm (fourni avec Node.js)

### Installation

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/Amen-ellah-kerimi/Express-Rest-API.git
    ```
2.  **Naviguer dans le répertoire du projet :**
    ```bash
    cd Express-Rest-API
    ```
3.  **Installer les dépendances :**
    ```bash
    npm install
    ```

### Exécution de l'API

1.  **Démarrer le serveur :**
    ```bash
    node server.js
    ```
2.  Vous devriez voir une sortie similaire à celle-ci dans votre terminal :
    ```
    Welcome to our REST API with Express

    You can open your browser at this link http://localhost:3000/
    Server started on http://localhost:3000
    ```
3.  L'API sera opérationnelle sur `http://localhost:3000`.

## 💡 Points de Terminaison API

Vous pouvez tester ces points de terminaison à l'aide d'outils comme [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), `curl`, ou en les intégrant dans une application frontend.

### Utilisateurs

| Méthode | Point de Terminaison | Description                              | Corps de la Requête (Exemple)                           |
| :------ | :------------------- | :--------------------------------------- | :------------------------------------------------------ |
| `GET`   | `/users`             | Obtenir tous les utilisateurs            | `N/A`                                                   |
| `GET`   | `/users/:id`         | Obtenir un seul utilisateur par ID       | `N/A`                                                   |
| `POST`  | `/users`             | Créer un nouvel utilisateur              | `{ "name": "Alice", "email": "alice@example.com" }`     |
| `PUT`   | `/users/:id`         | Mettre à jour un utilisateur existant    | `{ "name": "Alice Smith", "email": "alice.s@example.com" }` |
| `DELETE`| `/users/:id`         | Supprimer un utilisateur (et les tâches associées) | `N/A`                                                   |

### Tâches (Todos)

| Méthode | Point de Terminaison | Description                              | Corps de la Requête (Exemple)                                    |
| :------ | :------------------- | :--------------------------------------- | :--------------------------------------------------------------- |
| `GET`   | `/todos`             | Obtenir toutes les tâches                | `N/A`                                                            |
| `GET`   | `/todos/:id`         | Obtenir une seule tâche par ID           | `N/A`                                                            |
| `POST`  | `/todos`             | Créer une nouvelle tâche                 | `{ "title": "Acheter des légumes", "completed": false, "userId": 1 }` |
| `PUT`   | `/todos/:id`         | Mettre à jour une tâche existante        | `{ "title": "Acheter des légumes", "completed": true, "userId": 1 }` |
| `DELETE`| `/todos/:id`         | Supprimer une tâche par ID               | `N/A`                                                            |

## 🛠️ Structure du Projet
.
├── server.js               # Fichier principal de l'application Express.js
├── package.json            # Dépendances et scripts du projet
├── package-lock.json       # Fichier de verrouillage de l'arborescence des dépendances
└── README.md               # Ce fichier

## 📚 Objectifs d'Apprentissage

Ce projet aide à comprendre :
* Comment configurer un serveur Node.js et Express.js de base.
* Les principes de la conception d'API RESTful (ressources, méthodes HTTP, codes de statut).
* L'implémentation des opérations CRUD pour différentes entités de données.
* La gestion des données JSON dans les requêtes et les réponses.
* Le routage et le middleware de base dans Express.js.

## 🤝 Contribution

Il s'agit d'un projet d'apprentissage personnel, les contributions ne sont donc pas activement recherchées. Cependant, n'hésitez pas à forker le dépôt et à l'expérimenter !

## 📄 Licence

Ce projet est open-source et disponible sous la [Licence MIT](LICENSE).

---

**Bon codage !**
