import react, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const { push } = useHistory();
    useEffect(() => {
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            console.log(res);
            localStorage.removeItem('token');
            push('/login');
        }
        )
    }, []);
    return (
        <div>
            <h2>Logout</h2>
        </div>
    )
}

export default Logout;