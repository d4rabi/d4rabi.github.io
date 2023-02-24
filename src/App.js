import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import { motion } from "framer-motion";
import './App.css';
import Loading from './components/Loading/Loading';
import MainContent from './MainContent';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#0a192f';
  }, []);

  setTimeout(() => {
      setLoading(false);
  }, 2000)

  return (
    <Router>
      <CssBaseline />
        { loading && (
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 2 }}
            >
              <Loading/>
            </motion.div>
        )}
        { !loading && (
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
          >
              <MainContent/>
          </motion.div>
        )}
    </Router>
  );
}

export default App;
