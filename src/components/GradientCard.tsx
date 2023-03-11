import React, { useState } from 'react'
import styled from 'styled-components'

type PropTypes = {
    info: {
        toColor: string,
        CopyCss: string,
        fromColor: string
    }
}

const GradientCard = ({ info }: PropTypes) => {
    const [status, setSatus] = useState<boolean>(false)

    const copyHandler = async (text: string, event: React.MouseEvent<HTMLElement>,) => {
        try {
            console.log(event.target)
            await navigator.clipboard.writeText(text);
            setSatus(!status)
        } catch {
            alert('실패')
        }
    }

    return (
        <>
            <Wrap>
                <Containter>
                    <Top>
                        <span>{info.toColor}</span>
                    </Top>
                    <Middle colorinfo={info.CopyCss}></Middle>
                    <Bottom>
                        <span>{`${info.toColor} → ${info.fromColor}`}</span>
                        <span onClick={(event) => copyHandler(info.CopyCss, event)}>Copy css</span>
                    </Bottom>
                </Containter>
                <Alert status={status}>
                    <span>성공~!</span>
                    <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => { setSatus(!status) }}>확인</button>
                </Alert>
            </Wrap>
        </>
    )
}

const Alert = styled.div<{ status: boolean }>`
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.3s all;
    background-color: rgba(255,255,255,0.7);
    transform: translateY(${(props) => (props.status ? "-100%" : "0%")});
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
        padding: 5px 10px;
        font-size: 0.8rem;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
        cursor: pointer;
    }
`

const Wrap = styled.div`
    width: 23.5%;
    height: 420px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 6px 15px rgb(36 37 38 / 8%);
    position: relative;
    overflow: hidden;
    margin-bottom: 2%;
    transition: box-shadow 0.3s;
    &:hover{
        box-shadow: 0 6px 15px rgb(36 37 38 / 12%);
    }

    @media screen and (max-width:1350px){
        width: 32%;
    }

    @media screen and (max-width:900px){
        width: 49%;
    }

    @media screen and (max-width:700px){
        width: 100%;
    }
`

const Containter = styled.div`
    height: 100%;
    padding: 36px 29px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Top = styled.div`
    width: 100%;
    span:nth-child(1){
        font-weight: 100;
    }
`
const Middle = styled.div<{ colorinfo: string }>`
    width: 240px;
    height: 240px;
    border-radius: 100%;
    background: ${props => props.colorinfo};
`
const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    span{
        font-weight: 300;
    }

    span:nth-child(2){
        cursor: pointer;
    }
`
export default GradientCard