import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
const qs = require('qs');
const axios = require('axios');

function ContactUs() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const history = useHistory();
    
    function handleSubmit(event){
        event.preventDefault();
        setLoading(true);

        var data = qs.stringify({
            customerName: name, email, query
        });

        var config = {
            method: 'post',
            url: 'https://vit-market.herokuapp.com/support/',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config).then((res) => {
            history.push('/contactus');
            window.location.reload();
        }).catch(e => console.log(e));
    }

    return (
        <>
        <form className="container mx-auto flex flex-col text-left justify-center pl-16 pr-16" onSubmit={handleSubmit}>
            <h1 className="mt-10 text-left font-extrabold text-4xl">Contact Us</h1>
            <div class=" relative ">
                <input value={name} onChange={e => setName(e.target.value)} type="text" id="rounded-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 my-4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name"/>
            </div>
            <div class=" relative ">
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="rounded-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 my-4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email"/>
            </div>
            <label class="text-gray-700" for="name">
                <textarea value={query} onChange={e => setQuery(e.target.value)} class="flex-1 appearance-none border border-gray-300 w-1/4 my-4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                </textarea>
            </label>
            <button type="submit" className="text-white w-max bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3">Submit Query</button>
        </form>
        </>
    )
}

export default ContactUs
