import React from 'react'
import { Button, Modal, FormControl } from 'react-bootstrap'
import { useState } from 'react'
import { updateToList } from '../JS/actions/actions'
import '../App.css'
import {useDispatch } from 'react-redux'



const EDIT = ({el}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [changeText, setchangeText] = useState(el.text)


    const dispatch = useDispatch()


    const update=(e)=>{
        e.preventDefault()
        dispatch(updateToList({id: el.id, text: changeText}))
    }

    return (
        <div>
            <Button variant="primary" className='Edit' onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You can Modify your Film</Modal.Title>
                </Modal.Header>
                <Modal.Body>Just type a new one !</Modal.Body>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={changeText} type='text' onChange={(e)=>setchangeText(e.target.value)}  />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
        </Button>
                    <Button variant="primary" onClick={update} >
                        Save Changes
        </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EDIT
