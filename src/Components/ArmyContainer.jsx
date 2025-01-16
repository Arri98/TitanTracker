/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import React, { useState, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';

import ArmyCreator from './ArmyCreator';
import Army from './Army';

function ArmyContainer(props) {
  const { title ,id } = props;

  const [addingArmy, setAddingArmy] = useState(false);

  const memoizedCallback = useCallback(
    (state, action) => {
      let returnValue = {};
      switch (action.type) {
        case 'addArmy':
          returnValue = [
            ...state,
            { title: action.army, units: [], index: state.length },
          ];
          break;
        case 'addUnit':
          const tempA = [...state];
          const temp2A = [...tempA[action.index].units, action.unit];
          tempA[action.index].units = temp2A;
          returnValue = tempA;
          break;

        case 'removeUnit':
          const tempR = [...state];
          let temp2R = tempR[action.armyIndex].units;
          temp2R = temp2R.filter((_, index) => index !== action.index);
          tempR[action.armyIndex].units = temp2R;
          returnValue = tempR;
          break;
        case 'increase':
          const tempI = [...state];
          const temp2I = tempI[action.armyIndex].units[action.index];
          temp2I.Num += 1;
          tempI[action.armyIndex].units[action.index] = temp2I;
          returnValue = tempI;
          break;

        case 'decrease':
          const tempD = [...state];
          const temp2D = tempD[action.armyIndex].units[action.index];
          temp2D.Num -= 1;
          temp2D.Num = temp2D.Num <= 0 ? 0 : temp2D.Num;
          tempD[action.armyIndex].units[action.index] = temp2D;
          returnValue = tempD;
          break;
        case 'removeArmy':
          returnValue = state.filter((_, index) => index !== action.index);
          break;
        default:
          return state;
      }
      localStorage.setItem(`armies-${id}`, JSON.stringify(returnValue));
      return returnValue;
    }, [],
  );

  const [armies, dispatch] = useReducer(memoizedCallback, JSON.parse(localStorage.getItem(`armies-${id}`)) || []);

  return (
    <div style={{ width: '100%' }}>
      {title}
      <br />
      <div style={{ width: '100%' }}>
        { armies.map((element, index) => <Army key={index} units={element.units} index={index} title={element.title} dispatch={dispatch} />)}
      </div>
      <br />
      <button style={{backgroundColor: addingArmy ? 'peru' : 'grey'}} type="button" onClick={() => setAddingArmy(addingArmy ?  false : true)}> Añadir </button>
      <br />
      <ArmyCreator addingArmy={addingArmy} setAddingArmy={setAddingArmy} dispatch={dispatch} />
    </div>
  );
}

export default ArmyContainer;

ArmyContainer.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
