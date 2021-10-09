// import {Quote} from './Quote';
// // import {Swiper, SwiperSlide} from 'swiper/react'
// // import SwiperCore, { Navigation, Autoplay, Scrollbar, Thumbs } from 'swiper';
//
// // import 'swiper/swiper-bundle.css'
//
// export const SwiperQuote = (props) => {
//     SwiperCore.use([Autoplay]);
//     const {data} = props;
//     const swiperContents= [];
//     console.log(data);
//     data.map((e,key)=>{
//         if (e) {
//             swiperContents.push(<SwiperSlide key={key}>
//                 <Quote content={e}>
//                 </Quote>
//             </SwiperSlide>);
//         }
//     });
//
//     return (
//         <div className={'subtle-container'}>
//             <Swiper
//                 module={[Autoplay]}
//                 autoplay={{delay: 10}}
//                 slidesPerView={1}
//             >
//                 {swiperContents.map(e=>e)}
//             </Swiper>
//         </div>
//     );
// };