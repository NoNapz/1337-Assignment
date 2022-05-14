import React from 'react'
import {
     AiOutlineLinkedin,
     AiOutlineTwitter,
     AiOutlineGithub,
} from "react-icons/ai";
import classes from './EmployeeCard.module.css'

function EmployeeSocials({ employee }) {

    if(!employee.github && !employee.twitter && !employee.linkedIn) return null

    const openWindow = (url) => {
        window.open(url, "_blank")
    }

  return (
    <div className={classes.socials}>
        {employee.gitHub && <button onClick={() => openWindow(`https://github.com/${employee.gitHub}`)}> <AiOutlineGithub /> </button>}
        {employee.twitter && <button onClick={() => openWindow(`https://twitter.com/${employee.twitter}`)}> <AiOutlineTwitter /> </button>}
        {employee.linkedIn && <button onClick={() => openWindow(`https://www.linkedin.com${employee.linkedIn}`)}> <AiOutlineLinkedin /> </button>}
    </div>
  )
}

export default EmployeeSocials