import React, { useState } from 'react'
import EmployeeList from '../employees/EmployeeList';
import EmployeeMenu from '../employees/EmployeeMenu';
import Card from '../UI/Card';

function Employees() {
  const [sortValue, setSortValue] = useState('name');
  const [inputValue, setInputValue] = useState('');

  return (
    <Card>
        <EmployeeMenu onSetSort={setSortValue} onSetInput={setInputValue} onInput={inputValue} />
        <EmployeeList onSort={sortValue} onInput={inputValue}/>
    </Card>
  )
}

export default Employees