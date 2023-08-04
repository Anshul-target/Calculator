
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

import { auth, db } from "../config/firebase"
import { useEffect, useState } from "react"
import { addDoc, collection, query, where } from "firebase/firestore"
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
    const isInvalid = password == "" || email == "" || firstName == "" || lastName == "";
    // const [emailExist, setEmailExists] = useState(false);
    const emailExists = false;
    const [isEmpty, setIsEmpty] = useState("");
    const newCollection = collection(db, "CalUser");
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

    const handleSignUp = async () => {
        setIsEmpty("")
        if (isInvalid) {
            setIsEmpty("Field is empty")
            return;
        }
        try {
            const result = query(newCollection, where("email" == email));
            console.log(result)

            setIsError("");


            await addDoc(newCollection, {
                firstName,
                lastName,
                email,
                password
            })
        }
        catch (err) {
            setIsError(err.message);
        }

    }


    return (
        <div className="login-container">

            <div className="LogIN flex flex-col   " >
                <h1 className="text-l">SignUp</h1>
                {isError && <small><p style={{ textAlign: "center" }}>{isError}</p></small>}
                {isEmpty && <small><p style={{ textAlign: "center" }}>{isEmpty} </p></small>}

                <div className="UserLog ">
                    <div className="input-Detail flex flex-col  gap-y-2  ">
                        <input type="text" placeholder="First Name" className="outline-none border-b border-grey text-xs pb-2" value={firstName} onChange={({ target }) => setFirstName(target.value)}></input>
                        <input type="text" placeholder="Lat Name" className="outline-none border-b border-grey text-xs pb-2" value={lastName} onChange={({ target }) => setLastName(target.value)}></input>
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

                                <p style={{ fontSize: "0.7rem", color: "black" }}>Already a member?<Link to="/login" style={{ color: "blue" }}>SignIn</Link></p>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}