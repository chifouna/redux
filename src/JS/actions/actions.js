import {ADDITION, UPDATE, DELETE, FILTER} from '../constant/typeactions'

export const addToList=(payload)=>{

    return{
        type:ADDITION,
        payload:payload,
        
    }
}

export const updateToList=({id, text})=>{
    return{
        type:UPDATE,
        id:id,
        text:text
    }
}

export const deleteToList=({text1})=>{
    return{
        type:DELETE,
        text1:text1,
    }
}


export const filterToList=({text2})=>{
    return{
        type:FILTER,
        text2:text2,
    }
}



