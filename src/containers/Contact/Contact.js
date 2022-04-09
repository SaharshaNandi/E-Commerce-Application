import React from 'react';
import './Contact.scss';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

const contact = () => (
  <>
    <ScrollToTopOnMount />
    <div className="contact-container">
      <h2 className="main-title">Contact</h2>
      <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ligula neque, at faucibus metus rutrum sed. Fusce interdum at est eget aliquet. Suspendisse potenti. Curabitur ac luctus magna.  Donec eleifend ligula neque, at faucibus metus rutrum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h3 className="title">Phone number:</h3>
      <p>555-123-111 (Toll Free)</p>
      <h3 className="title">Working Hours:</h3>
      <p>Monday - Friday: 9.00 a.m. - 20.00 p.m.</p>
      <p>Saturday - Sunday: 10.00 a.m. - 16.00 p.m.</p>
    </div>
  </>
);

export default contact;