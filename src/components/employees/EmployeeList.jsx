import React, { useEffect, useState } from 'react';
import EmployeeCard from './EmployeeCard';
import useFetch from '../hooks/useFetch';
import classes from './EmployeeList.module.css';

const API_ENDPOINT = process.env.REACT_APP_1337_API_ENDPOINT;

const EmployeeList = (props) => {
    const {data, load, error} = useFetch(`${API_ENDPOINT}`);
    const [employees, setEmployees] = useState([]);
    const [employeesSorted, setEmployeesSorted] = useState([]);

    useEffect(() => {
        if(!data) return;
        setEmployees(data)
    }, [data]);

    useEffect(() => {
        if(!employees || !props.onSort) return;
        let newEmployees = [...employees];
        if(props.onSort === 'name') {
            newEmployees.sort((a,b) => a[props.onSort] > b[props.onSort] ? 1 : -1);
        }
        if(props.onSort === 'office') {
             newEmployees.sort((a,b) => a[props.onSort] > b[props.onSort] ? 1 : -1);
        }
        setEmployeesSorted(newEmployees);
    }, [props.onSort, employees]);

    // Spinner placeholder
    if(load) {
        return <p>Loading...</p>
    }

    // Error message placeholder
    if(error) {
        return <p>Error Fetching data...</p>
    } 

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                {/* Scaled down the fetched array to simulate pagination */}
                {employeesSorted && employeesSorted.filter(
                    f => f.name.includes(props.onInput) || f.office?.includes(props.onInput)|| props.onInput === ''
                ).map((e, idx) => {
                return <EmployeeCard key={idx} name={e.name} office={e.office} image={e.imagePortraitUrl} github={e.gitHub} twitter={e.twitter} linkedIn={e.linkedIn} />
                })}
            </div>
        </React.Fragment>
    )
}

export default EmployeeList