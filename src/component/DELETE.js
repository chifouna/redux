import React from 'react'
import { Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {deleteToList} from '../JS/actions/actions'

const DELETE = ({el}) => {

    const dispatch = useDispatch()


    const deleteitem =()=>{
        dispatch(deleteToList({text1:el.text}))
        console.log(el.text)
    }
    return (
        <div>
             <Button variant="danger" onClick={()=>deleteitem()}> X </Button>
              
        </div>
    )
}

export default DELETE
