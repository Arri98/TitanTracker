import React from 'react';
import PropTypes from 'prop-types';

import UnitPerName from './Units/UnitPerName';

function Unit(props) {
  const {
    name, armyIndex, index, numberUnits, dispatch, totalNumUnits,
  } = props;
  return (
    <div style={{ border: 'solid', margin: '5px', padding: '5px' }}>
      <UnitPerName name={name} />
      <br />
      <button type="button" onClick={() => dispatch({ type: 'decrease', index, armyIndex })}>-</button>
      {numberUnits}
      <button type="button" onClick={() => { if (totalNumUnits < 7) { dispatch({ type: 'increase', index, armyIndex }); } }}>+</button>
      <br />
      <button type="button" onClick={() => dispatch({ type: 'removeUnit', index, armyIndex })}>Del</button>
    </div>
  );
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
