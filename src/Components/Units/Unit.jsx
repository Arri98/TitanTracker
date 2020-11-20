import React from 'react';
import PropTypes from 'prop-types';

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

Unit.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
