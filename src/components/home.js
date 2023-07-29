// import { HandleClick } from "../code/handleClick";
import { useState } from "react"
export const Calculator = () => {

    const [number, setNumber] = useState("")
    const handleClick = ({ target }) => {

        setNumber(target.textContent)
    }

    return (
        <div className="container">
            <h1 className="text">Calcu<span className="colorCal">lator</span></h1>

            <div className="main-container">

                <div className="item box">
                    <div className="output-box boxes">23</div>
                    <div className="input-box boxes">32</div>
                </div>
                <button type="button" className="items small-font">&radic;</button>
                <button type="button" className="items small-font">   &pi;</button>
                <button type="button" className="items small-font">^</button>
                <button type="button" className="items small-font">!</button>
                <button type="button" className="items" style={{ backgroundColor: "#0F5324" }}>AC</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }}>( )</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }}>% </button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }}>/</button>
                <button type="button" className="items" onClick={handleClick}>7</button>
                <button type="button" className="items" onClick={handleClick}>8</button>
                <button type="button" className="items" onClick={handleClick}>9</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }}>*</button>
                <button type="button" className="items" onClick={handleClick}>4</button>
                <button type="button" className="items" onClick={handleClick}>5</button>
                <button type="button" className="items" onClick={handleClick}>6</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }}>-</button>
                <button type="button" className="items" onClick={handleClick}>1</button>
                <button type="button" className="items" onClick={handleClick}>2</button>
                <button type="button" className="items" onClick={handleClick}>3</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }}>+</button>
                <button type="button" className="items" onClick={handleClick}>0</button>
                <button type="button" className="items" onClick={handleClick}>.</button>
                <button type="button" className="items">  &times;</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }}>=</button>


            </div>
        </div>
    )
}