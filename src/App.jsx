import React from 'react';
import Settings from './pages/settings.jsx';
import { useTheme } from './context/ThemeContext.jsx';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : ''}>
      <Settings />
    </div>
  );
}
