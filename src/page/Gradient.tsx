import { type } from 'os'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const Gradient = () => {
  const [colorLeft, setColorLeft] = useState<string>("#32B3A4");
  const [colorRight, setColorRight] = useState<string>("#A8EB12");
  const [css, setCss] = useState<string>(" to right, #32B3A4, #A8EB12 ");
  const [textColor1, setTextColor1] = useState<boolean>(true)
  const [textColor2, setTextColor2] = useState<boolean>(true)
  const [status, setStatus] = useState<boolean>(false);


  const onChnageLeft = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorLeft(event.currentTarget.value)

    getTextColor1(colorLeft)
  }

  const onChnageRight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorRight(event.currentTarget.value)

    getTextColor2(colorRight)
  }

  const onClickHandler = useCallback(() => {
    setCss(` to right, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()} `)

    if (status) {
      setStatus(!status)
    }

    if (colorLeft === "#ffffff" && colorRight === "#ffffff") {
      setStatus(true)
    }
  }, [colorRight, colorLeft])

  const refreshHandler = useCallback(() => {
    setColorLeft("#32B3A4")
    setColorRight("#A8EB12")
    setCss(' to right, #32B3A4, #A8EB12 ')
    setStatus(false)
    setTextColor1(true)
    setTextColor2(true)
  }, [colorLeft, colorRight, css, status, textColor1, textColor2])


  const copyHandler = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(`background: linear-gradient(${text})`);
      alert('복사 되었습니다.');
    } catch (error) {
      alert('다시 시도해주세요.');
    }
  }, [css])

  const getTextColor1 = (hexColor: string) => {
    const c = hexColor.substring(1)      // 색상 앞의 # 제거
    const rgb = parseInt(c, 16)   // rrggbb를 10진수로 변환
    const r = (rgb >> 16) & 0xff  // red 추출
    const g = (rgb >> 8) & 0xff  // green 추출
    const b = (rgb >> 0) & 0xff  // blue 추출
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

    luma < 127.5 ?  setTextColor1(false) : setTextColor1(true) // 글자색이
  }

  const getTextColor2 = (hexColor: string) => {
    const c = hexColor.substring(1)      // 색상 앞의 # 제거
    const rgb = parseInt(c, 16)   // rrggbb를 10진수로 변환
    const r = (rgb >> 16) & 0xff  // red 추출
    const g = (rgb >> 8) & 0xff  // green 추출
    const b = (rgb >> 0) & 0xff  // blue 추출
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

    luma < 127.5 ?  setTextColor2(false) : setTextColor2(true) // 글자색이
  }

  return (
    <>
      <Section info={css} status={status}>
        <Title status={status}>색상을 찾아보세요.</Title>
        <h2>Choose orientation</h2>
        <ul>
          <li onClick={() => { setCss(` to left, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()} `) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 24 24" width="24" height="24"><path d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z"></path></svg>
          </li>
          <li onClick={() => { setCss(` to right, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()} `) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 24 24" width="24" height="24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
          </li>
          <li onClick={() => { setCss(` to top, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()} `) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 24 24" width="24" height="24"><path d="M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z"></path></svg>
          </li>
          <li onClick={() => { setCss(` to bottom, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()} `) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 24 24" width="24" height="24"><path d="M4.97 13.22a.75.75 0 0 1 1.06 0L11 18.19V3.75a.75.75 0 0 1 1.5 0v14.44l4.97-4.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06Z"></path></svg>
          </li>
          <li onClick={() => { setCss(` -45deg, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()} `) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 24 24" width="24" height="24"><path d="M5.75 15.5a.75.75 0 0 1-.75-.75v-9A.75.75 0 0 1 5.75 5h9a.75.75 0 0 1 0 1.5H7.56l10.22 10.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L6.5 7.56v7.19a.75.75 0 0 1-.75.75Z"></path></svg>
          </li>
          <li onClick={() => { setCss(` 45deg, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()} `) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 24 24" width="24" height="24"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path></svg>
          </li>
          <li onClick={() => { setCss(` -135deg, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()} `) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 24 24" width="24" height="24"><path d="M5.75 8.5a.75.75 0 0 1 .75.75v7.19L16.72 6.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L7.56 17.5h7.19a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z"></path></svg>
          </li>
          <li onClick={() => { setCss(` 135deg, ${colorLeft.toUpperCase()}, ${colorRight.toUpperCase()} `) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 24 24" width="24" height="24"><path d="M18.25 8.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1 0-1.5h7.19L6.22 7.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L17.5 16.44V9.25a.75.75 0 0 1 .75-.75Z"></path></svg>
          </li>
        </ul>

        <h2>Enter colors</h2>
        <Container>
          <InputContainer color={colorLeft} status={status} text={textColor1}>
            <div>
              <span>{colorLeft.toUpperCase()}</span>
              <input type="color" value={colorLeft} onChange={onChnageLeft} />
            </div>
          </InputContainer>
          <InputContainer color={colorRight} status={status} text={textColor2}>
            <div>
              <span>{colorRight.toUpperCase()}</span>
              <input type="color" value={colorRight} onChange={onChnageRight} />
            </div>
          </InputContainer>
        </Container>
        <Submit onClick={onClickHandler}>GENERATE</Submit>
        <Svg onClick={refreshHandler} xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 24 24" width="24" height="24"><path d="M2.5 10.5a8 8 0 1 1 16 0 .75.75 0 0 0 1.5 0 9.5 9.5 0 1 0-9.5 9.5h10.94l-2.72 2.72a.75.75 0 1 0 1.06 1.06l3.735-3.735c.44-.439.44-1.151 0-1.59L19.78 14.72a.75.75 0 0 0-1.06 1.06l2.72 2.72H10.5a8 8 0 0 1-8-8Z"></path></Svg>
        <CssArea>
          <Top status={status}>
            <span>CSS CODE:</span>
            <span onClick={() => { copyHandler(css) }}><svg xmlns="http://www.w3.org/2000/svg" fill={status ? "black" : "white"} viewBox="0 0 16 16" width="16" height="16"><path d="M2.5 1.75v11.5c0 .138.112.25.25.25h3.17a.75.75 0 0 1 0 1.5H2.75A1.75 1.75 0 0 1 1 13.25V1.75C1 .784 1.784 0 2.75 0h8.5C12.216 0 13 .784 13 1.75v7.736a.75.75 0 0 1-1.5 0V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13.274 9.537v-.001l-4.557 4.45a.75.75 0 0 1-1.055-.008l-1.943-1.95a.75.75 0 0 1 1.062-1.058l1.419 1.425 4.026-3.932a.75.75 0 1 1 1.048 1.074ZM4.75 4h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM4 7.75A.75.75 0 0 1 4.75 7h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 4 7.75Z"></path></svg></span>
          </Top>
          <Area status={status}>
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
  h2{
    font-size: 1.2rem;
    font-family: ${prop => prop.theme.engFont};
    color: ${props => props.status ? "#000" : "#fff"};
    margin-bottom: 20px;
  }
  ul{
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 350px) {
      gap: 5px;
    }

    li {
      cursor: pointer;
    }
  }
`

const Title = styled.h1<{ status: boolean }>`
  font-size: 42px;
  margin-bottom: 40px;
  color: ${props => props.status ? "#000" : "#fff"};
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 500px){
    flex-direction: column;
  }
`

const Svg = styled.svg`
  margin-top: 40px;
  cursor: pointer;
`

const InputContainer = styled.div<{ color: string, status: boolean, text: boolean }>`
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
      color: ${props => props.text ? "#000" : "#fff"};
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
  max-width: 550px;
  margin-top: 40px;
  padding: 0px 16px;
`

const Top = styled.div<{ status: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 1rem;
    font-weight: 900;
    color: ${props => props.status ? "#000" : "#fff"};
  }
  span:nth-child(2){
    cursor: pointer;
  }
`

const Area = styled.div<{ status: boolean }>`
    width: 100%;
    margin: 10px auto;
    display: block;
    line-height: 1.4;
    letter-spacing: 0.2px;
    border-left: 3px solid ${props => props.status ? "#000" : "#fff"};
    background-color: rgba(189,189,189,0.1);
    padding: 15px 8px 15px 17px;
    border-radius: 5px;
    color: ${props => props.status ? "#000" : "#fff"};
`

export default Gradient   