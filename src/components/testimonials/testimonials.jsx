import "./testimonials.styles.scss";
const Testimonials = ({ testimonials }) => (
  <div className="testimonials">
    <h2>What Our Followers Say</h2>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial">
        <p>"{testimonial.text}"</p>
        <p>- {testimonial.author}</p>
      </div>
    ))}
  </div>
);
export default Testimonials;
