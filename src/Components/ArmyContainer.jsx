/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import React, { useState, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';

import ArmyCreator from './ArmyCreator';
import Army from './Army';

function ArmyContainer(props) {
  const { Title } = props;

  const [title] = useState(Title);
  const [addingArmy, setAddingArmy] = useState(false);

  const memoizedCallback = useCallback(
    (state, action) => {
      switch (action.type) {
        case 'addArmy':
          return [
            ...state,
            { title: action.army, units: [], index: state.length },
          ];
        case 'addUnit':
          const tempA = [...state];
          const temp2A = [...tempA[action.index].units, action.unit];
          tempA[action.index].units = temp2A;
          return tempA;

        case 'removeUnit':
          const tempR = [...state];
          let temp2R = tempR[action.armyIndex].units;
          temp2R = temp2R.filter((_, index) => index !== action.index);
          tempR[action.armyIndex].units = temp2R;
          return tempR;
        case 'increase':
          const tempI = [...state];
          const temp2I = tempI[action.armyIndex].units[action.index];
          temp2I.Num += 1;
          tempI[action.armyIndex].units[action.index] = temp2I;
          return tempI;

        case 'decrease':
          const tempD = [...state];
          const temp2D = tempD[action.armyIndex].units[action.index];
          temp2D.Num -= 1;
          temp2D.Num = temp2D.Num <= 0 ? 0 : temp2D.Num;
          tempD[action.armyIndex].units[action.index] = temp2D;
          return tempD;
        case 'removeArmy':
          return state.filter((_, index) => index !== action.index);
        default:
          return state;
      }
    }, [],
  );

  const [armies, dispatch] = useReducer(memoizedCallback, []);

  return (
    <div>
      <h1>{title}</h1>
      <br />
      <div>
        /
        { armies.map((element, index) => <Army key={index} units={element.units} index={index} title={element.title} dispatch={dispatch} />)}
      </div>
      <br />
      <button type="button" onClick={() => setAddingArmy(true)}> Añadir ejercito </button>
      <br />
      <ArmyCreator addingArmy={addingArmy} setAddingArmy={setAddingArmy} dispatch={dispatch} />
    </div>
  );
}

export default ArmyContainer;

ArmyContainer.propTypes = {
  Title: PropTypes.string.isRequired,
};
