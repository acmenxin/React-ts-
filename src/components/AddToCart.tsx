import React, { useContext } from "react";
import { RobotProps } from "./Robots"
import { appSetStateContext } from "../AppState"
//高阶组件：抽离公共代码
export const withAddToCart = (ChildrenComponent: React.ComponentType<RobotProps>) => {
    return (props) => {
        const setState = useContext(appSetStateContext)
        const addToCart = (id, name) => {
            if (setState) {
                setState(state => {
                    return {
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, { id, name }]
                        }
                    }
                })
            }
        }
        return <ChildrenComponent  {...props} addToCart={addToCart} />
    }
}

//自定义hook：抽离公共代码，更胜一筹
export const useAddToCart = () => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) => {
        if (setState) {
            setState(state => {
                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, { id, name }]
                    }
                }
            })
        }
    }
    return addToCart
}