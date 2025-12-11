# Context - Site Renoperfect

## Description du projet
Site vitrine pour **Renoperfect**, une entreprise de réparation de volets roulants, fenêtres et portails située au Raincy (93340, Seine-Saint-Denis).

## Type de site
**Site statique HTML/CSS/JS** (PAS React, PAS de framework JavaScript)
- HTML pur
- CSS vanilla (pas de Tailwind, Bootstrap, etc.)
- JavaScript vanilla (pas de jQuery, React, Vue, etc.)

## Structure des fichiers

```
boltnew-site/
├── index.html          # Page principale unique (site one-page)
├── css/
│   └── styles.css      # Styles CSS du site
├── js/
│   └── main.js         # JavaScript (menu mobile, scroll, formulaire)
├── package.json        # Scripts npm pour lancer le serveur local
├── manifest.json       # PWA manifest
├── robots.txt          # SEO
├── sitemap.xml         # SEO
└── context.md          # Ce fichier
```

## Sections de la page (index.html)

1. **Header** - Navigation avec logo, menu et bouton "Dépannage urgent"
2. **Hero** (#home) - Section d'accueil avec titre, stats et CTA
3. **Services** (#services) - 3 cartes : Volets Roulants, Fenêtres, Portails
4. **Advantages** - 4 avantages : Rapidité, Expertise, Garantie, Disponibilité
5. **Chantiers** (#chantiers) - Galerie de 6 réalisations récentes
6. **Reviews** (#avis) - 3 témoignages clients
7. **Zone** - Zone d'intervention (Le Raincy et alentours)
8. **Contact** (#contact) - Formulaire de contact + coordonnées
9. **Footer** - Liens, contact, horaires, mentions légales

## Commandes utiles

```bash
# Lancer le serveur de développement (avec auto-reload)
npm run serve

# Lancer un serveur simple
npm run start

# Minifier CSS et JS pour production
npm run build
```

## Informations entreprise

- **Nom** : Renoperfect
- **Adresse** : 42 Avenue du Général de Gaulle, 93340 Le Raincy
- **Téléphone** : 01 23 45 67 89 (placeholder)
- **Email** : contact@boltnew.fr (placeholder)
- **Horaires** : Lun-Ven 7h-21h, Sam 8h-20h, Dim 9h-18h, Urgences 24/7

## Points techniques

- Site responsive (mobile-first)
- Animations CSS pour les interactions
- Formulaire de contact (côté client uniquement, pas de backend)
- SEO basique configuré (meta tags, Open Graph)
- Pas de base de données
- Pas d'authentification
