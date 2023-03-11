import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrap>Loading</Wrap>
  )
}

const Wrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
`
export default Loading