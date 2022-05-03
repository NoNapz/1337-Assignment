import React, { useState } from 'react'
import EmployeeList from '../employees/EmployeeList';
import EmployeeMenu from '../employees/EmployeeMenu';
import Card from '../UI/Card';

function Employees() {
  const [sortValue, setSortValue] = useState('name');
  const [inputValue, setInputValue] = useState('');

  return (
    <Card>
        <EmployeeMenu setSort={setSortValue} setInput={setInputValue} textInput={inputValue} />
        <EmployeeList sortValue={sortValue} textInput={inputValue}/>
    </Card>
  )
}

export default Employees