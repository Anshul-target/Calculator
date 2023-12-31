// import { HandleClick } from "../code/handleClick";
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
export const Calculator = () => {
    const [isShowResult, setShowResult] = useState(false);
    const [isOnceClicked, setIsOnceClicked] = useState(false)
    const [number, setNumber] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        setShowResult(true);
    }, [isShowResult])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/login");
            }
        })

    })

    const handleClick = ({ target }) => {
        // console.log(target.textContent);
        setNumber(n => n + target.textContent);
        // setNumber(n => n + target.textContent);
        console.log(number);
        if (!isOnceClicked) {
            let operator = number.charAt(number.length - 1);
            if (operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "%") {
                // showResult();

                setIsOnceClicked(true);
                console.log("hello");
            }
        }
        if (isOnceClicked) {
            console.log("From dark side");
            showResult();
        }
    }
    const handleAc = () => {
        setNumber("");
        setResult("");
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
        if (isOnceClicked) {

            showResult();
        }
    }

    const showResult = () => {

        const findSymbol = number.charAt(number.length - 1)
        console.log(number);
        // if (isShowResult) {
        if (findSymbol == "%" || findSymbol == "*" || findSymbol == "/" || findSymbol == "-" || findSymbol == "+") {
            // setNumber("Syntax Error");
            // setResult("");
            // setResult(false);
            return
        }

        if (number == "") {
            setResult("")
            return

        }

        setResult(n => (eval(number)).toString());
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