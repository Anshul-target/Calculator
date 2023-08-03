import google from "../images/google-plus.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
// import { async } from "@firebase/util"
import { auth, provider } from "../config/firebase"
import { useEffect, useState } from "react"
import { isEmpty } from "@firebase/util"
import { useNavigate } from "react-router-dom";
export const Login = () => {
    // useEffect(()=>{
    //     const initialEmpty=true;

    // })
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isError, setIsError] = useState("")
    const isInvalid = password == "" || email == ""
    const [isEmpty, setIsEmpty] = useState("")
    const handleGoogle = async () => {

        try {
            signInWithPopup(auth, provider);
        }
        catch (err) {
            console.log(err.message)
        }
    }
    const handleLogin = async () => {
        setIsError("");
        setIsEmpty("")
        if (isInvalid) {
            setIsEmpty("Field is empty")
            return;
        }

        try {

            setIsError("");
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/calculator")


        }


        catch (err) {
            setIsError(err.message);
            console.log(err.message)
            setEmail("")
            setPassword("")

        }
    }
    console.log(email)
    console.log(password)

    return (
        <div className="login-container">

            <div className="LogIN flex flex-col   " >
                <h1 className="text-l">Login</h1>
                {isError && <small><p style={{ textAlign: "center" }}>{isError}</p></small>}
                {isEmpty && <small><p style={{ textAlign: "center" }}>{isEmpty} </p></small>}
                <div className="UserLog ">
                    <div className="input-Detail flex flex-col  gap-y-2  ">
                        <label htmlFor="username " className="text-xs font-xs ">Email</label>
                        <input type="text" className="outline-none border-b border-grey text-xs pb-2" placeholder="Type Your Email" id="username" value={email} onChange={({ target }) => setEmail(target.value)}></input>
                        <label htmlFor="password" className=" text-xs font-xs" >Password</label>
                        <input type="password" className="outline-none text-xs border-b border-grey pb-2 " id="password" placeholder="Type Your Password" value={password} onChange={({ target }) => setPassword(target.value)} ></input>
                        <p>Forgot password?</p>

                    </div>
                    <div className="loginButton flex flex-col ">
                        <button type="button" onClick={handleLogin} >LOGIN</button>
                        <div className="SignUpPoint flex flex-col ">
                            <p style={{ fontSize: "0.7rem" }}>Or Sign Up Using</p>
                            <div className=" icons flex flex-row ">
                                <img src={google} onClick={handleGoogle}></img>
                                <img src={facebook}></img>
                                <img src={twitter}></img>
                            </div>
                            <div className="AnotherPoint flex flex-col ">
                                <p style={{ fontSize: "0.7rem" }}>Or Sign Up Using</p>
                                <p style={{ fontSize: "0.7rem" }}><Link to="/signup">SignUp</Link></p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}