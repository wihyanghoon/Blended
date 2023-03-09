import { type } from 'os'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


//components
import Addbtn from '../components/Addbtn'

const Gradient = () => {
  const [colorLeft, setColorLeft] = useState<string>("")

  useEffect(()=>{
    console.log(colorLeft)
  }, [colorLeft])

  const onChnageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorLeft(event.currentTarget.value)
  }
  return (
    <>
      <Wrap>
        <ColorPick type={'color'} value={colorLeft} onChange={onChnageHandler}/>
        <ColorPick type={'color'}/>
      </Wrap>
      <Addbtn></Addbtn>
    </>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

const Box = styled.div`
  width: 50%;
  height: 100%;
`

const LeftG = styled(Box)`
  background-color: red;
`

const RightG = styled(Box)`
  background-color: blue;
`

const ColorPick = styled.input`
  width: 50%;
  height: 100vh;
  border: none;
  outline: 0;
  display: block;
`

export default Gradient