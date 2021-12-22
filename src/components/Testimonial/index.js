import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import data from './data'
import {
  TestimonialContainer,
  TestimonialH2,
  TestimonialWrapper,
  TestimonialItem,
  TestimonialImage,
  TestimonialName,
  TestimonialTitle,
  TestimonialQuote,
  TestimonialQuoteIcon,
  TestimonialNavButton,
} from './TestimonialElements'

const Testimonial = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people.length])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 4000)

    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <>
      <TestimonialContainer>
        <TestimonialH2>Reviews</TestimonialH2>
        <TestimonialWrapper>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person
            let position = 'nextSlide'
            if (personIndex === index) {
              position = 'activeSlide'
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide'
            }
            return (
              <TestimonialItem key={id} position={position}>
                <TestimonialImage src={image} alt={name} />
                <TestimonialName>{name}</TestimonialName>
                <TestimonialTitle>{title}</TestimonialTitle>
                <TestimonialQuote>{quote}</TestimonialQuote>
                <TestimonialQuoteIcon />
              </TestimonialItem>
            )
          })}
          <TestimonialNavButton direction="left" onClick={() => setIndex((prevState) => prevState - 1)}>
            <FaChevronLeft />
          </TestimonialNavButton>
          <TestimonialNavButton direction="right" onClick={() => setIndex((prevState) => prevState + 1)}>
            <FaChevronRight />
          </TestimonialNavButton>
        </TestimonialWrapper>
      </TestimonialContainer>
    </>
  )
}

export default Testimonial
