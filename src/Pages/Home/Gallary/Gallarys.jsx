import React from "react";
import Gallery from "react-photo-gallery";
const Gallerys = () => {
 
  const photos = [

    {
      src: 'https://i.postimg.cc/L6TmTD35/legoSet4.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/C1V29TFg/legoSet5.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/YC0BxHSD/legoSet3.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/m2Zvbs7Z/lego-City-Train.jpg',
      width: 4,
      height: 3
    }
    ,
    {
      src: 'https://i.postimg.cc/50NBXngz/lego-Police.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/zGs2RZHg/legos-Arci-Bruj.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/bJQfK5zb/car4.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/9QvSCBgB/car1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/PqMm2mc4/city1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/mD27qPWG/city3.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/zvyKz4ft/city4.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/9M8yjccw/city2.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'https://i.postimg.cc/k4QKBWN8/arci2.jpg',
      width: 4,
      height: 3
    }
  ];
  return (
    <>
      <div className="w-full py-5">
        <h3 className="text-4xl text-center font-semibold py-5 ">
          Our Gallery
        </h3>
        <div className="w-full max-w-6xl mx-auto">
          <Gallery photos={photos} />;
        </div>
      </div>
    </>
    // <>
    //       {/* <div>
    //     <Gallery photos={photos} onClick={this.openLightbox} />
    //     <Lightbox images={photos}
    //       onClose={this.closeLightbox}
    //       onClickPrev={this.gotoPrevious}
    //       onClickNext={this.gotoNext}
    //       currentImage={this.state.currentImage}
    //       isOpen={this.state.lightboxIsOpen}
    //     />
    //   </div> */}
    // </>
  );
};

export default Gallerys;
