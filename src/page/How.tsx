import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";

const How = () => {
    
    useEffect(() => {
        AOS.init({
            duration : 1500
        });
    }, []);

  return (
    <Wrap>
        <Section>
            <StepBox align='left' data-aos="fade-up">
                <p >
                    원하는 색상을 두가지 선택합니다.
                    그다음 제네레이트 버튼을 클릭합니다.
                </p>
                <img src={`${process.env.PUBLIC_URL}/step1.png`} alt="" />
            </StepBox>

            <StepBox align='right' data-aos="fade-up">
                <img src={`${process.env.PUBLIC_URL}/step2.png`} alt="" />
                <p >
                    원하는 그라디언트 방향을 선택하면
                    그에 맞는 CSS를 생성해 줍니다.
                </p>
            </StepBox>

            <StepBox align='left' data-aos="fade-up">
                <p >
                    CSS 복사 버튼을 클릭하여
                    멋진 그라이언트를 사용해보세요.
                </p>
                <img src={`${process.env.PUBLIC_URL}/step3.png`} alt="" />
            </StepBox>
        </Section>
    </Wrap>
  )
}

const Wrap = styled.section`
    width: 100%;
    background-color: #fff;
    padding: 81px 0px 81px 0px;
`

const Section = styled.section`
    max-width: 1340px;
    margin: 80px auto;
    padding: 0px 16px;
`

const StepBox = styled.div<{align: string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80vh;
    p{
        width: 40%;
        font-size: 36px;
        font-weight: 700;
        color: #333;
        word-break: keep-all;
        line-height: 52px;
        text-align: ${props => props.align};
    }
    img{
        display: block;
        width: 50%;
    }

    @media screen and (max-width: 900px) {
        flex-direction: ${props => props.align === 'left' ? 'column' : 'column-reverse'};
        min-height: auto;
        margin-bottom: 120px;
        p{
            width: 100%;
            font-size: 24px;
            line-height: 36px;
        }
        img{
            width: 100%;
            margin-top: 20px;
        }
    }
`

export default How