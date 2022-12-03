import React,{useContext} from "react";
import { appContext } from "../AppState";
import styles from "./Robots.module.css"
import {useAddToCart} from "./AddToCart";

interface RobotProps{
    id:number,
    name:string,
    email:string,
}
const RobotDisCount :React.FC<RobotProps> = (props) => {
    const {id,name,email} = props
    const value =  useContext(appContext)
   const addToCart = useAddToCart(); //从hook中获得
    return (
        <div className={styles.cardContainer}>
            <h2>打折商品{name}</h2>
            <img src={`https://www.robohash.org/${id}`} alt="robot" />
            <p>{email}</p>
            <h2>{value.username}</h2>
            <button onClick={()=>addToCart(id,name)}>加入购物车</button>
        </div>
    )
}
export default RobotDisCount