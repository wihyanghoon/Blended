import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Wrap>
        <Nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/gradient">GRADIENT</Link></li>
            </ul>
        </Nav>
    </Wrap>
  )
}

const Wrap = styled.header`
    width: 100%;
    height: 81px;
    background-color: #fff;
    position: fixed;
    z-index: 98;
`

const Nav = styled.nav`
    max-width: 1340px;
    margin: 0 auto;
    padding: 0px 16px;
    border-bottom: 1px solid ${prop => prop.theme.borderColor};
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
            }
        }
    }
`

export default Header