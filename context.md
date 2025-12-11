# Context - Site Renoperfect

## Description du projet

Site vitrine pour **Renoperfect**, une entreprise de réparation de volets roulants, fenêtres et portails située au Raincy (93340, Seine-Saint-Denis).

**URL de production** : https://reno-perfect.netlify.app/
**Repository GitHub** : https://github.com/Bylka-Red/renoperfect

---

## Stack technique

**Site statique HTML/CSS/JS** (PAS React, PAS de framework JavaScript)
- HTML pur
- CSS vanilla (variables CSS, flexbox, grid)
- JavaScript vanilla
- Hébergé sur **Netlify** (déploiement automatique via GitHub)

---

## Structure des fichiers

```
Reno Perfect/
├── index.html          # Page principale unique (site one-page)
├── css/
│   └── styles.css      # Styles CSS du site (responsive inclus)
├── js/
│   └── main.js         # JavaScript (menu mobile, scroll, formulaire)
├── images/
│   └── logo.jpg        # Logo de l'entreprise
├── package.json        # Scripts npm pour serveur local
├── manifest.json       # PWA manifest
├── robots.txt          # SEO
├── sitemap.xml         # SEO
├── .gitignore          # Fichiers ignorés par git
└── context.md          # Ce fichier (documentation projet)
```

---

## Sections de la page (index.html)

1. **Header** - Navigation fixe avec logo, menu et bouton "Dépannage urgent"
2. **Hero** (#home) - Section d'accueil avec titre, description, stats (15+ ans, 2000+ clients, 24/7)
3. **Services** (#services) - 3 cartes : Volets Roulants, Fenêtres, Portails
4. **Advantages** - 4 avantages : Rapidité, Expertise, Garantie pièces, Disponibilité
5. **Chantiers** (#chantiers) - Galerie de 6 réalisations récentes
6. **Reviews** (#avis) - 3 témoignages clients
7. **Zone** - Zone d'intervention (30km autour du Raincy avec liste des villes)
8. **Contact** (#contact) - Formulaire de contact + coordonnées
9. **Footer** - Liens, contact, horaires, mentions légales

---

## Informations entreprise (ACTUELLES)

- **Nom** : Renoperfect
- **Adresse** : 122 Avenue de la Résistance, 93340 Le Raincy
- **Téléphone** : 06 10 84 88 08
- **Email** : renoperfectcontact@gmail.com
- **Zone d'intervention** : 30km autour du Raincy (Villemomble, Gagny, Bondy, Noisy-le-Grand, Rosny-sous-Bois, Livry-Gargan, Montfermeil, etc.)
- **Horaires** : Lun-Ven 7h-21h, Sam 8h-20h, Dim 9h-18h, Urgences 24/7

---

## Commandes utiles

### Développement local

```bash
# Lancer le serveur de développement (avec auto-reload)
npm run serve
# ou
npx live-server --port=3000 --host=localhost

# Le site sera accessible sur http://localhost:3000 (ou autre port si 3000 occupé)
```

### Déploiement (GitHub + Netlify)

```bash
# Voir les fichiers modifiés
git status

# Ajouter tous les fichiers modifiés
git add .

# Créer un commit
git commit -m "Description des modifications"

# Pousser vers GitHub (déclenche auto-déploiement Netlify)
git push
```

**Note** : Netlify est configuré pour déployer automatiquement à chaque push sur la branche `main`. Pas besoin de webhook manuel.

### Minification (optionnel)

```bash
npm run build    # Minifie CSS et JS
```

---

## Design & CSS

### Couleurs principales (variables CSS)
- `--color-primary` : #1e3a5f (bleu navy)
- `--color-primary-dark` : #152c47
- `--color-primary-light` : #2a4a70
- `--color-secondary` : #d4af37 (or/doré)
- `--color-white` : #ffffff
- Gris : de --color-gray-50 à --color-gray-900

### Typographie
- Police : Inter (Google Fonts)
- Tailles : variables CSS de --font-size-xs à --font-size-6xl

### Breakpoints responsive
- Desktop : > 1024px
- Tablette : 768px - 1024px
- Mobile : < 768px
- Petit mobile : < 390px

---

## Points techniques importants

- **Logo** : `images/logo.jpg` - affiché dans le header avec coins arrondis (64px hauteur desktop, 48px mobile)
- **Formulaire** : côté client uniquement, pas de backend configuré
- **SEO** : meta tags et Open Graph configurés
- **Performance** : images optimisées, CSS/JS non minifiés en dev
- **Pas de base de données**
- **Pas d'authentification**

---

## Historique des modifications récentes

1. Remplacement du texte "Renoperfect" par le logo image
2. Adaptation complète version mobile (toutes sections)
3. Mise à jour des coordonnées (téléphone, email, adresse)
4. Zone d'intervention enrichie (30km, liste des villes)

---

## Pour reprendre le projet

Quand tu démarres une nouvelle conversation :

1. **Lis ce fichier** : "Lis le fichier context.md"
2. **Lance le serveur** : `npx live-server --port=3000 --host=localhost`
3. **Fais tes modifications**
4. **Push** : `git add . && git commit -m "message" && git push`

Le site sera automatiquement mis à jour sur https://reno-perfect.netlify.app/
