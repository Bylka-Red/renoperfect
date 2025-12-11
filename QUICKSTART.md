# Guide de Démarrage Rapide - BOLTNEW

## Lancement en 30 secondes

### Option 1 : Ouverture directe (la plus simple)
1. Double-cliquez sur `index.html`
2. Le site s'ouvre dans votre navigateur par défaut
3. C'est tout ! ✓

### Option 2 : Serveur local (recommandé)

**Avec Python (préinstallé sur Mac/Linux) :**
```bash
cd boltnew-site
python -m http.server 3000
```
Puis ouvrez : http://localhost:3000

**Avec Node.js :**
```bash
cd boltnew-site
npx http-server . -p 3000 -o
```
Le site s'ouvre automatiquement

**Avec PHP :**
```bash
cd boltnew-site
php -S localhost:3000
```
Puis ouvrez : http://localhost:3000

## Structure simple

```
boltnew-site/
├── index.html      ← Page principale (OUVRIR CE FICHIER)
├── css/
│   └── styles.css  ← Tous les styles
└── js/
    └── main.js     ← Toutes les interactions
```

## Personnalisation rapide

### 1. Changer le numéro de téléphone
Cherchez `+33123456789` dans `index.html` et remplacez partout

### 2. Changer l'email
Cherchez `contact@boltnew.fr` dans `index.html` et remplacez partout

### 3. Changer les couleurs
Ouvrez `css/styles.css` et modifiez ligne 10-12 :
```css
--color-primary: #1e3a5f;      /* Bleu nuit */
--color-secondary: #d4af37;    /* Doré */
```

### 4. Ajouter de vraies images
Placez vos images dans le dossier `images/` et référencez-les dans `index.html`

## Test sur mobile (iPhone 14)

### Option 1 : Chrome DevTools
1. Ouvrez le site
2. F12 (DevTools)
3. Cliquez sur l'icône mobile (ou Ctrl+Shift+M)
4. Sélectionnez "iPhone 14" dans le menu déroulant

### Option 2 : Sur votre iPhone
1. Lancez le serveur local (voir ci-dessus)
2. Trouvez votre IP locale :
   - Mac/Linux : `ifconfig | grep inet`
   - Windows : `ipconfig`
3. Sur iPhone, ouvrez Safari et allez sur : `http://VOTRE-IP:3000`

## Vérifier la performance

### Test Lighthouse (dans Chrome)
1. Ouvrez le site dans Chrome
2. F12 (DevTools)
3. Onglet "Lighthouse"
4. Cliquez "Analyze page load"
5. Objectif : 100% partout ! ✓

## FAQ Express

**Q : Le menu mobile ne s'ouvre pas**
A : Ouvrez la console (F12) et vérifiez qu'il n'y a pas d'erreur JavaScript

**Q : Les animations ne marchent pas**
A : Assurez-vous que `js/main.js` est bien chargé

**Q : Le site n'est pas responsive**
A : Vérifiez que `css/styles.css` est bien chargé

**Q : Le formulaire ne fonctionne pas**
A : C'est normal, il faut connecter un backend (PHP, Node.js, etc.)

## Prochaines étapes

1. ✓ Ouvrir le site
2. ✓ Tester sur mobile
3. ✓ Vérifier la performance
4. [ ] Remplacer les contenus fictifs
5. [ ] Ajouter de vraies images
6. [ ] Configurer le formulaire
7. [ ] Déployer en ligne

## Support

Tout fonctionne ? Parfait ! 🎉

Un problème ? Vérifiez :
- Tous les fichiers sont bien présents
- Pas d'erreur dans la console (F12)
- Vous utilisez un navigateur moderne (Chrome, Firefox, Safari)

## Déploiement express

**Netlify (gratuit, le plus simple) :**
1. Allez sur [netlify.com](https://www.netlify.com/)
2. Glissez-déposez le dossier `boltnew-site`
3. Votre site est en ligne ! ✓

**Vercel (gratuit) :**
```bash
npx vercel
```
Suivez les instructions, c'est tout !

---

Temps total : **< 5 minutes** ⚡

Besoin de plus de détails ? Consultez `README.md`
