// import React from "react";
// import "./testimonials.css";
// // import Swiper core and required modules
// import { Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import BIBEK from "../../assets/testimonials/bibek.jpg";
// import SUKLA from "../../assets/testimonials/sukla.jpg";
// import NIRGUN from "../../assets/testimonials/nirgun.jpg";
// import HIRA from "../../assets/testimonials/hira.jpg";

// const data = [
//   {
//     id: 1,
//     image: BIBEK,
//     name: "Bibek Timilsina",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae soluta, alias beatae earum commodi. Fugiat voluptas impedit optio iusto, repellat quia. Vitae, exercitationem. Repellendus eos sequi tenetur excepturi deleniti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae soluta, alias beatae earum commodi. Fugiat voluptas impedit optio iusto, repellat quia. Vitae, exercitationem. Repellendus eos sequi tenetur excepturi deleniti.",
//   },
//   {
//     id: 2,
//     image: NIRGUN,
//     name: "Nirgun Subedi",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae soluta, alias beatae earum commodi. Fugiat voluptas impedit optio iusto, repellat quia. Vitae, exercitationem. Repellendus eos sequi tenetur excepturi deleniti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae soluta, alias beatae earum commodi. Fugiat voluptas impedit optio iusto, repellat quia. Vitae, exercitationem. Repellendus eos sequi tenetur excepturi deleniti.",
//   },
//   {
//     id: 3,
//     image: SUKLA,
//     name: "Mritunjay Sukla",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae soluta, alias beatae earum commodi. Fugiat voluptasb impedit optio iusto, repellat quia. Vitae, exercitationem. Repellendus eos sequi tenetur excepturi deleniti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae soluta, alias beatae earum commodi. Fugiat voluptasb impedit optio iusto, repellat quia. Vitae, exercitationem. Repellendus eos sequi tenetur excepturi deleniti.",
//   },
//   {
//     id: 4,
//     image: HIRA,
//     name: "Hira Ghimire",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae soluta, alias beatae earum commodi. Fugiat voluptas impedit optio iusto, repellat quia. Vitae, exercitationem. Repellendus eos sequi tenetur excepturi deleniti.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae soluta, alias beatae earum commodi. Fugiat voluptas impedit optio iusto, repellat quia. Vitae, exercitationem. Repellendus eos sequi tenetur excepturi deleniti.",
//   },
// ];
// function Testimonials() {
//   return (
//     <section id="testimonials">
//       <h5>Review From Clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper
//         className="container testimonials_container"
//         modules={[Pagination]}
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//       >
//         {data.map(({ image, id, name, review }) => {
//           return (
//             <SwiperSlide key={id} className="testimonials">
//               <div className="client_avatar">
//                 <img src={image} alt="" />
//               </div>
//               <h5 className="client_name">{name}</h5>
//               <small className="client_review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// }

// export default Testimonials;
