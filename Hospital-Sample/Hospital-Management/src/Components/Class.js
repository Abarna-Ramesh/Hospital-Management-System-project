import React, { useRef } from 'react'
import axios from 'axios';
const PostUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handlePost = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const data = {
            name, email
        }
        const postData = async () => {
            try {
                const res = await axios.post("http://localhost:8080/users", data)
                console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }
        postData()

    }
    return (
        <div>

            <form>

                <input placeholder='Name' ref={nameRef} /><br />
                <input placeholder='Email' ref={emailRef} />
                <br />
            </form>
            <button onClick={handlePost}>Post data</button>
        </div>
    )
}

export default PostUser