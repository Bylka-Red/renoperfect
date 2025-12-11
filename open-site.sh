#!/bin/bash

echo "========================================"
echo "  BOLTNEW - Ouverture du site"
echo "========================================"
echo ""

# Détecter l'OS et ouvrir le fichier
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "Ouverture sur macOS..."
    open index.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    echo "Ouverture sur Linux..."
    xdg-open index.html
else
    echo "Système non reconnu. Ouvrez index.html manuellement."
fi

echo ""
echo "Le site est maintenant ouvert !"
echo ""
echo "Pour démarrer un serveur local :"
echo "  python3 -m http.server 3000"
echo ""
echo "Puis ouvrez : http://localhost:3000"
echo ""
