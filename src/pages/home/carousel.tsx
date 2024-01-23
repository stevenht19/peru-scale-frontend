import React from 'react'
import { Carousel } from 'antd'
import style from './carousel.module.css'

export const CarouselSection: React.FC = () => {
  const [animate, setAnimate] = React.useState<boolean>(false)

  return (
    <section>
      <Carousel
        autoplay
        fade
        afterChange={() => {
          setAnimate(false)
        }}
        beforeChange={() => {
          setAnimate(true)
        }}
      >
        <div className='relative'>
          <CarouselImageTitle animate={animate} />
          <img src='/home/calibracion.jpg' />
        </div>
        <div className='relative'>
          <CarouselImageTitle animate={animate} title='Mantenimiento' />
          <img src='/home/mantenimiento.jpg' />
        </div>
      </Carousel>
    </section>
  )
}

const CarouselImageTitle = ({ animate = false, title = 'Calibración' }) => {
  return (
    <div className='absolute top-0 bottom-0 w-[25rem] lg:w-[38rem] flex items-center justify-center bg-black/40 text-white'>
      <h2 className={`font-semibold text-3xl uppercase ${animate ? style.carousel_title : ''}`}>
        {title}
      </h2>
    </div>
  )
}