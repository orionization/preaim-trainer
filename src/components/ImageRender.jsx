import React from "react";
import angle from "../images/SAMPLE_angle.jpg";
import answer from "../images/SAMPLE_answer.jpg";
import crosshare from "../images/where_u_clicked.png"
import { useState } from "react";



export default function ImageRender (){
    const [image, setImage] = useState(angle)
    const [clientX, setClientX] = useState(0)
    const [clientY, setClientY] = useState(0)
    function handleClick(e){
        e.preventDefault()
        const {
            clientX, 
            clientY, 
        //    ...rest
        } = e
        console.log(clientX, clientY)//, rest)
        setClientX(clientX)
        setClientY(clientY)
        setImage(answer)
    }

    return (
        <div className="App">
            <img src={image} onClick={handleClick}/>
            <img src={crosshare} height={15} style={{
                position: 'absolute',
                top: clientY - 7,
                left: clientX - 7
            }}/>
        </div>
    )
}