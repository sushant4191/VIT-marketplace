import Cookies from 'js-cookie';
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Loader} from 'react-loader-spinner';
const qs = require('qs');
const axios = require('axios');

function AddProduct() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [sku, setSKU] = useState('');
    const [price, setPrice] = useState(0);
    const [condition, setCondition] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();
        setLoading(true);

        var data = qs.stringify({
            productName: name,
            productDesc: desc,
            image: image,
            sku: sku,
            productCost: price,
            // postedBy: {
            //     type: String
            // },
            // postedByEmail: {
            //     type: String
            // },
            Address: address
        });

        var config = {
            method: 'post',
            url: 'https://vit-market.herokuapp.com/products/newproduct',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer '  + Cookies.get('token')
            },
            data : data
        };

        axios(config).then((res) => {
            history.push('/addproduct');
            window.location.reload();
            console.log({data});
        }).catch(e => console.log(e));
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
                    <span className="text-lg mr-4">Product Description</span>
                    <textarea value={desc} onChange={e => setDesc(e.target.value)} className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent h-3/4"/>  
                </div>
                <div className="flex flex-row justify-start items-center w-3/4 my-4">
                    <span className="text-lg mr-4">Category</span>
                    <select class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">
                            Select an option
                        </option>
                        <option value="dog">
                            Dog
                        </option>
                        <option value="cat">
                            Cat
                        </option>
                        <option value="hamster">
                            Hamster
                        </option>
                        <option value="parrot">
                            Parrot
                        </option>
                        <option value="spider">
                            Spider
                        </option>
                        <option value="goldfish">
                            Goldfish
                        </option>
                    </select>
                </div>
                <h1 className="font-extrabold text-2xl text-center">Product Details</h1>
                <div className="flex flex-row justify-start items-center w-3/4 my-4">
                    <span className="text-lg mr-4">Image</span>
                    <input type="file" value={image} onChange={e => setImage(e.target.value)}/>
                </div>
                <div className="flex flex-row justify-between items-center w-3/4 my-4">
                    <span className="text-lg mr-4">SKU</span>
                    <input type="text" value={sku} onChange={e => setSKU(e.target.value)} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>  
                </div>
                <div className="flex flex-row justify-between items-center w-3/4 my-4">
                    <span className="text-lg mr-4">Price</span>
                    <input type="text" value={price} onChange={e => setPrice(e.target.value)} className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>  
                </div>
                <div className="flex flex-row justify-between items-center w-3/4 my-4">
                    <span className="text-lg mr-4">Condition</span>
                    <input type="text" value={condition} onChange={e => setCondition(e.target.value)} className="w-2/4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>  
                </div>
                <div className="flex flex-row justify-between items-center w-3/4 my-4">
                    <span className="text-lg mr-4">Address</span>
                    <textarea value={address} onChange={e => setAddress(e.target.value)} className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent h-3/4"/>  
                </div>
                <div className="flex flex-row justify-end items-center w-3/4 my-4">
                    <button type="reset" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3">Clear Form</button>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3">Upload</button>
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

export default AddProduct
