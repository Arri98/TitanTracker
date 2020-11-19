import React from 'react';

function Unit(props) {
  const { name, image } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      {name}
      <img src={image} alt={name} />
    </div>
  );
}

export default Unit;
