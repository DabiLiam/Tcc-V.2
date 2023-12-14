// testimonial data
const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'A aplicação é extremamente fácil de usar. Cada recurso está intuitivamente localizado, tornando minha experiência suave e sem complicações.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'A rapidez com que o sistema responde às minhas ações é notável. Isso contribui significativamente para uma experiência de usuário fluida e eficiente.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'A interface visual é não apenas agradável esteticamente, mas também fácil de entender. Isso faz com que a interação com a aplicação seja agradável e sem confusões.',
  },
];
 
 // import required modules
 import { Navigation, Pagination } from 'swiper'
 
 // import swiper react components
 import { Swiper, SwiperSlide } from 'swiper/react'

 //icons 
 import { FaQuoteLeft } from 'react-icons/fa'
 // next image
 import Image from 'next/image'
 
 // import swiper styles
 import 'swiper/css'
 import 'swiper/css/navigation'
 import 'swiper/css/pagination'
 
 
 const TestimonialSlider = () => {
   return (
    <Swiper 
    navigation={true}
     Pagination={{
       clickable: true
     }}
     modules={[Navigation, Pagination]}
     className='h-[480px]'
 
   >
      {testimonialSlider.map((person, index) => {
         return ( 
         <SwiperSlide key={index} className=''>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-10 '>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'> 
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* quote & message */}
              <div className=' flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                 {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                {person.message}
                </div>
              </div>
            </div>
         </SwiperSlide>
         );
       })}
   </Swiper>
   );
 };
 
 export default TestimonialSlider;
 
