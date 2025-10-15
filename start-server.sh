#!/bin/bash

# Script de démarrage du serveur local pour PHP Hero Academy

echo "🚀 Démarrage du serveur local PHP Hero Academy..."
echo ""
echo "📚 Vos cours seront accessibles sur:"
echo "   http://localhost:8000/cours.html"
echo ""
echo "🏠 Page d'accueil:"
echo "   http://localhost:8000/index.html"
echo ""
echo "⚠️  Appuyez sur Ctrl+C pour arrêter le serveur"
echo ""
echo "================================================"
echo ""

# Démarrer le serveur Python
python3 -m http.server 8000
