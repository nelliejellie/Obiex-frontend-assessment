import React from 'react'
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
        <div>
          <Link to='/'></Link>
          <Link to='/details'></Link>
        </div>
        <div>
          <Outlet/>
        </div>
    </>
  )
}

export default Root