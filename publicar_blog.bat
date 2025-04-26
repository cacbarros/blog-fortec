@echo off
title Atualizar Blog Quarto no GitHub Pages
echo.
echo -------------------------
echo Renderizando o projeto...
echo -------------------------
quarto render

echo.
echo -------------------------
echo Preparando para publicar...
echo -------------------------
git add .
git commit -m "Atualizar blog automaticamente"
git push origin main

echo.
echo -------------------------
echo Publicado com sucesso!
echo -------------------------
pause
