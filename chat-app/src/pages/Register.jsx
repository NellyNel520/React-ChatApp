import React from 'react'

const Register = () => {
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">ChatterBox</span>
				<span className="tittle">Register</span>
				<form>
					<input type="text" placeholder="username" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<input style={{display: "none"}} type="file" id="file" />
					<label htmlFor="file">
            <img src="https://img.icons8.com/dotty/80/add-image.png"/>
            <span>Add profile photo</span>
          </label>
					<button>Sign up</button>
				</form>
				<p>Already have an account? Login </p>
			</div>
		</div>
	)
}

export default Register
