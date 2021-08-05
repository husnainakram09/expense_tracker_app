import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from "./components/Balance";
import { Expense } from "./components/Expense";
import { History } from "./components/History";
import { AddTrans } from "./components/AddTrans";

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="appFile">
      <Balance />
        <Expense />
        <History />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
}

export default App;
