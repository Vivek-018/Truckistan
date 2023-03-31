import React from 'react'

import Navbar from './Navbar'
import '../style/admin.css'

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <div className='text-center my-4 ' >
        <div className="searchbar">
          <div className="search-input">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <div className='button'>
            <button className='btn'>search</button>
            <button className='btn'>submit</button>
          </div>
        </div>
        <table className='firsttable'>
          <tr>
            <th>S.NO</th>
            <th>DRIVER NAME</th>
            <th>VECHILE NUMBER</th>
            <th><input className='inputbtn' type="button" value="view"></input></th>
            <th><input  className='inputbtn' type="button" value="verified"></input></th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default AdminPage
