import React from 'react'

type Props = {
  className?: string
  src: string
  alt: string
  positioning: string
  borderGradient?: {
    from: string,
    to: string,
    via?: string
  }
  sizes: string,
  fetchPriority: 'high' | 'low'| 'auto'
}

export default ({borderGradient, ...props}: Props) =>
  borderGradient 
  ? <BorderGradientImage borderGradient={borderGradient} {...props} />
  : <BorderImage {...props} />

type BorderImageProps = Omit<Props, 'borderGradient'>

const BorderImage = ({className, positioning, sizes, fetchPriority, ...props}: BorderImageProps) =>
 <img className={`${className} ${positioning} ${sizes} border-4 rounded-3xl object-cover`} fetchpriority={fetchPriority} {...props} />

type BorderGradientProps = {
  className?: string
  src: string
  alt: string
  positioning: string
  borderGradient: {
    from: string,
    to: string,
    via?: string
  }
  sizes: string,
  fetchPriority: 'high' | 'low' | 'auto'
}

const BorderGradientImage = ({borderGradient, positioning, className, sizes, fetchPriority, ...props}: BorderGradientProps) =>
  <div className={`${positioning} ${sizes} rounded-3xl bg-gradient-to-r from-${borderGradient.from} ${borderGradient.via ? `via-${borderGradient.via}` : ''} to-${borderGradient.to} p-0.5 lg:p-[4px]`}>
    <img className={`${className ?? ''} h-full w-full rounded-3xl`} fetchpriority={fetchPriority} {...props} />
  </div>
