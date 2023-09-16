import React from 'react'

export default function Items(props) {
    const { temp, setTemp } = props;

    const handleDelete = (id) => {
        const newTodo = temp.filter((temp, i) => temp.id !== id);
        setTemp(newTodo);
        localStorage.setItem("todo", JSON.stringify(newTodo));
    }

    const handleCheck = (id) => {
        let newTemp = [];
        for (let index = 0; index < temp.length; index++) {
            if (temp[index].id == id) {
                temp[index].completed = temp[index].completed === "1" ? "0" : "1";
                newTemp.push(temp[index]);
            }
            else {
                newTemp.push(temp[index]);
            }
        }
        setTemp(newTemp);
        localStorage.setItem("todo", JSON.stringify(newTemp));
    }

    return (
        <>
            {
                temp == "" ? "No todos" : temp.map((temp, index) => {

                    return <div key={temp.id} className="card m-2" style={{ width: "100%" }}>

                        <div className={`card-body d-flex justify-content-between align-items-center ${temp.completed == "1" ? "done" : ""}`}>

                            <p className={`card-text p-0 m-0 ${temp.completed == "1" ? "cross" : ""}`} style={{ width: "78%" }}>
                                {temp.todo}
                            </p>


                            {/* check button */}
                            <button className='mx-4' onClick={() => handleCheck(temp.id)} >
                                <i className={`text-success fa-solid ${temp.completed == "1" ? "fa-xmark" : "fa-check"}`}></i>
                            </button>

                            {/* delete button */}
                            <button onClick={() => handleDelete(temp.id)} >
                                <i className="fa-solid fa-trash" style={{ color: "#FF0000" }} ></i>
                            </button>

                        </div>

                    </div >
                })
            }
        </>
    )
}
