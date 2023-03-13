import React from 'react'
import styled from 'styled-components'

const How = () => {
  return (
    <Wrap>
        <Section>
            <TextBox>
                <p>
                    원하는 색상을 두가지 선택합니다.
                </p>
            </TextBox>
        </Section>
    </Wrap>
  )
}

const Wrap = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    padding: 81px 16px 0px 16px;
`

const Section = styled.section`
    width: 100%;

`

const TextBox = styled.div`
    p{
        font-size: 36px;
        font-weight: 700;
        color: #000000;
    }
`

export default How