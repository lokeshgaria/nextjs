// import React from "react";
// import { Carousel } from "react-bootstrap";
// import Styles from "../styles/Slider.module.css";
// import Image from "next/image";
// import "../css/Slider.css";
// import banner1 from "../public/Slider/HomepageBanner.jpeg";

// const sliderArray = [
//   {
//     id: 1,
//     img: banner1,
//     caption: "Let your walls tell the story",
//   },

//   // {
//   //     id:2,
//   //     img : "https://images.pexels.com/photos/9361599/pexels-photo-9361599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1940",

//   // }
// ];

// function Slider() {
//   return (
//     <div className="slider">
//       <Carousel prevIcon={false} nextIcon={false}>
//         {sliderArray.map((values) => (
//           <Carousel.Item interval={1200} key={values.id}>
//             <Image
//               src={values.img}
//               alt="Picture of the author"
//               // width={500} automatically provided
//               // height={500} automatically provided
//               // blurDataURL="data:..." automatically provided
//               // placeholder="blur" // Optional blur-up while loading
//             />
//             {/* <img
//                   className="d-block w-100 sliderImg"
//                   src={values.img}
//                   alt="First slide"
//                 /> */}
//             <Carousel.Caption>
//               <h3>{values.caption}</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default Slider;
