import React from 'react'

export default function Input(props) {
    const { handleClick } = props;
    const [data, setData] = React.useState("");

    const handle = (e) => {
        e.preventDefault();
        handleClick(data);
        setData("");
    }

    return (
        <div id='inputd' className='mb-2'>
            <form action="#" id='form'>
                <input className='ps-2' type="text" id='input'
                    value={data} onChange={(e) => setData(e.target.value)}
                    placeholder='Enter todo' />
                <button type='submit' id='submit' className='text-light' onClick={handle} ><i className="fa-solid fa-plus"></i></button>
            </form>
        </div>
    )
}
