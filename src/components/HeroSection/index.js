import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Saving Habits Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive ₦1500 free initial deposit
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            primary='true'
            dark='true'
          >
            Get Started {hover ? <ArrowRight /> : <ArrowForward /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
