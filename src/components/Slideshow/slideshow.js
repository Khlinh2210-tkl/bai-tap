import React, { useState } from 'react';
import './slideshow.css'; 

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSize, setImageSize] = useState(300); 
  const totalImages = 10;  
  const baseURL = 'https://picsum.photos/';

  const nextImage = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const backToStart = () => {
    setCurrentIndex(0);
  };

  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * totalImages);
    setCurrentIndex(randomIndex);
  };

  const zoomIn = () => {
    setImageSize((prevSize) => prevSize + 50); // Tăng kích thước lên 50px
  };

  const zoomOut = () => {
    setImageSize((prevSize) => (prevSize > 100 ? prevSize - 50 : prevSize)); // Giảm kích thước, không nhỏ hơn 100px
  };

  return (
    <div className="slideshow-container">
      <img
        src={`${baseURL}${imageSize}/?image=${currentIndex}`}
        alt={`Slide ${currentIndex}`}
        style={{ width: `${imageSize}px`, height: `${imageSize * (2 / 3)}px` }} // Giữ tỷ lệ 2:3
      />
      <div className="image-info">
        <p>{`Hình ảnh: ${currentIndex + 1} / ${totalImages}`}</p>
        
        <button onClick={prevImage} className="button-pink">Previous</button>
        <button onClick={nextImage} className="button-pink" disabled={currentIndex >= totalImages - 1}>Next</button>
        <button onClick={backToStart} className="button-pink">Back </button>
      </div>
    </div>
  );
};

export default Slideshow;
