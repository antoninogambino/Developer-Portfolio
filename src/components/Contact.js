import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <p>Email: antoninogambino@gmail.com</p>
      <button className="btn btn-primary">
        <a href="path_to_cv_pdf" className="button-link">Download CV (PDF)</a>
      </button>
      <button className="btn btn-secondary">
        <a href="https://github.com/antoninogambino" className="button-link">GitHub Profile</a>
      </button>
      <button className="btn btn-secondary">
        <a href="https://www.linkedin.com/in/antoninogambino/" className="button-link">LinkedIn Page</a>
      </button>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-secondary">Clear</button>
      </form>
    </div>
  );
};

export default Contact;
