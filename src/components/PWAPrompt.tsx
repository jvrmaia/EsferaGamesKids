import React, { useState, useEffect } from 'react';

interface PWAPromptProps {
  needRefresh: boolean;
  offlineReady: boolean;
  onUpdate: () => void;
  onClose: () => void;
}

const PWAPrompt: React.FC<PWAPromptProps> = ({ 
  needRefresh, 
  offlineReady, 
  onUpdate, 
  onClose 
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (needRefresh || offlineReady) {
      setVisible(true);
    }
  }, [needRefresh, offlineReady]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div>
          {offlineReady && (
            <p className="text-green-600 font-medium">
              Aplicativo pronto para uso offline!
            </p>
          )}
          {needRefresh && (
            <p className="text-blue-600 font-medium">
              Nova versão disponível!
            </p>
          )}
        </div>
        <div className="flex space-x-2">
          {needRefresh && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={onUpdate}
            >
              Atualizar
            </button>
          )}
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            onClick={() => {
              setVisible(false);
              onClose();
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAPrompt; 