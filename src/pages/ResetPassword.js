import React, {useState} from 'react';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
const qs = require('qs');
const axios = require('axios');

function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();
        setLoading(true);

        var data = qs.stringify({
            password 
        });

        var config = {
            method: 'post',
            url: 'https://vit-market.herokuapp.com/auth/resetpassword',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + Cookies.get('token')
            },
            data : data
        };

        axios(config).then((res) => {
            history.push('/profile');
            window.location.reload();
        }).catch(e => console.log(e));
    }

    return (
        <form className="container mx-auto w-1/4 mt-44" onSubmit={handleSubmit}>
            <input type="password" placeholder="Enter new password" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm your password" className="rounded-lg mt-4 border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

            <button type="submit" class="py-2 my-4 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Reset Password</button>
        </form>
    )
}

export default ResetPassword
