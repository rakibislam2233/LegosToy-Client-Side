import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Gallerys from "../Gallary/Gallarys";
import Shope from "../Shope/Shope";
import Testimonial from "../Testimonial/Testimonial";
import WhatIDo from "../WhatIDo/WhatIDo";

const Home = () => {
    return (
       <>
       <Banner></Banner>
       <About></About>
       <Gallerys></Gallerys>
       <Shope></Shope>
       <WhatIDo></WhatIDo>
       <Testimonial></Testimonial>
       <Contact></Contact>
       </>
    );
};

export default Home;