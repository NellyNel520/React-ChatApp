import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'

const Register = () => {
	const [err, setErr] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const username = e.target[0].value
		const email = e.target[1].value
		const password = e.target[2].value
		const file = e.target[3].files[0]
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password)

			const storageRef = ref(storage, username)

			const uploadTask = uploadBytesResumable(storageRef, file)

			// Register three observers:
			// 1. 'state_changed' observer, called any time the state changes
			// 2. Error observer, called on failure
			// 3. Completion observer, called on successful completion
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					// Observe state change events such as progress, pause, and resume
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					console.log('Upload is ' + progress + '% done')
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused')
							break
						case 'running':
							console.log('Upload is running')
							break
					}
				},
				(error) => {
					setErr(true)
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						console.log('File available at', downloadURL)
						await updateProfile(res.user, {
							username,

							photoURL: downloadURL,
						})
						await setDoc(doc(db, 'users', res.user.uid), {
							uid: res.user.uid,
							username,
							email,
							photoURL: downloadURL
						})
					})
				}
			)
		} catch (err) {
			setErr(true)
		}
	}
	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">ChatterBox</span>
				<span className="tittle">Register</span>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Username" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<input style={{ display: 'none' }} type="file" id="file" />
					<label htmlFor="file">
						<img src="https://img.icons8.com/dotty/80/add-image.png" />
						<span>Add profile photo</span>
					</label>
					<button>Sign up</button>
					{err && <span>Something went wrong</span>}
				</form>
				<p>Already have an account? Login </p>
			</div>
		</div>
	)
}

export default Register
