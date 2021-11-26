import Cookies from 'js-cookie';
import React, {useState} from 'react'
import {Link, useParams} from 'react-router-dom';
const axios = require('axios');

function Profile() {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
      const getUsers = async () => {
        const res = await axios.get("https://vit-market.herokuapp.com/profile",{
            headers: { 
                'Authorization': "Bearer " + Cookies.get('token')
            }
          });
          setUser(res.data);
          
          setLoading(false);
          console.log(res.data);
      }

      getUsers();
  }, []);

    return (
        <div className="container mx-auto flex flex-col text-left justify-center pl-16 pr-16">
            <div className="text-5xl font-extrabold mt-12">Profile</div>
            <div className='flex flex-row'>
                <img className="inline mt-4 object-cover h-40 w-40 ml-0 p-0" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                <div className="flex flex-col ml-6 mt-2">
                    <div className="text-2xl font-extrabold inline">{user.name}</div>
                    <div className="text-gray-500 text-2xl font-extrabold block">{user.address} {user.mobile}</div>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-4">
                <div className="flex flex-col w-1/4">
                    <div><span className="font-bold">Email </span>{user.email}</div>
                    <div><span className="font-bold">Alternate Contact </span>{user.altMobile}</div>
                    <div><span className="font-bold">Address </span>{user.address}</div>
                    <Link to="/editProfile"><button type="button" class="py-2 my-4 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Edit Profile
                    </button></Link>
                    <button type="button" class="py-2 my-4 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        View Support Requests
                    </button>
                    
                    <button type="button" class="py-2 my-4 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Upload
                    </button>

                    <Link to="/resetpassword"><button type="button" class="py-2 my-4 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Reset Password
                    </button></Link>

                </div>
                <div className="flex flex-col w-1/4">
                    <div><h2 className="font-bold">Payment Information</h2></div>
                    <div><span className="font-bold">UPI ID </span>{user.upi}</div>
                    <div><span className="font-bold">UPI QR Code </span></div>
                    <div><img className="mx-auto object-cover h-40 w-40" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" /></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
