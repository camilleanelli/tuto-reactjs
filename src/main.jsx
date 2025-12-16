import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import AppHook from './AppHook.jsx'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App3 />
    </StrictMode>
  );
}

const hooksPageElement = document.getElementById('hooks-page');
if (hooksPageElement) {
  createRoot(hooksPageElement).render(
    <StrictMode>
      <AppHook />
    </StrictMode>
  );
}
