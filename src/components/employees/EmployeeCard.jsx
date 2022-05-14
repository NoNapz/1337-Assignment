import React from 'react';
import Card from '../UI/Card';
import classes from './EmployeeCard.module.css';
import EmployeeSocials from './EmployeeSocials';

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
                <EmployeeSocials employee={employee} />
            </div>
        </div>
    </Card>
  )
}

export default EmployeeCard