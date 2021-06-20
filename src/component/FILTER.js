import React from 'react'
import {DropdownButton, Dropdown, Button} from 'react-bootstrap'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {filterToList} from '../JS/actions/actions'
const FILTER = () => {
    const dispatch = useDispatch();
    const [value,setValue]=useState('');


    const handleSelect=(e)=>{
      setValue(e)
    }

    const filter=()=>{
       
        dispatch(filterToList({text2: value}))
    }
 

   


    return (
        <div >
            
    <DropdownButton alignRight title="Done or UnDone" id="dropdown-menu-align-right" onSelect={handleSelect}>
 
              <Dropdown.Item eventKey='true'>Done</Dropdown.Item>
              <Dropdown.Item eventKey='false'>UnDone</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link">Film Filter</Dropdown.Item>
      </DropdownButton>
      <Button onClick={filter} className='filter'>Filter</Button>

     
    </div>

       
    )
}

export default FILTER
