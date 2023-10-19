import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import Testimonial from './Testimonial';
import styles from './Testimonials.module.css';
import Title from '../UI/Title';

const fetchTestimonials = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=1');
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch testimonials');
  }
};

const Testimonials = () => {
  const { data, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  });

  if (error) {
    toast.error(error.message);
  }
  console.log(data);

  // data.slice(0, 4)
  // const visibleTestimonials = data.slice(0, 4);
  return (
    <section className={styles['testimonials-container']}>
      <Title text="Testimonials" />
      {data && (
        <div className={`${styles['testimonials']} ${styles['container']}`}>
          {data.slice(0, 4).map((testimonial) => (
            <Testimonial
              image={testimonial.avatar}
              key={testimonial.id}
              author={`${testimonial.first_name} ${testimonial.last_name}`}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
              starRating={5}
            />
          ))}
        </div>
      )}

      {/* {data && data.length > 4 && (
        <button
          onClick={() => {
            // Add logic to load more data if needed
          }}
          className="load-more-button"
        >
          Load More
        </button>
      )} */}
    </section>
  );
};

export default Testimonials;

// import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import Testimonial from './Testimonial'; // Import the Testimonial component
// import classes from './Testimonials.module.css';
// import { useState } from 'react';

// const fetchTestimonials = async (page = 1) => {
//   try {
//     const response = await axios.get(
//       `https://reqres.in/api/users?page=${page}`
//     );
//     return response.data.data;
//   } catch (error) {
//     throw new Error('Failed to fetch testimonials');
//   }
// };

// const Testimonials = () => {
//   const [visibleTestimonials, setVisibleTestimonials] = useState([]);

//   const { data, error } = useQuery({
//     queryKey: ['testimonials'],
//     queryFn: fetchTestimonials,

//   });

//   // const {
//   //   data: infiniteData,
//   //   fetchNextPage,
//   //   hasNextPage,
//   //   isFetchingNextPage,
//   // } = useInfiniteQuery({
//   //   queryKey: ['testimonials'],
//   //   queryFn: () => fetchTestimonials,
//   //   getNextPageParam: (lastPage, allPages) => {
//   //     return lastPage?.length === 4 ? allPages.length + 1 : undefined;
//   //   },
//   // });

//   if (error) {
//     toast.error(error.message);
//   }

//   // const allTestimonials = infiniteData ? infiniteData.pages.flat() : [];

//   // const visibleTestimonials = allTestimonials.slice(0, 4);
//   // const allTestimonials = [...data.data];
//   // const visibleTestimonials = allTestimonials.slice(0, 4);
//   if (data) {
//     setVisibleTestimonials([...data.data]);
//   }
//   console.log();

//   return (
//     <div className={classes['testimonials']}>
//       {visibleTestimonials?.map((testimonial) => (
//         <Testimonial
//           key={testimonial.id}
//           author={testimonial.author}
//           text={testimonial.text}
//           stars={testimonial.stars}
//         />
//       ))}
//       {/* {hasNextPage && (
//         <button
//           onClick={() => {
//             if (!isFetchingNextPage) {
//               fetchNextPage();
//             }
//           }}
//           className={classes['load-more-button']}
//           disabled={isFetchingNextPage}
//         >
//           {isFetchingNextPage ? 'Loading...' : 'Load More'}
//         </button>
//       )} */}
//     </div>
//   );
// };

// export default Testimonials;
