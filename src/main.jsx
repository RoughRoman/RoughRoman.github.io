import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {isDesktop} from 'react-device-detect';


if (isDesktop){
  import('./index.css')
}
else{
  import('./mobileIndex.css')
}





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>)

