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
        <div className='searchbar'>
        <input type='searchbar' className='searchinput' placeholder='sreach..'/>
        <button  className='button3'>search</button>
        <div className='citiesname2'>
                         <select name="cities2">
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
                     
               <div className='table3'>
                   <table>
                    <tr className='my-5' >
                         <th className='tr'>S.No</th>
                         <th className='tr2'>cities name</th>
                         
                    </tr>
                    <tr>
                          <td className='tr'>1</td>
                          <td className='tr2'>Jalandhar</td>
                          <td className='btr'><button className='btn-view mx-4 '>Edit</button></td>
                          <td className='btr'><button className='btn-view mx-4 '>Delete</button></td>
                     </tr> 
                      <tr>
                         <td></td>
                         <td></td>
                         </tr> 
                            </table>
                 </div>
                  
                        </div>               
    </>
  )
}

export default Cities
