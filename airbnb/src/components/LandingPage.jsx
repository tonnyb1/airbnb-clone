import React from 'react';

export default function LandingPage() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h1>Welcome to Our Tourism Company</h1>
          <p>Explore the world with us and discover new cultures, landscapes, and adventures.</p>
          <button>Book Now</button>
        </section>
        <section id="featured-tours">
          <h2>Featured Tours</h2>
          <div className="tour-card">
            <img src="tour-image.jpg" alt="Tour Image" />
            <div className="tour-info">
              <h3>Tour Name</h3>
              <p>Duration: X days</p>
              <p>Price: $X</p>
            </div>
          </div>
          <div className="tour-card">
            <img src="tour-image.jpg" alt="Tour Image" />
            <div className="tour-info">
              <h3>Tour Name</h3>
              <p>Duration: X days</p>
              <p>Price: $X</p>
            </div>
          </div>
          <div className="tour-card">
            <img src="tour-image.jpg" alt="Tour Image" />
            <div className="tour-info">
              <h3>Tour Name</h3>
              <p>Duration: X days</p>
              <p>Price: $X</p>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, diam id consequat pulvinar, elit urna tincidunt enim, a accumsan lacus neque non purus. Sed non justo ut odio convallis fringilla. Duis vel velit mi. Sed sit amet sapien eu risus auctor tincidunt."</p>
            <p className="customer-name">- Customer Name</p>
          </div>
          <div className="testimonial">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, diam id consequat pulvinar, elit urna tincidunt enim, a accumsan lacus neque non purus. Sed non justo ut odio convallis fringilla. Duis vel velit mi. Sed sit amet sapien eu risus auctor tincidunt."</p>
            <p className="customer-name">- Customer Name</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; Tourism Company 2023</p>
      </footer>
    </div>
  );
}
