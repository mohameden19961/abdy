# 🚀 Mon Portfolio — React + Vite

Bienvenue sur le dépôt de mon portfolio personnel, un site statique moderne déployé sur **GitHub Pages**.

🔗 **Lien du site :** [https://mohameden19961.github.io/abdy](https://mohameden19961.github.io/abdy)

---

## 📋 Aperçu du projet

Ce projet est une application React monolithe construite avec Vite, conçue pour être déployée facilement sur GitHub Pages. Elle met en avant :

- Une page d'accueil avec une section héro ✨
- Une barre de navigation fluide avec ancres (Home, Projects, Contact)
- Une galerie de projets
- Une section contact

---

## 🧰 Technologies utilisées

| Technologie   | Rôle                                    |
| ------------- | --------------------------------------- |
| ⚛️ **React** | Bibliothèque UI (composants)            |
| ⚡ **Vite**  | Bundler et serveur de développement     |
| 🎨 **Tailwind CSS** | Framework CSS utilitaire         |
| 📦 **gh-pages** | Déploiement automatisé sur GitHub Pages |

---

## 🚀 Guide de déploiement étape par étape

### Prérequis

- **Node.js** (v18 ou supérieure)
- **npm** (v9 ou supérieure)
- Un dépôt GitHub nommé `abdy`

### Installation

Clonez le dépôt puis installez les dépendances :

```bash
git clone https://github.com/mohameden19961/abdy.git
cd abdy
npm install
```

### Développement local

Lancez le serveur de développement avec rechargement à chaud (HMR) :

```bash
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### Build de production

Générez les fichiers statiques dans le dossier `dist/` :

```bash
npm run build
```

### Déploiement sur GitHub Pages

Une seule commande suffit pour déployer :

```bash
npm run deploy
```

Cette commande exécute d'abord `npm run build` (via le script `predeploy`), puis publie le dossier `dist/` sur la branche `gh-pages`.

---

## ⚙️ Configuration du `base path`

Le fichier **`vite.config.js`** contient l'option `base` qui indique à Vite le chemin racine des assets une fois déployés :

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/abdy/',
})
```

> Le slash final est obligatoire. Cette valeur doit correspondre au nom du dépôt sur GitHub.

---

## 📦 Comment fonctionne `gh-pages`

Le paquet [`gh-pages`](https://www.npmjs.com/package/gh-pages) fonctionne de la manière suivante :

1. Il lit le contenu du dossier `dist/` (généré par `npm run build`).
2. Il crée (ou met à jour) automatiquement une branche `gh-pages` dans le dépôt.
3. Il pousse cette branche vers GitHub.
4. GitHub Pages sert alors le contenu de la branche `gh-pages` à l'URL configurée dans les paramètres du dépôt.

Aucune manipulation manuelle de branche n'est nécessaire — tout est automatisé.

---

## 📝 Scripts disponibles

| Commande           | Description                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Lance le serveur de développement (HMR)          |
| `npm run build`    | Génère le build de production dans `dist/`       |
| `npm run preview`  | Prévisualise le build localement                 |
| `npm run deploy`   | Build + déploie sur GitHub Pages                 |
| `npm run lint`     | Vérifie le code avec ESLint                      |

---

## 📄 Licence

Ce projet est open source et disponible sous licence [MIT](LICENSE).
