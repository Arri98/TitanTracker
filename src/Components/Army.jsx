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
      border: 'solid', paddingBottom: '5px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', margin: 'auto', background: 'rgb(15 31 60)'
    }}
    >
      <button style={{alignSelf:'flex-end',background:'red'}} type="button" onClick={() => dispatch({ type: 'removeArmy', index: props.index })}>X</button>
      <h3>{title}</h3>
      Points:
      {ArmyPoints}
      <br />
      {numUnits}
      /7
      <br /> <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          units.map((element, indexM) => <Unit key={indexM} index={indexM} name={element.Name} numberUnits={element.Num} totalNumUnits={numUnits} armyIndex={props.index} dispatch={props.dispatch} />)
            }
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5em', marginBottom: '0.5em' }}>
	<button style={{ background: hided ? 'red' : 'green' }} type="button" ref={target} onClick={() => setHided(!hided)}>Show Recruitable</button>
	<button style={{ background: addingUnit ? 'green' : 'red' }} type="button" onClick={() => setAddingUnit(addingUnit ? false : true)}> Añadir unidad </button>
      </div>
      <UnitPicker addingUnit={addingUnit} armyIndex={index} index={units.length} numUnits={numUnits} dispatch={dispatch} />
      <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', width: '80%'}}>
     	      {hided ? null : <h2>Unidades reclutables</h2>}
	      <div style={{
		display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', 
	      }}
	      >
		{hided ? null : <RecruitableUnitsElement units={RecruitableUnits} />}
	      </div>
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
