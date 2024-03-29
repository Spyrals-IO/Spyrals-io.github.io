import React from 'react'
import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'
import ButtonLink from '../../ui/atoms/ButtonLink'

export default () =>
  <section className="flex flex-col items-center md:pt-24 md:pl-8 lg:pl-20 mb-40 md:mt-40 text-white overflow-x-clip" id="contact">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-semibold md:ml-0 lg:ml-80 max-md:mx-5">{config.contact.title}</h1>
    <div className="flex flex-col md:flex-row justify-between">
      <ContactLeft />
      <ContactRight />
    </div>
  </section>

const ContactLeft = () =>
  <div className="md:flex flex-row items-center hidden">
    <BordedPicture 
      borderGradient={{from: 'purple-dark', to: 'miamiPink'}}
      positioning='-rotate-[11deg] mt-12 z-10' 
      sizes='h-[16rem] w-[13rem] md:min-h-[16rem] md:min-w-[13rem] lg:min-h-[30rem] lg:min-w-[24rem]'
      src={config.contact.img1} 
      alt={config.contact.img1_alt}
      fetchPriority="low" 
    />
    <BordedPicture 
      positioning='rotate-6 z-20' 
      className='border-yellow'
      sizes='h-[11rem] w-[9.5rem] lg:h-[20rem] lg:w-[17rem]' 
      src={config.contact.img2} 
      alt={config.contact.img2_alt}
      fetchPriority="low" 
    />
  </div>

const ContactRight = () =>
  <div className="flex flex-col mt-12 md:mr-8 lg:mr-44 md:ml-10 lg:ml-20 md:pl-24 lg:pl-96 mx-5 max-md:items-center">
    <p>{config.contact.text}</p>
    <Mail />
    <Phone />    
    <ButtonLink className="z-10" href={config.contact.button_link} label={config.contact.button_label} />
  </div>

const Mail = () =>
  <a href={`mailTo:${config.mail}`} className="flex flex-row mt-8 ml-8">
    <img className="h-7 mr-2" src={config.svg_path + config.contact.mail_icon} fetchpriority='low'/>
    <p className="font-bold">{config.mail}</p>
  </a>

const Phone = () =>
  <a href={`tel:${config.telephone}`} className="flex flex-row bg-purple-spyrals rounded-xl p-8 md:py-9 md:px-8 lg:px-10 mt-20 ml-6 items-center justify-center w-fit rotate-[7deg] reflect">
    <img className="h-7 mr-2" src={config.svg_path + config.contact.phone_icon}  fetchpriority='low'/>
    <p className="font-bold text-lg md:text-2xl">{config.telephone}</p>
  </a>
  
