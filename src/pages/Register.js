import React from "react";
import { useState } from "react";
import {Loader} from 'react-loader-spinner';
import Cookies from 'js-cookie';
import {useHistory, Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
const qs = require('qs');
const axios = require('axios');

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPass, setRepPass] = useState('');
    const [name, setName] = useState('');
    const [responseCode, setReponseCode] = useState(0);
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    function SaveCredentials(token, log) {
        Cookies.set("token", token)
        Cookies.set("isLoggedIn", log)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        var data = qs.stringify({
            name, email, password 
        });

        var config = {
            method: 'post',
            url: 'https://vit-market.herokuapp.com/auth/signup',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config).then((res) => {
            setReponseCode(1);
            SaveCredentials(res.data.token, responseCode);
            history.push('/dashboard');
            window.location.reload();
            console.log("Logged In!");
        }).catch(e => console.log(e));
    }

    if(!loading){
        return (
            <div className="container mx-auto w-2/4 flex items-center justify-center">
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className="text-gray-700">Name</Form.Label>
                    <Form.Control
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Form.Group>
                <Form.Group>
                    <Form.Label className="text-gray-700">Email</Form.Label>
                    <Form.Control
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="text-gray-700">Password</Form.Label>
                    <Form.Control
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="text-gray-700">Confirm Password</Form.Label>
                    <Form.Control
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="password"
                        value={repPass}
                        onChange={e => setRepPass(e.target.value)}
                      />
                  </Form.Group>
                  
                  <Button type="submit" class="py-2 px-4 mt-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                      Register
                  </Button>

                </Form>
            </div>
        )
    }else{
        return (
            <div className='container mx-auto flex flex-col justify-center text-center'>
                <Loader
                        type="Puff"
                        color="#B6083C"
                        height={100}
                        width={100}
                        timeout={8000}
                    />
            </div>
        )
    }
}

export default Login;