import React from 'react'
import '../App.css';
import EDIT from './EDIT';
import {ListGroup} from 'react-bootstrap';
import DELETE from './DELETE';



const List = ({ todos }) => {

    return (
       <div >
            <ListGroup as="ul"  >
                <ListGroup.Item  as="li" active className='list'> To Do List</ListGroup.Item>
                {todos.map((el, index) =>
                <ListGroup.Item as="li" className='list' > 
                        {el.text}
                        <div className='buttons'>
                        <EDIT el={el} />
                        <DELETE el={el}/>
                        </div>
                        </ListGroup.Item>
                        )}

            </ListGroup>

            </div>

    )
}

export default List
