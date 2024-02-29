import React from 'react'

export default function Items(props) {
    const { todo, setTodo } = props;

    const handleDelete = (id) => {
        setTodo((prev) => prev.filter((todo) => todo.id !== id));
    }

    const handleCheck = (id) => {
        setTodo(oldTodo =>
            oldTodo.map(element =>
                element.id === id ? { ...element, completed: !element.completed } : element
            )
        )
    }

    return (
        <>
            {
                !todo.length ? <p style={{ fontSize: "17px" }}>No todos</p> : todo.map((todo) => {
                    return <div key={todo.id} className={`card d-flex flex-row justify-content-between align-items-center p-3 m-2 card-items ${todo.completed === true ? "done" : ""}`} style={{ width: "100%" }}>

                        <p className={`card-text p-0 m-0 ${todo.completed === true ? "cross" : ""}`} style={{ width: "78%" }}>
                            {todo.todo}
                        </p>

                        {/* check button */}
                        <button className='mx-4 pt-1' onClick={() => handleCheck(todo.id)} >
                            <i className={`text-success fa-solid ${todo.completed === true ? "fa-xmark" : "fa-check"}`}></i>
                        </button>

                        {/* delete button */}
                        <button onClick={() => handleDelete(todo.id)} >
                            <i className="fa-solid fa-trash" style={{ color: "#FF0000" }} ></i>
                        </button>

                    </div>
                    //         return <div key={todo.id} className="card m-2" style={{ width: "100%" }}>
                    // </div >
                })
            }
        </>
    )
}
