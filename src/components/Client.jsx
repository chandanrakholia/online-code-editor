import React from 'react';
import Avatar from 'react-avatar';
import "../App.css"
const Client = ({ username, editorMode }) => {
    return (
        <div className="client" style={{ display: "flex", flexDirection: "column" }}>
            <Avatar style={{ margin: "auto" }} name={username} size={50} round="50%" />
            <span style={{ textAlign: "center" }} className={editorMode} id='userName'>{username}</span>
        </div>
    );
};

export default Client;