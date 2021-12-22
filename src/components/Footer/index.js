import React from 'react'
import { animateScroll as Scroll } from 'react-scroll'

import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'

const Footer = () => {

      const toggleHome = () => {
        Scroll.scrollToTop()
      }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Investors</FooterLink>
              <FooterLink to='/signin'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/signin'>Submit Video</FooterLink>
              <FooterLink to='/signin'>Ambassadors</FooterLink>
              <FooterLink to='/signin'>Agency</FooterLink>
              <FooterLink to='/signin'>Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/signin'>Contact</FooterLink>
              <FooterLink to='/signin'>Support</FooterLink>
              <FooterLink to='/signin'>Destinations</FooterLink>
              <FooterLink to='/signin'>Sponsorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/signin'>Instagram</FooterLink>
              <FooterLink to='/signin'>Facebook</FooterLink>
              <FooterLink to='/signin'>Youtube</FooterLink>
              <FooterLink to='/signin'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>kobo savings</SocialLogo>
            <WebsiteRights>
              kobo &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
