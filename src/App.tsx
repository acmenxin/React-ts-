import React from 'react';
import styles from "./App.module.css"
import Robot from './components/Robots';
import logo from "./assets/images/logo.svg"
import ShoppingCart from "./components/ShoppingCard"

interface Props {

}
interface State {
  robotGallery: any[]
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }
  render(): React.ReactNode {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1 >电商平台</h1>
        </div>
        <ShoppingCart />
        <ul className={styles.robotList}>
          {this.state.robotGallery.map((item) => {
            return (
              <Robot id={item.id} name={item.name} email={item.email} />
            )
          })}
        </ul>
      </div>
    );
  }
}
export default App;
