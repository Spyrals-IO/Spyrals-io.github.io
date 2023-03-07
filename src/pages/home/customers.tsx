import React from 'react'
import config from '../../utils/config'
import Customer from '../../ui/atoms/Customer'


export default () =>
  <section className="relative flex flex-col items-center pt-24 pb-44 overflow-x-clip" id='clients'>
    <h1 className="text-4xl sm:text-6xl pt-12 font-title font-semibold">{config.customers.title}</h1>
    <p className="text-2xl my-14">{config.customers.text}</p>
    <div className="flex flex-row">
      <CustomersList />
      <CustomersList />
      <CustomersList />
    </div>
    <div className={`-left-10 bg-purple-spyrals -rotate-[4deg] -z-10 ${background}`}/>
    <div className={`-right-10 bg-purple-darkest rotate-[4deg] -z-20 ${background}`}/>
  </section>

const background = "absolute rounded-2xl w-[85rem] h-[30rem]"

const classNameLogo = "w-fit flex flex-row justify-around h-28 items-center mx-8"

const CustomersList = () =>
<div className="flex flex-row overflow-hidden justify-around w-screen animate-slide-track">
    {config.customers.gallery.map((customer) => {
      return <Customer className={classNameLogo} href={customer.link} logo={config.img_path + customer.logo} />
    })}
  </div>
