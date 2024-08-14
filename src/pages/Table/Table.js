import React from 'react'
import style from "./table.module.css";

function Table() {
  return (
 <>
<div className={style.table} >
<div className={`${style.tablemargin} container-fluid ${style.background}`}>
 <table className="table">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>raja</td>
      <td>23</td>
      <td>raja@gmail.com</td>
      <td>123456789</td>
      <td>
        <button className='btn btn-sm btn-primary me-1'>Edit</button>
        <button className='btn btn-sm btn-primary'>Delete</button>
        </td>
      
    </tr>
  </tbody>
</table>
 </div>
</div>
 </>
  )
}

export default Table