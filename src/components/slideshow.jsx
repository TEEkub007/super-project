import React from 'react'

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { src: "1bart.png", alt: "Nature" },
    { src: "1hour=.png", alt: "Snow" },
    { src: "armarica.png", alt: "Mountains" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="max-w-md mx-auto relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === slideIndex ? "block" : "hidden"}`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full max-h-[200px] object-cover" />
        </div>
      ))}

      <button
        className="prev absolute top-1/2 left-0 text-white font-bold text-lg p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-r"
        onClick={() => plusSlides(-1)}
      >
        &#10094;
      </button>
      <button
        className="next absolute top-1/2 right-0 text-white font-bold text-lg p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-l"
        onClick={() => plusSlides(1)}
      >
        &#10095;
      </button>

      <div className="point text-center mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot h-3 w-3 mx-1 bg-gray-400 rounded-full inline-block ${
              index === slideIndex ? "bg-gray-700" : ""
            } cursor-pointer`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
