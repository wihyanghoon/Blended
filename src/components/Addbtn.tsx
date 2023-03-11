import React from 'react'
import styled from 'styled-components'


// 타입
type PropsTypes = {
  onClick: () => void
}

const Addbtn = ({onClick}:PropsTypes) => {
  return (
    <Wrap type='button'>
        Made Gradient
    </Wrap>
  )
}

const Wrap = styled.button`
    padding: 20px;
    font-family: ${props => props.theme.engFont};
    background-color: #007bff;
    color: #fff;
    border-radius: 16px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    border: none;
    cursor: pointer;
`

export default Addbtn