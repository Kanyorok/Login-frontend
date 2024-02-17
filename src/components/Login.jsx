import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="flex">
        <div className="w-1/3" />
        <div className="w-1/3 p-4 bg-white">
          <form className="border border-gray-500">
            <div className="p-4">
              <h1 className="text-lg border-b border-gray-500">Ping Here</h1>
              <div className="mt-4">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="p-2 bg-gray-200 rounded border border-gray-400 w-full mt-2 focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              <div className="mt-4">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
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
}
