import { type } from 'os'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const Gradient = () => {
  const [colorLeft, setColorLeft] = useState<string>("#32B3A4");
  const [colorRight, setColorRight] = useState<string>("#A8EB12");
  const [css, setCss] = useState<string>("to right, #32B3A4, #A8EB12");
  const [status, setStatus] = useState<boolean>(false);

  const onChnageLeft = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorLeft(event.currentTarget.value)
  }

  const onChnageRight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorRight(event.currentTarget.value)
  }

  const onClickHandler = useCallback(() => {
    setCss(`to right, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()}`)
  }, [colorRight, colorLeft])


  const copyHandler = useCallback( async (text: string) => {
    try {
      await navigator.clipboard.writeText(`background: linear-gradient(${text})`);
      alert('복사 성공!');
    } catch (error) {
      alert('복사 실패!');
    }
  }, [css])


  return (
    <>
      <Section info={css} status={status}>
        <h1>Choose orientation</h1>
        <ul>
          <li onClick={() => { setCss(`to left, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()}`) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z"></path></svg>
          </li>
          <li onClick={() => { setCss(`to right, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()}`) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
          </li>
          <li onClick={() => { setCss(`to top, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()}`) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path d="M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z"></path></svg>
          </li>
          <li onClick={() => { setCss(`to bottom, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()}`) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path d="M4.97 13.22a.75.75 0 0 1 1.06 0L11 18.19V3.75a.75.75 0 0 1 1.5 0v14.44l4.97-4.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06Z"></path></svg>
          </li>
        </ul>

        <h1>Enter colors</h1>
        <Container>
          <InputContainer color={colorLeft}>
            <div>
              <span>{colorLeft.toUpperCase()}</span>
              <input type="color" value={colorLeft} onChange={onChnageLeft} />
            </div>
          </InputContainer>
          <InputContainer color={colorRight}>
            <div>
              <span>{colorRight.toUpperCase()}</span>
              <input type="color" value={colorRight} onChange={onChnageRight} />
            </div>
          </InputContainer>
        </Container>
        <Submit onClick={onClickHandler}>GENERATE</Submit>

        <CssArea>
          <Top>
            <span>CSS CODE:</span>
            <span onClick={() => {copyHandler(css)}}><svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 16 16" width="16" height="16"><path d="M2.5 1.75v11.5c0 .138.112.25.25.25h3.17a.75.75 0 0 1 0 1.5H2.75A1.75 1.75 0 0 1 1 13.25V1.75C1 .784 1.784 0 2.75 0h8.5C12.216 0 13 .784 13 1.75v7.736a.75.75 0 0 1-1.5 0V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13.274 9.537v-.001l-4.557 4.45a.75.75 0 0 1-1.055-.008l-1.943-1.95a.75.75 0 0 1 1.062-1.058l1.419 1.425 4.026-3.932a.75.75 0 1 1 1.048 1.074ZM4.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM4 7.75A.75.75 0 0 1 4.75 7h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 4 7.75Z"></path></svg></span>
          </Top>
          <Area>
            background: linear-gradient({css})
          </Area>
        </CssArea>

      </Section>
    </>
  )
}

const Section = styled.section<{ info: string, status: boolean }>`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(${props => props.info});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 81px;
  h1{
    font-size: 1.2rem;
    font-family: ${prop => prop.theme.engFont};
    color: #ffffff;
    margin-bottom: 20px;
  }
  ul{
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 500px){
    flex-direction: column;
  }
`

const InputContainer = styled.div<{ color: string }>`
  div {
    width: 180px;
    height: 50px;
    border-radius: 50px;
    background-color: ${props => props.color};
    box-shadow: 10px 10px 14px 1px rgb(0 0 0 / 20%);
    display: flex;
    position: relative;
    transition: all 0.3s;
    &:hover{
      box-shadow: 10px 10px 14px 1px rgb(0 0 0 / 50%);
    }
    span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${props => props.color == "#ffffff" ? "#000" : "#fff"};
    }
    input{
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }
`

const Submit = styled.button`
  width: 180px;
  height: 50px;
  background: rgb(0,0,0);
  border: none;
  z-index: 1;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  margin-top: 20px;
  color: #fff;
  box-shadow: 10px 10px 14px 1px rgb(0 0 0 / 20%);
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: -1px;
    left: 0;
    z-index: -1;
    border-radius: 50px;
    background-color: #eaf818;
    background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  &:active {
    top: 0px;
  }
`

const CssArea = styled.div`
  max-width: 450px;
  margin-top: 60px;
  
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 1rem;
    font-weight: 900;
    color: #ffffff;
  }
  span:nth-child(2){
    cursor: pointer;
  }
`

const Area = styled.div`
    width: 450px;
    margin: 10px auto;
    display: block;
    line-height: 1.4;
    letter-spacing: 0.2px;
    border-left: 3px solid #fff;
    background-color: rgba(189,189,189,0.1);
    padding: 15px 8px 15px 17px;
    border-radius: 5px;
    color: #ffffff;
`

export default Gradient   