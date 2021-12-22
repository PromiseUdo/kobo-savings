import React from 'react'
import Icon1 from '../../images/svg1.svg'
import Icon2 from '../../images/svg2.svg'
import Icon3 from '../../images/svg3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt='icon' />
          <ServicesH2>Reduces Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt='icon' />
          <ServicesH2>Crypto Invest</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt='icon' />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% back
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
