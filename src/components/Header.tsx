import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

type PropsTypes = {
    ref: React.RefObject<HTMLHeadElement>
}

const Header = () => {

    
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const [status, setStatus] = useState<boolean>(false);
    const handleFollow = () => {
      setScrollY(window.scrollY); // window 스크롤 값을 ScrollY에 저장
    }

    useEffect(()=>{
        if(ScrollY > 1){
            setStatus(true)
        } else {
            setStatus(false)
        }
    }, [ScrollY])
  
    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow);
      }
      watch(); // addEventListener 함수를 실행
      return () => {
        window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
      }
    }, [ScrollY])

    return (
        <Wrap status={status}>
            <Nav>
                <h1><Link to="/"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" /></Link></h1>
                <ul>
                    <li><Link to="/">GRADIENT</Link></li>
                    <li><Link to="/howto">HOW TO USE</Link></li>
                </ul>
            </Nav>
        </Wrap>
    )
}

const Wrap = styled.header<{ status : boolean}>`
    width: 100%;
    height: 81px;
    position: fixed;
    z-index: 98;
    background-color: ${props => props.status ? "#fff" : "transparant"};
`

const Nav = styled.nav`
    max-width: 1340px;
    margin: 0 auto;
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        width: 100px;
        img{
            width: 100%;
            display: block;
        }
    }
    ul{
        display: flex;
        gap: 15px;
        justify-content: flex-end;
        li{
            line-height: 80px;

            a{
                display: block;
                font-family: ${prop => prop.theme.engFont};
                font-size: 0.625rem;
                font-weight: 600;
                position: relative;
                transition: 0.3s all;

                &:after{
                    content: "";
                    position: absolute;
                    width: 0px;
                    height: 2px;
                    bottom: 0px;
                    right: 50%;
                    transition: 0.3s;
                    background-color: #000;
                }
                &:hover:after{
                    width: 50%;
                }

                &::before{
                    content: "";
                    position: absolute;
                    width: 0px;
                    height: 2px;
                    bottom: 0px;
                    left: 50%;
                    transition: 0.3s;
                    background-color: #000;
                }
                &:hover::before{
                    width: 50%;
                }
            }
        }
    }
`

export default Header