import React from 'react';
import './SocialMedia.scss';

import fb from '../../../assets/social_media/fb.png';
import gmail from '../../../assets/social_media/gmail.png';
import instagram from '../../../assets/social_media/instagram.png';
import pinterest from '../../../assets/social_media/pinterest.png';
import twitter from '../../../assets/social_media/twitter.png';

const SocialMedia = () => (
  <div className="social-media">
    {/* <h3 className="title">Social Media</h3> */}
    <div className="icons-wrapper">
      <a href="https://www.facebook.com/saharsha.nandi" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a>
      <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="gmail" /></a>
      <a href="https://www.instagram.com/saharsha30/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
      <a href="https://pin.it/5ZUli4j" target="_blank" rel="noopener noreferrer"><img src={pinterest} alt="pinterest" /></a>
      <a href="https://twitter.com/Saharsha30" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>
    </div>
  </div>
);

export default SocialMedia;