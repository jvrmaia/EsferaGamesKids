#!/bin/bash

# Criar diretório de imagens se não existir
mkdir -p public/images

# URLs de imagens de exemplo (usando ícones gratuitos do Flaticon)
IMAGES=(
  "https://cdn-icons-png.flaticon.com/512/3270/3270925.png" # lápis
  "https://cdn-icons-png.flaticon.com/512/3094/3094841.png" # caneta
  "https://cdn-icons-png.flaticon.com/512/3209/3209265.png" # borracha
  "https://cdn-icons-png.flaticon.com/512/2965/2965300.png" # caderno
  "https://cdn-icons-png.flaticon.com/512/3209/3209265.png" # régua
  "https://cdn-icons-png.flaticon.com/512/3209/3209102.png" # tesoura
  "https://cdn-icons-png.flaticon.com/512/3209/3209267.png" # cola
  "https://cdn-icons-png.flaticon.com/512/3209/3209262.png" # apontador
  "https://cdn-icons-png.flaticon.com/512/3209/3209256.png" # pincel
  "https://cdn-icons-png.flaticon.com/512/2965/2965253.png" # mochila
)

NAMES=(
  "pencil.png"
  "pen.png"
  "eraser.png"
  "notebook.png"
  "ruler.png"
  "scissors.png"
  "glue.png"
  "sharpener.png"
  "brush.png"
  "backpack.png"
)

# Logo da Esfera (usando um placeholder online)
echo "Baixando logo placeholder para a Esfera..."
curl -s "https://via.placeholder.com/200x200/8A2BE2/FFFFFF?text=Esfera+Papelaria" -o "public/images/esfera-logo.png"

# Baixar as imagens
echo "Baixando imagens..."
for i in "${!IMAGES[@]}"; do
  echo "Baixando ${NAMES[$i]}..."
  curl -s "${IMAGES[$i]}" -o "public/images/${NAMES[$i]}"
done

echo "Download concluído!" 