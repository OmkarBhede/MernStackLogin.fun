import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = () => {
    const { name, email, password, repassword } = user;
    if (name && email && password && password === repassword) {
      console.log("info passed");
      //alert("posted");
      axios
        .post("http://localhost:8080/auth/register", user)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } else {
      alert("invalid");
    }
  };
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Register
          </h2>

          <form className="mt-10">
            <label
              for="name"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              value={user.name}
              type="text"
              name="name"
              placeholder="your name"
              autocomplete="text"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required="required"
            />
            <label
              for="email"
              className="block text-xs mt-2 font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              onChange={handleChange}
              value={user.email}
              type="email"
              name="email"
              placeholder="e-mail address"
              autocomplete="email"
              className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required="required"
            />

            <label
              for="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              value={user.password}
              type="password"
              name="password"
              placeholder="password"
              autocomplete="current-password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required="required"
            />
            <label
              for="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Re-Enter Password
            </label>
            <input
              onChange={handleChange}
              value={user.repassword}
              type="password"
              name="repassword"
              placeholder="password"
              autocomplete="current-password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required="required"
            />

            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
              onClick={handleRegister}
            >
              Register
            </button>

            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center justify-center">
              <a href="register" className="flex-2 ">
                Login to existing Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
