import React from 'react'
import config from '../../utils/config'
import Customer from '../../ui/atoms/Customer'


export default () =>
  <section className="relative flex flex-col items-center pt-24 pb-44 overflow-x-clip" id='clients'>
    <h1 className="text-4xl md:text-5xl lg:text-6xl pt-12 font-title font-semibold">{config.customers.title}</h1>
    <div className="flex flex-row mt-32 sm:mt-20">
      <CustomersList />
      <CustomersList />
      <CustomersList />
    </div>
    <div className={`-left-10 bg-purple-spyrals -rotate-[2deg] -z-10 ${background}`}/>
    <div className={`-right-10 bg-purple-darkest rotate-[4deg] -z-20 ${background}`}/>
  </section>

const background = "absolute rounded-2xl w-[85rem] h-[30rem] md:h-[25rem] lg:h-[30rem]"

const CustomersList = () =>
  <div className="flex flex-row overflow-hidden items-center justify-around w-[450vw] md:h-[7rem] md:w-[150vw] 2xl:w-screen animate-slide-track">
    {config.customers.gallery.map((customer, index) =>
      <Customer href={customer.link} logo={customer.logo} key={index} />
    )}
  </div>
