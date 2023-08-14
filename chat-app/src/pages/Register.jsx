import React from 'react'

const Register = () => {
	return (
		<div className="formContainer">
			<div className="formWrapper">
        <span className='logo'>ChatterBox</span>
        <span className='tittle'>Register</span>
				<form>
          <input type='text' placeholder='username'></input>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <input type='file'></input>
          <button>Sign up</button>
        </form>
        <p>Already have an account? Login </p>
			</div>
		</div>
	)
}

export default Register
