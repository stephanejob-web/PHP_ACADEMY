@echo off
echo.
echo ======================================
echo  PHP Hero Academy - Serveur Local
echo ======================================
echo.
echo Demarrage du serveur local...
echo.
echo Vos cours seront accessibles sur:
echo    http://localhost:8000/cours.html
echo.
echo Page d'accueil:
echo    http://localhost:8000/index.html
echo.
echo Appuyez sur Ctrl+C pour arreter
echo.
echo ======================================
echo.

python -m http.server 8000

pause
