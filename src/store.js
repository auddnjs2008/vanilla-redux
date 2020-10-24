import {createStore} from "redux";

const ADD="ADD";
const DELETE="DELETE";


const addToDo =(text) =>{
    return{
        type:ADD,
        text
    }
};

const deleteToDo=(id) =>{
    return{
        type:DELETE,
        id:parseInt(id)
    }
}


const reducer =(state=[],action) =>{
    switch(action.type){
        case ADD:
            return [{text:action.text, id:Date.now()},...state];
    
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id)
        default:
            return state;
   }
}

const store = createStore(reducer);

// 변화가 일어나면 다시 rerender해주고 싶다.
// 변화가 일어난 부분과 함께

//store.subscribe(); // 이제 react redux가 필요하다.


export const actionCreators = {
    addToDo,
    deleteToDo,
}

export default store;