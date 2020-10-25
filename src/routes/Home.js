import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home({toDos, addToDo}){

    const [text,setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addToDo(text);
        setText("");
    }    


    return <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/> 
        <button>Add</button>
    </form>
    <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}</ul>
    </>
}

//밑에 함수를 mapStateToProps()라고 하는데
// 이 함수를 사용하는 건 redux store로부터 뭘 가지고
// 오고싶다는 뜻이다 .

function mapStateToProps(state,ownProps){
    
    return {toDos : state};
    //return {sexy: true};
    //위에 처럼 해주면  Home 의 prop에서
    // sexy가 추가된다.
    //밑에 connect()는 Props에 추가될 수 있도록
    //허용해준다.
}


function mapDispatchToProps(dispatch,ownProps){
    //function을 만들어서 prop에 전달하기위해
   return {
       addToDo: (text) => dispatch(add(text))
   };
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);