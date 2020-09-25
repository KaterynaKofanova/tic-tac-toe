import React from 'react'

const Square = ({value, onClick}) => {
let style = value? value : 'empty'
    return(
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square