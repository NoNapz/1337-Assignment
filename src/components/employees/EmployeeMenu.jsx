import React from 'react'
import classes from './EmployeeMenu.module.css';

const EmployeeMenu = (props) => {

  return (
      <div className={classes['menu-wrapper']}>
        <div> 
          <input type="text" value={props.onInput} onChange={(e) => props.onSetInput(e.target.value)} placeholder="Search for employee or office..."/>
        </div>
        <div className={classes.sort}>
          <span>Sort by: </span>
          <select onChange={(e) => props.onSetSort(e.target.value)}>
            <option value="name">Name</option>
            <option value="office">Office</option>
          </select>
        </div>
      </div>
  )
}

export default EmployeeMenu;