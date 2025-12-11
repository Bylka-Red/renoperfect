# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.0] - 2025-12-10

### Ajouté
- Structure HTML5 sémantique complète
- Design moderne avec palette bleu nuit / blanc / doré
- Header fixe avec menu responsive
- Section Hero avec CTA et statistiques animées
- Section Services avec 3 cartes interactives (Volets, Fenêtres, Portails)
- Section Avantages avec 4 points forts
- Section Avis avec 3 témoignages clients
- Section Zone d'intervention avec carte
- Formulaire de contact avec validation
- Footer complet avec informations de contact
- Bouton "Scroll to top" animé
- Navigation mobile avec menu hamburger
- Animations fluides au scroll (Intersection Observer)
- Effet de compteur animé pour les statistiques
- Système de notifications pour le formulaire
- Styles CSS modernes avec variables CSS
- Design responsive pour tous les appareils
- Optimisation spécifique iPhone 14 (390x844)
- JavaScript vanilla pour performances maximales
- Sitemap XML pour SEO
- Fichier robots.txt
- Manifest.json pour PWA
- Meta tags Open Graph
- Attributs ARIA pour l'accessibilité
- Configuration .htaccess pour compression et cache
- Package.json avec scripts npm
- README complet avec documentation
- Guide de démarrage rapide (QUICKSTART.md)
- Guide d'optimisation des performances (PERFORMANCE.md)
- Configuration VS Code (.vscode/)
- EditorConfig pour cohérence multi-éditeurs
- Exemple de handler PHP pour formulaire
- .gitignore configuré
- Licence MIT

### Performances
- Optimisation Lighthouse : objectif 100%
- Lazy loading des images
- Debounce sur les événements scroll
- Animations GPU-accelerated
- Minification CSS et JS
- Compression GZIP
- Cache navigateur configuré
- Core Web Vitals optimisés

### Accessibilité
- Navigation au clavier complète
- Skip links
- Focus visible sur tous les éléments interactifs
- Contraste des couleurs conforme WCAG AA
- Labels explicites sur tous les formulaires
- Piège de focus pour le menu mobile

### SEO
- Structure de headings optimisée (H1-H3)
- Meta description personnalisée
- Title optimisé
- URLs sémantiques (ancres)
- Schema.org (à implémenter en production)
- Sitemap XML généré

## [À venir]

### Prévu pour v1.1.0
- [ ] Intégration Google Analytics
- [ ] Schema.org structured data
- [ ] Service Worker pour PWA complète
- [ ] Mode sombre (dark mode)
- [ ] Galerie de réalisations
- [ ] Page mentions légales
- [ ] Page politique de confidentialité
- [ ] Intégration Google Maps
- [ ] Chat en direct
- [ ] Blog/Actualités

### Prévu pour v1.2.0
- [ ] Système de réservation en ligne
- [ ] Espace client
- [ ] Paiement en ligne
- [ ] Gestion des devis en ligne
- [ ] Multilingue (EN)

## Notes de développement

### Technologies utilisées
- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- JavaScript ES6+ (Vanilla)
- Google Fonts (Inter)
- SVG icons

### Compatibilité navigateurs
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Android 90+

### Taille des fichiers
- HTML : ~18 KB
- CSS : ~25 KB (minifié: ~18 KB)
- JavaScript : ~12 KB (minifié: ~8 KB)
- Total (sans images) : ~55 KB

### Temps de chargement
- Premier chargement : < 1s
- Chargements suivants (cache) : < 0.3s

---

Format : [Version] - Date
Types de modifications :
- **Ajouté** : nouvelles fonctionnalités
- **Modifié** : changements dans des fonctionnalités existantes
- **Déprécié** : fonctionnalités qui seront supprimées
- **Supprimé** : fonctionnalités supprimées
- **Corrigé** : corrections de bugs
- **Sécurité** : corrections de vulnérabilités
