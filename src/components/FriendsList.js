import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/api/friends',
            { headers: { authorization: localStorage.getItem('token') } 
        })
        .then(res => {
            console.log(res)
            setFriends(res.data);
        })
    }, []);
    return (
        <div>
            <h2>FriendsList</h2>
            <ul>
                {friends.map(friend => (
                    <li key={friend.id}>
                        <div>
                            {friend.name} ({friend.age})
                        </div>
                        <div>
                            {friend.email}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FriendsList;