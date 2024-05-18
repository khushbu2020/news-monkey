import React from 'react'
import loader from "./loader.gif"

const Spinner=()=> {

    return (
      <div className=' text-center mr-2'>
        <img src={loader} alt="" />
        {/* <div className="loader">Loading...</div> */}
      </div>
    )

}

export default Spinner;
