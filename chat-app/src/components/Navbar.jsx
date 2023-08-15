import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
	const {currentUser} = useContext(AuthContext)
	const username = currentUser.username

	return (
		<div className="navbar">
			<span className="logo">ChatterBox</span>
			<div className="user">
				<img
					src={currentUser.photoURL}
					alt="user avatar"
				/>
				<span>{currentUser.displayName}</span>
				<button onClick={() => signOut(auth)}>Logout</button>
			</div>
		</div>
	)
}

export default Navbar
