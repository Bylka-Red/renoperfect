@echo off
echo ========================================
echo   BOLTNEW - Ouverture du site
echo ========================================
echo.
echo Ouverture du site dans votre navigateur...
echo.

start "" "index.html"

echo.
echo Le site est maintenant ouvert !
echo.
echo Pour demarrer un serveur local :
echo   python -m http.server 3000
echo.
echo Puis ouvrez : http://localhost:3000
echo.
pause
