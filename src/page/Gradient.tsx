import { type } from 'os'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'


//components
import Addbtn from '../components/Addbtn'
import Loading from '../components/Loading'

const Gradient = () => {
  const [colorLeft, setColorLeft] = useState<string>("#000000");
  const [colorRight, setColorRight] = useState<string>("#000000");
  const [css, setCss] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onChnageLeft = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorLeft(event.currentTarget.value)
  }

  const onChnageRight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorRight(event.currentTarget.value)
  }

  const onClickHandler = useCallback(() => {
    setStatus(!status)
    setCss(`to right,${colorRight}, ${colorLeft}`)
  }, [colorRight, colorLeft, status])

  const tryAgainHandler = useCallback(() => {
    setStatus(false)
    setLoading(false)
  }, [])

  
  
  return (
    <>
      {loading ? <Loading/> : "null"}
      
      <Wrap>
        <ColorPick type={'color'} value={colorLeft} onChange={onChnageLeft} />
        <ColorPick type={'color'} onChange={onChnageRight} />
      </Wrap>
      {status ? <TryButton onClick={tryAgainHandler}>tryAgain</TryButton> : <Submit onClick={onClickHandler}>submit</Submit>}
      <Section info={css}></Section>
    </>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

const ColorPick = styled.input`
  width: 50%;
  height: 100vh;
  border: none;
  outline: 0;
  display: block;
`

const Submit = styled.button`
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

const Section = styled.section<{info: string}>`
  width: 100%;
  height: 100vh;
  background: linear-gradient(${props => props.info});
`

const TryButton = styled(Submit)`
  
`

export default Gradient   