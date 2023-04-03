import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import Stocks from './components/stocks';
import reportWebVitals from './reportWebVitals';
import Provider from './context/FirestoreContext';
import AuthProvider from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/stocks" element={<Stocks />} />
            </Routes>
         </Layout >
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
