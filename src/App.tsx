import React, { useState, useEffect } from 'react';
import styles from "./App.module.css"
import Robot from './components/Robots';
import logo from "./assets/images/logo.svg"
import ShoppingCart from "./components/ShoppingCard"

interface Props {

}
interface State {
  robotGallery: any[]
}
const App: React.FC = (props) => {
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e:any) {
        setError(e.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1 >电商平台</h1>
      </div>
      <ShoppingCart />
      {(!error || error !== "") && <div>网站出错：{error}</div>}
      {!loading ? (
        <ul className={styles.robotList}>
          {robotGallery.map((item) => {
            return (
              <Robot id={item.id} name={item.name} email={item.email} />
            )
          })}
        </ul>) 
        :(<h2>loading 加载中</h2>)
      }
    </div>
  )
}
export default App;
