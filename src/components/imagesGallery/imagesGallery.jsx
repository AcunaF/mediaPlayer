import "./imagesGallety.styles.scss";
const ImageGallery = ({ images }) => (
  <div className="image-gallery">
    <h2>Our Recent Activities</h2>
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
          <p>{image.alt}</p>
        </div>
      ))}
    </div>
  </div>
);
export default ImageGallery;
