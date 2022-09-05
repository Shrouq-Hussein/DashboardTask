import { useState } from "react"
export default function useHover(){
    const [hover,setHover] = useState()

    const onMouseOver =()=>(setHover(true))
    const onMouseout =()=>(setHover(false))
    return[hover,onMouseOver,onMouseout]
}