import React from 'react';

function ContactSection() {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Reach out to us for booking your next fishing adventure, inquiries, or any other questions you may have.</p>
      {/* <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form> */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25183.209337138!2d28.979530282165507!3d41.008237600107245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba4a5f1fb933%3A0x9c9a4ba5f1dbf63!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1626171787134!5m2!1sen!2sus"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Istanbul Location"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactSection;
