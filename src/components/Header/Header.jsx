import React from 'react';
import { assets } from '../../assets/assets';

const Header = () => {
  const headerStyle = {
    height: '34vw',
    margin: '30px auto',
    background: `url(${assets.header_img}) no-repeat`,
    backgroundSize: 'contain',
    position: 'relative'
  };

  const headerContentsStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '1.5vw',
    maxWidth: '50%',
    bottom: '10%',
    left: '6vw',
    animation: 'fadeIn 3s'
  };

  const titleStyle = {
    fontWeight: 500,
    color: 'white',
    fontSize: 'max(4.5vw, 22px)'
  };

  const paragraphStyle = {
    color: 'white',
    fontSize: '1vw'
  };

  const buttonStyle = {
    border: 'none',
    color: '#747474',
    fontWeight: 500,
    padding: '1vw 2.3vw',
    backgroundColor: 'white',
    fontSize: 'max(1vw, 13px)',
    borderRadius: '50px'
  };

  return (
    <div style={headerStyle}>
      <div style={headerContentsStyle}>
        <h2 style={titleStyle}>Order your favourite food here</h2>
        <p style={paragraphStyle}>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button style={buttonStyle}>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
