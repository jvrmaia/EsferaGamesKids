#!/bin/bash

# Criar diretório de imagens se não existir
mkdir -p public/images

# URLs de imagens de exemplo (usando ícones gratuitos do Flaticon)
IMAGES=(
  "https://cdn-icons-png.flaticon.com/512/227/227104.png" # lápis
  "https://cdn-icons-png.flaticon.com/512/2493/2493508.png" # caneta
  "https://cdn-icons-png.flaticon.com/512/2661/2661282.png" # borracha
  "" # caderno
  "" # régua
  "" # tesoura
  "" # cola
  "" # apontador
  "" # pincel
  "" # mochila
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