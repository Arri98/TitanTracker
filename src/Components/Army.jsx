/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UnitPicker from './UnitPicker';
import Unit from './Unit';

function Army(props) {
  const [addingUnit, setAddingUnit] = useState(false);

  const {
    index, units, dispatch, title,
  } = props;

  let numUnits = 0;
  if (units.length > 0) {
    for (let i = 0; i < units.length; i += 1) {
      numUnits += units[i].Num;
    }
  }

  return (
    <div style={{
      border: 'solid', paddingBottom: '5px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', margin: 'auto',
    }}
    >
      <h3>{title}</h3>
      <h4>
        {numUnits}
        /7
      </h4>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          units.map((element, indexM) => <Unit key={indexM} index={indexM} name={element.Name} numberUnits={element.Num} totalNumUnits={numUnits} armyIndex={props.index} dispatch={props.dispatch} />)
        }
      </div>
      <button type="button" onClick={() => setAddingUnit(true)}> Añadir unidad </button>
      <UnitPicker addingUnit={addingUnit} armyIndex={index} setAddingUnit={setAddingUnit} index={units.length} numUnits={numUnits} dispatch={dispatch} />
      <button type="button" onClick={() => dispatch({ type: 'removeArmy', index: props.index })}>Del</button>
    </div>
  );
}

export default Army;

Army.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  units: PropTypes.array,
  index: PropTypes.number.isRequired,
  title: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

Army.defaultProps = {
  title: '',
  units: [],
};
