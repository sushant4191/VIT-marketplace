import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
const axios = require("axios");

function SupportRequests() {
  const [reqs, setReqs] = useState("");
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("https://vit-market.herokuapp.com/support/", {
        headers: {},
      });
      setReqs(res.data.foundRequests);
      setLoading(false);
      console.log(res.data);
    };

    getUsers();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <Loader
          type="Puff"
          color="#B6083C"
          height={100}
          width={100}
          timeout={8000}
        />
      </div>
    );
  } else {
    return (
    <>
    <h1 className="text-left mx-8 font-extrabold text-4xl">Support Requests</h1>
      <div className="container mx-auto flex flex-row flex-wrap">
        {reqs.map((req) => {
          return (
        <div class="max-w-md mx-6 my-4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div>
              <h2 class="text-gray-800 text-xl font-semibold my-4">Support Request ID: {req._id}</h2>
              <p class="mt-2 text-gray-600">{req.query}</p>
            </div>
            <div class="flex flex-row flex-wrap justify-between mt-4">
              <span href="" class="text-sm font-medium text-indigo-500">
                {req.email}
              </span>
              <span href="" class="text-sm font-medium text-indigo-500">
                {req.customerName}
              </span>
              <button type="button" className="py-1 px-2 mt-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              <Link className="text-white hover:text-white" to="/answerreq">Answer</Link>
                </button>
            </div>
          </div>);
        })}
      </div>
      </>
    );
  }
}

export default SupportRequests;
