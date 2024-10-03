import './stylesheets/login.css'

function Login() {
    return(
        <>
            <div id="box">
                <div id="box-top">
                    <button onClick={signupBox()}>Sign up</button>
                <button onClick={loginBox()}>Login</button>
            </div>
            <div id="signup">
                <h1>Sign up</h1>
                <p>Welcome!</p>

                <form>
                    <input type="username" placeholder="Enter your username..." minLength="3" maxLength="16" required/>
                    <br />
                    <input type="email" placeholder="Enter your email..."></input>
                    <br />
                    <input type="password" placeholder="Enter password..."></input>
                    <br />
                    <input type="password" placeholder="Confirm password..."></input>
                    <br />
                    <input type="submit" value="Sign-up"></input>
                    <br />
                    <button>Sign in with Google</button>
                    <br />
                    <button>Sign in with GitHub</button>
                </form>
            </div>
            <div id="login">
                <h1>Login</h1>
                <p>Welcome back,</p>

                <form>
                    <input type="username" placeholder="Enter your username or email..." minLength="3" maxLength="16" required/>
                    <br />
                    <input type="password" placeholder="Enter your password"></input>
                    <h6>Forgot my password or username</h6>
                    <br />
                    <input type="submit" value="Login"></input>
                    <br />
                    <button>Sign in with Google</button>
                    <br />
                    <button>Sign in with GitHub</button>
                </form>
            </div>
        </div>
    </>
        )
}

export default Login