import {useContext,useEffect} from 'react'
import { stateContext } from "../context/stateContext.jsx";

const Shoppingcart = () => {
  const {cart} = useContext(stateContext)

useEffect(() => {
  

  console.log(cart)
}, [])

  return (
    <>
    <p>Display shoppingcart here</p>
    </>
  )
};

export default Shoppingcart;
