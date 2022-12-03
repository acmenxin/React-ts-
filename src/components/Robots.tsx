import React,{useContext} from "react";
import { appContext ,appSetStateContext} from "../AppState";
import styles from "./Robots.module.css"
interface RobotProps{
    id:number,
    name:string,
    email:string
}
const Robot :React.FC<RobotProps> = (props) => {
    const {id,name,email} = props
    const value =  useContext(appContext)
    const setState =  useContext(appSetStateContext)
    const addToCart =()=>{
        if(setState){
            setState(state=>{
                return {
                    ...state,
                    shoppingCart:{
                        items:[...state.shoppingCart.items,{id,name}]
                    }
                }
            })
        }
    }
    return (
        <div className={styles.cardContainer}>
            <h2>{name}</h2>
            <img src={`https://www.robohash.org/${id}`} alt="robot" />
            <p>{email}</p>
            <h2>{value.username}</h2>
            <button onClick={addToCart}>加入购物车</button>
        </div>
    )
}
export default Robot