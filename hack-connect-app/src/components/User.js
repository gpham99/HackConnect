import React from 'react'
import './css/User.css'
// import image from './smileyface.jpeg' 

const User = (props) => {
    return (
        <div id="profile">
            <p>{props.title}</p>
            {/* <img src={image} alt="Smiley face" /> */}
        </div>
    )
}

export default User
