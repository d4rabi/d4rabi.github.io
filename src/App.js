import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import './App.css';
import styles from "./Styles.module.css";
import Loading from './components/Loading/Loading';
import MainContent from './MainContent';

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingFading, setLoadingFading] = useState(true);
  const [contentFading, setContentFading] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#0a192f';
  }, []);

  setTimeout(() => {
      setLoading(false);
  }, 2000)

  setTimeout(() => {
    setLoadingFading(false);
  }, 1000)

  setTimeout(() => {
    setContentFading(true);
  }, 2000);

  return (
    <Router>
      <CssBaseline />
        { loading && (
            <div className={`${loadingFading ? '' : styles.fadeOut}`}>
              <Loading/>
            </div>
        )}
        { !loading && (
          <div className={`${contentFading ? styles.fadeIn : ''}`}>
            <MainContent/>
          </div>
        )}
    </Router>
  );
}

export default App;
