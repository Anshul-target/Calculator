import { useState } from "react"

export const ForgetPassword = () => {

    const [email, setEmail] = useState("")
    return (
        <div className="login-container">

            <div className="LogIN flex flex-col   " >

                <div className="UserLog ">
                    <div className="input-Detail flex flex-col  gap-y-2  ">
                        <label htmlFor="username " className="text-xs font-xs ">Email</label>
                        <input type="text" className="outline-none border-b border-grey text-xs pb-2" placeholder="Type Your Email" id="username" value={email} onChange={({ target }) => setEmail(target.value)}></input>
                    </div>
                    <div className="loginButton flex flex-col ">
                        <button type="button"  >Send OTP</button>
                    </div >
                </div >
            </div>
        </div>
    )
}