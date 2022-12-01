import React from 'react';
import styles from "./App.module.css"
import robots from "./mockdate/robot.json"
import Robot from './components/Robots';
function App() {
  return (
    <div className={styles.app}>
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
