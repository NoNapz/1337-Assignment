import React from 'react';
import Card from '../UI/Card';
import classes from './EmployeeCard.module.css';
import {
     AiOutlineLinkedin,
     AiOutlineTwitter,
     AiOutlineGithub,
} from "react-icons/ai";

function EmployeeCard(props) {
  const employee = props.employee;

  return (
    <Card>
        <div className={classes.card}>
            <img src={employee.imagePortraitUrl} alt="Missing Avatar" />
            <div className={classes.body}>
                <div className={classes.details}>
                  <h2>{employee.name}</h2>
                  <p>{employee.office}</p>
                </div>
                // If no social media, do not print, else print the existing ones.
                <div className={!employee.github && !employee.twitter && !employee.linkedIn ? '' :  (classes.socials)}>
                    {employee.gitHub && <button onClick={() => window.open(`https://github.com/${employee.gitHub}`, "_blank")}> <AiOutlineGithub /> </button>}
                    {employee.twitter && <button onClick={() => window.open(`https://twitter.com/${employee.twitter}`, "_blank")}> <AiOutlineTwitter /> </button>}
                    {employee.linkedIn && <button onClick={() => window.open(`https://www.linkedin.com${employee.linkedIn}`, "_blank")}> <AiOutlineLinkedin /> </button>}
                </div>
            </div>
        </div>
    </Card>
  )
}

export default EmployeeCard