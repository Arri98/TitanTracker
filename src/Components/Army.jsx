/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import UnitPicker from './UnitPicker';
import Unit from './Unit';
import Points from './Units/Const';
import Recruitment from './Units/Recruitment';
import RecruitableUnitsElement from './RecruitableUnits';

function Army(props) {
  const [addingUnit, setAddingUnit] = useState(false);
  const [hided, setHided] = useState(false);

  const target = useRef(null);

  const {
    index, units, dispatch, title,
  } = props;

  let numUnits = 0;
  if (units.length > 0) {
    for (let i = 0; i < units.length; i += 1) {
      numUnits += units[i].Num;
    }
  }

  let ArmyPoints = 0;
  if (units.length > 0) {
    for (let i = 0; i < units.length; i += 1) {
      ArmyPoints += Points[units[i].Name] * units[i].Num;
    }
  }

  let RecruitableUnits = 0;
  if (units.length > 0) {
    for (let i = 0; i < units.length; i += 1) {
      if (RecruitableUnits === 0) {
        RecruitableUnits = Recruitment[units[i].Name](units[i].Num);
      } else {
        RecruitableUnits = RecruitableUnits.concat(Recruitment[units[i].Name](units[i].Num));
      }
    }
  }
  for (let i = 0; i < RecruitableUnits.length; i += 1) {
    const option1 = RecruitableUnits[i];
    for (let j = RecruitableUnits.length - 1; j > i; j -= 1) {
      const option2 = RecruitableUnits[j];
      if (option1.Unidad === option2.Unidad && option1.Casilla === option2.Casilla) {
        RecruitableUnits.splice(j, 1);
      }
    }
  }

  return (
    <div style={{
      border: 'solid', paddingBottom: '5px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', margin: 'auto',
    }}
    >
      <h3>{title}</h3>
      Points:
      {ArmyPoints}
      <br />
      {numUnits}
      /7
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          units.map((element, indexM) => <Unit key={indexM} index={indexM} name={element.Name} numberUnits={element.Num} totalNumUnits={numUnits} armyIndex={props.index} dispatch={props.dispatch} />)
            }
      </div>
      <button type="button" ref={target} onClick={() => setHided(!hided)}>Show Recruitable</button>
      <button type="button" onClick={() => setAddingUnit(true)}> Añadir unidad </button>
      <UnitPicker addingUnit={addingUnit} armyIndex={index} setAddingUnit={setAddingUnit} index={units.length} numUnits={numUnits} dispatch={dispatch} />
      <button type="button" onClick={() => dispatch({ type: 'removeArmy', index: props.index })}>Del</button>
      <div style={{
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: '80%', 
      }}
      >
        {hided ? null : <RecruitableUnitsElement units={RecruitableUnits} />}
      </div>
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
