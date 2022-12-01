import React from "react";
import styles from "./Robots.module.css"
interface RobotProps{
    id:number,
    name:string,
    email:string
}
const Robot :React.FC<RobotProps> = (props) => {
    const {id,name,email} = props
    return (
        <div className={styles.cardContainer}>
            <h2>{name}</h2>
            <img src={`https://www.robohash.org/${id}`} alt="robot" />
            <p>{email}</p>
        </div>
    )
}
export default Robot