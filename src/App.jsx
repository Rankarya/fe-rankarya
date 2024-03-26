import React from 'react';
import Settings from './pages/settings.jsx';
import { useTheme } from './context/ThemeContext.jsx';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-stone-100 text-black'}>
      <div className="min-h-screen">
        <Settings />
      </div>
    </div>
  );
}
