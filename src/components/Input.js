import React from 'react'

export default function Input(props) {
    const { handleClick } = props;

    const handle = (e) => {
        e.preventDefault();
        let input = document.getElementById("input");
        const newValue = input.value;
        handleClick(newValue);
        input = "";
    }

    return (
        <div id='inputd' className='mb-2'>
            <form action="#" id='form'>
                <input style={{ width: "85%", height: "100%" }} className='ps-2' type="text" id='input' name='input' placeholder='Enter todo' />

                <button type='submit' id='submit' className='text-light' onClick={handle} ><i className="fa-solid fa-plus"></i></button>
            </form>
        </div>
    )
}
