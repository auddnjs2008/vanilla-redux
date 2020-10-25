import {createStore} from "redux";
import {configureStore, createAction, createReducer, createSlice} from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";








const toDos = createSlice({
    name:"toDosReducer",
    initialState:[],
    reducers:{
        add:(state,action) =>{
            state.push({text:action.payload,id:Date.now()})    
        },    
        remove:(state,action) => 
            state.filter(toDo => toDo.id !== action.payload)
    }
})
// createSlice는 reducer 뿐만 아니라 actions도 생성해준다.



// const addToDo=createAction("ADD");
// const deleteToDo = createAction("DELETE");


// const reducer = createReducer([],{
//     [addToDo]: (state,action) =>{
//         state.push({text:action.payload,id:Date.now()})    
//     },
//     [deleteToDo]:(state,action) => 
//         state.filter(toDo => toDo.id !== action.payload)
// })

// 위에서보면 addToDo는 리턴을 해주지 않았고 
// deleteToDo는 리턴을 해주었다.
// 이유는 createReducer()에서 작업할때  두가지 선택지있다.
//1. 새로운 state를 리턴해줄 수 있고
//2 state를 mutate를 할 수 있다.
// addToDo에서는 state를 mutate해주는데  툴킷이  
// [{},...state] 와 같은 작업을 해준다. 
// 그리고 리턴할때는 꼭 새로운 state여야 한다.



// const reducer =(state=[],action) =>{
//     switch(action.type){
//         case addToDo.type:
//             console.log(action);
//             return [{text:action.payload, id:Date.now()},...state];
    
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload)
//         default:
//             return state;
//    }
// }

//createREducer를 사용하면  state를 mutate해도 상관
// 없다.





//const store = createStore(reducer);
//const store = configureStore({reducer: toDos.reducer});
// 이 함수를 쓰고 저장하면 
// 구글 크롬에 redux develop tools 가 활성화된다.
// 물론  redux develop tool을 사용하려고  redux toolkit
//을 꼭 사용하진 않아도 된다.  
//다만 사용하면 자동실행? 된다?




// 변화가 일어나면 다시 rerender해주고 싶다.
// 변화가 일어난 부분과 함께

//store.subscribe(); // 이제 react redux가 필요하다.


export const{
    add,
    remove
}=toDos.actions;

export default configureStore({reducer: toDos.reducer});