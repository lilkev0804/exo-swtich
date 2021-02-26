import React, {useState} from 'react'
import './Toggle.css'




export default function Toggle() {
const [bgSwitch, setBgSwitch] = useState(true)

const handleClick = () => {
 setBgSwitch(!bgSwitch)
}
// function handleClick(){
// ES5
// }


    return (
        <div className="Background"  style={{
            backgroundColor:`${ bgSwitch ? 'black' : 'white'}`
        }}>
            <div className="container-switch" style={{
            backgroundColor:`${ bgSwitch ? 'red' : 'green'}`}}>
            
                <div className="switch"
                 onClick={handleClick} 
                 style={{
                     backgroundColor:`${ bgSwitch ? 'pink' : 'white'}`,
                    //  animation: `${bgSwitch ? `${!bgSwitch ? "" : "switch_on 1s linear forwards"}` : `switch_off 1s linear forwards` }`,
                    animation : `${bgSwitch ? "switch_on" : "switch_off"} 1s linear forwards`
                 }}>
                </div>
            </div>
        </div>
    )
}
