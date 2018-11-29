import React, { Component } from 'react'
// import styled from styled-components library
import styled from 'styled-components'

// constanta parent of ---div navbar--- style
const Navbars = styled.div`
    height: 64px;
    width: 100%;
    background-color: none;
    border-bottom: 1px solid #dadada;
`

// constanta container of all nav-bar items
const Contained = styled.div`
    margin-left: 1%;
    margin-right: 1%;
    height: 100%;
    display : flex;
    flex-direction : row;
    justify-content : center;
`

// constanta parent of nav-bar items style
const MenuParent = styled.div`
    display: flex;
    width: 30%;
    background-color: ${props => props.bg};
    justify-content: ${props => props.center};
    align-items: center;
    height: 100%;
`

// constanta child of nav-bar items style
const MenuLink = styled.a`
    list-style-type: none;
    text-decoration: none;
    margin: 10px;
    font-family: 'Open Sans', sans-serif;;
    font-weight: 600;
    color: black;
    font-size: 14px;
`

const Image = styled.img`
height: 22px;
width: 124px;
padding: 23px 0 19px 0;
`

class Navbar extends Component {
    render() {
        return (
            <Navbars>
                <Contained>
                    <MenuParent center="flex-start">
                        <MenuLink href="#">MOBILE</MenuLink>
                        <MenuLink href="#">TV & AV</MenuLink>
                        <MenuLink href="#">APPLIANCES</MenuLink>
                        <MenuLink href="#">LAINNYA</MenuLink>
                        <MenuLink href="#">PROMO</MenuLink>
                    </MenuParent>
                    <MenuParent center="center">
                        <MenuLink href="#">
                            <Image src="https://cdn.samsung.com/etc/designs/smg/global/imgs/svg-logo.svg" />
                        </MenuLink>
                    </MenuParent>
                    <MenuParent center="flex-end">
                        <MenuLink href="#">LAYANAN</MenuLink>
                        <MenuLink href="#">BUSINESS</MenuLink>
                        <MenuLink href="#">
                            <i className="fa-search"></i>
                        </MenuLink>
                    </MenuParent>
                </Contained>
            </Navbars>
        )
    }
}

export default Navbar