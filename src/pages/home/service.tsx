import React from 'react'
import config from '../../utils/config'
import ButtonLink from '../../ui/atoms/ButtonLink'
import ServiceValue from './service-value'

export default () =>
  <section className="flex flex-col-reverse md:flex-row md:mx-8 lg:mx-48 max-md:items-center justify-between pt-24" id={config.menu.link_1}>
    <ServiceLeft />
    <ServiceRight />
  </section>

const ServiceLeft = () =>
  <div className="flex flex-col items-center justify-center w-full md:w-1/2 md:mr-12 md:max-w-md overflow-hidden">
    <ServiceValue className='bg-purple-spyrals self-start rotate-2 md:rotate-0 -ml-4 md:ml-0 rounded-r-xl' id='offerBloc1' text={config.offer.card1_text} title={config.offer.card1_title} />
    <ServiceValue className='bg-purple-dark self-end -rotate-2 md:rotate-0 -mr-4 md:mr-0 rounded-l-xl' id='offerBloc2' text={config.offer.card2_text} title={config.offer.card2_title} />
    <ServiceValue className='bg-purple-darkest self-start rotate-6 md:rotate-0 -mr-4 md:mr-0 rounded-r-xl' id='offerBloc3' text={config.offer.card3_text} title={config.offer.card3_title} />
  </div>

const ServiceRight = () =>
  <div className="flex flex-col items-center justify-around md:w-1/2 md:ml-0 lg:ml-12 mb-12 w-full" id="offerContent">
    <h1 className="text-4xl max-md:text-center md:text-5xl lg:text-6xl md:self-start font-title font-semibold max-md:mx-5" id="offerTitle">{config.offer.title}</h1>
    <p className="bg-clip-text mx-5 max-md:my-5 md:mx-10 self-center text-justify" id="offerTextNew" >{config.offer.text}</p>
    <ButtonLink className="md:self-end lg:mr-24" href={config.offer.button_link} label={config.offer.button_label} />
  </div>
