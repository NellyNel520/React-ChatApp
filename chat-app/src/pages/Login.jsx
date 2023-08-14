import React from 'react'

const Login = () => {
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">ChatterBox</span>
				<span className="tittle">Login</span>
				<form>
					
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					
					<button>Login</button>
				</form>
				<p>Don't have an account? Sign up </p>
			</div>
		</div>
	)
}

export default Login