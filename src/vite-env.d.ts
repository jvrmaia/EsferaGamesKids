/// <reference types="vite/client" />

// Declaração de tipo para o módulo virtual:pwa-register
declare module 'virtual:pwa-register' {
  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>
}

// Estendendo a interface Window para incluir a propriedade workbox
interface Window {
  workbox?: {
    messageSkipWaiting: () => void;
    register: () => void;
    active: boolean;
  };
  // Propriedades para o service worker
  setNeedRefresh?: (value: boolean) => void;
  setOfflineReady?: (value: boolean) => void;
  updateServiceWorker?: () => void;
}
