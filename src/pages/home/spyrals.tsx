import React from 'react'
import config from '../../utils/config'
import BordedPicture from '../../ui/atoms/BordedPicture'
import ButtonLink from '../../ui/atoms/ButtonLink'
import SpyralsLogo from '../../ui/organism/header/spyrals-logo'

export default () =>
  <section className="flex flex-col md:flex-row max-md:px-5 items-center justify-between md:pt-14 pb-24 overflow-hidden" id='spyrals'>
    <SpyralsLeft />
    <SpyralsRight />
  </section>

const SpyralsLeft = () =>
  <div className="flex flex-col items-center justify-center max-md:w-full md:mr-10 lg:mr-20 lg:mx-20">
    <SpyralsLogo className="md:hidden"/>
    <h1 className="hidden md:inline text-5xl self-start md:text-6xl 2xl:text-9xl md:pl-20 font-title font-semibold max-md:ml-5">{config.spyrals.title}</h1>
    <p className="-mt-8 md:mt-0 text-2xl lg:text-3xl pt-10 pb-8 md:pl-8 lg:pl-40 font-semibold max-md:self-end text-right">{config.spyrals.text}</p>
    <ButtonLink className="mt-10 md:mr-20 lg:mr-40" href={config.spyrals.button_link} label={config.spyrals.button_label} />
  </div>

const SpyralsRight = () =>
  <div className="flex flex-row pt-8 md:pt-0">
    <BordedPicture 
      borderGradient={{from: 'purple-spyrals', to: 'blueLagoon'}}
      positioning='-rotate-6 mt-12 z-20'
      sizes='h-48 w-48 md:h-[19rem] md:w-[19rem] lg:h-[35rem] lg:w-[35rem]'
      src={config.img_path + config.spyrals.img1}
      alt={config.spyrals.img1_alt}
    />
    <BordedPicture 
      borderGradient={{from: 'purple-dark', to: 'miamiPink'}}
      positioning='rotate-[16deg] z-10 max-md:translate-y-10'
      sizes='h-60 w-52 md:h-[24rem] md:w-[15rem] lg:h-[45rem] lg:w-[28rem]'
      src={config.img_path + config.spyrals.img2}
      alt={config.spyrals.img2_alt}
    />
  </div>
