import { useEffect, useRef } from "react"

const Canvas = props =>{
    const  ref= useRef()
    useEffect(()=>{
        const canvas = ref.current;


    })
    
    return< canvas ref={ref} {...props }/>
}

export default Canvas;