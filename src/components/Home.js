import { useState, useEffect } from 'react';
import '../App.css';
import Items from './Items';
import Input from './Input';


export default function Home() {
    const [todo, setTodo] = useState([]);
    const [id, setId] = useState(1);

    // To fecth previously stored todo
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todo"));
        if (storedTodos && storedTodos.length > 0) {
            setTodo(storedTodos);
            const maxId = Math.max(...storedTodos.map(todo => todo.id), 0);
            setId(maxId + 1);
        }
    }, []);

    // To update the data in localstorage 
    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo));
    }, [todo])

    // To add new todo
    const handleClick = (val) => {
        if (val.trim() !== "") {
            setTodo([...todo, { id: id, completed: false, todo: val }]);
            setId(oldid => oldid + 1);
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center p-3' style={{ width: "100vw", height: "100vh", background: "#141414" }}>
            <div className="card" id='card' style={{ width: "38rem", height: "35rem" }}>
                <div className="card-body" >

                    <Input handleClick={handleClick} />

                    <div className='d-flex flex-column align-items-center scrollable-area' style={{ height: "25rem", overflowY: "scroll", overflowX: "hidden" }} >
                        <Items todo={todo} setTodo={setTodo} />
                    </div>

                </div>
            </div>
        </div >
    );
}
