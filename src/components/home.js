export const Calculator = () => {

    return (
        <div className="container">
            <h1 className="text">Calcu<span className="colorCal">lator</span></h1>

            <div className="main-container">

                <div className="item box">
                    <div className="output-box boxes">23</div>
                    <div className="input-box boxes">32</div>
                </div>
                <div className="items small-font">&radic;</div>
                <div className="items small-font">   &pi;</div>
                <div className="items small-font">^</div>
                <div className="items small-font">!</div>
                <div className="items" style={{ backgroundColor: "#0F5324" }}>AC</div>
                <div className="items" style={{ backgroundColor: "#004A77" }}>( )</div>
                <div className="items" style={{ backgroundColor: "#004A77" }}>% </div>
                <div className="items" style={{ backgroundColor: "#004A77" }}>/</div>
                <div className="items">7</div>
                <div className="items">8</div>
                <div className="items">9</div>
                <div className="items" style={{ backgroundColor: "#004A77" }}>*</div>
                <div className="items">4</div>
                <div className="items">5</div>
                <div className="items">6</div>
                <div className="items" style={{ backgroundColor: "#004A77" }}>-</div>
                <div className="items">1</div>
                <div className="items">2</div>
                <div className="items">3</div>
                <div className="items" style={{ backgroundColor: "#004A77" }}>+</div>
                <div className="items">0</div>
                <div className="items">.</div>
                <div className="items">  &times;</div>
                <div className="items" style={{ backgroundColor: "#004A77" }}>=</div>


            </div>
        </div>
    )
}