import React from 'react';
import EmployeeCard from './EmployeeCard';
import useFetch from '../hooks/useFetch';
import classes from './EmployeeList.module.css';

const API_ENDPOINT = process.env.REACT_APP_1337_API_ENDPOINT;

const EmployeeList = () => {
    const {data, load, error} = useFetch(`${API_ENDPOINT}`)

    // Spinner placeholder
    if(load) {
        return <p>Loading...</p>
    }

    // Error message
    if(error) {
        return <p>Error Fetching data...</p>
    } 

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                {data && data.map((e, idx) => {
                return <EmployeeCard key={idx} name={e.name} office={e.office} image={e.imagePortraitUrl} github={e.github} twitter={e.twitter} linkedIn={e.linkedIn} />
                })}
            </div>
        </React.Fragment>
    )
}

export default EmployeeList