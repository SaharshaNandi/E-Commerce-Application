import React from 'react';
import './FakeForm.scss';

const fakeForm = () => (
  <div className="page-wrap">
    <form>
      <div className="floating-field">
        <input type="text" required />
        <label>Name</label>
        <span></span>
      </div>
      <div className="floating-field">
        <input type="email" required />
        <label>Email</label>
        <span></span>
      </div>
      {/* <div className="floating-field">
        <input type="tel" required />
        <label>Mobile No:</label>
        <span></span>
      </div> */}
      <div className="floating-field wide">
        <textarea required></textarea>
        <label>Feedback / Enquiry</label>
        <span></span>
        <button className="send_btn">Submit</button>
      </div>
    </form>
  </div>
);

export default fakeForm;