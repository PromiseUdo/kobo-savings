import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as Scroll } from 'react-scroll'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const handleNavScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleNavScroll)
    return () => {
      window.removeEventListener('scroll', handleNavScroll)
    }
  }, [])

  const toggleHome = () => {
    Scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            kobo savings
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='discover'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='signup'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Sign Up
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
