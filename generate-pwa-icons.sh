#!/bin/bash

# Este script usa o ImageMagick para gerar ícones PWA
# Se o ImageMagick não estiver instalado, você pode instalar com:
# brew install imagemagick (macOS) ou apt-get install imagemagick (Linux)

# Verificar se o ImageMagick está instalado
if ! command -v convert &> /dev/null; then
    echo "ImageMagick não está instalado. Por favor, instale-o primeiro."
    echo "macOS: brew install imagemagick"
    echo "Linux: apt-get install imagemagick"
    exit 1
fi

# Criar ícones PWA a partir do favicon
echo "Gerando ícones PWA..."
convert public/favicon.ico -resize 192x192 public/pwa-192x192.png
convert public/favicon.ico -resize 512x512 public/pwa-512x512.png

echo "Ícones PWA gerados com sucesso!" 