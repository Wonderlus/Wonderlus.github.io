import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/styles/global.scss"
import Router from './components/Router'
import ModalProvider from './context/ModalContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <Router />
    </ModalProvider>
  </React.StrictMode>,
)
