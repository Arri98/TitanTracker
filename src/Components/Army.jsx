import React, { useState, useReducer } from 'react';
import UnitPicker from './UnitPicker';
import Unit from './Unit';

function Army(props) {
  const [addingUnit, setAddingUnit] = useState(false);

  return (
    <div style={{
      border: 'solid', paddingBottom: '5px', marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', margin: 'auto',
    }}
    >
      <h3>{props.title}</h3>
      <h4>
        {props.units.length}
        /7
      </h4>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
                 props.units.map((element, index) => <Unit key={index} index={index} name={element.Name} numberUnits={element.Num} armyIndex={props.index} dispatch={props.dispatch} />)
            }
      </div>
      <button onClick={() => setAddingUnit(true)}> Añadir unidad </button>
      <UnitPicker addingUnit={addingUnit} armyIndex={props.index} setAddingUnit={setAddingUnit} index={props.units.length} dispatch={props.dispatch} />
      <button onClick={() => props.dispatch({ type: 'removeArmy', index: props.index })}>Del</button>
    </div>
  );
}

export default Army;
