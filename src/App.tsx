import React from 'react';
import Header from './components/Header';
import MemoryGame from './components/MemoryGame';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow py-8">
        <MemoryGame />
      </main>
      <Footer />
    </div>
  );
}

export default App;
