import google from "../images/google-plus.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import { Link } from "react-router-dom"
export const Login = () => {

    return (
        <div className="login-container">

            <div className="LogIN flex flex-col   " >
                <h1 className="text-l">Login</h1>
                <div className="UserLog ">
                    <div className="input-Detail flex flex-col  gap-y-2  ">
                        <label htmlFor="username " className="text-xs font-xs ">Username</label>
                        <input type="text" className="outline-none border-b border-grey text-xs pb-2" placeholder="Type Your UserName" id="username"></input>
                        <label htmlFor="password" className=" text-xs font-xs" >Password</label>
                        <input type="password" className="outline-none text-xs border-b border-grey pb-2 " id="password" placeholder="Type Your Password"></input>
                        <p>Forgot password?</p>

                    </div>
                    <div className="loginButton flex flex-col ">
                        <button type="button">LOGIN</button>
                        <div className="SignUpPoint flex flex-col ">
                            <p style={{ fontSize: "0.7rem" }}>Or Sign Up Using</p>
                            <div className=" icons flex flex-row ">
                                <img src={google}></img>
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