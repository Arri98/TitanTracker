import React from 'react';
import PropTypes from 'prop-types';

import UnitPerName from './Units/UnitPerName';

function Unit(props) {
  const {
    name, armyIndex, index, numberUnits, dispatch, totalNumUnits,
  } = props;
  return (
    <div style={{
     borderBottom: 'outset', borderRight: 'outset', margin: '5px', padding: '5px', borderRadius: '15px',  backgroundColor: '#397477',
    }}
    >
      <UnitPerName name={name} />
      <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
        <button
          type="button"
          style={{ borderRadius: '10px', backgroundColor: '#ffffff' }}
          onClick={() => {
            dispatch({ type: 'decrease', index, armyIndex });
            if (numberUnits <= 1) {
              dispatch({ type: 'removeUnit', index, armyIndex });
            }
          }}
        >
          -
        </button>
        <div style={{ marginRight: '2px', marginLeft: '2px' }}>{numberUnits}</div>
        <button
          type="button"
          style={{ borderRadius: '10px', backgroundColor: '#ffffff' }}
          onClick={() => {
            if (totalNumUnits < 7) {
              dispatch({ type: 'increase', index, armyIndex });
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
  // <!-- <button type="button" style={{backgroundColor:'grey'}} onClick={() => dispatch({ type: 'removeUnit', index, armyIndex })}>Del</button> -->
}

export default Unit;

Unit.propTypes = {
  name: PropTypes.string.isRequired,
  armyIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  numberUnits: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  totalNumUnits: PropTypes.number.isRequired,
};
