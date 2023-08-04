
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

import { auth, db } from "../config/firebase"
import { useEffect, useState } from "react"
import { addDoc, collection, query, where, getDocs } from "firebase/firestore"
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

    const emailExists = false;
    const [isEmpty, setIsEmpty] = useState("");
    const newCollection = collection(db, "CalUser");


    const handleSignUp = async () => {
        setIsEmpty("");
        setIsError("");
        if (isInvalid) {
            setIsEmpty("Field is empty");

            return;
        }
        try {
            const result = query(newCollection, where("email", "==", email));
            try {
                const docs = await getDocs(result)
                if (docs.empty) {
                    await addDoc(newCollection, {
                        firstName,
                        lastName,
                        email,
                        password
                    })
                    alert("Signup Sucessfull");
                    setEmail("");
                    setFirstName("");
                    setLastName("");
                    setPassword("");
                    createUserWithEmailAndPassword(auth, email, password);
                    navigate("/login")
                }


                else {
                    setIsError("The email already exist!");
                    setEmail("");
                    setFirstName("");
                    setLastName("");
                    setPassword("");
                    return
                }
            }
            catch (err) {
                setIsError(err.message);
                setEmail("");
                setFirstName("");
                setLastName("");
                setPassword("");
            }



        }
        catch (err) {
            setIsError(err.message);
            setEmail("");
            setFirstName("");
            setLastName("");
            setPassword("");
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