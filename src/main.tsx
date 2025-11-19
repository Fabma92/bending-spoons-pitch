import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// We are using Tailwind via CDN in index.html, so we don't strictly need local CSS imports here
// unless you have custom styles in index.css. 

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)