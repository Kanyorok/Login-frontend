import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        navigate("/profile");
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    };

  return (
    <div className="flex">
      <div className="w-1/3" />
      <div className="w-1/3 mt-10 p-4 bg-white">
        <form className="border border-gray-500" onSubmit={handleForm}>
          <div className="p-4">
            <h1 className="text-lg border-b text-center border-gray-500">
              User Login
            </h1>
            <div className="mt-4">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInput}
                className="p-2 bg-gray-200 rounded border border-gray-400 w-full mt-2 focus:outline-none focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="mt-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInput}
                className="p-2 bg-gray-200 rounded border border-gray-400 w-full mt-2 focus:outline-none focus:border-blue-500"
                placeholder="**************"
              />
            </div>
            <div className="mt-4">
              <input
                type="submit"
                className="p-2 bg-purple-600 text-white cursor-pointer rounded border border-gray-400 w-full mt-2"
                value="Login"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
