import React,{useContext} from "react";
import { appContext} from "../AppState";
import styles from "./Robots.module.css"
import {withAddToCart} from "./AddToCart";

export interface RobotProps{
    id:number,
    name:string,
    email:string,
    addToCart:(id,name)=>void //从高阶组件中获得
}
const Robot :React.FC<RobotProps> = (props) => {
    const {id,name,email,addToCart} = props
    const value =  useContext(appContext)
  
    return (
        <div className={styles.cardContainer}>
            <h2>{name}</h2>
            <img src={`https://www.robohash.org/${id}`} alt="robot" />
            <p>{email}</p>
            <h2>{value.username}</h2>
            <button onClick={()=>addToCart(id,name)}>加入购物车</button>
        </div>
    )
}
export default withAddToCart(Robot)