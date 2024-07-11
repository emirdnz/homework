import React from 'react';

function ServicesSection() {
  return (
    <div className="services-section" id="services">
      <h2>Our Services</h2>
      <div className="services">
        <div className="service">
          <h3>Guided Tours</h3>
          <p>Join our expert guides as they lead you to the best fishing spots, ensuring a productive and enjoyable fishing experience. Our guides are knowledgeable about local waters and can provide tips and techniques to help you catch more fish.</p>
        </div>
        <div className="service">
          <h3>Equipment Rental</h3>
          <p>We offer high-quality fishing gear for rent, including rods, reels, tackle, and more. Our equipment is regularly maintained and updated to provide you with the best tools for your fishing adventure.</p>
        </div>
        <div className="service">
          <h3>Fishing Lessons</h3>
          <p>Learn from the best with our fishing lessons. Whether you are new to fishing or looking to improve your skills, our instructors provide personalized lessons tailored to your needs. From casting techniques to fish identification, we've got you covered.</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
