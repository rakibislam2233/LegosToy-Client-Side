import React from 'react';
import Marquee from "react-fast-marquee";
import TestimonialDetails from './TestimonialDetails';
const images1 = "https://i.postimg.cc/DZBTgMtC/banner1.jpg";
const images2 = "https://i.postimg.cc/0yw9sZwQ/banner2.jpg";
const Testimonial = () => {
    return (
        <div className='w-full max-w-6xl mx-auto py-10'>
            <div className='text-center'>
                <p className='font-semibold'>TESTIMONIALS</p>
                <h3 className='text-4xl font-semibold'>What Our Clients <br /> Say About Us</h3>
            </div>
              <Marquee>
                <div  className='flex gap-5 p-5'>
                <TestimonialDetails name={'Peter Bowman'} img={images1}></TestimonialDetails>
                <TestimonialDetails name={'Rakib'} img={images2}></TestimonialDetails>
                <TestimonialDetails name={'Shorab'} img={images1}></TestimonialDetails>
                <TestimonialDetails name={'Mandy Mathers'} img={images1}></TestimonialDetails>
                </div>
              </Marquee>
        </div>
    );
};

export default Testimonial;