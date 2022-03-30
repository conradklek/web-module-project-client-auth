import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export const AddFriend = () => {
    const [form, setForm] = useState({
        id: Math.floor(Math.random() * 100),
        name: '',
        age: 0,
        email: '',
      })
    const { push } = useHistory();
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        axios.post('http://localhost:9000/api/friends', {
            ...form
        }, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            console.log(res);
            push('/friends');
        })
    }
    return (
        <div>
            <h2>AddFriend</h2>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="username">
                        name:
                        <input type="text" id="username" 
                            name="name"
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="age">
                        Age:
                        <input type="number" id="age" 
                            name="age"
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email:
                        <input type="email" id="email" 
                            name="email"
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddFriend;