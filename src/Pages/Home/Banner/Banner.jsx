import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import toy1 from "../../../assets/Lotti/rakibs444.json";
import toy2 from "../../../assets/Lotti/tiger.json";
import toy3 from "../../../assets/Lotti/115619-learning-english.json";
import SliderComponent from "./SliderComponent/SliderComponent";
import { Helmet } from "react-helmet";
const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const images1 = "https://i.postimg.cc/DZBTgMtC/banner1.jpg";
  const images2 = "https://i.postimg.cc/0yw9sZwQ/banner2.jpg";
  const images3 = "https://i.postimg.cc/Vkk0zxFR/banner3.jpg";
  const images4 = "https://i.postimg.cc/26zPtxYV/banner4.jpg";
  const images5 = "https://i.postimg.cc/2j9PHvKS/banner5.jpg";
  return (
    <>
     <div className="w-full">
      {/* this is a react helmet */}
     <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner section added */}
     <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <SliderComponent images={images1} toy1={toy1}></SliderComponent>
        </div>
        <div className="keen-slider__slide number-slide2"><SliderComponent images={images2}  toy1={ toy2}></SliderComponent></div>
        <div className="keen-slider__slide number-slide3"><SliderComponent images={images3} toy1={toy3}></SliderComponent></div>
        <div className="keen-slider__slide number-slide4"><SliderComponent images={images4} toy1={toy1}></SliderComponent></div>

        <div className="keen-slider__slide number-slide5"><SliderComponent images={images5} toy1={toy2}></SliderComponent></div>
      </div>
      {/* banner section end */}
     </div>
    </>
  );
};

export default Banner;
