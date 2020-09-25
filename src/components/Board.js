import React from 'react'
import { Container } from 'react-bootstrap'
import Square from './Square'

const Board = ({squares, onClick}) => {
    return(
        <Container className='board'>
            {squares.map((square, index) => (
                <Square key={index} value={square} onClick={() => onClick(index)} />
            ))}
        </Container>
    )
}

export default Board