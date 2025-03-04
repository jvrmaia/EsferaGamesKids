import { useState, useEffect } from 'react';
import Header from './components/Header';
import MemoryGame from './components/MemoryGame';
import Footer from './components/Footer';
import PWAPrompt from './components/PWAPrompt';

function App() {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);
  
  // Função para atualizar a página quando uma nova versão estiver disponível
  const updateServiceWorker = () => {
    if (window.updateServiceWorker) {
      window.updateServiceWorker();
    } else {
      window.location.reload();
    }
  };

  // Função para fechar as notificações
  const closePrompt = () => {
    setNeedRefresh(false);
    setOfflineReady(false);
  };

  // Efeito para conectar com o service worker global
  useEffect(() => {
    // Disponibilizar as funções setters globalmente para o service worker
    window.setNeedRefresh = (value) => {
      setNeedRefresh(value);
    };
    
    window.setOfflineReady = (value) => {
      setOfflineReady(value);
    };
    
    // Limpar as referências quando o componente for desmontado
    return () => {
      window.setNeedRefresh = undefined;
      window.setOfflineReady = undefined;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow py-4 px-2 sm:py-8 sm:px-4">
        <div className="max-w-4xl mx-auto w-full">
          <MemoryGame />
        </div>
      </main>
      <Footer />
      <PWAPrompt 
        needRefresh={needRefresh}
        offlineReady={offlineReady}
        onUpdate={updateServiceWorker}
        onClose={closePrompt}
      />
    </div>
  );
}

export default App;
