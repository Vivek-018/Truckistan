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
            <button className="btn">Search</button>

            <div className='button'>
              <input type="button" value="submit"></input>
            </div>
          </div>
        </div>

        <table className='firsttable'>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>

      </div>

    </>
  )
}

export default AdminPage
