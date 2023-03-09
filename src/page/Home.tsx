import React from 'react'
import styled from 'styled-components'


// components
import GradientCard from '../components/GradientCard'

const Home = () => {
    const data = [{
        toColor: "#fdfdfd",
        fromColor: "#322333",
        CopyCss: "linear-gradient(to right, red, blue)"
    },{
        toColor: "#fdfdfd",
        fromColor: "#322333",
        CopyCss: "linear-gradient(to right, red, blue)"
    },{
        toColor: "#fdfdfd",
        fromColor: "#322333",
        CopyCss: "linear-gradient(to right, red, blue)"
    },{
        toColor: "#fdfdfd",
        fromColor: "#322333",
        CopyCss: "linear-gradient(to right, red, blue)"
    }]

    return (
        <Wrapper>
            <Wrap>
                <TextBox>
                    블랜디드
                    필요한 멋진 스타일을<br />
                    찾아보세요
                </TextBox>
            </Wrap>
            <Section>
                <div>
                    {
                        data.map((item) => {
                            return(
                                <GradientCard info={item}/>
                            )
                        })
                    }
                </div>
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background: url('main.webp') center;
    background-size: cover;
    min-height: 100vh;
    background-attachment: fixed;
`

const Wrap = styled.section`
    width: 100%;
    min-height: 100vh;
    padding-top: 80px;
    box-sizing : content-box;
    display: flex;
    align-items: center;
`

const TextBox = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    padding: 0px 16px;
`

const Section = styled.section`
    width: 100%;
    background-color: ${prop => prop.theme.bgColor};

    >div{
        max-width: 1380px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        padding: 60px 16px;
    }
`


export default Home