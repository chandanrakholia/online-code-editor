import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
    return (
        <div className="client" style={{ display: "flex", flexDirection: "column" }}>
            <Avatar name={username} size={50} round="14px" />
            <span className="userName" style={{color: "white"}}>{username}</span>
        </div>
    );
};

export default Client;