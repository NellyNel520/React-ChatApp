import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import {
	arrayUnion,
	doc,
	serverTimestamp,
	Timestamp,
	updateDoc,
} from 'firebase/firestore'
import { db, storage } from '../firebase'
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const Input = () => {
	const [text, setText] = useState('')
	const [img, setImg] = useState(null)
  const [err, setErr] = useState(false)

	const { currentUser } = useContext(AuthContext)
	const { data } = useContext(ChatContext)

	const handleSend = async (e) => {
    e.preventDefault()
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

    
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
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  }

	return (
		<div className="input">
			<input
				type="text"
				placeholder="Type something..."
				onChange={(e) => setText(e.target.value)}
				value={text}
			/>
			<div className="send">
				<img src="https://img.icons8.com/material-sharp/24/attach.png" alt="" />
				<input
					type="file"
					style={{ display: 'none' }}
					id="file"
					onChange={(e) => setImg(e.target.files[0])}
				/>
				<label htmlFor="file">
					<img src="https://img.icons8.com/dotty/80/add-image.png" alt="" />
				</label>
				<button onClick={handleSend}>Send</button>
        {err && <span>Something went wrong</span>}
			</div>
		</div>
	)
}

export default Input
