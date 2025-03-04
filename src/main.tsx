import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { registerSW } from 'virtual:pwa-register'

// Registrar o service worker
const updateSW = registerSW({
  onNeedRefresh() {
    // Quando houver uma atualização disponível, podemos notificar o usuário
    // Vamos usar o estado global do App para isso
    if (window.setNeedRefresh) {
      window.setNeedRefresh(true)
    }
  },
  onOfflineReady() {
    // Quando o app estiver pronto para uso offline
    if (window.setOfflineReady) {
      window.setOfflineReady(true)
    }
  },
})

// Disponibilizar a função de atualização globalmente
window.updateServiceWorker = () => {
  updateSW()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
