import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonDiv from './ButtonDiv';

function UnitPicker(props) {
  const {
    numUnits, armyIndex, index, dispatch, addingUnit,
  } = props;

  const [state, setState] = useState(addingUnit);

  useEffect(() => {
    setState(addingUnit);
  }, [addingUnit]);

  return state && numUnits < 7 ? (
    <div className="UnitPicker" style={{ display: { state } }}>
      <ButtonDiv armyIndex={armyIndex} index={index} dispatch={dispatch} />
      <br />
    </div>
  )
    : null;
}

export default UnitPicker;

UnitPicker.propTypes = {
  numUnits: PropTypes.number.isRequired,
  armyIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  addingUnit: PropTypes.bool.isRequired,

};
