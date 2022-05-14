import React, { useEffect, useState, useMemo } from 'react';
import EmployeeCard from './EmployeeCard';
import useFetch from '../hooks/useFetch';
import classes from './EmployeeList.module.css';
import ReactPaginate from 'react-paginate';

const API_ENDPOINT = process.env.REACT_APP_1337_API_ENDPOINT;

const EmployeeList = ({ ...props }) => {
    const {data, load, error} = useFetch(`${API_ENDPOINT}`);
    const [employees, setEmployees] = useState([]);
    const [employeesSorted, setEmployeesSorted] = useState([]);

    const employeesPerPage = 12;
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * employeesPerPage;

    useEffect(() => {
        if(!data) return;
        setEmployees(data)
    }, [data]);

    useEffect(() => {
        if(!employees || !props.sortValue) return;
        let newEmployees = [...employees];
        if(props.sortValue === 'name') {
            newEmployees.sort((a,b) => a[props.sortValue] > b[props.sortValue] ? 1 : -1);
        }
        if(props.sortValue === 'office') {
             newEmployees.sort((a,b) => a[props.sortValue] > b[props.sortValue] ? 1 : -1);
        }
        setEmployeesSorted(newEmployees);
    }, [props.sortValue, employees]);


    const filterEmployees = useMemo(() => {
        if(employeesSorted !== null) {
            setPageNumber(0)
            return employeesSorted.filter(
                f => f.name?.includes(props.textInput) || f.office?.includes(props.textInput)|| props.textInput === ''
            )
        }
        return []
    }, [employeesSorted, props.textInput])

    let pageCount = Math.ceil(filterEmployees.length / employeesPerPage);

    const changePageHandler = ({selected}) => {
        setPageNumber(selected);
    }

    //Placeholders for spinner and error message handling.
    if(load) return <p>Loading...</p>
    if(error) return <p>Error Fetching data...</p>

    return (
        <section>
            <div className={classes.wrapper}>
                {/* filter if input has value, then slice the array for pagination display */}
                {employeesSorted && filterEmployees.slice(pagesVisited, pagesVisited + employeesPerPage).map((e) => {
                return <EmployeeCard key={e.email} employee={e} />
                })}
            </div>
            <div className={classes.footer}>
                <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePageHandler}
                    containerClassName={classes.pagination}
                    activeClassName={classes.paginationA}
                    pageRangeDisplayed={0}
                    marginPagesDisplayed={2}
                />
            </div>
        </section>
    )
}

export default EmployeeList