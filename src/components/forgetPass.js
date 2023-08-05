import { useState } from "react"
import { auth, db } from "../config/firebase"
import { useNavigate } from "react-router-dom"
import { query, where, getDocs, collection } from "firebase/firestore"
import { sendPasswordResetEmail } from "firebase/auth"
export const ForgetPassword = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const notFilled = email == "";
    const navigate = useNavigate();
    const getcollection = collection(db, "CalUser");
    const handleEmail = async () => {

        setError("");
        if (notFilled) {
            setError("The Field is empty")
            return;
        }
        const result = query(getcollection, where("email", "==", email))
        const data = await getDocs(result);
        try {
            if (data.empty) {
                setError("Email is not found");
                setEmail("");
                return;
            }
            else {
                await sendPasswordResetEmail(auth, email);
                alert("Password reset mail is sent ot your email");
                setTimeout(() => {
                    navigate("/login")
                }, 3000)
            }
        }
        catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="login-container">

            <div className="LogIN flex flex-col   " style={{ minHeight: "100px" }} >

                <div className="UserLog ">
                    <div className="input-Detail flex flex-col  gap-y-2  ">
                        <label htmlFor="username " className="text-xs font-xs ">Email</label>
                        <input type="text" className="outline-none border-b border-grey text-xs pb-2" placeholder="Type Your Email" id="username" value={email} onChange={({ target }) => setEmail(target.value)}></input>
                    </div>
                    <div className="loginButton flex flex-col ">
                        {error && <p>{error}</p>}
                        <button type="button" onClick={handleEmail}  >Send OTP</button>
                    </div >
                </div >
            </div>
        </div>
    )
}