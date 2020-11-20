import React from 'react';
import PropTypes from 'prop-types';
import Brush from '../images/Brush.gif';
import Desert from '../images/Desert.gif';
import Hills from '../images/Hills.gif';
import Jungle from '../images/Jungle.gif';
import Marsh from '../images/Marsh.gif';
import Mountain from '../images/Mountains.gif';
import Plain from '../images/Plains.gif';
import Swamp from '../images/Swamp.gif';
import Tower from '../images/Tower.gif';
import Tundre from '../images/Tundra.gif';
import Woods from '../images/Woods.gif';

function TileByName(props) {
  const { name } = props;
  switch (name) {
    case 'Brush':
      return <img style={{ width: '60px', height: '60px' }} src={Brush} alt="Brush" />;
    case 'Desert':
      return <img style={{ width: '60px', height: '60px' }} src={Desert} alt="Desert" />;
    case 'Hills':
      return <img style={{ width: '60px', height: '60px' }} src={Hills} alt="Hills" />;
    case 'Jungle':
      return <img style={{ width: '60px', height: '60px' }} src={Jungle} alt="Jungle" />;
    case 'Marsh':
      return <img style={{ width: '60px', height: '60px' }} src={Marsh} alt="Marsh" />;
    case 'Mountain':
      return <img style={{ width: '60px', height: '60px' }} src={Mountain} alt="Mountains" />;
    case 'Plains':
      return <img style={{ width: '60px', height: '60px' }} src={Plain} alt="Plain" />;
    case 'Swamp':
      return <img style={{ width: '60px', height: '60px' }} src={Swamp} alt="Swamp" />;
    case 'Tower':
      return <img style={{ width: '60px', height: '60px' }} src={Tower} alt="Tower" />;
    case 'Tundra':
      return <img style={{ width: '60px', height: '60px' }} src={Tundre} alt="Tundra" />;
    case 'Woods':
      return <img style={{ width: '60px', height: '60px' }} src={Woods} alt="Woods" />;
    default:
      return null;
  }
}

export default TileByName;

TileByName.propTypes = {
  name: PropTypes.string.isRequired,
};
