import { useState, useEffect } from 'react';
import '../App.css';
import Items from './Items';
import Input from './Input';


export default function Home() {
    const [temp, setTemp] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todo"));

        if (storedTodos) {
            setTemp(storedTodos);
            const maxId = Math.max(...storedTodos.map(todo => todo.id), 0);
            setId(maxId + 1);
        }
    }, []);

    const handleClick = (val) => {
        const newValue = val;
        if (newValue.trim() !== "") {
            setTemp([...temp, { id: id, completed: "0", todo: newValue }]);
            localStorage.setItem("todo", JSON.stringify([...temp, { id: id, completed: "0", todo: newValue }]));
            setId(id + 1);
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center p-3' style={{ width: "100vw", height: "100vh", background: "#141414" }}>
            <div className="card" style={{ width: "25rem", height: "30rem" }}>
                <div className="card-body" >

                    <Input handleClick={handleClick} />

                    <div className='d-flex flex-column align-items-center scrollable-area' style={{ height: "25rem", overflowY: "scroll", overflowX: "hidden" }} >
                        <Items temp={temp} setTemp={setTemp} />
                    </div>

                </div>
            </div>
        </div >
    );
}
