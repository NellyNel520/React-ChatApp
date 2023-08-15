import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import React from 'react'

const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">ChatterBox</span>
			<div className="user">
				<img
					src="https://images.unsplash.com/photo-1691860305089-9a2566296202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
					alt="cake"
				/>
				<span>Nelly</span>
				<button onClick={() => signOut(auth)}>Logout</button>
			</div>
		</div>
	)
}

export default Navbar
