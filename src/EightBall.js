import React,{useState} from "react"
import {returnRandomItem} from "./helper"
import "./EightBall.css"

function EightBall({answers}){
    const [text,setText] = useState("Think of a Question")
    const [color,setColor] = useState("black")

    const [red,setRed] = useState(0)
    const [green,setGreen] = useState(0)
    const [goldenrod,setGoldenrod] = useState(0)



    const answer = returnRandomItem(answers)

    const showAnswer = (answer)=>{
        setText(answer.msg)
        setColor(answer.color)
        
        if(color === "red"){
            setRed(red + 1) 
        }else if (color === "green"){
            setGreen(green + 1)
        }else if (color === "goldenrod"){
            setGoldenrod(goldenrod + 1)
        }
    }

    const reset = ()=>{
        setColor("black")
        setText("Think of a Question")
    }

    return (
        <>
            <div className="EightBall" style={{backgroundColor:color}} onClick={()=> showAnswer(answer)}>
                <strong className="EightBall-text">{text}</strong>
            </div>
            <ul>
                <li>Red:{red}</li>
                <li>Green:{green}</li>
                <li>Goldenrod:{goldenrod}</li>
            </ul>
            <button className="EightBall-reset" onClick={reset} >Reset</button>  
        </>
    )
}

export default EightBall