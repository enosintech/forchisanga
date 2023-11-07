import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import vintage1 from "../assets/images/IMG_2323.jpg";
import vintage2 from "../assets/images/IMG_2322.jpg";
import vintage3 from "../assets/images/IMG_2315.jpg";
import vintage4 from "../assets/images/IMG_2317.jpg";
import vintage5 from "../assets/images/IMG_2318.jpg";
import vintage6 from "../assets/images/IMG_2319.jpg";
import vintage7 from "../assets/images/IMG_2320.jpg";
import vintage8 from "../assets/images/IMG_2324.jpg";
import vintage9 from "../assets/images/IMG_2316.jpg";
import vintageX from "../assets/images/IMG_2325.jpg";

const ImageComponent = (props) => {
  return (
    <div className='hover:shadow-3xl hover:border-4 transition-all group relative h-full min-w-[313px] sm:min-w-[400px] rounded bg-black'>
      <img src={props.image} alt={props.description} className='absolute transition-all group-hover:opacity-25 w-full rounded h-full object-cover'/>
      <div className='group-hover:flex flex-col hidden transition-all absolute z-50 w-full h-full items-center justify-center rounded'>
        <div className='h-[40%] w-full flex items-center justify-center font-bold font-opensans uppercase text-2xl text-white'>
          {props.title}
        </div>
        <div className='w-full flex justify-center'>
          <div className='border-b-[0.5px] w-[80%]'></div>
        </div>
        <div className='bottom-0 h-[60%] w-full p-10 overflow-auto font-thin text-justify font-opensans flex items-start justify-center text-white '>
          {props.description}
        </div>
      </div>
    </div>
  )
}

function GalleryScreen() {

  return (
    <div className=' w-screen h-screen pt-[50.4px] bg-black flex items-center justify-center'>
      <div className='relative h-full w-[80%] flex flex-col items-center justify-center'>
        <Swiper
          className="h-[80%] w-full p-5"
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'3'}
          coverFlowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }}
          modules={[EffectCoverflow, Pagination, Navigation ]}
          pagination={{el: ".swiper-pagination", clickable: true}}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true
          }}
        >
          {pictureData.map((picture, index) => (
            <SwiperSlide>
              <ImageComponent 
                key={picture.description}
                index={index}
                {...picture}
              />
            </SwiperSlide>
          ))}
        </Swiper>
          <div className="relative slider-controller h-[10%] mt-5 md:w-[40%] lg:w-[30%] xl:w-[25%] sm:w-[80%] w-[95%] flex justify-center">
            <div className="swiper-button-prev slider-arrow hover:opacity-50 active:opacity-25">
              <ion-icon name="chevron-back"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow hover:opacity-50 active:opacity-25">
              <ion-icon name="chevron-forward"></ion-icon>
            </div>
            <div className="swiper-pagination">

            </div>
          </div>
      </div>
    </div>
  )
}

export default GalleryScreen;

const pictureData = [
  {
    title: "Shika & Chisanga",
    description: "A reminder of how you’re such an amazing girlfriend. I told you how I loved T lows music and even set a reminder for he’s release day on our calendar ,you knew about his release party and made sure we went even tho we thought we wouldn’t get the full experience we did and then some .Now you’re vibing to the road man even more than I am . I’m so glad we have the same taste in music .",
    image: vintage1
  },
  {
    title: "Shika & Chisanga",
    description: "You’re so in love with aesthetic that’s why this picture was taken plus we definitely looked cool/cute af .",
    image: vintage2
  },
  {
    title: "Shika & Chisanga",
    description: "Lol we spent a week in the dark because I damaged our fluorescent light and you were so mad at me about it. Until this day you go on about how it was my fault. We took these pictures outside builders warehouse after buying the second fluorescent light and telling the assistant we’d be back for him if it didn’t work and luckily for him and us it works to this day.",
    image: vintage3
  },
  {
    title: "Shika & Chisanga",
    description: "This day was amazing. One of our extras was drunk and the other was hungry. And no we weren’t trying to cook even though they seemed to think so. We just wanted to watch a good movie with good company and it was an amazing experience.",
    image: vintage4
  },
  {
    title: "Shika & Chisanga",
    description: "This was after the road man listening party. I remember how we argued over something petty and in the morning I decided to take you swimming to make up for it. You definitely seemed to enjoy yourself and that made me happy. We spent way more than we should have though but so what! For you it was all worth it. ",
    image: vintage5
  },
  {
    title: "Shika & Chisanga",
    description: "You tried on so many outfits that were not it. Not because you didn’t look cute but because I wanted you to look formally decent in-front of the people we were going to be around and must I say you looked beautiful as always and you made a good impression. ",
    image: vintage6
  },
  {
    title: "Shika & Chisanga",
    description: "We took this less than a week ago. I don’t know what we were looking at but you said you were in the mood for burgers and you took us out to grab some. We saw a cat and the first person that came to your mind was my sister, how sweet of you . Those burgers slapped no cap. You bought yourself one today and didn’t ask me if I wanted one, watch your back, lol.",
    image: vintage7
  },
  {
    title: "Shika & Chisanga",
    description: "You had just had that wig installed and you were so in love with it. You even started a wig installation business and even though it didn’t work out, the way that you planned? Big ups for effort. You were busy taking pictures while I did laundry all by myself. Oh and I was stressing about something and when I told you about it you were sad because you thought I was asking you to move out.",
    image: vintage8
  },
  {
    title: "Shika & Chisanga",
    description: "You have some of the funniest/cutest expressions especially when the picture is taken off guard .Taonga showed us pictures he took of us in 2022 and we took more for future reference. I can’t remember what we were taking pictures on the roof top for but that happened.",
    image: vintage9
  },
  {
    title: "Shika & Chisanga",
    description: "Lol, this was during the mid semester break and we missed each other so much that we said we should meet up in school to have sex . You asked me to meet you at show grounds, I can't remember what you were doing there but we took cool pictures of each other as well as together before we came to the room. We allowed Buckets (a real person) to crash while we were away. We asked him for the room and did our thing.",
    image: vintageX
  }
]
