import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-[#18181b] dark:bg-[#18181b]">
      <Sidebar />
      <Header />
      <main className="ml-60 pt-16 min-h-screen flex justify-center items-start bg-[#18181b] dark:bg-[#18181b]">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
