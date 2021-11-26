import Cookies from 'js-cookie';
import React, {useState} from 'react'
import Loader from 'react-loader-spinner';
import {useHistory} from 'react-router-dom'
const qs = require('qs');
const axios = require('axios');

function EditProfile() {

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    React.useEffect(() => {
      const getUsers = async () => {
        const res = await axios.get("https://vit-market.herokuapp.com/profile",{
            headers: { 
                'Authorization': "Bearer " + Cookies.get('token')
            }
          });
          setName(res.data.name);
          setAddress(res.data.address);
          setMobile(res.data.mobile);
          setAltMobile(res.data.altMobile);
          setUpi(res.data.upi);
          
          setLoading(false);
          console.log(res.data);
      }

      getUsers();
  }, []);

  
    const [name, setName] = useState(user.name);
    const [address, setAddress] = useState(user.address);
    const [mobile, setMobile] = useState(user.mobile);
    const [altMobile, setAltMobile] = useState(user.altMobile);
    const [upi, setUpi] = useState(user.upi);

    function handleSubmit(event){
        event.preventDefault();
        setLoading(true);

        var data = qs.stringify({name, address, mobile, altMobile, upi});

        // console.log({"hmm": data});
        var config = {
            method: 'post',
            url: 'https://vit-market.herokuapp.com/profile/edit',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer '  + Cookies.get('token')
            },
            data : data
        };

        axios(config).then((res) => {
            history.push('/profile');
            window.location.reload();
        }).catch(e => console.log(e));
        setLoading(false);
    }

    if(!loading){
        return (
            <form className="container mx-auto flex flex-col text-left justify-center pl-16 pr-16" onSubmit={handleSubmit}>
                <h1 className="font-extrabold text-4xl text-left uppercase">Create Product</h1>
                <div className="flex flex-row justify-between items-center w-3/4 my-4">
                    <span className="text-lg mr-4">Name</span>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>  
                </div>
                <div className="flex flex-row justify-between items-center w-3/4 my-4">
                    <span className="text-lg mr-4">User Address</span>
                    <textarea value={address} onChange={e => setAddress(e.target.value)} className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent h-3/4"/>  
                </div>
                
                <div className="flex flex-row justify-between items-center w-3/4 my-4">
                    <span className="text-lg mr-4">Mobile Number</span>
                    <input type="text" value={mobile} onChange={e => setMobile(e.target.value)} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>  
                </div>
                <div className="flex flex-row justify-between items-center w-3/4 my-4">
                    <span className="text-lg mr-4">Alternate Mobile Number</span>
                    <input type="text" value={altMobile} onChange={e => setAltMobile(e.target.value)} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>  
                </div>
                <div className="flex flex-row justify-between items-center w-3/4 my-4">
                    <span className="text-lg mr-4">UPI ID</span>
                    <input type="text" value={upi} onChange={e => setUpi(e.target.value)} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>  
                </div>
                <div className="flex flex-row justify-end items-center w-3/4 my-4">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3">Confirm Edits</button>
                </div>
            </form>
        )
    }else{
       return( <div className='container mx-auto flex flex-col justify-center text-center'>
                <Loader
                        type="Puff"
                        color="#B6083C"
                        height={100}
                        width={100}
                        timeout={8000}
                    />
        </div>)
    }
}

export default EditProfile
