import google from "../images/google-plus.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth"
// import { async } from "@firebase/util"
import { auth, provider, fProvider, tProvider } from "../config/firebase"
import { useEffect, useState } from "react"
import { isEmpty } from "@firebase/util"
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged((currentUser) => {
    //         setUser(currentUser);

    //     })

    // })
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isError, setIsError] = useState("")
    const isInvalid = password == "" || email == "";
    const [user, setUser] = useState(null);
    const [isEmpty, setIsEmpty] = useState("")
    // const handleGoogle = async () => {
    //     setIsError("");
    //     try {
    //         await signInWithPopup(auth, provider);
    //         navigate("/calculator")
    //     }
    //     catch (err) {
    //         setIsError(err.message);
    //     }
    // }
    // const handleFacebook = async () => {
    //     setIsError("");
    //     try {
    //         await signInWithPopup(auth, fProvider);
    //         navigate("/calculator")
    //     }
    //     catch (err) {
    //         setIsError(err.message);
    //     }
    // }
    // const handleTwitter = async () => {
    //     setIsError("");
    //     try {
    //         await signInWithPopup(auth, tProvider);
    //         navigate("/calculator")
    //     }
    //     catch (err) {
    //         setIsError(err.message);
    //     }
    // }
    // const handleLogin = async () => {
    //     setIsError("");
    //     setIsEmpty("")
    //     if (isInvalid) {
    //         setIsEmpty("Field is empty")
    //         return;
    //     }

    //     try {

    //         setIsError("");
    //         await signInWithEmailAndPassword(auth, email, password);
    //         navigate("/calculator")


    //     }


    //     catch (err) {
    //         setIsError(err.message);
    //         console.log(err.message)
    //         setEmail("")
    //         setPassword("")

    //     }
    // }


    return (
        <div className="login-container">

            <div className="LogIN flex flex-col   " >
                <h1 className="text-l">SignUp</h1>
                {isError && <small><p style={{ textAlign: "center" }}>{isError}</p></small>}
                {isEmpty && <small><p style={{ textAlign: "center" }}>{isEmpty} </p></small>}
                {user && <small><p style={{ textAlign: "center" }}>{user.displayName} </p></small>}
                <div className="UserLog ">
                    <div className="input-Detail flex flex-col  gap-y-2  ">
                        <input type="text" placeholder="First Name" className="outline-none border-b border-grey text-xs pb-2"></input>
                        <input type="text" placeholder="Lat Name" className="outline-none border-b border-grey text-xs pb-2"></input>
                        <input type="text" className="outline-none border-b border-grey text-xs pb-2" placeholder="Email" id="username" value={email} onChange={({ target }) => setEmail(target.value)}></input>

                        <input type="password" className="outline-none text-xs border-b border-grey pb-2 " id="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} ></input>


                    </div>
                    <div className="loginButton flex flex-col ">
                        <button type="button" onClick={handleSignUp} >SIGNUP</button>
                        <div className="SignUpPoint flex flex-col ">
                            {/* <p style={{ fontSize: "0.7rem" }}>Or Sign Up Using</p>
                            <div className=" icons flex flex-row ">
                                <img src={google} onClick={handleGoogle}></img>
                                <img src={facebook} onClick={handleFacebook}></img>
                                <img src={twitter} onClick={handleTwitter}></img>
                            </div> */}
                            <div className="AnotherPoint flex flex-col ">

                                <p style={{ fontSize: "0.7rem", color: "blue" }}><Link to="/login">Already have an account?</Link></p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}