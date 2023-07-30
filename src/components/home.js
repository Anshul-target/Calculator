// import { HandleClick } from "../code/handleClick";
import { useState } from "react"

export const Calculator = () => {
    const [isOnceClicked, setIsOnceClicked] = useState(false)
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("")
    const handleClick = ({ target }) => {
        setNumber(n => n + target.textContent);
        if (!isOnceClicked) {
            let operator = number.charAt(number.length - 1);
            if (operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "%") {
                showResult();
                setIsOnceClicked(true);
            }
        }
        if (isOnceClicked) {

            showResult();
        }
    }
    const handleAc = () => {
        setNumber("")
    }
    const handleClear = () => {

        setNumber(number.substring(0, (number.length) - 1))
    }

    const handleOperation = ({ target }) => {
        const findSymbol = number.charAt(number.length - 1)
        if (findSymbol == "%" || findSymbol == "*" || findSymbol == "/" || findSymbol == "-" || findSymbol == "+") {
            return
        }
        setNumber(number + target.textContent)
        showResult();
    }

    const showResult = () => {

        const findSymbol = number.charAt(number.length - 1)
        if (findSymbol == "%" || findSymbol == "*" || findSymbol == "/" || findSymbol == "-" || findSymbol == "+") {
            setNumber("Syntax Error");
            setResult("");
            return;
        }
        if (number == "") {
            setResult("")
            return

        }

        setResult((eval(number)).toString());
    }

    return (
        <div className="container">
            <h1 className="text">Calcu<span className="colorCal">lator</span></h1>

            <div className="main-container">

                <div className="item box">
                    <div className="output-box boxes">{number}</div>
                    <div className="input-box boxes">{result}</div>
                </div>
                <button type="button" className="items small-font">&radic;</button>
                <button type="button" className="items small-font">   &pi;</button>
                <button type="button" className="items small-font">^</button>
                <button type="button" className="items small-font">!</button>
                <button type="button" className="items" style={{ backgroundColor: "#0F5324" }} onClick={handleAc}>AC</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }} onClick={handleOperation}>( )</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }} onClick={handleOperation}>% </button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }} onClick={handleOperation}>/</button>
                <button type="button" className="items" onClick={handleClick}>7</button>
                <button type="button" className="items" onClick={handleClick}>8</button>
                <button type="button" className="items" onClick={handleClick}>9</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }} onClick={handleOperation}>*</button>
                <button type="button" className="items" onClick={handleClick}>4</button>
                <button type="button" className="items" onClick={handleClick}>5</button>
                <button type="button" className="items" onClick={handleClick}>6</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }} onClick={handleOperation}>-</button>
                <button type="button" className="items" onClick={handleClick}>1</button>
                <button type="button" className="items" onClick={handleClick}>2</button>
                <button type="button" className="items" onClick={handleClick}>3</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }} onClick={handleOperation}>+</button>
                <button type="button" className="items" onClick={handleClick}>0</button>
                <button type="button" className="items" onClick={handleClick}>.</button>
                <button type="button" className="items" onClick={handleClear}>  &times;</button>
                <button type="button" className="items" style={{ backgroundColor: "#004A77" }} onClick={showResult} >=</button>


            </div>
        </div>
    )
}