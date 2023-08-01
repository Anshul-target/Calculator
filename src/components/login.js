const Login = () => {

    return (
        <div className="LogIN">
            <H3>Login</H3>
            <div className="UserLog">
                <div className="input-Detail">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"></input>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password"></input>
                    <p>Forgot password?</p>

                </div>
                <div className="loginButton">
                    <button type="button">Login</button>
                    <div className="SignUpPoint">
                        <p>or sign Up Using</p>
                        <div>
                            <img></img>
                            <img></img>
                            <img></img>
                        </div>
                        <div className="AnotherPoint">
                            <p>Or Sign Up Using</p>
                            <p>SIGN UP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}