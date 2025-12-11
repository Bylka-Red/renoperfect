# BOLTNEW - Site Vitrine Moderne

Site vitrine ultra-performant pour BOLTNEW, spécialiste de la réparation de volets roulants, fenêtres et portails au Raincy.

## Caractéristiques

- **Design moderne et minimaliste** - Interface professionnelle avec palette bleu nuit / blanc / doré
- **Performance maximale** - Optimisé pour obtenir un score Lighthouse de 100%
- **Responsive parfait** - Compatible iPhone 14 et tous les appareils
- **Animations fluides** - Interactions et transitions CSS optimisées
- **SEO optimisé** - Meta tags, sitemap, robots.txt
- **Accessibilité ARIA** - Respect des standards d'accessibilité
- **Code propre** - HTML5 sémantique, CSS3 moderne, JavaScript vanilla

## Technologies utilisées

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- JavaScript vanilla (ES6+)
- Google Fonts (Inter)
- SVG icons

## Structure du projet

```
boltnew-site/
│
├── index.html              # Page principale
├── css/
│   └── styles.css         # Styles principaux
├── js/
│   └── main.js            # JavaScript
├── images/                # Images (WebP optimisées)
├── assets/                # Autres ressources
├── sitemap.xml            # Plan du site
├── robots.txt             # Fichier robots
├── manifest.json          # PWA manifest
├── .htaccess              # Configuration serveur
├── package.json           # Configuration npm
└── README.md              # Ce fichier
```

## Installation

### Option 1 : Ouverture directe (recommandée pour test rapide)

1. Ouvrez simplement le fichier `index.html` dans votre navigateur

### Option 2 : Serveur local (recommandé pour développement)

1. **Avec Python 3** :
```bash
cd boltnew-site
python -m http.server 3000
```

2. **Avec Node.js** :
```bash
cd boltnew-site
npx http-server . -p 3000 -o
```

3. **Avec PHP** :
```bash
cd boltnew-site
php -S localhost:3000
```

4. Ouvrez votre navigateur à l'adresse : `http://localhost:3000`

## Scripts disponibles

```bash
# Démarrer un serveur de développement
npm start

# Minifier les fichiers CSS et JS
npm run minify

# Lancer un serveur avec live-reload
npm run serve

# Générer un rapport Lighthouse
npm run lighthouse
```

## Optimisations de performance

### 1. CSS
- Variables CSS pour une maintenance facile
- Flexbox et Grid pour des layouts performants
- Animations GPU-accelerated
- Media queries optimisées pour tous les appareils

### 2. JavaScript
- Vanilla JS (pas de framework lourd)
- Debounce sur les événements scroll
- Intersection Observer pour les animations au scroll
- Lazy loading des images

### 3. Images
- Format WebP recommandé
- SVG pour les icônes
- Dimensions explicites pour éviter les layout shifts

### 4. SEO
- Meta tags optimisés
- Open Graph pour les réseaux sociaux
- Sitemap XML
- Robots.txt configuré
- Balises sémantiques HTML5

### 5. Accessibilité
- Attributs ARIA
- Navigation au clavier
- Skip links
- Contraste des couleurs conforme WCAG
- Focus visible

## Responsive Design

Le site est entièrement responsive et optimisé pour :

- iPhone 14 (390x844) - **Priorité n°1**
- iPhone 13/12/11
- iPhone SE
- Android smartphones
- Tablettes (iPad, Android)
- Desktop (1280px+)
- Large screens (1920px+)

## Sections du site

1. **Header** - Navigation fixe avec menu mobile
2. **Hero** - Section d'accueil avec CTA
3. **Services** - 3 cartes de services (Volets, Fenêtres, Portails)
4. **Avantages** - 4 points forts
5. **Avis** - 3 témoignages clients fictifs
6. **Zone d'intervention** - Carte et informations
7. **Contact** - Formulaire avec validation
8. **Footer** - Informations et liens

## Personnalisation

### Couleurs

Les couleurs sont définies dans les variables CSS au début de `styles.css` :

```css
:root {
    --color-primary: #1e3a5f;      /* Bleu nuit */
    --color-secondary: #d4af37;    /* Doré */
    --color-white: #ffffff;        /* Blanc */
}
```

### Typographie

La police principale est Inter, chargée depuis Google Fonts. Pour la changer :

1. Modifiez l'import dans `index.html`
2. Changez la variable `--font-family` dans `styles.css`

### Contenu

Tout le contenu est modifiable directement dans `index.html`. Les sections sont clairement identifiées par des commentaires.

## Déploiement

### Option 1 : Hébergement classique (Apache/Nginx)

1. Uploadez tous les fichiers sur votre serveur
2. Assurez-vous que le `.htaccess` est actif (Apache)
3. Configurez le HTTPS
4. Testez le site

### Option 2 : Netlify/Vercel (recommandé)

1. Connectez votre repository Git
2. Déployez automatiquement
3. HTTPS activé automatiquement

### Option 3 : GitHub Pages

1. Poussez le code sur GitHub
2. Activez GitHub Pages dans les paramètres
3. Site disponible à `username.github.io/boltnew-site`

## Tests de performance

Pour tester les performances avec Lighthouse :

```bash
npm run lighthouse
```

Objectifs :
- Performance : 100
- Accessibility : 100
- Best Practices : 100
- SEO : 100

## Compatibilité navigateurs

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- iOS Safari 12+
- Chrome Android

## Support

Pour toute question ou assistance, contactez l'équipe de développement.

## Licence

Copyright © 2025 BOLTNEW. Tous droits réservés.

## Checklist avant mise en production

- [ ] Remplacer les contenus fictifs par les vrais
- [ ] Ajouter de vraies images optimisées en WebP
- [ ] Configurer le numéro de téléphone réel
- [ ] Configurer l'email de contact réel
- [ ] Mettre à jour l'adresse réelle
- [ ] Configurer le formulaire de contact avec un backend
- [ ] Intégrer Google Analytics ou Matomo
- [ ] Configurer le HTTPS
- [ ] Tester sur tous les appareils
- [ ] Générer un rapport Lighthouse
- [ ] Valider le HTML/CSS
- [ ] Tester l'accessibilité
- [ ] Soumettre le sitemap à Google Search Console

## Changelog

### Version 1.0.0 (2025-12-10)
- Création du site vitrine
- Design moderne bleu nuit / blanc / doré
- 100% responsive (iPhone 14 prioritaire)
- Performance optimisée pour Lighthouse 100%
- SEO complet
- Accessibilité ARIA
