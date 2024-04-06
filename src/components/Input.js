import React from 'react'

export default function Input(props) {
    const { handleClick } = props;
    const [data, setData] = React.useState("");

    // To add new todo
    const handle = (e) => {
        e.preventDefault();
        handleClick(data);
        setData("");
    }

    return (
        <div id='inputd' className='mb-3 d-flex  w-100'>
            <form action="#" id='form' className='d-flex align-items-center m-0 p-0 w-100 h-100'>
                <input className='ps-2 border-end-0 h-100' type="text" id='input'
                    value={data} onChange={(e) => setData(e.target.value)}
                    placeholder='Enter todo' />
                <button type='submit' id='submit' className='text-light h-100 mt-0 border-0' onClick={handle} ><i className="fa-solid fa-plus"></i></button>
            </form>
        </div>
    )
}
