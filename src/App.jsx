import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'bg-[#0D0D0D] text-white' : 'bg-white-200 text-black';
  }, [isDarkMode]);

  return (
    <>
      <Navbar onToggleTheme={handleThemeToggle} isDarkMode={isDarkMode}/>
      <AboutMe isDarkMode={isDarkMode}/>
    </>
  )
}

export default App
