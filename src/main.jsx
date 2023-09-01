import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



let underConstruction = false;


if (underConstruction){
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <>
        <div className='LandingPage'>
          <h1>Website under Construction</h1>
          <p>Stay tuned!</p>
          
        </div>
      </>
    </React.StrictMode>,
  )

}
else{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

