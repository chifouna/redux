import {ADDITION, UPDATE, DELETE, FILTER} from '../constant/typeactions'

const initialState={
    toDoList :[
        {
            id: Math.random(),
            text: 'Action Film',
            Done: 'false',
        },


        { 
            id: Math.random(),
            text: 'Horror Film',
            Done: 'false',

        },
         
        {
            id: Math.random(),
            text: 'Crim Film',
            Done: 'true',
        },

        {
          id: Math.random(),
          text: 'Anime Film',
          Done: 'true',
      }


    ]
}

const reducerADE =(state=initialState,{payload,type,id,text, text1, text2})=>{
        switch (type) {
            case ADDITION:
              return { ...state, toDoList: [...state.toDoList, payload] };
            case UPDATE:
              return{...state, toDoList: state.toDoList.map((todo)=>  id===todo.id ? {...todo, text: text}:todo)};
            case DELETE:
              return{...state, toDoList: state.toDoList.filter((del)=>  text1!==del.text )};
            case FILTER:
              return{...state, toDoList: state.toDoList.filter((fil)=>  text2==fil.Done )};
  
        default: {return state}

    }     
    
  };


export default reducerADE