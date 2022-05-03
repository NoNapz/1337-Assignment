import React from 'react';
import Card from '../UI/Card';
import classes from './EmployeeCard.module.css';
import {
     AiOutlineLinkedin,
     AiOutlineTwitter,
     AiOutlineGithub,
} from "react-icons/ai";

function EmployeeCard(props) {
  return (
    <Card>
        <div className={classes.card}>
            <img src={props.image} alt="Missing Avatar" />
            <div className={classes.body}>
                <div className={classes.details}>
                  <h2>{props.name}</h2>
                  <span>{props.office}</span>
                </div>
                <div className={!props.github && !props.twitter && !props.linkedIn ? '' :  (classes.socials)}>
                    {props.github && <button onClick={() => window.open(`https://github.com/${props.github}`, "_blank")}> <AiOutlineGithub /> </button>}
                    {props.twitter && <button onClick={() => window.open(`https://twitter.com/${props.twitter}`, "_blank")}> <AiOutlineTwitter /> </button>}
                    {props.linkedIn && <button onClick={() => window.open(`https://www.linkedin.com${props.linkedIn}`, "_blank")}> <AiOutlineLinkedin /> </button>}
                </div>
            </div>
        </div>
    </Card>
  )
}

export default EmployeeCard