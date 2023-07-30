import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import styled from 'styled-components'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZZ3ITGJz6cFkl1JomrkrQIJ2XRO-E13U",
  authDomain: "monkeygarbage-9c579.firebaseapp.com",
  projectId: "monkeygarbage-9c579",
  storageBucket: "monkeygarbage-9c579.appspot.com",
  messagingSenderId: "383327182143",
  appId: "1:383327182143:web:6f8291fba3f73aec08078a",
  measurementId: "G-6ZKPPPH7TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// set up styled components for the app
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledApp>
      <App />
    </StyledApp>
  </React.StrictMode>,
)
