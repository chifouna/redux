import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import '../App.css'
const ADD = (props) => {
   
    return (
        <div>
            <InputGroup size="sm" className='list'>
                <InputGroup.Text id="inputGroup-sizing-sm"> New Film</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={props.value} type='text' onChange={(e) => props.setValue(e.target.value)} />
                <Button variant="info" onClick={() => props.add()}>ADD</Button>
            </InputGroup>
        </div>
    )
}

export default ADD
