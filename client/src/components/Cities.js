import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import '../style/cities.css'
import { Button } from '@material-ui/core'
const Cities = () => {
  return (
    <>
      <Navbar/>
      <div className='container2'>
                      <Search />
               <div className='table3'>
                   <table>
                    <tr className='my-5' >
                         <th>S.No</th>
                         <th>cities name</th>
                    </tr>
                    <tr>
                          <td><button>Edit</button></td>
                          <td><button>Delete</button></td>
                     </tr> 
                      <tr>
                         <td></td>
                         <td></td>
                         </tr> 
                            </table>
                 </div>
                       <div className='citiesname'>
                         <select name="cities">
                         <option>Add new cities</option>
                            <option>Jalandhar</option>
                            <option>Ludhiana</option>
                            <option>Amritsar</option>
                            <option>Patiala</option>
                            <option>Chandigarh</option>
                            <option>Bathinda</option>
                          </select>
                         </div>
                        </div>               
    </>
  )
}

export default Cities
