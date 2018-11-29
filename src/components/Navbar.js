import React, { Component } from 'react'
import styled from 'styled-components'


const Navbars = styled.div`
    height: 64px;
    width: 100%;
    background-color: none;
    border-bottom: 1px solid #dadada;
`

const MenuLink = styled.a`
    list-style-type: none;
    text-decoration: none;
    margin: 2px;
    font-family: 'Open Sans', sans-serif;;
    font-weight: 600;
    color: black;
    font-size: 14px;
`

const MenuParent = styled.div`
    display: flex;
    width: 30%;
    background-color: lightblue;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`

const Contained = styled.div`
    margin-left: 4%;
    margin-right: 4%;
    height: 100%;
`

class Navbar extends Component {
    render() {
        return (
            <Navbars>
                <Contained>
                    <MenuParent>
                        <MenuLink href="#">MOBILE</MenuLink>
                        <MenuLink href="#">TV & AV</MenuLink>
                        <MenuLink href="#">APPLIANCES</MenuLink>
                        <MenuLink href="#">LAINNYA</MenuLink>
                        <MenuLink href="#">PROMO</MenuLink>
                    </MenuParent>
                    <nav></nav>
                    <nav></nav>
                </Contained>
            </Navbars>
        )
    }
}

export default Navbar