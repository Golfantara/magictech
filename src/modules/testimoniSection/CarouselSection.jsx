import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
const images = [
  { id: 1, src: "https://source.unsplash.com/500x500?male" },
  { id: 2, src: "https://source.unsplash.com/500x500?female" },
  { id: 3, src: "https://source.unsplash.com/500x500?cars" },
];

const CarouselSection = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handlePrevious = () => {
    setSelectedImage(
      selectedImage === 0 ? images.length - 1 : selectedImage - 1
    );
  };

  const handleNext = () => {
    setSelectedImage(
      selectedImage === images.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <div className="relative px-4 md:px-0">
      <div>
        <h1 className="text-4xl font-bold py-4">Testimoni</h1>
        <div className="h-1 w-1/2 bg-black mb-2 rounded-l-full rounded-r-full"></div>
        <p>
          Ternyata, banyak juga yang ngalamin hal yang sama! Lihat apa tanggapan
          mereka.
        </p>
      </div>
      <img
        src={images[selectedImage].src}
        alt={`Image ${selectedImage + 1}`}
        className="block w-full"
      />
      <div className="flex justify-evenly lg:mt-4 mb-6 lg:mb-0">
        <button
          className={
            ("absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full text-white bg-black opacity-50 hover:opacity-75",
            selectedImage === 0 && "opacity-25 pointer-events-none")
          }
          onClick={handlePrevious}
        >
          <ChevronLeftIcon className="h-12 w-12 bg-slate-500 rounded-full" />
        </button>
        <button
          className={
            ("absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full text-white bg-black opacity-50 hover:opacity-75",
            selectedImage === images.length - 1 &&
              "opacity-25 pointer-events-none")
          }
          onClick={handleNext}
        >
          <ChevronRightIcon className="h-12 w-12 p-2 bg-slate-500 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default CarouselSection;
