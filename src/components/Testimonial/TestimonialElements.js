import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import styled from 'styled-components'

export const TestimonialContainer = styled.div`
  height: 700px;
  width: 100%;
  background: #010606;
  padding-top: 50px;
`

export const TestimonialH2 = styled.h2`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`

export const TestimonialWrapper = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;
  height: 450px;
  max-width: 1000px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
`

export const TestimonialItem = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ position }) => (position === 'activeSlide' ? 1 : 0)};
  transition: all 0.5s linear;
  transform: translateX(
    ${({ position }) =>
      position === 'activeSlide'
        ? 0
        : position === 'nextSlide'
        ? '-100%'
        : '100%'}
  );
`

export const TestimonialImage = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #016060;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`

export const TestimonialName = styled.h4`
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
`
export const TestimonialTitle = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`

export const TestimonialQuote = styled.p`
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: #fff;
`
export const TestimonialQuoteIcon = styled(FaQuoteRight)`
  font-size: 3rem;
  margin-top: 1rem;
  color: green;
`
export const TestimonialNavButton = styled.button`
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: #fff;
  color: #01bf71;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s linear;
  left: ${({ direction }) => direction === 'left' && 0};
  right: ${({ direction }) => direction === 'right' && 0};

  &:hover {
    background: green;
    color: #fff;
  }
`
