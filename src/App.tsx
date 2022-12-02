import React from 'react';
import styles from "./App.module.css"
import robots from "./mockdate/robot.json"
import Robot from './components/Robots';
import logo from "./assets/images/logo.svg"
import ShoppingCart from "./components/ShoppingCard"
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
    <img src={logo} alt="logo" className={styles.appLogo} />
    <h1 >电商平台</h1>
      </div>
      <ShoppingCart />
      <ul className={styles.robotList}>
        {robots.map((item) => {
          return (
            <Robot id={item.id} name={item.name} email={item.email} />
          )
        })}
      </ul>
    </div>
  );
}

export default App;
