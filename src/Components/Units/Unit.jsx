import React from 'react';
import PropTypes from 'prop-types';
import Attack from "../../images/attack.png";
import Defense from "../../images/defense.png";
import Fly from "../../images/fly.png";
import Range from "../../images/range.png";

function Unit(props) {
  const { name, image, attack, defense, doesFly, hasRange } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      {name}
      <img src={image} alt={name} />
      <div  style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', margin:'0.7em'}}>
	      <img style={{height:'1em', width:'1em'}} src={Attack} alt='Attack' />
	      {attack}
	      <img style={{height:'1em', width:'1em'}} src={Defense} alt='Attack' />
	      {defense}
	      
	      
      </div>
       <div  style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>
	      {doesFly ? <img style={{height:'1em', width:'1em'}} src={Fly} alt='Fly' /> : null}
	      {hasRange ? <img style={{height:'1em', width:'1em'}} src={Range} alt='Range' /> : null}

	      
	      
      </div>
    </div>
  );
}

export default Unit;

Unit.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  attack: PropTypes.string.isRequired,
  defense: PropTypes.string.isRequired,
  doesFly: PropTypes.bool.isRequired,
  hasRange: PropTypes.bool.isRequired,
};
