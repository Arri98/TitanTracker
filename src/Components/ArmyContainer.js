import React, { useState, useReducer, useCallback } from 'react'
import ArmyCreator from './ArmyCreator'
import Army from './Army'


function ArmyContainer(props){

    const [title] = useState(props.title);
    const [addingArmy,setAddingArmy] = useState(false);
   
    const memoizedCallback = useCallback(
      (state, action) => {
        switch (action.type) {
        case 'addArmy':
             return [
                  ...state,
                  {title:action.army, units:[],index: state.length}
                ];
        case 'addUnit':
            let tempA = [...state];
            let temp2A = [...tempA[action.index].units,action.unit];
            tempA[action.index].units=temp2A;      
            return tempA;
      
        case "removeUnit":
            let tempR = [...state];
            let temp2R = tempR[action.armyIndex].units;
            temp2R = temp2R.filter((_, index) => index != action.index);
            tempR[action.armyIndex].units=temp2R
            return tempR;
        case "increase":
            let tempI = [...state];
            let temp2I = tempI[action.armyIndex].units[action.index];
            temp2I.Num++;
            tempI[action.armyIndex].units[action.index]=temp2I;
            return tempI;
      
        case "decrease":
            let tempD = [...state];
            let temp2D = tempD[action.armyIndex].units[action.index];
            temp2D.Num--;
            temp2D.Num  = temp2D.Num <=0 ? 0 : temp2D.Num;
            tempD[action.armyIndex].units[action.index]=temp2D;
            return tempD;
          case "removeArmy":
            return state.filter((_, index) => index != action.index);
          default:
            return state;
        }
      },[],
    );

    const [armies, dispatch] = useReducer(memoizedCallback, []);

    return(
        <div>
        <h1>{title}</h1>
        <br/>
        <div>
            { armies.map((element,index)=>{return <Army key={index} units={element.units} index={index} title={element.title} dispatch={dispatch}/>})}
        </div>
        <button onClick={()=>setAddingArmy(true)}> Añadir ejercito </button>
        <ArmyCreator addingArmy={addingArmy} setAddingArmy={setAddingArmy} dispatch={dispatch}/>
        </div>)
}

export default ArmyContainer;