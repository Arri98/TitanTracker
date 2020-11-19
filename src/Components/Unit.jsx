import React from 'react';
import UnitPerName from './Units/UnitPerName';

function Unit(props) {
  const {
    name, armyIndex, index, numberUnits, dispatch,
  } = props;
  return (
    <div style={{ border: 'solid', margin: '5px', padding: '5px' }}>
      <UnitPerName name={name} />
      <br />
      <button type="button" onClick={() => dispatch({ type: 'decrease', index, armyIndex })}>-</button>
      {numberUnits}
      <button type="button" onClick={() => dispatch({ type: 'increase', index: armyIndex })}>+</button>
      <br />
      <button type="button" onClick={() => dispatch({ type: 'removeUnit', index, armyIndex })}>Del</button>
    </div>
  );
}

export default Unit;
